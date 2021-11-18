import React, { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = {
    theme,
    handleChangeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
