"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomTooltip from "./_components/custom-tooltip";
import useCurrenciesChart from "./hook";

export const description = "An interactive area chart";

const ChartAreaInteractive = () => {
  const {
    filteredData,
    setTimeRange,
    timeRange,
    chartConfig,
    timeRangeDescription,
  } = useCurrenciesChart();

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Cryptocurrencies - Cotations</CardTitle>
          <CardDescription>{timeRangeDescription}</CardDescription>
        </div>
        <Select
          value={timeRange}
          onValueChange={(value) => setTimeRange(value as "90d" | "30d" | "7d")}
        >
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillBtc" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-btc)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-btc)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillEth" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-eth)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-eth)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSol" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sol)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sol)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillXrp" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-xrp)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-xrp)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillBnb" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-bnb)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-bnb)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={0}
              width={32}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `$${(value / 1000).toFixed(0)}k`;
                }
                return `$${value.toFixed(0)}`;
              }}
              className="text-xs text-muted-foreground"
            />
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Area
              dataKey="btc"
              type="natural"
              fill="url(#fillBtc)"
              stroke="var(--color-btc)"
              stackId="a"
            />
            <Area
              dataKey="eth"
              type="natural"
              fill="url(#fillEth)"
              stroke="var(--color-eth)"
              stackId="a"
            />
            <Area
              dataKey="sol"
              type="natural"
              fill="url(#fillSol)"
              stroke="var(--color-sol)"
              stackId="a"
            />
            <Area
              dataKey="xrp"
              type="natural"
              fill="url(#fillXrp)"
              stroke="var(--color-xrp)"
              stackId="a"
            />
            <Area
              dataKey="bnb"
              type="natural"
              fill="url(#fillBnb)"
              stroke="var(--color-bnb)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartAreaInteractive;
