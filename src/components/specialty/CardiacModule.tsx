import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";
import { Button } from "../common/Button";
import { Heart, Activity, LineChart } from "lucide-react";
import { useLocale } from "../../hooks/useLocale";

export const CardiacModule: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="border-cardiac-primary border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="text-cardiac-primary" />
            {t("heartRate")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">72 BPM</div>
            <div className="text-sm text-muted">{t("normal")} (60-100 BPM)</div>
            <div className="w-full h-12 mt-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              {/* Placeholder for heart rate chart */}
            </div>
            <Button
              variant="primary"
              className="mt-4 bg-cardiac-primary hover:bg-cardiac-primary/90"
            >
              {t("viewDetails")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-cardiac-secondary border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="text-cardiac-secondary" />
            {t("bloodPressure")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">120/80</div>
            <div className="text-sm text-muted">{t("normal")} (&lt;140/90)</div>
            <div className="w-full h-12 mt-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              {/* Placeholder for blood pressure chart */}
            </div>
            <Button
              variant="primary"
              className="mt-4 bg-cardiac-secondary hover:bg-cardiac-secondary/90"
            >
              {t("viewDetails")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-cardiac-accent border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="text-cardiac-accent" />
            {t("ecgReadings")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">{t("normal")}</div>
            <div className="text-sm text-muted">
              {t("lastUpdated")}: 2 {t("hoursAgo")}
            </div>
            <div className="w-full h-12 mt-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              {/* Placeholder for ECG chart */}
            </div>
            <Button
              variant="primary"
              className="mt-4 bg-cardiac-accent hover:bg-cardiac-accent/90"
            >
              {t("viewDetails")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
