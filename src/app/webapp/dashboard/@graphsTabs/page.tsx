import GraphsView from "@/components/features/dashboard/graphs";
import GraphsWrapper from "@/components/features/dashboard/graphs/_components/wrapper";
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
