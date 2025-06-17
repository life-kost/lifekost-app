"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MyChart } from "@/components/user-chart"
import {
  CalendarCheck,
  Wallet2,
  Bell,
  Smile,
} from "lucide-react"

export default function DashboardUser() {
  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold">Hai, Rifki 👋</h1>
        <p className="mt-2 text-muted-foreground">
          Semoga hari kamu produktif! Ini ringkasan kehidupan kost kamu hari ini.
        </p>
      </div>

      {/* Stat Cards */}
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

      {/* Extended Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Progress Tabungan */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Tabungan Bulan Ini</CardTitle>
          </CardHeader>
          <CardContent>
           
            <MyChart/>
          </CardContent>
        </Card>

        {/* Agenda Mingguan */}
        <Card>
          <CardHeader>
            <CardTitle>Agenda Mingguan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>📝 Submit tugas Pancasila</span>
              <span className="text-muted-foreground text-xs">Senin</span>
            </div>
            <div className="flex items-center justify-between">
              <span>📚 Belajar bareng Kost B</span>
              <span className="text-muted-foreground text-xs">Rabu</span>
            </div>
            <div className="flex items-center justify-between">
              <span>💡 Bayar listrik</span>
              <span className="text-muted-foreground text-xs">Jumat</span>
            </div>
          </CardContent>
        </Card>

        {/* Motivasi Harian */}
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
      </div>
    </div>
  )
}
