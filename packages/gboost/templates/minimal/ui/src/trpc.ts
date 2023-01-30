// @ts-nocheck
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "@{{GB_APP_SCOPE}}/core/app-router"; // MUST BE import type

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_API_URL,
      fetch: (input, init) => {
        const newInit: RequestInit = {
          ...init,
          mode: "cors",
        };
        return fetch(input, newInit);
      },
    }),
  ],
});
