import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import styles from '../../src/styling/Styles';
import AddPlantPage from './AddPlantPage';
import ListItem from '../components/ListItem';
import PageTitle from '../components/PageTitle';
import { AppContext } from '../context/Context';

const ListPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { plantString } = useContext(AppContext)!;

  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Solar Garden" />
      <View style={styles.pageContent}>
        <ScrollView
          style={styles.listPageScrollContainer}>
          {plantString.map((plant, index) => (
            <ListItem key={index} date={plant.date} image={plant.imageUrl} name={plant.name} note={plant.note} />
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.listPageAddButton} onPress={() => setModalVisible(true)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <AddPlantPage setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
};

export default ListPage;
