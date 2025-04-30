import React from "react";
import { useLocale } from "../../hooks/useLocale";

export const Footer: React.FC = () => {
  const { t } = useLocale();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} GoGetWell.ai.{" "}
              {t("allRightsReserved")}
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              {t("privacyPolicy")}
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              {t("termsOfService")}
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
