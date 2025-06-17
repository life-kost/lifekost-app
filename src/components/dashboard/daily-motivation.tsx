// components/dashboard/daily-motivation.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DailyMotivation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Motivasi Harian</CardTitle>
      </CardHeader>
      <CardContent>
        <blockquote className="italic text-muted-foreground">
          “Jangan takut gagal, karena dari situlah kamu belajar paling banyak.”
        </blockquote>
        <button className="mt-4 bg-primary text-white text-sm px-4 py-2 rounded-md hover:opacity-90">
          Check-in Harian
        </button>
      </CardContent>
    </Card>
  )
}
