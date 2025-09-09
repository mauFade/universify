"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarFooterContent from "./sidebar-footer";
import SidebarHeaderContent from "./sidebar-header";
import AppSidebarContent from "./sidebar-content";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarHeaderContent />
      </SidebarHeader>

      <SidebarContent>
        <AppSidebarContent />
      </SidebarContent>

      <SidebarFooter>
        <SidebarFooterContent />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
