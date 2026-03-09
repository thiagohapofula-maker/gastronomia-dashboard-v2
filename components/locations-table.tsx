"use client"

import { GlassCard } from "./glass-card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

type HealthStatus = "healthy" | "warning" | "critical"

interface Location {
  name: string
  revenue: number
  revenueChange: number
  margin: number
  marginChange: number
  health: HealthStatus
}

const locations: Location[] = [
  { name: "Centro", revenue: 48520, revenueChange: 12.3, margin: 32.5, marginChange: 1.2, health: "healthy" },
  { name: "Punta Carretas", revenue: 42180, revenueChange: 8.7, margin: 29.8, marginChange: -0.8, health: "warning" },
  { name: "Pocitos", revenue: 38940, revenueChange: -2.1, margin: 26.2, marginChange: -4.2, health: "warning" },
  { name: "Cordón", revenue: 35620, revenueChange: 5.4, margin: 24.1, marginChange: -2.1, health: "critical" },
  { name: "Carrasco", revenue: 52840, revenueChange: 15.8, margin: 35.2, marginChange: 3.4, health: "healthy" },
]

function HealthBadge({ status }: { status: HealthStatus }) {
  const styles = {
    healthy: "bg-primary/10 text-primary",
    warning: "bg-warning/10 text-warning",
    critical: "bg-destructive/10 text-destructive",
  }
  const labels = {
    healthy: "Healthy",
    warning: "Monitor",
    critical: "Action Required",
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

function ChangeIndicator({ value }: { value: number }) {
  if (value > 0) {
    return (
      <span className="inline-flex items-center text-xs font-medium text-primary">
        <TrendingUp className="mr-0.5 h-3 w-3" />
        +{value.toFixed(1)}%
      </span>
    )
  }
  if (value < 0) {
    return (
      <span className="inline-flex items-center text-xs font-medium text-destructive">
        <TrendingDown className="mr-0.5 h-3 w-3" />
        {value.toFixed(1)}%
      </span>
    )
  }
  return (
    <span className="inline-flex items-center text-xs font-medium text-muted-foreground">
      <Minus className="mr-0.5 h-3 w-3" />
      0.0%
    </span>
  )
}

export function LocationsTable() {
  return (
    <GlassCard className="p-5">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-foreground">Location Performance</h3>
        <p className="text-sm text-muted-foreground">Revenue, margin, and health status by location</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Location
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Revenue
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Margin
              </th>
              <th className="pb-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Health Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {locations.map((location) => (
              <tr key={location.name} className="transition-colors hover:bg-muted/30">
                <td className="py-3.5 text-sm font-medium text-foreground">{location.name}</td>
                <td className="py-3.5 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-foreground">
                      ${location.revenue.toLocaleString()}
                    </span>
                    <ChangeIndicator value={location.revenueChange} />
                  </div>
                </td>
                <td className="py-3.5 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-foreground">{location.margin}%</span>
                    <ChangeIndicator value={location.marginChange} />
                  </div>
                </td>
                <td className="py-3.5 text-center">
                  <HealthBadge status={location.health} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  )
}
