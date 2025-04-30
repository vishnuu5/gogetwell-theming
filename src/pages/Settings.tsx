import React from "react";
import { useLocale } from "../hooks/useLocale";
import { ThemeSwitcher } from "../components/common/ThemeSwitcher";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/common/Card";
import { Button } from "../components/common/Button";
import { Globe } from "lucide-react";

export const Settings: React.FC = () => {
  const { t, locale, setLocale } = useLocale();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t("settings")}</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("appearance")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ThemeSwitcher />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              {t("language")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Button
                  variant={locale === "en" ? "primary" : "outline"}
                  onClick={() => setLocale("en")}
                >
                  English
                </Button>
                <Button
                  variant={locale === "ar" ? "primary" : "outline"}
                  onClick={() => setLocale("ar")}
                >
                  العربية
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("languageDescription")}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{t("accountSettings")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("email")}
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                  value="user123@example.com"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("name")}
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                  value="User123"
                  readOnly
                />
              </div>
              <Button variant="primary">{t("updateProfile")}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
