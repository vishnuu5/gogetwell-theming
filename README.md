# GoGetWell.ai Multi-Theme System

A customizable healthcare platform UI that adapts to different medical specialties. This project implements a multi-theme system for GoGetWell.ai, allowing the application UI to adapt based on different medical specialties.

### Demo

[click]()

### Features

Responsive Layout: Optimized for all screen sizes and devices
Dark/Light Mode: Easily switch between light and dark themes
Configurable Themes: Personalize colors, layouts, and more to fit your needs
Built with React + TypeScript: Ensures robust type-checking and fast development
Multi-Locale Support: Easily add and manage multiple languages
RTL Support: Full Right-to-Left support for languages like Arabic or Hebrew
Tailwind Component-Based Architecture: Reusable components to streamline your development process
API Ready: Simple integration with any RESTful API

### Specialty Themes

The application includes specialized themes for different medical specialties:

General Medical: Standard medical interface for general healthcare
Cardiac Care: Specialized interface for heart health monitoring
Pediatrics: Child-friendly interface for pediatric care
Oncology: Specialized interface for cancer treatment

### Tech Stack

React: Frontend library for building user interfaces
TypeScript: Static type-checking for JavaScript
Vite: Next-generation frontend tooling
Tailwind CSS: Utility-first CSS framework
i18next: Internationalization framework
React Router: Declarative routing for React

## Getting Started

### Prerequisites

Node.js (v14.0.0 or later)
npm or yarn

### Installation

Clone the repository:

```bash
https://github.com/vishnuu5/gogetwell-theming.git
cd gogetwell-theming
```

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm run dev
```

**_Open your browser and navigate to http://localhost:5173_**

### Theming System

The theming system is built around CSS variables and Tailwind CSS. It consists of:

1. Base Theme: Defines common colors and styles
2. Specialty Themes: Extends the base theme with specialty-specific colors
3. Dark/Light Modes: Provides alternative color schemes for different lighting conditions

### Theme Structure

Each theme includes:

Primary color
Secondary color
Accent color
Background color
Foreground color
Muted color

### Using Themes

Themes are applied using React context. You can switch themes using:

```bash
const { setSpecialty, toggleMode } = useTheme();

// Switch to a specialty theme
setSpecialty('cardiac');

// Toggle between light and dark mode
toggleMode();
```

### Internationalization

The application supports multiple languages and RTL layouts. Currently, English and Arabic are implemented.

### Adding a New Language

Create a new translation file in public/locales/[language-code]/translation.json
Add the language to the language switcher in src/components/Settings.tsx

### Using Translations

```bash
const { t } = useLocale();

// Use translation

<h1>{t('welcomeToGoGetWell')}</h1>
```

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

React
TypeScript
Vite
Tailwind CSS
i18next
Lucide Icons
