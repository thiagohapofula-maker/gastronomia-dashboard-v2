import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: number
  changeLabel: string
  isCost?: boolean
}

export function MetricCard({ title, value, change, changeLabel, isCost = false }: MetricCardProps) {
  const isPositive = change > 0
  const isNeutral = change === 0
  
  // For costs, positive change is bad (red), negative is good (green)
  // For revenue/profit, positive is good (green), negative is bad (red)
  const isGood = isCost ? change < 0 : change > 0
  
  return (
    <Card className="border-border/50">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
          <div className="flex items-center gap-1.5 mt-1">
            {isNeutral ? (
              <Minus className="h-4 w-4 text-muted-foreground" />
            ) : isGood ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
            <span className={`text-sm font-medium ${
              isNeutral 
                ? "text-muted-foreground" 
                : isGood 
                  ? "text-success" 
                  : "text-destructive"
            }`}>
              {isPositive ? "+" : ""}{change}%
            </span>
            <span className="text-sm text-muted-foreground">{changeLabel}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
