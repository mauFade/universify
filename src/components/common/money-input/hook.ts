/** biome-ignore-all lint/suspicious/noExplicitAny: generic money input */
import type { UseFormReturn } from "react-hook-form";

const MONEY_DIVISOR = 100;

import { formatCurrency } from "@/lib/utils";
import { useReducer } from "react";

type MoneyInputProps = {
  form: UseFormReturn<any>;
  name: string;
};

export const useMoneyInput = ({ form, name }: MoneyInputProps) => {
  const initialValue = () => {
    const value = form.getValues()[name];
    if (typeof value === "number" && value > 0) {
      return formatCurrency(value);
    }
    return "";
  };

  const [amount, setAmount] = useReducer((_: string, next: string) => {
    const digits = next.replace(/\D/g, "");
    return formatCurrency(Number(digits) / MONEY_DIVISOR);
  }, initialValue());

  function handleChange(
    realChangeFn: (v: number) => void,
    formattedValue: string,
  ) {
    const digits = formattedValue.replace(/\D/g, "");
    const realValue = Number(digits) / MONEY_DIVISOR;
    realChangeFn(realValue);
  }

  return {
    amount,
    setAmount,
    handleChange,
  };
};
