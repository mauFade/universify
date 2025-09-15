import {
  SidebarGroup,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Home,
  TrendingUp,
  Wallet,
  BarChart3,
  Brain,
  Settings,
  History,
  Target,
} from "lucide-react";

const mainItems = [
  {
    title: "Dashboard",
    url: "/webapp/dashboard",
    icon: Home,
  },
  {
    title: "Portfolio",
    url: "/webapp/portfolio",
    icon: Wallet,
  },
  {
    title: "Analytics",
    url: "/webapp/analytics",
    icon: BarChart3,
  },
  {
    title: "AI Insights",
    url: "/webapp/insights",
    icon: Brain,
  },
];

const tradingItems = [
  {
    title: "Trading",
    url: "/webapp/trading",
    icon: TrendingUp,
  },
  {
    title: "History",
    url: "/webapp/history",
    icon: History,
  },
  {
    title: "Targets",
    url: "/webapp/targets",
    icon: Target,
  },
];

const SidebarContent = () => {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {mainItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Trading</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {tradingItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/webapp/settings">
                  <Settings />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default SidebarContent;
