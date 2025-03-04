'use client';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



import Trpc, { AppRouter } from './app/api/trpc/[trpc]';
import { useState } from 'react';
// import { createTRPCReact } from "@trpc/react-query";
// import { AppRouter } from "./pages/api/trpc/[trpc]";

export const api = createTRPCReact<AppRouter>();

export function TrpcProvider({ children }: {children: React.ReactNode}) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
          // You can pass any HTTP headers you wish here
          // async headers() {
          //   return {
          //     authorization: getAuthCookie(),
          //   };
          // },
        }),
      ],
    }),
  );
  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </api.Provider>
  );
}