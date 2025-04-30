import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";
import { Button } from "../common/Button";
import { Calendar, PieChart, FileText } from "lucide-react";
import { useLocale } from "../../hooks/useLocale";

export const OncologyModule: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="border-oncology-primary border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="text-oncology-primary" />
            {t("treatmentSchedule")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold mb-2">{t("nextAppointment")}</div>
            <div className="text-2xl mb-2">May 15, 2023</div>
            <div className="text-sm text-muted mb-4">
              {t("chemotherapySession")} #4
            </div>
            <Button
              variant="primary"
              className="mt-2 bg-oncology-primary hover:bg-oncology-primary/90"
            >
              {t("viewFullSchedule")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-oncology-secondary border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="text-oncology-secondary" />
            {t("treatmentProgress")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">60%</div>
            <div className="text-sm text-muted">
              3/5 {t("sessionsCompleted")}
            </div>
            <div className="w-full h-4 mt-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-oncology-secondary w-3/5 rounded-full"></div>
            </div>
            <Button
              variant="primary"
              className="mt-4 bg-oncology-secondary hover:bg-oncology-secondary/90"
            >
              {t("viewTreatmentDetails")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-oncology-accent border-t-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="text-oncology-accent" />
            {t("labResults")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold mb-2">{t("latestResults")}</div>
            <div className="text-sm text-muted mb-4">
              {t("lastUpdated")}: 3 {t("daysAgo")}
            </div>
            <div className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-md text-sm mb-4">
              <div className="flex justify-between mb-1">
                <span>WBC:</span>
                <span>5.2 × 10^9/L</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>RBC:</span>
                <span>4.1 × 10^12/L</span>
              </div>
              <div className="flex justify-between">
                <span>PLT:</span>
                <span>140 × 10^9/L</span>
              </div>
            </div>
            <Button
              variant="primary"
              className="mt-2 bg-oncology-accent hover:bg-oncology-accent/90"
            >
              {t("viewAllResults")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
