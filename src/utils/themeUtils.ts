import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ThemeMode = "light" | "dark";
export type SpecialtyTheme = "default" | "cardiac" | "pediatrics" | "oncology";

export interface ThemeConfig {
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  icon: string;
}

export const specialtyThemes: Record<SpecialtyTheme, ThemeConfig> = {
  default: {
    name: "Default",
    description: "Standard medical interface",
    primaryColor: "rgb(29, 78, 216)",
    secondaryColor: "rgb(96, 165, 250)",
    accentColor: "rgb(239, 68, 68)",
    icon: "stethoscope",
  },
  cardiac: {
    name: "Cardiac",
    description: "Specialized for cardiology",
    primaryColor: "rgb(220, 38, 38)",
    secondaryColor: "rgb(248, 113, 113)",
    accentColor: "rgb(37, 99, 235)",
    icon: "heart",
  },
  pediatrics: {
    name: "Pediatrics",
    description: "Child-friendly interface",
    primaryColor: "rgb(16, 185, 129)",
    secondaryColor: "rgb(52, 211, 153)",
    accentColor: "rgb(245, 158, 11)",
    icon: "baby",
  },
  oncology: {
    name: "Oncology",
    description: "Cancer care interface",
    primaryColor: "rgb(124, 58, 237)",
    secondaryColor: "rgb(167, 139, 250)",
    accentColor: "rgb(245, 158, 11)",
    icon: "activity",
  },
};

// Apply theme to document
export const applyTheme = (mode: ThemeMode, specialty: SpecialtyTheme) => {
  // Apply dark/light mode
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Apply specialty-specific classes
  document.documentElement.setAttribute("data-specialty", specialty);
};
