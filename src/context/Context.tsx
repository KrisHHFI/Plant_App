import React, { createContext, useState, ReactNode } from 'react';

interface Plant {
    name: string;
    imageUrl: string;
    date: Date;
    note: string;
}

interface ContextProps {
    plantString: Plant[];
    setPlantString: React.Dispatch<React.SetStateAction<Plant[]>>;
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    THEME_BACKGROUND_COLOUR_PRIMARY: string;
}

export const AppContext = createContext<ContextProps>({
    plantString: [],
    setPlantString: () => { },
    theme: "Light",
    setTheme: () => { },
    THEME_BACKGROUND_COLOUR_PRIMARY: 'white', 
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [plantString, setPlantString] = useState<Plant[]>([]);
    const [theme, setTheme] = useState<string>("Light");
    const THEME_BACKGROUND_COLOUR_PRIMARY = theme === 'Light' ? 'white' : 'black';

    return (
        <AppContext.Provider value={{ plantString, setPlantString, theme, setTheme, THEME_BACKGROUND_COLOUR_PRIMARY }}>
            {children}
        </AppContext.Provider>
    );
};
