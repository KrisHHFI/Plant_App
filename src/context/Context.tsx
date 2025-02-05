import React, { createContext, useState, ReactNode } from 'react';

interface Plant {
    name: string;
    imageUrl: string;
    date: Date;
}

interface ContextProps {
    plantString: Plant[];
    setPlantString: React.Dispatch<React.SetStateAction<Plant[]>>;
}

export const AppContext = createContext<ContextProps>({
    plantString: [],
    setPlantString: () => {},
  });
  
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [plantString, setPlantString] = useState<Plant[]>([]);

    return (
        <AppContext.Provider value={{ plantString, setPlantString }}>
            {children}
        </AppContext.Provider>
    );
};
