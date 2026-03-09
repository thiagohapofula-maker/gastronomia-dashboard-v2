"use client"

import { GlassCard } from "./glass-card"

const locations = ["Centro", "Cordón", "Punta Carretas", "Pocitos", "Carrasco"]
const hours = ["6am", "8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm"]

// Sales intensity data: 0-1 scale
const heatmapData: number[][] = [
  [0.2, 0.6, 0.9, 0.85, 0.5, 0.7, 0.95, 0.8, 0.4],
  [0.15, 0.5, 0.75, 0.9, 0.45, 0.6, 0.85, 0.7, 0.35],
  [0.25, 0.7, 0.95, 0.8, 0.3, 0.5, 0.9, 0.85, 0.5],
  [0.3, 0.65, 0.85, 0.95, 0.55, 0.75, 0.9, 0.75, 0.45],
  [0.1, 0.4, 0.7, 0.8, 0.6, 0.8, 0.95, 0.9, 0.6],
]

function getHeatColor(value: number): string {
  if (value >= 0.85) return "bg-primary"
  if (value >= 0.7) return "bg-primary/80"
  if (value >= 0.5) return "bg-primary/50"
  if (value >= 0.3) return "bg-primary/30"
  return "bg-primary/15"
}

export function OperationalHeatmap() {
  return (
    <GlassCard className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground">Operational Heatmap</h3>
          <p className="text-sm text-muted-foreground">Sales intensity by hour and location</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-primary/15" />
            <span className="text-xs text-muted-foreground">Low</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-primary/50" />
            <span className="text-xs text-muted-foreground">Med</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-primary" />
            <span className="text-xs text-muted-foreground">High</span>
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
                <div key={hour} className="flex-1 text-center text-xs text-muted-foreground">
                  {hour}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap rows */}
          <div className="flex flex-col gap-1">
            {locations.map((location, rowIndex) => (
              <div key={location} className="flex items-center">
                <div className="w-28 shrink-0 pr-3 text-sm text-foreground">{location}</div>
                <div className="flex flex-1 gap-1">
                  {heatmapData[rowIndex].map((value, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex-1 h-9 rounded-md ${getHeatColor(value)} transition-all hover:ring-2 hover:ring-primary/50 cursor-pointer`}
                      title={`${location} at ${hours[colIndex]}: ${Math.round(value * 100)}% intensity`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
