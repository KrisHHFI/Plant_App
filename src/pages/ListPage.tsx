import React, { useState, useContext } from 'react';
import { View, Text, Modal, ScrollView } from 'react-native';
import styles from '../../src/styling/Styles';
import AddPlantPage from './AddPlantPage';
import ListItem from '../components/ListItem';
import PageTitle from '../components/PageTitle';
import { AppContext } from '../context/Context';
import FloatingButton from '../components/FloatingButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { plantString } = useContext(AppContext)!;

  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Plants" />
      <View style={styles.pageContent}>
        {plantString.length === 0 ? (
          <View style={styles.noPlantsTextContainer}>
            <Text>Add your first plant</Text>
          </View>
        ) : (
          <ScrollView style={styles.listPageScrollContainer}>
            {plantString.map((plant, index) => (
              <ListItem key={index} date={plant.date} image={plant.imageUrl} name={plant.name} note={plant.note} />
            ))}
          </ScrollView>
        )}
        <FloatingButton onPress={() => setModalVisible(true)} text={'+'}/>
        <View>
    </View>
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <AddPlantPage setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
};

export default ListPage;
