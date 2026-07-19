"use client";

import { Bell, Moon, Search, Sun } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/use-theme";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex h-16 items-center gap-2 md:gap-4 border-b bg-background px-6">
      {/* Search bar */}
      <div className="relative w-28 sm:w-48 md:w-64">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="搜尋..."
          className="rounded-full bg-muted/50 pl-9 w-full"
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Notification bell */}
      <Button variant="ghost" size="icon">
        <Bell />
      </Button>

      {/* Dark mode toggle */}
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>

      {/* Avatar + user info */}
      <div className="flex items-center gap-2">
        <Avatar className="size-8">
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
        <div className="hidden md:flex flex-col">
          <span className="text-sm font-medium leading-none">Admin User</span>
          <span className="text-xs text-muted-foreground leading-none mt-0.5">
            Super Admin
          </span>
        </div>
      </div>
    </header>
  );
}
