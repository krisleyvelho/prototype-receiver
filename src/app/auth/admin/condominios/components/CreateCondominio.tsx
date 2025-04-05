'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@radix-ui/react-dialog';
import { useRef } from 'react';
import { useCondominioRouter } from '../hooks/useCondominioRouter';
import {
  CreateCondominioData,
  useCreateCondominio,
} from '../hooks/useCreateCondominio';

export function CreateCondominio() {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { createCondominioForm } = useCreateCondominio();
  const { createCondominio, invalidateCondominio } = useCondominioRouter();

  const submitForm = (data: CreateCondominioData) => {
    createCondominio(data).then((response) => {
      invalidateCondominio();
      createCondominioForm.reset();

      closeBtn.current?.click();
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="p-4 bg-blue-400 rounded-md">
        Criar Condominio
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogClose ref={closeBtn} className='hidden'>Close</DialogClose>
        </DialogHeader>
        <Form {...createCondominioForm}>
          <form
            onSubmit={createCondominioForm.handleSubmit(submitForm)}
            className="p-4 gap-4 flex flex-col w-full"
          >
            <FormField
              control={createCondominioForm.control}
              name="nome"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do condominio" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={createCondominioForm.control}
              name="endereco"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Endereço" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit">Criar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
