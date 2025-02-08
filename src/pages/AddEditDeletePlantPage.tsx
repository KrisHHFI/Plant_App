import { AddEditDeletePlantPageProps } from '../../constants/interfaces';
import { AppContext } from '../context/Context';
import FloatingButton from '../components/FloatingButton';
import { handleAddOrUpdatePlant } from '../utils/HandleAddOrUpdatePlant';
import { handleDeletePlant } from '../utils/HandleDeletePlant';
import { handleSelectImage } from '../utils/HandleSelectImage';
import { handleTakePhoto } from '../utils/HandleTakePhoto';
import { Image, TextInput, View } from 'react-native';
import PageTitle from '../components/PageTitle';
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
          <FloatingButton onPress={() => handleSelectImage(setImageUri)} text={'Add Image'} />
          <FloatingButton onPress={() => handleTakePhoto(setImageUri)} text={'Take Photo'} />
        </View>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, marginBottom: 10 }} />
        )}
        {selectedPlant && (
          <FloatingButton text={'Delete'} onPress={() => handleDeletePlant(selectedPlant, setModalVisible, setPlantString)} />
        )}
        <View style={styles.row}>
          <FloatingButton onPress={() => setModalVisible(false)} text={'x'} />
          <FloatingButton onPress={() => handleAddOrUpdatePlant(plantName, plantNote, imageUri, selectedPlant, setPlantString, setImageUri, setModalVisible)} text={'✔'} />
          </View>
      </View>
    </View>
  );
};

export default AddEditDeletePlantPage;
