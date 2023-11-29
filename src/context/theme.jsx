import React, { createContext, useContext, useState } from "react";


const themeContext = React.createContext()
const toggleThemeContext = React.createContext()

export const useTheme = () => {
    return useContext(themeContext)
}

export const useToggle = () => {
    return useContext(toggleThemeContext)
}

export function ThemeProvider(props) {

    const {children} = props
    const [theme, setTheme] = useState(false)
    
    const handleTheme = () => {
        setTheme(theme => !theme)
    }
    
    return (
        <themeContext.Provider value={theme}>
            <toggleThemeContext.Provider value={handleTheme}>
                {children}
            </toggleThemeContext.Provider>
        </themeContext.Provider>
    )
}