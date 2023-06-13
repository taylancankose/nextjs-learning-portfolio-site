"use client"

import React, { createContext, useState } from "react"

/* If your using context it should be client-side */

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }
    return (
        <ThemeContext.Provider value={{
            toggleTheme,
            theme
        }}>
            <div className={`mode ${theme}`}>{children}</div>
        </ThemeContext.Provider>
    )
}