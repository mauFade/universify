import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, Brain, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Advanced machine learning algorithms analyze market patterns, sentiment, and historical data to provide intelligent trading recommendations.",
    badge: "AI Core",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Market Intelligence",
    description:
      "Get instant insights on price movements, volume changes, and market trends with our sophisticated monitoring system.",
    badge: "Live Data",
    color: "text-emerald-500",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Execution",
    description:
      "Execute trades in milliseconds with our optimized infrastructure. Never miss an opportunity due to slow execution.",
    badge: "Speed",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "Your assets are protected with military-grade encryption, multi-factor authentication, and cold storage solutions.",
    badge: "Security",
    color: "text-blue-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Portfolio Analytics",
    description:
      "Track performance, analyze risk metrics, and optimize your portfolio with comprehensive analytics and reporting tools.",
    badge: "Analytics",
    color: "text-purple-500",
  },
  {
    icon: Users,
    title: "Social Trading Network",
    description:
      "Follow top traders, copy successful strategies, and learn from the community of professional cryptocurrency traders.",
    badge: "Social",
    color: "text-pink-500",
  },
];

const FeatureShowcase = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <Card
          key={index.toString()}
          className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
        >
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ${feature.color} transition-colors group-hover:bg-primary/20`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <Badge variant="secondary" className="text-xs">
                {feature.badge}
              </Badge>
            </div>
            <h3 className="mb-2 font-semibold text-lg text-card-foreground">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureShowcase;
