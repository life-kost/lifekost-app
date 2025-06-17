// components/sidebar.tsx
"use client"

import Link from "next/link"
import { Home, Users, Store, Calendar, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  collapsed: boolean
  isVisible: boolean
}

const navItems = [
  { href: "/dashboard", icon: <Home className="h-5 w-5" />, label: "Dashboard" },
  { href: "/dashboard/users", icon: <Users className="h-5 w-5" />, label: "Users" },
  { href: "/dashboard/lapak", icon: <Store className="h-5 w-5" />, label: "Lapak" },
  { href: "/dashboard/tugas", icon: <Calendar className="h-5 w-5" />, label: "Tugasin" },
  { href: "/dashboard/notifikasi", icon: <Bell className="h-5 w-5" />, label: "Reminder" },
]

export function Sidebar({ collapsed, isVisible }: SidebarProps) {
  return (
    <aside
      className={cn(
        "h-screen border-r bg-background p-4 fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out",
        isVisible ? "translate-x-0" : "-translate-x-full",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <h2
        className={cn(
          "font-bold text-lg px-2 mb-4 transition-opacity duration-200",
          collapsed && "opacity-0 pointer-events-none"
        )}
      >
        LifeKost
      </h2>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent transition",
            collapsed ? "justify-center" : ""
          )}
        >
          {item.icon}
          {!collapsed && <span className="ml-2">{item.label}</span>}
        </Link>
      ))}
    </aside>
  )
}
