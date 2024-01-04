import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as pink-theme
    localStorage.setItem("theme", "pink-theme");
    return "pink-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "pink-theme") {
      setTheme("beige-theme");
    } else {
      setTheme("pink-theme");
    }
  }

  useEffect(() => {
    let refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };
    refreshTheme();
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
