import { Card, CardContent } from "@/components/ui/card";

const CryptoStats = () => {
  const stats = [
    {
      label: "Total Volume",
      value: "$2.4T",
      change: "+12.5%",
      isPositive: true,
    },
    {
      label: "Active Traders",
      value: "150K+",
      change: "+8.2%",
      isPositive: true,
    },
    { label: "AI Accuracy", value: "94.7%", change: "+2.1%", isPositive: true },
    {
      label: "Avg. Returns",
      value: "23.8%",
      change: "+5.4%",
      isPositive: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index.toString()}
          className="border-border/50 bg-card/50 backdrop-blur-sm"
        >
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div
              className={`text-xs font-medium ${stat.isPositive ? "text-primary" : "text-destructive"}`}
            >
              {stat.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CryptoStats;
