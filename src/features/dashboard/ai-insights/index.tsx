"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";

type AIInsight = {
  id: string;
  type: "opportunity" | "warning" | "tip";
  title: string;
  description: string;
  confidence: number;
  timestamp: string;
};

type AIInsightsProps = {
  insights: AIInsight[];
};

const AIInsights = ({ insights }: AIInsightsProps) => {
  const getInsightIcon = (type: string) => {
    switch (type) {
      case "opportunity":
        return <TrendingUp className="size-4 text-emerald-500" />;
      case "warning":
        return <AlertTriangle className="size-4 text-yellow-500" />;
      case "tip":
        return <Lightbulb className="size-4 text-blue-500" />;
      default:
        return <Brain className="size-4" />;
    }
  };

  const getInsightBadgeVariant = (type: string) => {
    switch (type) {
      case "opportunity":
        return "default" as const;
      case "warning":
        return "destructive" as const;
      case "tip":
        return "secondary" as const;
      default:
        return "outline" as const;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Brain className="size-5" />
            AI Insights
          </CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.length === 0 ? (
          <div className="text-center py-8">
            <Brain className="size-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">AI Agent in Training</h3>
            <p className="text-muted-foreground mb-4">
              Our AI agent is analyzing the market and your portfolio to provide
              personalized insights.
            </p>
            <Button variant="outline" disabled>
              Coming Soon: Personalized Insights
            </Button>
          </div>
        ) : (
          insights.map((insight) => (
            <div key={insight.id} className="p-4 rounded-lg border space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getInsightIcon(insight.type)}
                  <h4 className="font-medium">{insight.title}</h4>
                </div>
                <Badge variant={getInsightBadgeVariant(insight.type)}>
                  {insight.confidence}% confidence
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {insight.description}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{insight.timestamp}</span>
                <Button variant="ghost" size="sm">
                  View details
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default AIInsights;
