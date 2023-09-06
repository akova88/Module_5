import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')


    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')

    }
    return (
        <ThemeContext.Provider value={{theme, handleChangeTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider