import { AreaGraph } from "@/components/features/dashboard/graph";

const WebappDashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <AreaGraph />
      <AreaGraph />
    </div>
  );
};

export default WebappDashboard;
