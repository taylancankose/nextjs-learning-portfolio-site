"use client"
import React, { useContext } from "react";
import styles from "./themeSwitcher.module.css"
import { ThemeContext } from "@/context/ThemeContext";

function ThemeSwitcher() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return <div className={styles.container} onClick={toggleTheme}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball} style={
            theme === "light" ? { left: "2px" } : { right: "2px" }
        } />
    </div>
}

export default ThemeSwitcher;
