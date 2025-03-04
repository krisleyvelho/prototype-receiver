import { prisma } from "../db";
import { z } from "zod";
import { gerarToken, verificarSenha } from "../auth";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ email: z.string().email(), senha: z.string() }))
    .mutation(async ({ input }) => {
      const admin = await prisma.admin.findUnique({ where: { email: input.email } });
      if (!admin || !(await verificarSenha(input.senha, admin.senha))) {
        throw new Error("Credenciais inválidas");
      }
      return { token: gerarToken(admin.id) };
    }),
});
