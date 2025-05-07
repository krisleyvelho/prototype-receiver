import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  ApartamentoSchemaType,
  useCreateApartamento,
} from '../useCreateApartamento';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRef } from 'react';
import { DialogClose } from '@radix-ui/react-dialog';

export function CreateApartamentoDialog({
  condominioId,
}: {
  condominioId: string;
}) {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { createApartamento, form } = useCreateApartamento({ condominioId });

  function submitForm(data: ApartamentoSchemaType) {
    const body = {
      ...data,
      condominioId,
    };
    createApartamento(body).then((response) => {
      form.reset();
    });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Criar novo Apartamento</Button>
      </DialogTrigger>
      <DialogContent className="w-fit ">
        <DialogHeader>
          <DialogTitle>Criar novo Apartamento</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)}>
            <div className="flex gap-4 items-center justify-center flex-col p-4">
              <FormField
                control={form.control}
                name="numero"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Número do Apartamento</FormLabel>
                    <FormControl>
                      <Input placeholder="Nº apartamento" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="andar"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Andar</FormLabel>
                    <FormControl>
                      <Input placeholder="Andar" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bloco"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Bloco</FormLabel>
                    <FormControl>
                      <Input placeholder="Bloco" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose ref={closeBtn} className="hidden">
                Close
              </DialogClose>
              <Button variant={'outline'}>Cancelar</Button>
              <Button variant={'default'}>Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
