import React, { createContext, useState, ReactNode } from 'react';
import { ContextProps, Plant } from '../../constants/interfaces';

export const AppContext = createContext<ContextProps>({
    plantString: [],
    setPlantString: () => { },
    theme: "Light",
    setTheme: () => { },
    THEME_COLOUR_PRIMARY: 'white',
    THEME_COLOUR_SECONDARY: 'black', 

});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [plantString, setPlantString] = useState<Plant[]>([]);
    const [theme, setTheme] = useState<string>("Light");
    const THEME_COLOUR_PRIMARY = theme === 'Light' ? 'white' : 'black';
    const THEME_COLOUR_SECONDARY = theme === 'Light' ? 'black' : 'white';


    return (
        <AppContext.Provider value={{ plantString, setPlantString, theme, setTheme, THEME_COLOUR_PRIMARY, THEME_COLOUR_SECONDARY }}>
            {children}
        </AppContext.Provider>
    );
};
