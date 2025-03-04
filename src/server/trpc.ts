import { initTRPC, TRPCError } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const createTRPCRouter = t.router;



export const apiUrl = process.env.API_URL

export const publicProcedure = t.procedure;
export const adminProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.user || !ctx.user.admin) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next();
});