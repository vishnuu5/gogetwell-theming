import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Direction = "ltr" | "rtl";
type Locale = "en" | "ar";

interface LocaleContextType {
  locale: Locale;
  direction: Direction;
  setLocale: (locale: Locale) => void;
  toggleDirection: () => void;
}

const RTL_LANGUAGES = ["ar"];

export const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  direction: "ltr",
  setLocale: () => {},
  toggleDirection: () => {},
});

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem("locale");
    return (savedLocale as Locale) || "en";
  });

  const [direction, setDirection] = useState<Direction>(() => {
    return RTL_LANGUAGES.includes(locale) ? "rtl" : "ltr";
  });

  useEffect(() => {
    i18n.changeLanguage(locale);
    const newDirection = RTL_LANGUAGES.includes(locale) ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale, i18n]);

  const toggleDirection = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    setLocale(newLocale);
  };

  return (
    <LocaleContext.Provider
      value={{ locale, direction, setLocale, toggleDirection }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
