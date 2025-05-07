import { api } from "@/providers";

export function useApartamentoRouter() {
  const { mutateAsync: createApartamento } = api.apartamento.create.useMutation();
  // const { mutateAsync: deleteApartamento } = api.apartamento.delete.useMutation();
  const deleteAction = api.apartamento.delete.useMutation();
  const listApartamentoQuery = api.apartamento.listar.useQuery();
  const {invalidate: invalidateApartamento} = api.useUtils()?.apartamento

  return { createApartamento, deleteAction, listApartamentoQuery, invalidateApartamento };

  
}