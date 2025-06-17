"use client"

import Link from "next/link"
import {
  Home,
  NotebookPen,
  Wallet2,
  Bell,
  Users,
  ShoppingBag,
  Award,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Colors } from "@/lib/constants/colors"
interface SidebarProps {
  collapsed: boolean
  isVisible: boolean
}

const navItems = [
  { href: "/dashboard", icon: <Home className="h-5 w-5" />, label: "Dashboard" },
  { href: "/tugasin", icon: <NotebookPen className="h-5 w-5" />, label: "Tugasin" },
  { href: "/dompet", icon: <Wallet2 className="h-5 w-5" />, label: "DompetKost" },
  { href: "/notifikasi", icon: <Bell className="h-5 w-5" />, label: "Reminder" },
  { href: "/teman", icon: <Users className="h-5 w-5" />, label: "TemanKost" },
  { href: "/lapak", icon: <ShoppingBag className="h-5 w-5" />, label: "LapakKost" },
  { href: "/achievement", icon: <Award className="h-5 w-5" />, label: "Achievement" },
  { href: "/pengaturan", icon: <Settings className="h-5 w-5" />, label: "Pengaturan" },
]

export function Sidebar({ collapsed, isVisible }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out border-r",
        isVisible ? "translate-x-0" : "-translate-x-full",
        collapsed ? "w-20" : "w-64",
        "lg:translate-x-0", // always visible on desktop
      )}
      style={{
        backgroundColor: Colors.backgroundLight,
        borderColor: Colors.grayBorder,
      }}
    >
      <h2
        className={cn(
          "font-bold text-lg px-4 mb-6 transition-opacity duration-200 text-[24px]",
          collapsed && "opacity-0 pointer-events-none"
        )}
        style={{ color: Colors.primary }}
      >
        LifeKost
      </h2>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition",
              collapsed ? "justify-center" : "justify-start gap-2"
            )}
            style={{
              color: Colors.textPrimary,
            }}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
