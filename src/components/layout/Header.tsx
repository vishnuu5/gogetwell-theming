import React, { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useLocale } from "../../hooks/useLocale";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const { mode, toggleMode } = useTheme();
  const { toggleDirection, t } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-background border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center font-bold">
            GW
          </div>
          <span className="text-xl font-bold">GoGetWell.ai</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-primary transition-colors">
            {t("home")}
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-primary transition-colors"
          >
            {t("dashboard")}
          </Link>
          <Link to="/settings" className="hover:text-primary transition-colors">
            {t("settings")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full text-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={toggleDirection}
            className="p-2 rounded-full text-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
          </button>

          <button
            onClick={toggleMode}
            className="p-2 rounded-full text-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
          >
            {mode === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-4 py-3 flex flex-col">
            <Link
              to="/"
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              to="/dashboard"
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("dashboard")}
            </Link>
            <Link
              to="/settings"
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("settings")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
