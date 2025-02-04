import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styling/Styles';

interface AddPlantPageProps {
  setModalVisible: (visible: boolean) => void;
}

const AddPlantPage: React.FC<AddPlantPageProps> = ({ setModalVisible }) => {
  return (
    <View style={styles.pageContainer}>
      <Text>Add a Plant</Text>
      <TextInput style={styles.addPlantPageInput} placeholder="Enter plant name" />
      <View style={styles.row}>
      <TouchableOpacity style={styles.addPlantPageBottomButton} onPress={() => setModalVisible(false)}>
        <Text>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addPlantPageBottomButton} onPress={() => setModalVisible(false)}>
        <Text>✔</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPlantPage;
