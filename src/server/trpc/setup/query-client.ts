import { handleClientError } from "@/lib/handle-error";
import {
  defaultShouldDehydrateQuery,
  QueryCache,
  QueryClient,
} from "@tanstack/react-query";
import SuperJSON from "superjson";

export const createQueryClient = () => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        handleClientError(error, queryClient);
      },
    }),
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000, //30s
      },
      dehydrate: {
        serializeData: SuperJSON.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });
  return queryClient;
};
