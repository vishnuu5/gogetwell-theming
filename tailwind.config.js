/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base colors
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",

        // Specialty-specific colors will be set via CSS variables
        cardiac: {
          primary: "var(--cardiac-primary)",
          secondary: "var(--cardiac-secondary)",
          accent: "var(--cardiac-accent)",
        },
        pediatrics: {
          primary: "var(--pediatrics-primary)",
          secondary: "var(--pediatrics-secondary)",
          accent: "var(--pediatrics-accent)",
        },
        oncology: {
          primary: "var(--oncology-primary)",
          secondary: "var(--oncology-secondary)",
          accent: "var(--oncology-accent)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
