const API_BASE_URL = "http://localhost:8081";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: unknown;
};

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = "GET", headers = {}, body } = options;

  const url = `${API_BASE_URL}${endpoint}`;

  const requestHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...headers,
  };

  const config: RequestInit = {
    method,
    headers: requestHeaders,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      let errorData: unknown;
      try {
        errorData = await response.json();
      } catch {
        errorData = await response.text();
      }

      throw new ApiError(
        (errorData as { message?: string })?.message ||
          `API request failed: ${response.statusText}`,
        response.status,
        errorData,
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error instanceof Error ? error.message : "Unknown error occurred",
      0,
      error,
    );
  }
}

export const apiClient = {
  user: {
    getProfile: async () => {
      return apiRequest<{
        id: string;
        firstName: string | null;
        lastName: string | null;
        email: string;
        avatar: string | null;
        isAdmin: boolean;
        createdAt: Date;
        updatedAt: Date;
      }>("/api/user/profile");
    },
  },
  cryptoPrices: {
    selectCryptoPrices: async (params: {
      symbol: "btc" | "eth" | "sol" | "bnb" | "xrp";
      earliestDate?: Date;
      latestDate?: Date;
    }) => {
      const queryParams = new URLSearchParams();
      queryParams.set("symbol", params.symbol);
      if (params.earliestDate) {
        queryParams.set("earliestDate", params.earliestDate.toISOString());
      }
      if (params.latestDate) {
        queryParams.set("latestDate", params.latestDate.toISOString());
      }

      return apiRequest<
        Array<{
          id: string;
          symbol: string;
          priceUsd: string;
          timestamp: Date;
        }>
      >(`/api/crypto-prices?${queryParams.toString()}`);
    },
    selectGeneralCryptoPrices: async () => {
      return apiRequest<
        Array<{
          date: string;
          btc: number;
          eth: number;
          sol: number;
          xrp: number;
          bnb: number;
        }>
      >("/api/crypto-prices/general");
    },
  },
};

export { ApiError };
