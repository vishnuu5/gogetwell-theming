import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun, Heart, Baby, Activity, Stethoscope } from "lucide-react";
import { SpecialtyTheme } from "../../utils/themeUtils";
import { cn } from "../../utils/themeUtils";

export const ThemeSwitcher: React.FC = () => {
  const { mode, specialty, toggleMode, setSpecialty } = useTheme();

  const specialties: {
    value: SpecialtyTheme;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      value: "default",
      label: "Default",
      icon: <Stethoscope className="w-5 h-5" />,
    },
    { value: "cardiac", label: "Cardiac", icon: <Heart className="w-5 h-5" /> },
    {
      value: "pediatrics",
      label: "Pediatrics",
      icon: <Baby className="w-5 h-5" />,
    },
    {
      value: "oncology",
      label: "Oncology",
      icon: <Activity className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={toggleMode}
          className="p-2 rounded-full bg-gray-400 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        >
          {mode === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
        <span className="text-sm font-medium">
          {mode === "light" ? "Light Mode" : "Dark Mode"}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Specialty Theme:</span>
        <div className="flex flex-wrap gap-2">
          {specialties.map((item) => (
            <button
              key={item.value}
              onClick={() => setSpecialty(item.value)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                specialty === item.value
                  ? "bg-gray-400 text-black"
                  : "bg-gray-400 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              )}
              aria-label={`Switch to ${item.label} theme`}
              aria-pressed={specialty === item.value}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
