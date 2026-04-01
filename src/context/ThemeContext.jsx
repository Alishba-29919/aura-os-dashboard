import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Context Create Karein
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default theme 'gold' rakhte hain jo hamara luxury brand hai
  const [theme, setTheme] = useState(localStorage.getItem('aura-theme') || 'gold');

  // Jab bhi theme badle, usay local storage mein save karein
  useEffect(() => {
    localStorage.setItem('aura-theme', theme);
    // Body par class add karte hain taake CSS variables change ho sakein
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook so that not need to import useContext
//  and ThemeContext in every component
export const useTheme = () => useContext(ThemeContext);