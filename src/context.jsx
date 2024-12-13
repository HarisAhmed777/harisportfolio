import React, { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider =({children})=>{
    const [isLight,setIsLight] = useState(false);
    const toggletheme = ()=>{
        console.log('sjsjk')
        setIsLight(!isLight);
    } 

    return (
        <ThemeContext.Provider value={{isLight,toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}