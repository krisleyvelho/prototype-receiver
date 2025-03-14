import { z } from "zod";
import { prisma } from "../db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const clienteRouter = createTRPCRouter({
  listar: publicProcedure.query(async () => {
    const value = await prisma.cliente.findMany({
      select: { id: true, nome: true, endereco: true },
    });

    return value
  }),
  byId: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    const value = await prisma.cliente.findUnique({where: {id: input.id}});

    return value
  })
});
