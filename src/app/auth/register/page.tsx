'use client';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { api } from '@/providers';
import { GetForm } from '../_components/getForm';
import Link from 'next/link';

export default function RegisterPage() {
  const { registerForm } = GetForm();
  const { handleSubmit } = registerForm;
  const { mutateAsync: register } = api.auth.register.useMutation();

  const onSubmit = handleSubmit((data) => {
    const { email, password1 } = data;

    try {
      register({ email, password1 });
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error);
    }
  });
  return (
    <>
      <CardTitle>Registro</CardTitle>
      <CardDescription className="pb-0 mt-0">
        Registro de usuários para acesso ao painel administrativo
      </CardDescription>
      <CardContent className="w-full flex flex-col items-center justify-center">

        <Form {...registerForm}>
          <form onSubmit={onSubmit} className="p-4 gap-4 flex flex-col w-full">
            <FormField
              control={registerForm.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="password1"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="password2"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Button type="submit">Registrar</Button>
          </form>
        </Form>
        <Link href={'./login'}>Já possui uma conta?</Link>

      </CardContent>
    </>
  );
}
