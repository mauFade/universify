"use client";

import { api } from "@/trpc/react";

const Home = () => {
  const { data } = api.cryptoPrices.getPrices.useQuery();
  console.log(data);
  return <div>Home</div>;
};

export default Home;
