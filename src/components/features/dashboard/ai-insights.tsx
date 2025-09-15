"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Brain,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  RefreshCw,
  ExternalLink,
  Loader2,
} from "lucide-react";

const AIInsights = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);
  const [lastRefreshTime, setLastRefreshTime] = useState<Date | null>(null);

  // Mock data for AI insights - will be replaced with real AI analysis
  const insights = [
    {
      type: "bullish",
      title: "Bitcoin Shows Strong Momentum",
      description:
        "BTC has broken through key resistance levels and is showing strong bullish momentum. The technical indicators suggest continued upward movement in the short term.",
      confidence: 85,
      impact: "high",
      recommendation:
        "Consider holding current positions and potentially adding on dips.",
      timestamp: "2 hours ago",
    },
    {
      type: "neutral",
      title: "Ethereum Consolidation Phase",
      description:
        "ETH is currently in a consolidation phase after recent gains. The market is waiting for clear direction signals.",
      confidence: 72,
      impact: "medium",
      recommendation:
        "Monitor for breakout signals above $2,700 resistance level.",
      timestamp: "4 hours ago",
    },
    {
      type: "bearish",
      title: "Market Volatility Warning",
      description:
        "Overall market volatility is increasing. Risk management is crucial in current market conditions.",
      confidence: 78,
      impact: "high",
      recommendation:
        "Consider reducing position sizes and setting stop-losses.",
      timestamp: "6 hours ago",
    },
    {
      type: "opportunity",
      title: "Altcoin Season Potential",
      description:
        "Several altcoins are showing strong fundamentals and technical patterns. This could indicate the beginning of an altcoin season.",
      confidence: 68,
      impact: "medium",
      recommendation: "Research promising altcoins with strong fundamentals.",
      timestamp: "8 hours ago",
    },
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "bullish":
        return <TrendingUp className="size-4 text-green-600" />;
      case "bearish":
        return <TrendingDown className="size-4 text-red-600" />;
      case "neutral":
        return <AlertTriangle className="size-4 text-yellow-600" />;
      case "opportunity":
        return <Lightbulb className="size-4 text-blue-600" />;
      default:
        return <Brain className="size-4" />;
    }
  };

  const getInsightBadgeVariant = (type: string) => {
    switch (type) {
      case "bullish":
        return "default";
      case "bearish":
        return "destructive";
      case "neutral":
        return "secondary";
      case "opportunity":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-muted-foreground";
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setRefreshCount((prev) => prev + 1);

    // Show loading toast
    const loadingToast = toast.loading("Analyzing market data with AI...", {
      description: "This may take a few seconds",
    });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 4000));

    setIsRefreshing(false);
    setLastRefreshTime(new Date());

    // Dismiss loading toast and show success
    toast.dismiss(loadingToast);
    toast.success("AI Insights Updated!", {
      description: "Fresh market analysis is now available",
      duration: 3000,
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Brain
              className={`size-5 ${isRefreshing ? "animate-pulse" : ""}`}
            />
            AI Market Insights
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              Powered by AI
            </Badge>
            {lastRefreshTime && !isRefreshing && (
              <Badge
                variant="secondary"
                className="text-xs animate-in fade-in duration-500"
              >
                Updated {lastRefreshTime.toLocaleTimeString()}
              </Badge>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="relative overflow-hidden transition-all duration-300"
            >
              {isRefreshing ? (
                <>
                  <Loader2 className="size-4 mr-2 animate-spin" />
                  <span>Refreshing...</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                </>
              ) : (
                <>
                  <RefreshCw className="size-4 mr-2" />
                  <span>Refresh</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className={`space-y-4 transition-opacity duration-300 ${isRefreshing ? "opacity-50" : "opacity-100"}`}
        >
          {insights.map((insight, index) => (
            <div
              key={`insight-${insight.title}-${index}-${refreshCount}`}
              className={`p-4 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 ${
                isRefreshing ? "animate-pulse" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {getInsightIcon(insight.type)}
                  <h4 className="font-semibold">{insight.title}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getInsightBadgeVariant(insight.type)}>
                    {insight.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {insight.timestamp}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                {insight.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Confidence:
                    </span>
                    <span className="text-sm font-medium">
                      {insight.confidence}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Impact:
                    </span>
                    <span
                      className={`text-sm font-medium ${getImpactColor(insight.impact)}`}
                    >
                      {insight.impact}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="size-3 mr-1" />
                  Learn More
                </Button>
              </div>

              <div className="mt-3 p-3 rounded-md bg-muted/50">
                <div className="flex items-start gap-2">
                  <Lightbulb className="size-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-600">
                      Recommendation:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {insight.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 ${
            isRefreshing ? "animate-pulse" : ""
          }`}
          style={{ animationDelay: `${insights.length * 100}ms` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Brain
              className={`size-5 text-blue-600 ${isRefreshing ? "animate-pulse" : ""}`}
            />
            <h4 className="font-semibold text-blue-600">AI Analysis Summary</h4>
            {isRefreshing && (
              <div className="ml-auto">
                <Loader2 className="size-4 animate-spin text-blue-600" />
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Based on current market data, technical analysis, and sentiment
            indicators, the AI suggests a cautiously optimistic outlook for the
            next 24-48 hours. Key levels to watch: BTC $42,000 support, ETH
            $2,600 resistance.
          </p>
          <Button variant="outline" size="sm" className="w-full">
            <Brain className="size-4 mr-2" />
            Get Detailed AI Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;
