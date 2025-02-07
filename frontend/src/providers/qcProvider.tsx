"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable automatic refetching in the background
      refetchOnWindowFocus: false,
      // Retry failed queries 1 time
      retry: 3,
      // Cache data for 5 minutes
      staleTime: 1000 * 60 * 5,
    },
  },
});

const QcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QcProvider;
