"use client";

import {
  useQuery,
  useSuspenseQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { apiClient } from "./api-client";

export const useApiUtils = () => {
  const queryClient = useQueryClient();

  return {
    user: {
      getProfile: {
        refetch: async () => {
          await queryClient.invalidateQueries({ queryKey: ["user", "profile"] });
        },
      },
    },
    cryptoPrices: {
      selectCryptoPrices: {
        refetch: async (params?: {
          symbol: "btc" | "eth" | "sol" | "bnb" | "xrp";
          earliestDate?: Date;
          latestDate?: Date;
        }) => {
          await queryClient.invalidateQueries({
            queryKey: ["cryptoPrices", "select", params],
          });
        },
      },
      selectGeneralCryptoPrices: {
        refetch: async () => {
          await queryClient.invalidateQueries({
            queryKey: ["cryptoPrices", "general"],
          });
        },
      },
    },
  };
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["user", "profile"],
    queryFn: () => apiClient.user.getProfile(),
  });
};

export const useCryptoPrices = (params: {
  symbol: "btc" | "eth" | "sol" | "bnb" | "xrp";
  earliestDate?: Date;
  latestDate?: Date;
}) => {
  return useQuery({
    queryKey: ["cryptoPrices", "select", params],
    queryFn: () => apiClient.cryptoPrices.selectCryptoPrices(params),
  });
};

export const useGeneralCryptoPrices = () => {
  return useSuspenseQuery({
    queryKey: ["cryptoPrices", "general"],
    queryFn: () => apiClient.cryptoPrices.selectGeneralCryptoPrices(),
  });
};

