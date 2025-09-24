"use client";

import { AreaGraph } from "@/components/features/dashboard/graph";
import { api } from "@/trpc/react";
import { subDays } from "date-fns";

const WebappDashboard = () => {
  const { data: cryptoPrices = [] } =
    api.cryptoPrices.selectCryptoPrices.useQuery({
      symbol: "btc",
      startDate: subDays(new Date(), 7),
      endDate: new Date(),
    });
  console.log(cryptoPrices);
  return (
    <div className="grid grid-cols-2 gap-4">
      <AreaGraph />
      <AreaGraph />
    </div>
  );
};

export default WebappDashboard;
