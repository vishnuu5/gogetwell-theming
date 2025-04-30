import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { specialtyThemes } from "../utils/themeUtils";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { mode, specialty, setMode, setSpecialty, toggleMode } = context;
  const currentTheme = specialtyThemes[specialty];

  return {
    mode,
    specialty,
    setMode,
    setSpecialty,
    toggleMode,
    currentTheme,
    isLight: mode === "light",
    isDark: mode === "dark",
  };
};
