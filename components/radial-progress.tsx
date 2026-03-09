"use client"

import { cn } from "@/lib/utils"

interface RadialProgressProps {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  className?: string
  color?: string
  trackColor?: string
}

export function RadialProgress({
  value,
  max = 100,
  size = 80,
  strokeWidth = 8,
  className,
  color = "hsl(var(--primary))",
  trackColor = "hsl(var(--muted))",
}: RadialProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const percent = Math.min(value / max, 1)
  const offset = circumference - percent * circumference

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold text-foreground">{Math.round(value)}%</span>
      </div>
    </div>
  )
}
