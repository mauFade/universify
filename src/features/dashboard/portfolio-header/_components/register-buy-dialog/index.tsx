"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Receipt, DollarSign, TrendingUp, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn, formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import MoneyInput from "@/components/common/money-input";

const formSchema = z.object({
  cryptocurrency: z.string().min(1, "Please select a cryptocurrency"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine(
      (val) => !Number.isNaN(Number(val)) && Number(val) > 0,
      "Amount must be a positive number",
    ),
  pricePerUnit: z.number().min(0.01, "Price must be greater than 0"),
  totalValue: z
    .string()
    .min(1, "Total value is required")
    .refine(
      (val) => !Number.isNaN(Number(val)) && Number(val) > 0,
      "Total value must be a positive number",
    ),
  date: z.date().refine((date) => date instanceof Date, {
    message: "Date is required",
  }),
  exchange: z.string().min(1, "Please select an exchange"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const cryptocurrencies = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "XRP", name: "XRP" },
  { symbol: "BNB", name: "BNB" },
  { symbol: "ADA", name: "Cardano" },
  { symbol: "DOT", name: "Polkadot" },
  { symbol: "MATIC", name: "Polygon" },
];

const exchanges = [
  "Binance",
  "Coinbase",
  "Kraken",
  "KuCoin",
  "Bybit",
  "OKX",
  "Other",
];

const RegisterBuyDialog = () => {
  const [open, setOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cryptocurrency: "",
      amount: "",
      pricePerUnit: 0,
      totalValue: "",
      date: new Date(),
      exchange: "",
      notes: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Buy registration data:", data);
    setOpen(false);
    form.reset();
  };

  const handleAmountChange = (value: string) => {
    form.setValue("amount", value);
    const amount = Number(value);
    const pricePerUnit = form.getValues("pricePerUnit");
    if (
      !Number.isNaN(amount) &&
      !Number.isNaN(pricePerUnit) &&
      amount > 0 &&
      pricePerUnit > 0
    ) {
      form.setValue("totalValue", (amount * pricePerUnit).toFixed(2));
    } else {
      form.setValue("totalValue", "0.00");
    }
  };

  // Watch for pricePerUnit changes to recalculate total
  const pricePerUnit = form.watch("pricePerUnit");
  const amount = form.watch("amount");

  // Recalculate total when either amount or pricePerUnit changes
  React.useEffect(() => {
    const amountNum = Number(amount);
    const priceNum = Number(pricePerUnit);
    if (
      !Number.isNaN(amountNum) &&
      !Number.isNaN(priceNum) &&
      amountNum > 0 &&
      priceNum > 0
    ) {
      form.setValue("totalValue", (amountNum * priceNum).toFixed(2));
    } else {
      form.setValue("totalValue", "0.00");
    }
  }, [amount, pricePerUnit, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-2">
          <TrendingUp className="size-4" />
          Register Buy
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <DollarSign className="size-6 text-emerald-500" />
            Register Cryptocurrency Buy
          </DialogTitle>
          <DialogDescription>
            Record a new cryptocurrency purchase in your portfolio.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cryptocurrency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cryptocurrency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select crypto" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cryptocurrencies.map((crypto) => (
                          <SelectItem key={crypto.symbol} value={crypto.symbol}>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {crypto.symbol}
                              </span>
                              <span className="text-muted-foreground">
                                {crypto.name}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="exchange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exchange</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select exchange" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {exchanges.map((exchange) => (
                          <SelectItem key={exchange} value={exchange}>
                            {exchange}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex flex-col gap-1 items-start">
                      Amount
                      <span className="text-xs text-muted-foreground">
                        How many of those units you bought
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        placeholder="0"
                        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        {...field}
                        onChange={(e) => {
                          // Only allow numbers and decimal point
                          const value = e.target.value.replace(/[^0-9.]/g, "");
                          field.onChange(value);
                          handleAmountChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pricePerUnit"
                render={() => (
                  <MoneyInput
                    form={form}
                    name="pricePerUnit"
                    label="Price per unit"
                    subLabel="The price per unit you bought"
                    placeholder="0.00"
                  />
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="totalValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col gap-1 items-start">
                    Total Value ($)
                    <span className="text-xs text-muted-foreground">
                      Automatically calculated based on amount and price per
                      unit
                    </span>
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-center p-1 border rounded-md bg-muted/50">
                      <Badge
                        variant="secondary"
                        className="text-lg font-semibold px-4 py-2"
                      >
                        {field.value && !Number.isNaN(Number(field.value))
                          ? formatCurrency(Number(field.value))
                          : "$0.00"}
                      </Badge>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Purchase Date</FormLabel>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto size-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setCalendarOpen(false);
                        }}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Add any additional notes..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="gap-2">
                <Receipt className="size-4" />
                Register Buy
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterBuyDialog;
