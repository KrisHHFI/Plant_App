import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from '../../src/styling/Styles';
import AddPlantPage from './AddPlantPage';

const ListPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.pageContainer}>
      <Text>List Page</Text>
      
      <TouchableOpacity style={styles.listPageAddButton} onPress={() => setModalVisible(true)}>
        <Text>+</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <AddPlantPage setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
};

export default ListPage;
