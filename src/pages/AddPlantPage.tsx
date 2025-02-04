import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styling/Styles';
import { AppContext } from '../context/Context';

interface AddPlantPageProps {
  setModalVisible: (visible: boolean) => void;
}

const AddPlantPage: React.FC<AddPlantPageProps> = ({ setModalVisible }) => {
  const { setPlantString } = useContext(AppContext)!;
  const [plantName, setPlantName] = useState('');

  const handleAddPlant = () => {
    if (plantName.trim()) {
      setPlantString(prevPlants => [
        ...prevPlants,
        { name: plantName, imageUrl: '', date: new Date() },
      ]);
      setPlantName('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Text>Add a Plant</Text>
      <TextInput
        style={styles.addPlantPageInput}
        placeholder="Enter plant name"
        value={plantName}
        onChangeText={setPlantName}
      />
      <View style={styles.row}>
        <TouchableOpacity style={styles.addPlantPageBottomButton} onPress={() => setModalVisible(false)}>
          <Text>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addPlantPageBottomButton} onPress={handleAddPlant}>
          <Text>✔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPlantPage;
