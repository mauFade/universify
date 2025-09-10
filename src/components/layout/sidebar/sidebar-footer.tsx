"use client";

import { Settings, ChevronUp, ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const SidebarFooterContent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <DropdownMenu onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger className="w-full focus:outline-none focus:ring-0">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent hover:cursor-pointer hover:text-sidebar-accent-foreground transition-colors relative group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1">
          <Avatar className="h-8 w-8 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6">
            <AvatarImage
              src="https://www.github.com/mauFade.png"
              alt="User avatar"
            />
            <AvatarFallback>MF</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              mauFade
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              m@example.com
            </p>
          </div>
          <ChevronUp
            className={cn(
              "h-4 w-4 text-sidebar-foreground/60 transition-all group-data-[collapsible=icon]:hidden",
              isDropdownOpen ? "-rotate-90 scale-0" : "rotate-0 scale-100"
            )}
          />
          <ChevronDown
            className={cn(
              "absolute right-2 h-4 w-4 text-sidebar-foreground/60 transition-all group-data-[collapsible=icon]:hidden",
              isDropdownOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={isMobile ? "top" : "right"}
        align={isMobile ? "end" : "start"}
        className={cn(isMobile ? "w-64" : "w-56", !isMobile && "ml-1 mb-2.5")}
        sideOffset={isMobile ? 8 : 14}
      >
        <DropdownMenuItem>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://www.github.com/mauFade.png"
              alt="User avatar"
            />
            <AvatarFallback>MF</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              mauFade
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              m@example.com
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <Settings className="h-4 w-4" />
          Account
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
          <LogOut className="h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarFooterContent;
