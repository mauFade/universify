import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/sidebar";
import AppHeader from "@/components/layout/header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
}
