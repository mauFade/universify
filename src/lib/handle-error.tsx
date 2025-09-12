import type { QueryClient } from "@tanstack/react-query";
import { TRPCClientError } from "@trpc/client";
import { toast } from "sonner";

export function handleClientError(error: unknown, queryClient: QueryClient) {
  if (error instanceof TRPCClientError) {
    toast.error(error.message, {
      action: {
        label: "retry",
        onClick: () => {
          queryClient.invalidateQueries();
        },
      },
    });
  }
}
