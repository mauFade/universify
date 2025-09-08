import { SidebarTrigger } from "@/components/ui/sidebar";

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="focus:outline-none focus:ring-0" />
          <h1 className="text-lg font-medium text-foreground">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground">
            Good morning, mauFade
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
