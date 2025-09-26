"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Asset {
  symbol: string;
  name: string;
  amount: number;
  value: number;
  change24h: number;
  changePercent24h: number;
  allocation: number;
}

interface PortfolioOverviewProps {
  assets: Asset[];
}

const PortfolioOverview = ({ assets }: PortfolioOverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Distribution</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {assets.map((asset) => {
          const isPositive = asset.change24h >= 0;
          const ChangeIcon = isPositive ? TrendingUp : TrendingDown;

          return (
            <div key={asset.symbol} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="font-medium">{asset.symbol}</span>
                    <span className="text-sm text-muted-foreground">
                      {asset.name}
                    </span>
                  </div>
                  <Badge variant="outline">
                    {asset.amount.toFixed(4)} {asset.symbol}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    $
                    {asset.value.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div
                    className={`text-sm flex items-center gap-1 ${isPositive ? "text-emerald-500" : "text-red-500"}`}
                  >
                    <ChangeIcon className="size-3" />
                    {isPositive ? "+" : ""}
                    {asset.changePercent24h.toFixed(2)}%
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Allocation</span>
                  <span>{asset.allocation.toFixed(1)}%</span>
                </div>
                <Progress value={asset.allocation} className="h-2" />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PortfolioOverview;
