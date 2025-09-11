import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeToggle from "../theme-toggle";

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="focus:outline-none focus:ring-0" />
          <h1 className="text-lg font-medium text-foreground">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            How are you doing, mauFade?
          </p>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
