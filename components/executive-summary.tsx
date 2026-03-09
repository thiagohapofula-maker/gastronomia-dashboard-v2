"use client"

import { DollarSign, TrendingUp, Users, Sparkles } from "lucide-react"
import { GlassCard } from "./glass-card"
import { SparklineChart } from "./sparkline-chart"
import { RadialProgress } from "./radial-progress"

const revenueSparklineData = [
  4200, 4500, 4100, 4800, 5200, 4900, 5100, 5400, 5000, 5300, 5600, 5200,
  5400, 5100, 5500, 5800, 5400, 5700, 6000, 5600, 5900, 6200, 5800, 6100
]

export function ExecutiveSummary() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Daily Net Revenue */}
      <GlassCard className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Daily Net Revenue</p>
            <p className="mt-1 text-2xl font-bold text-foreground">$24,847</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <DollarSign className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center text-xs font-medium text-primary">
            <TrendingUp className="mr-1 h-3 w-3" />
            +12.5%
          </span>
          <span className="text-xs text-muted-foreground">vs yesterday</span>
        </div>
        <div className="mt-3">
          <p className="mb-1 text-xs text-muted-foreground">Last 24 hours</p>
          <SparklineChart data={revenueSparklineData} color="hsl(155, 60%, 45%)" height={36} />
        </div>
      </GlassCard>

      {/* Live Food Cost % */}
      <GlassCard className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Live Food Cost %</p>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="text-2xl font-bold text-foreground">28%</p>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Optimal
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <RadialProgress value={28} max={50} size={90} strokeWidth={10} color="hsl(155, 60%, 45%)" />
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">Target: below 30%</p>
      </GlassCard>

      {/* Labor Efficiency */}
      <GlassCard className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Labor Efficiency</p>
            <p className="mt-1 text-2xl font-bold text-foreground">$127.40</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">Sales per Man-Hour</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center text-xs font-medium text-primary">
            <TrendingUp className="mr-1 h-3 w-3" />
            +8.2%
          </span>
          <span className="text-xs text-muted-foreground">above target</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div 
            className="h-full rounded-full bg-primary transition-all duration-500" 
            style={{ width: "85%" }}
          />
        </div>
        <p className="mt-1 text-xs text-muted-foreground">85% efficiency rating</p>
      </GlassCard>

      {/* Projected EOM Profit */}
      <GlassCard className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Projected EOM Profit</p>
            <p className="mt-1 text-2xl font-bold text-foreground">$142,850</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
            AI Forecast
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center text-xs font-medium text-primary">
            <TrendingUp className="mr-1 h-3 w-3" />
            +18.3%
          </span>
          <span className="text-xs text-muted-foreground">vs last month</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Confidence: <span className="text-foreground">94%</span>
        </p>
      </GlassCard>
    </div>
  )
}
