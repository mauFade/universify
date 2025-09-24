export async function fetchBitcoinHistory(coin: string, days: number = 365) {
  const url = new URL(
    `https://api.coingecko.com/api/v3/coins/${coin}/market_chart`,
  );
  url.searchParams.set("vs_currency", "usd");
  url.searchParams.set("days", days.toString());

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.prices as [number, number][];
  // cada item é [timestamp_ms, price]
}
