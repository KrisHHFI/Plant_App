import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/Styles';

interface AddPlantPageProps {
  setModalVisible: (visible: boolean) => void;
}

const AddPlantPage: React.FC<AddPlantPageProps> = ({ setModalVisible }) => {
  return (
    <View style={styles.pageContainer}>
      <Text>Add Plant Page</Text>
      <View style={styles.row}>
      <TouchableOpacity style={styles.AddPlantPageBottomButton} onPress={() => setModalVisible(false)}>
        <Text>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AddPlantPageBottomButton} onPress={() => setModalVisible(false)}>
        <Text>✔</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPlantPage;
