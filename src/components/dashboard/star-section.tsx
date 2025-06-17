// components/dashboard/stat-card-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarCheck, Wallet2, Bell, Smile } from "lucide-react"

export function StatCardSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tugas Hari Ini</CardTitle>
          <CalendarCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2</div>
          <p className="text-xs text-muted-foreground">Jangan lupa submit ya</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pengeluaran Bulan Ini</CardTitle>
          <Wallet2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Rp 1.250.000</div>
          <p className="text-xs text-muted-foreground">25% dari budget bulanan</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tagihan Terdekat</CardTitle>
          <Bell className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-md font-bold">Listrik - 20 Juni</div>
          <p className="text-xs text-muted-foreground">Jatuh tempo 3 hari lagi</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Mood Hari Ini</CardTitle>
          <Smile className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-md font-semibold italic text-muted-foreground">
            “Kamu lebih kuat dari yang kamu kira 💪”
          </div>
          <p className="text-xs text-muted-foreground mt-1">Check-in harianmu sudah tercatat!</p>
        </CardContent>
      </Card>
    </div>
  )
}
