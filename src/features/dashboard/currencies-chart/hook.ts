"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import type { ChartConfig } from "@/components/ui/chart";

const getTimeRangeDescription = (timeRange: string): string => {
  const descriptions = {
    "90d": "Showing cryptocurrencies cotations for the last 3 months",
    "30d": "Showing cryptocurrencies cotations for the last 30 days",
    "7d": "Showing cryptocurrencies cotations for the last 7 days",
  };

  return (
    descriptions[timeRange as keyof typeof descriptions] || descriptions["90d"]
  );
};

const useCurrenciesChart = () => {
  const [timeRange, setTimeRange] = useState<"90d" | "30d" | "7d">("90d");

  const chartConfig = {
    btc: {
      label: "Bitcoin",
      color: "var(--chart-1)",
    },
    eth: {
      label: "Ethereum",
      color: "var(--chart-2)",
    },
    sol: {
      label: "Solana",
      color: "var(--chart-3)",
    },
    xrp: {
      label: "XRP",
      color: "var(--chart-4)",
    },
    bnb: {
      label: "BNB",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;

  const [cryptoData] =
    api.cryptoPrices.selectGeneralCryptoPrices.useSuspenseQuery();

  const filteredData = cryptoData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  const timeRangeDescription = getTimeRangeDescription(timeRange);

  return {
    cryptoData,
    filteredData,
    setTimeRange,
    timeRange,
    chartConfig,
    timeRangeDescription,
  };
};

export default useCurrenciesChart;
