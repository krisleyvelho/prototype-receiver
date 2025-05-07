import { CondominioType } from '@/app/types/client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { useCondominioRouter } from '../hooks/useCondominioRouter';

interface DeleteCondominioProps {
  condominio: CondominioType;
}

export function DeleteCondominio({ condominio }: DeleteCondominioProps) {
  const deleteRef = useRef<HTMLButtonElement | null>(null);
  const { deleteAction, invalidateCondominio } = useCondominioRouter();
  const { mutateAsync: deleteCondominio, isPending, isSuccess } = deleteAction;

  function closeDeleteDialog() {
    if (deleteRef.current) {
      deleteRef.current.click();
    }
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={'destructive'}>Excluir condominio</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{`Excluir condomínio ${condominio.nome}?`}</AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant={'outline'}>Cancelar</Button>
            </AlertDialogCancel>
            <Button
              variant={'destructive'}
              onClick={() =>
                deleteCondominio({ id: condominio.id }).then(() =>
                  invalidateCondominio().then(() => closeDeleteDialog())
                )
              }
              disabled={isPending || isSuccess}
            >
              Deletar
            </Button>
            <AlertDialogAction ref={deleteRef} className="hidden" />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
