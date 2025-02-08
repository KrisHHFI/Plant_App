export const handleAddOrUpdatePlant = (
    plantName: string,
    plantNote: string,
    imageUri: string | null,
    selectedPlant: any,
    setPlantString: React.Dispatch<React.SetStateAction<any[]>>,
    setImageUri: React.Dispatch<React.SetStateAction<string | null>>,
    setModalVisible: (visible: boolean) => void
  ) => {
    if (plantName.trim()) {
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
  