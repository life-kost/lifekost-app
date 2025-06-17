// components/sidebar-toggle.tsx
"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarToggleProps {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

export function SidebarToggle({ collapsed, setCollapsed }: SidebarToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setCollapsed(!collapsed)}
      className="ml-1"
    >
      <Menu className="w-5 h-5" />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
}
