/**
 * File Name: handleDeletePlant.tsx
 * Description: This function deletes the selected plant
 */
export const handleDeletePlant = (
  selectedPlant: any, 
  setModalVisible: (visible: boolean) => void, 
  setPlantString: React.Dispatch<React.SetStateAction<any[]>>) => {
  
  if (selectedPlant) {
    setModalVisible(false);
    setPlantString((prevPlants) => prevPlants.filter((plant) => plant.name !== selectedPlant.name));
  }
};
