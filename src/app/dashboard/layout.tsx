"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/dashboard/sidebar/sidebar"
import { Topbar } from "@/components/dashboard/sidebar/topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false)

  // Tutup sidebar saat tekan ESC (mobile UX)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarVisible(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} isVisible={sidebarVisible} />

      {/* Overlay hitam saat mobile sidebar aktif */}
      {sidebarVisible && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      {/* Konten utama */}
      <div
        className={`flex-1 transition-all duration-300 ${
          collapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        <Topbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          toggleSidebar={() => setSidebarVisible(!sidebarVisible)}
        />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
