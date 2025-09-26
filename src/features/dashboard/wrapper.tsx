"use client";

import { Suspense, type ReactNode } from "react";
import { api } from "@/trpc/react";
import GraphsErrorBoundary from "./error-boundary";
import CommonSkeleton from "@/components/layout/skeleton";

type GraphsWrapperProps = {
  children: ReactNode;
  queryKey: string;
};

const GraphsWrapper = ({ children, queryKey }: GraphsWrapperProps) => {
  const utils = api.useUtils();

  const handleReset = async () => {
    try {
      switch (queryKey) {
        case "cryptoPrices":
          await utils.cryptoPrices.selectGeneralCryptoPrices.refetch();
          break;

        default:
          throw new Error(`Unknown query key: ${queryKey}`);
      }
    } catch (_error) {
      // Fallback to page reload if invalidation fails
      window.location.reload();
    }
  };

  return (
    <GraphsErrorBoundary onReset={handleReset}>
      <Suspense fallback={<CommonSkeleton />}>{children}</Suspense>
    </GraphsErrorBoundary>
  );
};

export default GraphsWrapper;
