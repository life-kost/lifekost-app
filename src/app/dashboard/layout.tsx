// app/dashboard/layout.tsx
"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible)

  return (
    <div className="flex">
      <Sidebar collapsed={collapsed} isVisible={sidebarVisible} />
      {/* overlay ketika sidebar terbuka di mobile */}
      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      <div className={collapsed ? "ml-20 lg:ml-20 flex-1" : "ml-64 lg:ml-64 flex-1"}>
        <Topbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
