import { z } from 'zod';
import { prisma } from '../db';
import { adminProcedure, createTRPCRouter, publicProcedure } from '../trpc';

export const condominioRouter = createTRPCRouter({
  listar: publicProcedure.query(async () => {
    const value = await prisma.condominio.findMany({
      select: { id: true, nome: true, endereco: true },
    });

    return value;
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const value = await prisma.condominio.findUnique({
        where: { id: input.id },
      });

      return value;
    }),
  create: publicProcedure
    .input(z.object({ nome: z.string(), endereco: z.string() }))
    .mutation(async ({ input }) => {
      const value = await prisma.condominio.create({
        data: input,
      });

      return value;
    }),
  update: publicProcedure
    .input(z.object({ id: z.string(), nome: z.string(), endereco: z.string() }))
    .mutation(async ({ input }) => {
      const value = await prisma.condominio.update({
        where: { id: input.id },
        data: input,
      });

      return value;
    }),
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const value = await prisma.condominio.delete({
        where: { id: input.id },
      });

      return value;
    }),
});
