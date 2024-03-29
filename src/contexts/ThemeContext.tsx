"use client";

import { createContext, useEffect, useState } from "react";
import { ILayoutProps } from "../types/ILayoutProps";

export const ThemeContext = createContext<[any, any]>([null, null]);

export const ThemeContextProvider = ({ children }: ILayoutProps) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
