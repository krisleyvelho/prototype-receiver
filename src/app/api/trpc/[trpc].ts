import { createNextApiHandler } from "@trpc/server/adapters/next";
import { authRouter } from "../../../server/routers/auth.router";
import { createTRPCRouter } from "@/server/trpc";
import { condominioRouter } from "@/server/routers/condominio.router";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  condominio: condominioRouter
});

export default createNextApiHandler({ router: appRouter });

export type AppRouter = typeof appRouter;
