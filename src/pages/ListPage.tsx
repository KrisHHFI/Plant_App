import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import styles from '../../src/styling/Styles';
import AddPlantPage from './AddPlantPage';
import ListItem from '../components/ListItem';
import { AppContext } from '../context/Context';

const ListPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { plantString } = useContext(AppContext)!;

  return (
    <View style={styles.pageContainer}>
      <Text>List Page</Text>
      <ScrollView style={styles.listPageScrollContainer}>
        {plantString.map((plant, index) => (
          <ListItem key={index} name={plant.name} />
        ))}
      </ScrollView>
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
