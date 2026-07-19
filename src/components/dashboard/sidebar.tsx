"use client";

import {
  AlertTriangle,
  ClipboardCheck,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: typeof LayoutDashboard;
}

const mainNavItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Requests", icon: ListTodo },
  { label: "Issues", icon: AlertTriangle },
  { label: "Teams", icon: Users },
  { label: "Settings", icon: Settings },
];

const bottomNavItems: NavItem[] = [{ label: "Help Center", icon: HelpCircle }];

interface SidebarProps {
  onNavClick?: () => void;
}

export function Sidebar({ onNavClick }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleClick = (label: string) => {
    setActiveItem(label);
    onNavClick?.();
  };

  return (
    <aside className="flex h-full w-60 flex-col border-r bg-sidebar">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-6">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
          <ClipboardCheck className="size-4 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold text-sidebar-foreground">
          Cereal Admin
        </span>
      </div>

      {/* Main navigation */}
      <nav className="flex flex-col gap-1 px-3">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          return (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                "justify-start w-full gap-3",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
              )}
              onClick={() => handleClick(item.label)}
            >
              <Icon data-icon="inline-start" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Separator */}
      <div className="px-3 py-2">
        <Separator />
      </div>

      {/* Bottom navigation */}
      <nav className="flex flex-col gap-1 px-3">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          return (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                "justify-start w-full gap-3",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
              )}
              onClick={() => handleClick(item.label)}
            >
              <Icon data-icon="inline-start" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Logout */}
      <div className="px-3 pb-3">
        <Button
          variant="ghost"
          className="justify-start w-full gap-3"
          onClick={() => handleClick("Logout")}
        >
          <LogOut data-icon="inline-start" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
