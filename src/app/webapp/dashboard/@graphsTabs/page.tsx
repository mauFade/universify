import GraphsView from "@/features/dashboard/graphs";
import GraphsWrapper from "@/features/dashboard/wrapper";
import { api, HydrateClient } from "@/trpc/server";
import { subYears } from "date-fns";

const earliestDate = subYears(new Date(), 4);
const latestDate = new Date();

const GraphTabs = () => {
  void api.cryptoPrices.selectCryptoPrices.prefetch({
    symbol: "btc",
    earliestDate,
    latestDate,
  });

  return (
    <HydrateClient>
      <GraphsWrapper queryKey="cryptoPrices">
        <GraphsView />
      </GraphsWrapper>
    </HydrateClient>
  );
};

export default GraphTabs;
