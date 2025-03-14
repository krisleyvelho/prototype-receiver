'use client';

import { Button } from '@/components/ui/button';
import { CardContent, CardTitle } from '@/components/ui/card';
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
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { loginForm } = GetForm();
  const { handleSubmit } = loginForm;
  const { mutateAsync: login } = api.auth.login.useMutation();
  const router = useRouter();



  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;

    try {
      login({ email, senha: password }).then((data) => {
        console.log('🚀 ~ login ~ data:', data);
        localStorage.setItem('token', data.token);
        router.push('/admin');
      });
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error);
    }
  });
  return (
    <>
      <CardTitle>Login</CardTitle>
      <CardContent className="w-full flex flex-col items-center justify-center">
        <Form {...loginForm}>
          <form onSubmit={onSubmit} className="p-4 gap-4 flex flex-col w-full">
            <FormField
              control={loginForm.control}
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
              control={loginForm.control}
              name="password"
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
        
        <div> Ou <Link href={'./register'}>registre-se</Link></div>
      </CardContent>
    </>
  );
}
