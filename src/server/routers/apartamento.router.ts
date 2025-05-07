import { z } from 'zod';
import { prisma } from '../db';
import { adminProcedure, createTRPCRouter, publicProcedure } from '../trpc';
import { apartamentoSchema } from '@/app/auth/admin/condominios/[condominioId]/useCreateApartamento';

export const apartamentoRouter = createTRPCRouter({
  listar: publicProcedure.query(async () => {
    const value = await prisma.apartamento.findMany();

    return value;
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const value = await prisma.apartamento.findUnique({
        where: { id: input.id },
      });

      return value;
    }),
  byCondominioId: publicProcedure
    .input(z.object({ condominioId: z.string() }))
    .query(async ({ input }) => {
      const value = await prisma.apartamento.findMany({
        where: { condominioId: input.condominioId },
      });

      return value;
    }),
  create: publicProcedure
    .input(apartamentoSchema)
    .mutation(async ({ input }) => {
      const value = await prisma.apartamento.create({
        data: input,
      });

      return value;
    }),
  update: publicProcedure
    .input(
      z.object({
        apartamentoId: z.string(),
        numero: z.string(),
        andar: z.number(),
        bloco: z.string(),
      })
    )
    // .input(z.object({ id: z.string(), nome: z.string(), endereco: z.string() }))
    .mutation(async ({ input }) => {
      const value = await prisma.apartamento.update({
        where: { id: input.apartamentoId },
        data: input,
      });

      return value;
    }),
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const value = await prisma.apartamento.delete({
        where: { id: input.id },
      });

      return value;
    }),
});
