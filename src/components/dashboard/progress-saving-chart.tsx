// components/dashboard/progress-saving-chart.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MyChart } from "@/components/user-chart"

export function ProgressSavingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Tabungan Bulan Ini</CardTitle>
      </CardHeader>
      <CardContent>
        <MyChart />
      </CardContent>
    </Card>
  )
}
