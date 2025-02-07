import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Image } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { AppContext } from '../context/Context';
import styles from '../styling/Styles';
import PageTitle from '../components/PageTitle';
import FloatingButton from '../components/FloatingButton';

interface AddEditDeletePlantPageProps {
  setModalVisible: (visible: boolean) => void;
  selectedPlant: any;
}

const AddEditDeletePlantPage: React.FC<AddEditDeletePlantPageProps> = ({ setModalVisible, selectedPlant }) => {
  const { setPlantString } = useContext(AppContext)!;
  const [plantName, setPlantName] = useState(selectedPlant?.name || ''); 
  const [plantNote, setPlantNote] = useState(selectedPlant?.note || ''); 
  const [imageUri, setImageUri] = useState<string | null>(selectedPlant?.imageUrl || null); 

  useEffect(() => {
    if (selectedPlant) {
      setPlantName(selectedPlant.name);
      setPlantNote(selectedPlant.note);
      setImageUri(selectedPlant.imageUrl);
    }
  }, [selectedPlant]);

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

  // Add or update the plant with the selected image and name
  const handleAddOrUpdatePlant = () => {
    if (plantName.trim()) {
      const updatedPlant = {
        name: plantName,
        note: plantNote,
        imageUrl: imageUri || '',
        date: selectedPlant ? selectedPlant.date : new Date(),
      };

      setPlantString((prevPlants) => {
        if (selectedPlant) {
          return prevPlants.map((plant) =>
            plant.name === selectedPlant.name ? updatedPlant : plant
          );
        }
        return [...prevPlants, updatedPlant]; // Add new plant if not editing
      });

      setPlantName('');
      setPlantNote('');
      setImageUri(null);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.pageContainer}>
      <PageTitle text={selectedPlant ? 'Edit Plant' : 'Add Plant'} />
      <View style={styles.pageContent}>
        <TextInput
          style={styles.addEditDeletePlantPageInput}
          placeholder="Plant name*"
          value={plantName}
          onChangeText={setPlantName}
        />
        <TextInput
          style={styles.addEditDeletePlantPageInput}
          placeholder="Notes"
          value={plantNote}
          onChangeText={setPlantNote}
        />
        <View style={styles.row}>
          <FloatingButton onPress={handleSelectImage} text={'Add Image'}/>
          <FloatingButton onPress={handleTakePhoto} text={'Take Photo'}/>
        </View>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, marginBottom: 10 }} />
        )}
         {selectedPlant && (
            <FloatingButton text={'Delete'} />
          )}
        <View style={styles.row}>
          <FloatingButton onPress={() => setModalVisible(false)} text={'x'}/>
          <FloatingButton onPress={handleAddOrUpdatePlant} text={'✔'}/>
        </View>
      </View>
    </View>
  );
};

export default AddEditDeletePlantPage;
