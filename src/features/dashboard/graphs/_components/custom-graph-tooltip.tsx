import { formatCurrency } from "@/lib/utils";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      fill?: string;
    };
    color?: string;
  }>;
  label?: string;
}

const CustomGraphTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const data = payload[0];
  const value = data.value;
  const color = data.payload.fill || data.color || "hsl(173, 48%, 42%)";

  // Format value as USD currency
  const formattedValue =
    typeof value === "number" ? formatCurrency(value) : value;

  return (
    <div className="border-border/50 bg-card/95 backdrop-blur-sm grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl">
      <div className="font-medium text-foreground">{label}</div>
      <div className="flex items-center gap-2">
        <div
          className="size-2.5 rounded-sm"
          style={{ backgroundColor: color }}
        />
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">Price</span>
          <span className="font-mono font-medium tabular-nums text-foreground">
            {formattedValue}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomGraphTooltip;
