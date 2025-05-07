import { api } from '@/providers';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const apartamentoSchema = z.object({
  condominioId: z.string(),
  numero: z.string(),
  andar: z.string(),
  bloco: z.string().optional(),
  responsavel: z.string(),
});
export type ApartamentoSchemaType = z.infer<typeof apartamentoSchema>;

export function useCreateApartamento({
  condominioId,
}: {
  condominioId: string;
}) {
  const { invalidate: invalidateApartamento } = api.useUtils()?.apartamento;
  const { mutateAsync: createApartamento } = api.apartamento.create.useMutation(
    {
      onSuccess: () => {
        invalidateApartamento();
      },
      onMutate(variables) {
        console.log('🚀 ~ useCreateApartamento ~ variables:', variables);
      },
    }
  );

  const form = useForm<ApartamentoSchemaType>({ defaultValues: {} });

  return { createApartamento, form };
}
