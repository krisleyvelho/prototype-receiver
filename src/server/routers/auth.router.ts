import { prisma } from '../db';
import { z } from 'zod';
import { gerarToken, hashSenha, verificarSenha } from '../auth';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ email: z.string().email(), senha: z.string() }))
    .mutation(async ({ input }) => {
      const admin = await prisma.admin.findUnique({
        where: { email: input.email },
      });
      if (!admin || !(await verificarSenha(input.senha, admin.senha))) {
        throw new Error('Credenciais inválidas');
      }
      return { token: gerarToken(admin.id) };
    }),
  register: publicProcedure
    .input(z.object({ email: z.string().email(), password1: z.string() }))
    .mutation(async ({ input }) => {
      // Verificar se o email já está cadastrado
      const adminExiste = await prisma.admin.findUnique({
        where: { email: input.email },
      });
      console.log("🚀 ~ .mutation ~ adminExiste:", adminExiste)
      if (adminExiste) {
        throw new Error('Este email já está registrado.');
      }

      // Criar novo Admin com senha criptografada
      const senhaCriptografada = await hashSenha(input.password1);
      console.log("🚀 ~ .mutation ~ senhaCriptografada:", senhaCriptografada)
      const novoAdmin = await prisma.admin.create({
        data: {
          email: input.email,
          senha: senhaCriptografada,
        },
      });

      // Gerar token JWT
      return { token: gerarToken(novoAdmin.id) };
    }),
});
