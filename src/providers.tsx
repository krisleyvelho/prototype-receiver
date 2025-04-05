'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useState } from 'react';
import { AppRouter } from './app/api/trpc/[trpc]';

const API_PORT = process.env.PORT || '3001';
export const API_HOST = `http://192.168.31.168:${API_PORT}`;
export const API_URL = `${API_HOST}/api/trpc`; //casa
export const api = createTRPCReact<AppRouter>();

// const API_URL = `http://localhost:${API_PORT}/api/trpc`;
// const API_URL = `http://192.168.16.162:3001/api/trpc`; //casa

export function TrpcProvider({ children }: {children: React.ReactNode}) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: API_URL,
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