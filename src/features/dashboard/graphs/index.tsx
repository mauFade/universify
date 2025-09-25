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
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import CustomGraphTooltip from "./_components/custom-graph-tooltip";
import useGraph from "./hook";

const chartConfig = {
  priceUsd: {
    label: "Price",
    color: "hsl(173, 48%, 42%)",
  },
} satisfies ChartConfig;

const GraphsView = () => {
  const { chartData, priceChange, dateRange } = useGraph();

  return (
    <div className="space-y-4">
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
                  <stop
                    offset="5%"
                    stopColor="hsl(173, 48%, 42%)"
                    stopOpacity={1.0}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(173, 48%, 42%)"
                    stopOpacity={0.1}
                  />
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
              <ChartTooltip content={<CustomGraphTooltip />} cursor={false} />
              <Area
                dataKey="priceUsd"
                fill="url(#fillPrimary)"
                stackId="a"
                stroke="hsl(173, 48%, 42%)"
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
    </div>
  );
};

export default GraphsView;
