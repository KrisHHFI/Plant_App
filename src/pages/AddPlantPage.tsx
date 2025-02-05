import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';  // Updated import
import { AppContext } from '../context/Context';
import styles from '../styling/Styles';
import PageTitle from '../components/PageTitle';

interface AddPlantPageProps {
  setModalVisible: (visible: boolean) => void;
}

const AddPlantPage: React.FC<AddPlantPageProps> = ({ setModalVisible }) => {
  const { setPlantString } = useContext(AppContext)!;
  const [plantName, setPlantName] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Function to launch the image picker for selecting an image
  const handleSelectImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.5 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image Picker Error: ', response.errorMessage);
        } else {
          const uri = response.assets && response.assets[0].uri;
          setImageUri(uri || null);
        }
      },
    );
  };

  // Function to launch the camera for taking a photo
  const handleTakePhoto = () => {
    launchCamera(
      { mediaType: 'photo', quality: 0.5 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.log('Camera Error: ', response.errorMessage);
        } else {
          const uri = response.assets && response.assets[0].uri;
          setImageUri(uri || null);
        }
      },
    );
  };

  // Add a new plant with the selected image and name
  const handleAddPlant = () => {
    if (plantName.trim()) {
      setPlantString((prevPlants) => [
        ...prevPlants,
        { name: plantName, imageUrl: imageUri || '', date: new Date() },
      ]);
      setPlantName('');
      setImageUri(null); // Reset image after adding plant
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Add Specimen" />
      <View style={styles.pagePadding}>
        <TextInput
          style={styles.addPlantPageInput}
          placeholder="Enter plant name"
          value={plantName}
          onChangeText={setPlantName}
        />
        <TouchableOpacity style={styles.addPlantPageBottomButton} onPress={handleSelectImage}>
          <Text>Add Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addPlantPageBottomButton} onPress={handleTakePhoto}>
          <Text>Take Photo</Text>
        </TouchableOpacity>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, marginBottom: 10 }} />
        )}
        <View style={styles.row}>
          <TouchableOpacity style={styles.addPlantPageBottomButton} onPress={() => setModalVisible(false)}>
            <Text>x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addPlantPageBottomButton} onPress={handleAddPlant}>
            <Text>✔</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddPlantPage;
