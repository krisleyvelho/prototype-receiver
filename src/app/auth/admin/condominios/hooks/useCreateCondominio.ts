import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCondominioRouter } from "./useCondominioRouter";

export type CreateCondominioData = z.infer<typeof createCondominioSchema>;
const createCondominioSchema = z.object({
    nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
    endereco: z.string().min(3, 'O endereço deve ter pelo menos 3 caracteres'),
  });

  export function useCreateCondominio() {
    const { createCondominio} = useCondominioRouter()

  const createCondominioForm = useForm<CreateCondominioData>({
    resolver: zodResolver(createCondominioSchema),
    defaultValues: {
      nome: '',
      endereco: '',
    },
  });


  
  return {createCondominio, createCondominioForm};
}