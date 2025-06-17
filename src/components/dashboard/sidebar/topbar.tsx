"use client"

import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/dashboard/sidebar/mode-toggle"
import { SidebarToggle } from "@/components/dashboard/sidebar/sidebar-toggle"

interface TopbarProps {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
  toggleSidebar: () => void
}

export function Topbar({ collapsed, setCollapsed, toggleSidebar }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Tombol menu untuk mobile */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            onClick={toggleSidebar}
            aria-label="Buka menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Tombol collapse sidebar untuk desktop */}
          <div className="hidden lg:block">
            <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed} />
          </div>

          <span className="font-semibold text-lg">LifeKost</span>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}
