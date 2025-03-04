import { createTRPCRouter, adminProcedure } from "../trpc";
import { prisma } from "../db";
import { z } from "zod";

export const clienteRouter = createTRPCRouter({
  listar: adminProcedure.query(async () => {
    return prisma.cliente.findMany({
      select: { id: true, nome: true, endereco: true },
    });
  }),
});
