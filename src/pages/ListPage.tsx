import React, { useState, useContext } from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../src/styling/Styles';
import AddEditDeletePlantPage from './AddEditDeletePlantPage';
import ListItem from '../components/ListItem';
import PageTitle from '../components/PageTitle';
import { AppContext } from '../context/Context';
import FloatingButton from '../components/FloatingButton';

interface Plant {
  name: string;
  note: string;
  imageUrl: string;
  date: Date;
}

const ListPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const { plantString } = useContext(AppContext)!;
  const [lastTap, setLastTap] = useState(0);

  // Handle double tap to open AddEditDeletePlantPage with pre-filled values
  const handleDoubleTap = (plant: Plant) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (lastTap && now - lastTap <= DOUBLE_TAP_DELAY) {
      setSelectedPlant(plant);
      setModalVisible(true);
    }
    setLastTap(now); // Update last tap time
  };

  // Open the AddEditDeletePlantPage for adding a new plant
  const handleAddPlant = () => {
    setSelectedPlant(null);
    setModalVisible(true);
  };

  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Plants" />
      <View style={styles.pageContent}>
        {plantString.length === 0 ? (
          <View style={styles.noPlantsTextContainer}>
            <Text>Add your first plant</Text>
          </View>
        ) : (
          <ScrollView style={styles.scrollContainer}>
            {plantString
              .slice() // Create a shallow copy to avoid mutating state
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((plant, index, sortedPlants) => (
                <React.Fragment key={index}>
                  <TouchableOpacity
                    onPress={() => handleDoubleTap(plant)}
                    activeOpacity={0.7}
                  >
                    <ListItem date={plant.date} image={plant.imageUrl} name={plant.name} note={plant.note} />
                  </TouchableOpacity>
                  {index !== sortedPlants.length - 1 && <View style={styles.listItemContainerDivider} />}
                </React.Fragment>
              ))}
          </ScrollView>
        )}
        <FloatingButton onPress={handleAddPlant} text={'+'} />
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <AddEditDeletePlantPage
          setModalVisible={setModalVisible}
          selectedPlant={selectedPlant}
        />
      </Modal>
    </View>
  );
};

export default ListPage;
