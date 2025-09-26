"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MarketAsset {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  marketCap: number;
  volume24h: number;
}

interface MarketOverviewProps {
  assets: MarketAsset[];
}

const MarketOverview = ({ assets }: MarketOverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Cryptocurrencies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assets.map((asset) => {
            const isPositive = asset.change24h >= 0;
            const ChangeIcon = isPositive ? TrendingUp : TrendingDown;

            return (
              <div
                key={asset.symbol}
                className="flex items-center justify-between p-3 rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="font-medium">{asset.symbol}</span>
                    <span className="text-sm text-muted-foreground">
                      {asset.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="font-medium">
                      $
                      {asset.price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 6,
                      })}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Vol: ${(asset.volume24h / 1000000).toFixed(1)}M
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className={`font-medium flex items-center gap-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
                    >
                      <ChangeIcon className="size-3" />
                      {isPositive ? "+" : ""}
                      {asset.changePercent24h.toFixed(2)}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${(asset.marketCap / 1000000000).toFixed(1)}B
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
