import ChartAreaInteractive from "@/features/dashboard/currencies-chart";
import GraphsWrapper from "@/features/dashboard/wrapper";

const GraphTabs = () => {
  return (
    <GraphsWrapper queryKey="cryptoPrices">
      <ChartAreaInteractive />
    </GraphsWrapper>
  );
};

export default GraphTabs;
