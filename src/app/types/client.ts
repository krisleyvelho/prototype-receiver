import { apartamentoRouter } from "@/server/routers/apartamento.router";
import { condominioRouter } from "@/server/routers/condominio.router";
import { inferRouterOutputs } from "@trpc/server";

export type CondominioType = inferRouterOutputs<typeof condominioRouter>['listar'][number];
export type ApartamentoType = inferRouterOutputs<typeof apartamentoRouter>['listar'][number];  
  