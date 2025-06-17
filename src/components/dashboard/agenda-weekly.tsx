"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Colors } from "@/lib/constants/colors"
export function AgendaWeekly() {
  return (
    <Card
      style={{
        backgroundColor: Colors.backgroundLight,
        color: Colors.textPrimary,
        borderColor: Colors.grayBorder,
      }}
    >
      <CardHeader>
        <CardTitle style={{ color: Colors.primary }}>
          Agenda Mingguan
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span>📝 Submit tugas Pancasila</span>
          <span style={{ color: Colors.textSecondary }} className="text-xs">
            Senin
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>📚 Belajar bareng Kost B</span>
          <span style={{ color: Colors.textSecondary }} className="text-xs">
            Rabu
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>💡 Bayar listrik</span>
          <span style={{ color: Colors.textSecondary }} className="text-xs">
            Jumat
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
