import { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";
import { useTranslation } from "react-i18next";

export const useLocale = () => {
  const context = useContext(LocaleContext);
  const { t } = useTranslation();

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return {
    ...context,
    t,
    isRTL: context.direction === "rtl",
  };
};
