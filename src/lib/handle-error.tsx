import type { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ApiError } from "./api-client";

export function handleClientError(error: unknown, queryClient: QueryClient) {
  if (error instanceof ApiError) {
    toast.error(error.message, {
      action: {
        label: "retry",
        onClick: () => {
          queryClient.invalidateQueries();
        },
      },
    });
  } else if (error instanceof Error) {
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
