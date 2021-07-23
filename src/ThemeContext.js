import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setisDarkMode] = useState(false);

    let backGroundColor = isDarkMode ? '#555' : 'white';

    return (
        <ThemeContext.Provider
            value={{ isDarkMode, setisDarkMode, backGroundColor }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(ThemeContext);
};
