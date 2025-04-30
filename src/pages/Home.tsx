import React from "react";
import { useTheme } from "../hooks/useTheme";
import { useLocale } from "../hooks/useLocale";
import { Button } from "../components/common/Button";
import { Card, CardContent } from "../components/common/Card";
import { Heart, Baby, Activity, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { setSpecialty } = useTheme();
  const { t } = useLocale();

  const specialties = [
    {
      id: "default",
      name: t("default"),
      description: t("defaultDescription"),
      icon: <Stethoscope className="w-12 h-12" />,
      color: "bg-primary",
    },
    {
      id: "cardiac",
      name: t("cardiac"),
      description: t("cardiacDescription"),
      icon: <Heart className="w-12 h-12" />,
      color: "bg-cardiac-primary",
    },
    {
      id: "pediatrics",
      name: t("pediatrics"),
      description: t("pediatricsDescription"),
      icon: <Baby className="w-12 h-12" />,
      color: "bg-pediatrics-primary",
    },
    {
      id: "oncology",
      name: t("oncology"),
      description: t("oncologyDescription"),
      icon: <Activity className="w-12 h-12" />,
      color: "bg-oncology-primary",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">{t("welcomeToGoGetWell")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("homeDescription")}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t("chooseSpecialty")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty) => (
            <Card key={specialty.id} className="overflow-hidden">
              <div
                className={`${specialty.color} p-4 flex justify-center text-red`}
              >
                {specialty.icon}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{specialty.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {specialty.description}
                </p>
                <Link
                  to="/dashboard"
                  onClick={() => setSpecialty(specialty.id as any)}
                >
                  <Button variant="primary" className="w-full">
                    {t("selectSpecialty")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">{t("keyFeatures")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t("responsiveDesign")}</h3>
            <p className="text-muted-foreground">
              {t("responsiveDescription")}
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t("darkLightMode")}</h3>
            <p className="text-muted-foreground">{t("darkLightDescription")}</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t("multiLocale")}</h3>
            <p className="text-muted-foreground">
              {t("multiLocaleDescription")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
