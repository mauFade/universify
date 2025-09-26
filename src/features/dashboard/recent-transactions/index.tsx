"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, ExternalLink } from "lucide-react";

// Função para formatar data de forma consistente entre servidor e cliente
const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

interface Transaction {
  id: string;
  type: "buy" | "sell" | "transfer";
  asset: string;
  amount: number;
  value: number;
  timestamp: string;
  status: "completed" | "pending" | "failed";
  hash?: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "buy":
        return <ArrowDownLeft className="size-4 text-emerald-500" />;
      case "sell":
        return <ArrowUpRight className="size-4 text-red-500" />;
      case "transfer":
        return <ExternalLink className="size-4 text-blue-500" />;
      default:
        return <ArrowUpRight className="size-4" />;
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default" as const;
      case "pending":
        return "secondary" as const;
      case "failed":
        return "destructive" as const;
      default:
        return "outline" as const;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "buy":
        return "default" as const;
      case "sell":
        return "destructive" as const;
      case "transfer":
        return "secondary" as const;
      default:
        return "outline" as const;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Transactions</CardTitle>
          <Button variant="outline" size="sm">
            View all
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.length === 0 ? (
            <div className="text-center py-8">
              <ArrowUpRight className="size-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No transactions</h3>
              <p className="text-muted-foreground">
                Your transactions will appear here when you start trading.
              </p>
            </div>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  {getTransactionIcon(transaction.type)}
                  <div className="flex flex-col">
                    <span className="font-medium capitalize">
                      {transaction.type}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {transaction.amount.toFixed(4)} {transaction.asset}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium">
                      $
                      {transaction.value.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(transaction.timestamp)}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <Badge variant={getTypeBadgeVariant(transaction.type)}>
                      {transaction.type}
                    </Badge>
                    <Badge variant={getStatusBadgeVariant(transaction.status)}>
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
