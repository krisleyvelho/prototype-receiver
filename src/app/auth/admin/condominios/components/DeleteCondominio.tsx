import { Button } from '@/components/ui/button';
import { CondominioType } from '@/app/types/client';
import { useCondominioRouter } from '../hooks/useCondominioRouter';

interface DeleteCondominioProps {
  condominioId: CondominioType['id'];
}

export function DeleteCondominio({ condominioId }: DeleteCondominioProps) {
  const { deleteCondominio, invalidateCondominio } = useCondominioRouter();
  return (
    <div>
      <Button
        variant={'destructive'}
        onClick={() =>
          deleteCondominio({ id: condominioId }).then(() =>
            invalidateCondominio()
          )
        }
      >
        Excluir condominio
      </Button>
    </div>
  );
}
