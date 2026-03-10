"use client";

import { GlassCard } from "./glass-card";

const locations = ["Centro", "Cordón", "Punta Carretas", "Pocitos", "Carrasco"];
const hours = [
  "6am",
  "8am",
  "10am",
  "12pm",
  "2pm",
  "4pm",
  "6pm",
  "8pm",
  "10pm",
];

// Sales intensity data: 0-1 scale
const heatmapData: number[][] = [
  // 6am, 8am (PICO), 10am, 12pm, 2pm, 4pm (PICO), 6pm, 8pm, 10pm
  [0.1, 0.95, 0.6, 0.4, 0.3, 0.9, 0.7, 0.4, 0.2], // Centro
  [0.1, 0.8, 0.7, 0.5, 0.4, 0.95, 0.8, 0.5, 0.3], // Cordón
  [0.05, 0.6, 0.8, 0.9, 0.7, 0.85, 0.7, 0.8, 0.5], // P. Carretas (Pico más tarde)
  [0.05, 0.5, 0.7, 0.85, 0.6, 0.9, 0.8, 0.7, 0.4], // Pocitos
  [0.05, 0.4, 0.6, 0.7, 0.5, 0.8, 0.9, 0.6, 0.3], // Carrasco
];

function getHeatColor(value: number): string {
  // Usamos tonos de verde esmeralda (Emerald) fijos
  if (value >= 0.85) return "bg-emerald-600"; // Muy Alto
  if (value >= 0.7) return "bg-emerald-500"; // Alto
  if (value >= 0.5) return "bg-emerald-400"; // Medio
  if (value >= 0.3) return "bg-emerald-300"; // Bajo
  return "bg-emerald-100"; // Muy Bajo (Casi vacío)
}

export function OperationalHeatmap() {
  return (
    <GlassCard className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Mapa de Calor Operativo
          </h3>
          <p className="text-sm text-muted-foreground">
            Intensidad de ventas por hora y local
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-primary/15" />
            <span className="text-xs text-muted-foreground">Baja</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-primary/50" />
            <span className="text-xs text-muted-foreground">Media</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-primary" />
            <span className="text-xs text-muted-foreground">Alta</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Hour headers */}
          <div className="mb-2 flex">
            <div className="w-28 shrink-0" />
            <div className="flex flex-1 gap-1">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="flex-1 text-center text-xs text-muted-foreground"
                >
                  {hour}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap rows */}
          <div className="flex flex-col gap-1">
            {locations.map((location, rowIndex) => (
              <div key={location} className="flex items-center">
                <div className="w-28 shrink-0 pr-3 text-sm text-foreground">
                  {location}
                </div>
                <div className="flex flex-1 gap-1">
                  {heatmapData[rowIndex].map((value, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex-1 h-9 rounded-md ${getHeatColor(
                        value
                      )} transition-all hover:ring-2 hover:ring-white/20 cursor-pointer flex items-center justify-center`}
                      title={`${location} a las ${hours[colIndex]}: ${Math.round(
                        value * 100
                      )}% de intensidad`}
                    >
                      <span
                        className={`text-[10px] font-bold ${
                          value > 0.4 ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {Math.round(value * 100)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
