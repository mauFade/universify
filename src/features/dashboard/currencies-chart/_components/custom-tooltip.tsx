import { formatCurrency } from "@/lib/utils";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const getCryptoName = (dataKey: string) => {
    const names: { [key: string]: string } = {
      btc: "Bitcoin",
      eth: "Ethereum",
      sol: "Solana",
      xrp: "XRP",
      bnb: "BNB",
    };
    return names[dataKey] || dataKey.toUpperCase();
  };

  return (
    <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-xl min-w-[12rem]">
      <div className="font-medium text-foreground mb-2">
        {label &&
          new Date(label).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
      </div>
      <div className="space-y-1">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center gap-2">
            <div
              className="w-1.5 h-3 rounded-sm"
              style={{ backgroundColor: entry.color }}
            />
            <div className="flex flex-grow justify-between items-center">
              <span className="text-sm text-foreground">
                {getCryptoName(entry.dataKey)}
              </span>
              <span className="text-sm text-foreground font-mono">
                {formatCurrency(entry.value)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTooltip;
