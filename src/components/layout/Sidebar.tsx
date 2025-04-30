import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { Heart, Baby, Activity, Stethoscope } from "lucide-react";
import { SpecialtyTheme } from "../../utils/themeUtils";
import { cn } from "../../utils/themeUtils";
import { useLocale } from "../../hooks/useLocale";

export const Sidebar: React.FC = () => {
  const { specialty, setSpecialty } = useTheme();
  const { t } = useLocale();

  const specialties: {
    value: SpecialtyTheme;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      value: "default",
      label: t("default"),
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      value: "cardiac",
      label: t("cardiac"),
      icon: <Heart className="w-5 h-5" />,
    },
    {
      value: "pediatrics",
      label: t("pediatrics"),
      icon: <Baby className="w-5 h-5" />,
    },
    {
      value: "oncology",
      label: t("oncology"),
      icon: <Activity className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-4">{t("specialties")}</h2>

        <nav className="space-y-2">
          {specialties.map((item) => (
            <button
              key={item.value}
              onClick={() => setSpecialty(item.value)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-left",
                specialty === item.value
                  ? "bg-primary text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>
              {t("currentTheme")}: {specialty}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
