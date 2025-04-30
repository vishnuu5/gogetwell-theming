import React from "react";
import { useTheme } from "../hooks/useTheme";
import { useLocale } from "../hooks/useLocale";
import { CardiacModule } from "../components/specialty/CardiacModule";
import { PediatricsModule } from "../components/specialty/PediatricsModule";
import { OncologyModule } from "../components/specialty/OncologyModule";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/common/Card";
import { Stethoscope } from "lucide-react";

export const Dashboard: React.FC = () => {
  const { specialty, currentTheme } = useTheme();
  const { t } = useLocale();

  // Render the appropriate specialty module
  const renderSpecialtyModule = () => {
    switch (specialty) {
      case "cardiac":
        return <CardiacModule />;
      case "pediatrics":
        return <PediatricsModule />;
      case "oncology":
        return <OncologyModule />;
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="text-primary" />
                {t("generalMedical")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t("selectSpecialtyMessage")}</p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("dashboard")}</h1>
        <p className="text-muted-foreground">
          {t("currentSpecialty")}:{" "}
          <span className="font-medium">{currentTheme.name}</span>
        </p>
      </div>

      <div className="mb-8">{renderSpecialtyModule()}</div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("recentActivity")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="p-2 border-b">{t("activityItem1")}</li>
              <li className="p-2 border-b">{t("activityItem2")}</li>
              <li className="p-2">{t("activityItem3")}</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("upcomingAppointments")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="p-2 border-b">{t("appointmentItem1")}</li>
              <li className="p-2 border-b">{t("appointmentItem2")}</li>
              <li className="p-2">{t("appointmentItem3")}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
