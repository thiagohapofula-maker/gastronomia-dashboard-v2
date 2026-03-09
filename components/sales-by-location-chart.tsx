"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const salesData = [
  { location: "Downtown", sales: 124500 },
  { location: "Midtown", sales: 98200 },
  { location: "Uptown", sales: 87300 },
  { location: "Eastside", sales: 76800 },
  { location: "Westside", sales: 92100 },
]

export function SalesByLocationChart() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Sales by Location</CardTitle>
        <CardDescription className="text-muted-foreground">
          Monthly revenue comparison across all restaurant locations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={salesData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <XAxis 
              dataKey="location" 
              stroke="oklch(0.60 0 0)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="oklch(0.60 0 0)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              cursor={{ fill: "oklch(0.25 0.005 260 / 0.5)" }}
              contentStyle={{
                backgroundColor: "oklch(0.18 0.005 260)",
                border: "1px solid oklch(0.28 0.005 260)",
                borderRadius: "8px",
                color: "oklch(0.95 0 0)",
              }}
              labelStyle={{ color: "oklch(0.95 0 0)", fontWeight: 500 }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Sales"]}
            />
            <Bar 
              dataKey="sales" 
              fill="oklch(0.70 0.18 145)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
