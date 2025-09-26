"use client";

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Wallet,
  Plus,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RegisterBuyDialog from "./_components/register-buy-dialog";
import { cn, formatCurrency } from "@/lib/utils";

type PortfolioHeaderProps = {
  totalValue: number;
  totalChange: number;
  totalChangePercent: number;
  walletCount: number;
};

const PortfolioHeader = ({
  totalValue,
  totalChange,
  totalChangePercent,
  walletCount,
}: PortfolioHeaderProps) => {
  const isPositive = totalChange >= 0;
  const ChangeIcon = isPositive ? TrendingUp : TrendingDown;
  const aiIsActive = false;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your cryptocurrency portfolio
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Wallet className="size-4" />
            {walletCount} Wallet{walletCount !== 1 ? "s" : ""}
          </Badge>

          <RegisterBuyDialog />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <DollarSign className="size-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              $
              {totalValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">24h Change</CardTitle>
            <ChangeIcon
              className={cn(
                "size-5",
                isPositive ? "text-emerald-500" : "text-red-500",
              )}
            />
          </CardHeader>
          <CardContent>
            <p
              className={cn(
                "text-2xl font-bold",
                isPositive ? "text-emerald-500" : "text-red-500",
              )}
            >
              {isPositive ? "+" : ""}$
              {totalChange.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p
              className={cn(
                "text-xs",
                isPositive ? "text-emerald-500" : "text-red-500",
              )}
            >
              {isPositive ? "+" : ""}
              {totalChangePercent.toFixed(2)}% in the last 24h
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <Plus className="size-5 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-emerald-500">
              {formatCurrency(25000)}
            </p>
            <p className="text-xs text-muted-foreground">
              Monitoring market 24/7
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Currencies
            </CardTitle>
            <Info className="size-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-emerald-500">5</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              AI Agent Status
            </CardTitle>
            <div
              className={cn(
                "size-2 rounded-full",
                aiIsActive ? "bg-emerald-500 animate-pulse" : "bg-destructive",
              )}
            />
          </CardHeader>
          <CardContent>
            <p
              className={cn(
                "text-2xl font-bold",
                aiIsActive ? "text-emerald-500" : "text-destructive",
              )}
            >
              {aiIsActive ? "Active" : "Inactive"}
            </p>
            <p className="text-xs text-muted-foreground">
              Your LLM assistant is currently{" "}
              {aiIsActive ? "active" : "inactive"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioHeader;
