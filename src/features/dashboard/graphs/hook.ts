"use client";

import { api } from "@/trpc/react";

import { subDays } from "date-fns";

const earliestDate = subDays(new Date(), 7);
const latestDate = new Date();

const useGraph = () => {
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

  return {
    chartData,
    priceChange,
    dateRange,
  };
};

export default useGraph;
