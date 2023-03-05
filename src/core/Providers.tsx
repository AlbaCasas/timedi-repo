"use client";

import { QueryClientProvider as ReactQueryProvider } from "react-query";

import { client } from "@core/api/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider client={client}>{children}</ReactQueryProvider>;
};

export default Providers;
