import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

export const registerSchema = z
  .object({
    email: z.string().email('E-mail inválido'),
    password1: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    password2: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  })
  .refine((data) => data.password1 === data.password2, {
    message: 'As senhas devem ser iguais',
    path: ['password2'],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;

export function GetForm() {
  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password1: '',
      password2: '',
    },
  });

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  

  return { loginForm, registerForm };
}
