import { condominioRouter } from "@/server/routers/condominio.router";
import { inferRouterOutputs } from "@trpc/server";

export type CondominioType = inferRouterOutputs<typeof condominioRouter>['listar'][number]  