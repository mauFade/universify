import AIInsights from "@/components/features/dashboard/ai-insights";

const WebappDashboard = () => {
  return (
    <div className="space-y-6 m-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your cryptocurrency portfolio
          </p>
        </div>
      </div>

      <AIInsights />
    </div>
  );
};

export default WebappDashboard;
