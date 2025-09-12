"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeToggle from "../theme-toggle";
import { userStore } from "@/stores/users/store";
import { TrendingUp } from "lucide-react";

const AppHeader = () => {
  const user = userStore((state) => state.user);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="focus:outline-none focus:ring-0" />
        </div>
        <div className="flex items-center gap-6">
          {user && (
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                <TrendingUp className="w-3 h-3 text-white" />
              </div>

              <p className="text-sm font-medium text-foreground leading-none">
                Welcome back, {user.firstName}
              </p>
            </div>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
