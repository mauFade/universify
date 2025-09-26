// Mock data for dashboard components

export const mockPortfolioData = {
  totalValue: 100000,
  totalChange: 2500,
  totalChangePercent: 2.56,
  walletCount: 3,
};

export const mockAssets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0.5,
    value: 45000,
    change24h: 1200,
    changePercent24h: 2.74,
    allocation: 45.0,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: 2.5,
    value: 28000,
    change24h: 800,
    changePercent24h: 2.94,
    allocation: 28.0,
  },
  {
    symbol: "SOL",
    name: "Solana",
    amount: 50,
    value: 15000,
    change24h: -200,
    changePercent24h: -1.32,
    allocation: 15.0,
  },
  {
    symbol: "XRP",
    name: "XRP",
    amount: 1000,
    value: 8000,
    change24h: 300,
    changePercent24h: 3.9,
    allocation: 8.0,
  },
  {
    symbol: "BNB",
    name: "BNB",
    amount: 20,
    value: 4000,
    change24h: 100,
    changePercent24h: 2.56,
    allocation: 4.0,
  },
];

export const mockMarketData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 90000,
    change24h: 2400,
    changePercent24h: 2.74,
    marketCap: 1770000000000,
    volume24h: 25000000000,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 11200,
    change24h: 320,
    changePercent24h: 2.94,
    marketCap: 1350000000000,
    volume24h: 15000000000,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 300,
    change24h: -4,
    changePercent24h: -1.32,
    marketCap: 140000000000,
    volume24h: 3000000000,
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: 8,
    change24h: 0.3,
    changePercent24h: 3.9,
    marketCap: 48000000000,
    volume24h: 2000000000,
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: 200,
    change24h: 5,
    changePercent24h: 2.56,
    marketCap: 30000000000,
    volume24h: 1000000000,
  },
];

export const mockTransactions = [
  {
    id: "1",
    type: "buy" as const,
    asset: "BTC",
    amount: 0.1,
    value: 9000,
    timestamp: "2024-01-15T10:30:00Z",
    status: "completed" as const,
    hash: "0x123...abc",
  },
  {
    id: "2",
    type: "sell" as const,
    asset: "ETH",
    amount: 0.5,
    value: 5600,
    timestamp: "2024-01-14T15:45:00Z",
    status: "completed" as const,
    hash: "0x456...def",
  },
  {
    id: "3",
    type: "buy" as const,
    asset: "SOL",
    amount: 10,
    value: 3000,
    timestamp: "2024-01-13T09:20:00Z",
    status: "pending" as const,
  },
  {
    id: "4",
    type: "transfer" as const,
    asset: "XRP",
    amount: 100,
    value: 800,
    timestamp: "2024-01-12T14:10:00Z",
    status: "completed" as const,
    hash: "0x789...ghi",
  },
];

export const mockAIInsights = [
  {
    id: "1",
    type: "opportunity" as const,
    title: "DCA opportunity detected",
    description:
      "Bitcoin price is 15% below the 30-day average. Consider making a gradual purchase.",
    confidence: 85,
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    type: "warning" as const,
    title: "High volatility in Solana",
    description:
      "SOL is showing high volatility. Consider reducing position if above your risk limit.",
    confidence: 78,
    timestamp: "4 hours ago",
  },
  {
    id: "3",
    type: "tip" as const,
    title: "Diversification recommended",
    description:
      "Your portfolio is 73% concentrated in BTC and ETH. Consider diversifying with lower market cap altcoins.",
    confidence: 92,
    timestamp: "6 hours ago",
  },
];
