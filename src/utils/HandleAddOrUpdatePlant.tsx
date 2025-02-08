import { Alert } from 'react-native';

export const handleAddOrUpdatePlant = (
  plantName: string,
  plantNote: string,
  imageUri: string | null,
  selectedPlant: any,
  setPlantString: React.Dispatch<React.SetStateAction<any[]>>,
  setImageUri: React.Dispatch<React.SetStateAction<string | null>>,
  setModalVisible: (visible: boolean) => void,
  plantString: any[]
) => {
  if (plantName.trim()) {
    // Check if plant name already exists excluding the current plant being edited
    const plantExists = plantString.some(
      (plant) => plant.name.toLowerCase() === plantName.toLowerCase() &&
        plant.name !== selectedPlant?.name
    );

    if (plantExists) {
      Alert.alert('Error', 'A plant with this name already exists.');
      return;
    }

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
  }
};
