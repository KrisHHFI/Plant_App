import { AddEditDeletePlantPageProps } from '../../constants/interfaces';
import { AppContext } from '../context/Context';
import FloatingButton from '../components/FloatingButton';
import { Image, TextInput, View } from 'react-native';
import PageTitle from '../components/PageTitle';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import React, { useContext, useEffect, useState } from 'react';
import { useDynamicStyles } from '../styling/Styles';

const AddEditDeletePlantPage: React.FC<AddEditDeletePlantPageProps> = ({ selectedPlant, setModalVisible }) => {
  const { setPlantString, theme } = useContext(AppContext)!;
  const isDarkTheme = theme === 'Dark';
  const [imageUri, setImageUri] = useState<string | null>(selectedPlant?.imageUrl || null);
  const placeholderColor = isDarkTheme ? 'white' : 'black';
  const [plantName, setPlantName] = useState(selectedPlant?.name || '');
  const [plantNote, setPlantNote] = useState(selectedPlant?.note || '');
  const styles = useDynamicStyles();

  useEffect(() => {
    if (selectedPlant) {
      setImageUri(selectedPlant.imageUrl);
      setPlantName(selectedPlant.name);
      setPlantNote(selectedPlant.note);
    }
  }, [selectedPlant]);

  // Function to delete the selected plant
  const handleDeletePlant = () => {
    if (selectedPlant) {
      setModalVisible(false);
      setPlantString((prevPlants) => prevPlants.filter((plant) => plant.name !== selectedPlant.name));
    }
  };

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
        date: selectedPlant ? selectedPlant.date : new Date(),
        imageUrl: imageUri || '',
        name: plantName,
        note: plantNote,
      };

      setPlantString((prevPlants) => {
        if (selectedPlant) {
          return prevPlants.map((plant) =>
            plant.name === selectedPlant.name ? updatedPlant : plant
          );
        }
        return [...prevPlants, updatedPlant]; // Add new plant if not editing
      });

      setImageUri(null);
      setModalVisible(false);
      setPlantName('');
      setPlantNote('');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <PageTitle text={selectedPlant ? 'Edit Plant' : 'Add Plant'} />
      <View style={styles.pageContent}>
        <TextInput
          style={styles.addEditDeletePlantPageInput}
          placeholder="Plant name*"
          placeholderTextColor={placeholderColor}
          value={plantName}
          onChangeText={setPlantName}
        />
        <TextInput
          style={styles.addEditDeletePlantPageInput}
          placeholder="Notes"
          placeholderTextColor={placeholderColor}
          value={plantNote}
          onChangeText={setPlantNote}
        />
        <View style={styles.row}>
          <FloatingButton onPress={handleSelectImage} text={'Add Image'} />
          <FloatingButton onPress={handleTakePhoto} text={'Take Photo'} />
        </View>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, marginBottom: 10 }} />
        )}
        {selectedPlant && (
          <FloatingButton text={'Delete'} onPress={handleDeletePlant} />
        )}
        <View style={styles.row}>
          <FloatingButton onPress={() => setModalVisible(false)} text={'x'} />
          <FloatingButton onPress={handleAddOrUpdatePlant} text={'✔'} />
        </View>
      </View>
    </View>
  );
};

export default AddEditDeletePlantPage;
