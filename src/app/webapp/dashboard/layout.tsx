import ChartAreaInteractive from "@/features/dashboard/currencies-chart";
import ChartPieLegend from "@/features/dashboard/pie-chart";
import PortfolioHeader from "@/features/dashboard/portfolio-header";
import PortfolioOverview from "@/features/dashboard/portfolio-overview";
import MarketOverview from "@/features/dashboard/market-overview";
import AIInsights from "@/features/dashboard/ai-insights";
import RecentTransactions from "@/features/dashboard/recent-transactions";
import {
  mockPortfolioData,
  mockAssets,
  mockMarketData,
  mockTransactions,
  mockAIInsights,
} from "@/features/dashboard/mock-data";

const DashboardLayout = () => {
  return (
    <div className="space-y-4">
      {/* Header with portfolio summary */}
      <PortfolioHeader
        totalValue={mockPortfolioData.totalValue}
        totalChange={mockPortfolioData.totalChange}
        totalChangePercent={mockPortfolioData.totalChangePercent}
        walletCount={mockPortfolioData.walletCount}
      />

      {/* Main charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <ChartAreaInteractive />
          <AIInsights insights={mockAIInsights} />
          <PortfolioOverview assets={mockAssets} />
        </div>

        <div className="lg:col-span-1 space-y-4">
          <ChartPieLegend />
          <RecentTransactions transactions={mockTransactions} />
          <MarketOverview assets={mockMarketData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
