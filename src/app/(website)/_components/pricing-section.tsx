import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for beginners exploring crypto trading",
    features: [
      "Basic market analysis",
      "5 AI trading signals/day",
      "Standard support",
      "Mobile app access",
      "Basic portfolio tracking",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "Advanced tools for serious traders",
    features: [
      "Advanced AI analysis",
      "Unlimited trading signals",
      "Automated trading bots",
      "Priority support",
      "Advanced analytics",
      "Risk management tools",
      "Social trading features",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for institutions",
    features: [
      "Custom AI models",
      "Dedicated account manager",
      "API access",
      "White-label solutions",
      "Advanced security",
      "Custom integrations",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan, index) => (
        <Card
          key={index.toString()}
          className={`relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${plan.popular ? "border-primary/50 shadow-primary/10" : ""}`}
        >
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
              Most Popular
            </Badge>
          )}
          <CardHeader className="text-center">
            <CardTitle className="text-xl">{plan.name}</CardTitle>
            <div className="mt-2">
              <span className="text-3xl font-bold text-foreground">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-muted-foreground">{plan.period}</span>
              )}
            </div>
            <p className="text-muted-foreground text-sm">{plan.description}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex.toString()}
                  className="flex items-center space-x-2"
                >
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/auth/sign-up" className="block">
              <Button
                className={`w-full ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingSection;
