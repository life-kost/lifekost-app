"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { name: "Jan", value: 800_000 },
  { name: "Feb", value: 1_000_000 },
  { name: "Mar", value: 1_250_000 },
  { name: "Apr", value: 950_000 },
  { name: "Mei", value: 1_500_000 },
  { name: "Jun", value: 1_200_000 },
]

export function MyChart() {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Pengeluaran",
          color: "#4f46e5", // warna primary
        },
      }}
    >
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(val) => `Rp${val / 1000}K`} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
