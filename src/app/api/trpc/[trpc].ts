import { createNextApiHandler } from "@trpc/server/adapters/next";
import { authRouter } from "../../../server/routers/auth.router";
import { clienteRouter } from "../../../server/routers/cliente.router";
import { createTRPCRouter } from "@/server/trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  cliente: clienteRouter,
});

export default createNextApiHandler({ router: appRouter });

export type AppRouter = typeof appRouter;
