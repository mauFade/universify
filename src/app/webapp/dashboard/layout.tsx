import type { ReactNode } from "react";

interface DashboardLayoutProps {
  graphsTabs: ReactNode;
}

const DashboardLayout = ({ graphsTabs }: DashboardLayoutProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="lg:col-span-2">{graphsTabs}</div>
    </div>
  );
};

export default DashboardLayout;
