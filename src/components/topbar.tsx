"use client"

import { SidebarToggle } from "@/components/sidebar-toggle"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"

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
          {/* Mobile sidebar toggle */}
          <button className="lg:hidden p-1 rounded-md hover:bg-accent" onClick={toggleSidebar}>
  <Menu className="h-5 w-5" />
</button>


          {/* Desktop collapse toggle */}
          <div className="hidden lg:block">
            <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed} />
          </div>

          <h1 className="text-base lg:text-lg font-semibold tracking-tight">
            LifeKost
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
