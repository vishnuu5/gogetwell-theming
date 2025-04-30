import React, { createContext, useEffect, useState } from "react";
import { SpecialtyTheme, ThemeMode, applyTheme } from "../utils/themeUtils";

interface ThemeContextType {
  mode: ThemeMode;
  specialty: SpecialtyTheme;
  setMode: (mode: ThemeMode) => void;
  setSpecialty: (specialty: SpecialtyTheme) => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  specialty: "default",
  setMode: () => {},
  setSpecialty: () => {},
  toggleMode: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize from localStorage or defaults
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem("theme-mode");
    return (
      (savedMode as ThemeMode) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  const [specialty, setSpecialty] = useState<SpecialtyTheme>(() => {
    const savedSpecialty = localStorage.getItem("theme-specialty");
    return (savedSpecialty as SpecialtyTheme) || "default";
  });

  // Apply theme when mode or specialty changes
  useEffect(() => {
    applyTheme(mode, specialty);
    localStorage.setItem("theme-mode", mode);
    localStorage.setItem("theme-specialty", specialty);
  }, [mode, specialty]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ mode, specialty, setMode, setSpecialty, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
