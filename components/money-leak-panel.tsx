"use client";

import { AlertTriangle, Package, Users, TrendingDown } from "lucide-react";

const alerts = [
  {
    id: 1,
    icon: Package,
    title: "Fuga por Merma",
    location: "Cordón",
    description: "Granos de café -15% vs. stock teórico",
    severity: "high",
    action: "Revisar logs",
  },
  {
    id: 2,
    icon: Users,
    title: "Exceso de Personal",
    location: "Punta Carretas",
    description: "14:00 - 16:00: +3 empleados vs. demanda",
    severity: "medium",
    action: "Ajustar horario",
  },
  {
    id: 3,
    icon: TrendingDown,
    title: "Compresión de Margen",
    location: "Pocitos",
    description: "Margen de comida bajó 4.2% esta semana",
    severity: "medium",
    action: "Revisar precios",
  },
];

export function MoneyLeakPanel() {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-destructive/40 bg-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-destructive/20 bg-destructive/5 px-5 py-3">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <h3 className="text-base font-semibold text-foreground">
          Alertas de Fugas de Dinero
        </h3>
        <span className="ml-auto inline-flex items-center rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
          3 Activas
        </span>
      </div>

      <div className="divide-y divide-border/50">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-4 p-4 transition-colors hover:bg-muted/30"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                alert.severity === "high"
                  ? "bg-destructive/10"
                  : "bg-warning/10"
              }`}
            >
              <alert.icon
                className={`h-5 w-5 ${
                  alert.severity === "high"
                    ? "text-destructive"
                    : "text-warning"
                }`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-foreground">
                  {alert.title}
                </p>
                <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                  {alert.location}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {alert.description}
              </p>
            </div>
            <button className="shrink-0 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted">
              {alert.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
