"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Colors } from "@/lib/constants/colors"

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
    <div className="w-full min-h-[220px] sm:min-h-[280px]"> {/* Responsif */}
      <ChartContainer
        config={{
          value: {
            label: "Pengeluaran",
            color: Colors.primary,
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={Colors.grayBorder} />
            <XAxis
              dataKey="name"
              stroke={Colors.textSecondary}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              stroke={Colors.textSecondary}
              tickFormatter={(val) => `Rp${val / 1000}K`}
              tick={{ fontSize: 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="value"
              fill="var(--color-value)"
              radius={[10, 10, 0, 0]} // Lebih smooth
            >
              <LabelList
                dataKey="value"
                position="top"
                formatter={(val: number) => `Rp${val / 1000}K`}
                fill={Colors.textPrimary}
                style={{ fontSize: 12 }}
                dy={-6} // Jarak dari bar
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

