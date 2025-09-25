"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { api } from "@/trpc/react";
import { subDays } from "date-fns";

const chartConfig = {
  priceUsd: {
    label: "Price",
    color: "#10b981",
  },
} satisfies ChartConfig;

const earliestDate = subDays(new Date(), 7);
const latestDate = new Date();

const CryptoAreaGraph = () => {
  const [cryptoPrices] = api.cryptoPrices.selectCryptoPrices.useSuspenseQuery({
    symbol: "btc",
    earliestDate,
    latestDate,
  });

  // Transform cryptoPrices data to chart format
  const chartData = cryptoPrices.map((crypto) => ({
    date: new Date(crypto.timestamp).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    }),
    priceUsd: parseFloat(crypto.priceUsd),
    timestamp: crypto.timestamp,
  }));

  // Calculate price change percentage
  const getPriceChange = () => {
    if (chartData.length < 2) return null;

    const firstPrice = chartData[0]?.priceUsd || 0;
    const lastPrice = chartData[chartData.length - 1]?.priceUsd || 0;
    const changePercent = ((lastPrice - firstPrice) / firstPrice) * 100;
    const isPositive = changePercent >= 0;

    return {
      changePercent: Math.abs(changePercent).toFixed(2),
      isPositive,
      direction: isPositive ? "Rising" : "Falling",
    };
  };

  // Get date range
  const getDateRange = () => {
    if (chartData.length === 0) return null;

    const startDate = new Date(chartData[0]?.timestamp).toLocaleDateString(
      "en-US",
    );
    const endDate = new Date(
      chartData[chartData.length - 1]?.timestamp,
    ).toLocaleDateString("en-US");

    return `${startDate} - ${endDate}`;
  };

  const priceChange = getPriceChange();
  const dateRange = getDateRange();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Crypto Currencies Cotations</CardTitle>
        <CardDescription>
          Showing cryptocurrency prices in the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          className="aspect-auto h-[250px] w-full"
          config={chartConfig}
        >
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="fillPrimary" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={1.0} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="date"
              minTickGap={32}
              tickFormatter={(value) => value}
              tickLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="dot" />}
              cursor={false}
            />
            <Area
              dataKey="priceUsd"
              fill="url(#fillPrimary)"
              stackId="a"
              stroke="#10b981"
              type="natural"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {priceChange && (
                <>
                  {priceChange.direction} {priceChange.changePercent}% in the
                  last 7 days{" "}
                  <TrendingUp
                    className={`size-4 ${priceChange.isPositive ? "text-emerald-500" : "text-red-500 rotate-180"}`}
                  />
                </>
              )}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground leading-none">
              {dateRange}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CryptoAreaGraph;
