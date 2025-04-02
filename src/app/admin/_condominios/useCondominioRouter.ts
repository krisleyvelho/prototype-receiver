import { api } from "@/providers";

export function useCondominioRouter() {
  const { mutateAsync: createCondominio } = api.condominio.create.useMutation();
  const { mutateAsync: deleteCondominio } = api.condominio.delete.useMutation();
  const { data: condominioList } = api.condominio.listar.useQuery();
  const {invalidate: invalidateCondominio} = api.useUtils()?.condominio

  return { createCondominio, deleteCondominio, condominioList, invalidateCondominio };

  
}