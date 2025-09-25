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

const chartData = [
  { month: "January", donorCount: 42 },
  { month: "February", donorCount: 38 },
  { month: "March", donorCount: 56 },
  { month: "April", donorCount: 61 },
  { month: "May", donorCount: 65 },
  { month: "June", donorCount: 74 },
  { month: "July", donorCount: 78 },
];

const chartConfig = {
  donorCount: {
    label: "Donor Count",
    color: "#10b981",
  },
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Donors Joined</CardTitle>
        <CardDescription>
          Showing donors that joined the organization in the last 6 months
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
              dataKey="month"
              minTickGap={32}
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="dot" />}
              cursor={false}
            />
            <Area
              dataKey="donorCount"
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
              Trending up by 5.2% this month{" "}
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground leading-none">
              January - {chartData.at(-1)?.month} {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
