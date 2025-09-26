/** biome-ignore-all lint/suspicious/noExplicitAny: generic money input */
"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { UseFormReturn } from "react-hook-form";
import { useMoneyInput } from "./hook";

type MoneyInputProps = {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  subLabel: string;
  placeholder: string;
};

const MoneyInput = ({
  form,
  name,
  label,
  subLabel,
  placeholder,
}: MoneyInputProps) => {
  const { amount, setAmount, handleChange } = useMoneyInput({
    form,
    name,
  });

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="flex flex-col gap-1 items-start">
              {label}
              <span className="text-xs text-muted-foreground">{subLabel}</span>
            </FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                type="text"
                value={amount}
                onChange={(ev) => {
                  setAmount(ev.target.value);
                  handleChange(field.onChange, ev.target.value);
                }}
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default MoneyInput;
