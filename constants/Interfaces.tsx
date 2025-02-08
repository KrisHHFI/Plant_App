/**
 * File Name: Interfaces.tsx
 * Description: This file contains all the project's interfaces.
 *              Interfaces and their properties are organized A-Z.
 */
export interface AddEditDeletePlantPageProps {
    selectedPlant: any;
    setModalVisible: (visible: boolean) => void;
}

export interface ContextProps {
    plantString: Plant[];
    setPlantString: React.Dispatch<React.SetStateAction<Plant[]>>;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme: string;
    THEME_COLOUR_PRIMARY: string;
    THEME_COLOUR_SECONDARY: string;
}

export interface FloatingButtonProps {
    onPress?: () => void;
    text?: string;
}

export interface NavBarProps {
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export interface Plant {
    date: Date;
    imageUrl: string;
    name: string;
    note: string;
}