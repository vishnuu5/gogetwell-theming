import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";
import { Button } from "../common/Button";
import { Baby, Ruler, Weight } from "lucide-react";
import { useLocale } from "../../hooks/useLocale";

export const PediatricsModule: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="border-pediatrics-primary border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ruler className="text-pediatrics-primary" />
            {t("growth")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">95 cm</div>
            <div className="text-sm text-muted">{t("percentile")}: 75th</div>
            <div className="w-full h-12 mt-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              {/* Placeholder for growth chart */}
            </div>
            <Button
              variant="primary"
              className="mt-4 bg-pediatrics-primary hover:bg-pediatrics-primary/90"
            >
              {t("viewGrowthChart")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-pediatrics-secondary border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Weight className="text-pediatrics-secondary" />
            {t("weight")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">14.5 kg</div>
            <div className="text-sm text-muted">{t("percentile")}: 60th</div>
            <div className="w-full h-12 mt-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              {/* Placeholder for weight chart */}
            </div>
            <Button
              variant="primary"
              className="mt-4 bg-pediatrics-secondary hover:bg-pediatrics-secondary/90"
            >
              {t("viewWeightHistory")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-pediatrics-accent border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Baby className="text-pediatrics-accent" />
            {t("vaccinations")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">{t("upToDate")}</div>
            <div className="text-sm text-muted">
              {t("nextVaccination")}: 3 {t("months")}
            </div>
            <div className="w-full h-12 mt-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              {/* Placeholder for vaccination timeline */}
            </div>
            <Button
              variant="primary"
              className="mt-4 bg-pediatrics-accent hover:bg-pediatrics-accent/90"
            >
              {t("viewVaccinationSchedule")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
