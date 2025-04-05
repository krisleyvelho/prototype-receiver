import { Button } from '@/components/ui/button';
import Link from 'next/link';

const protectedRoutes = [
  { name: 'Login', href: '/auth/login' },
  { name: 'Register', href: '/auth/register' },
  { name: 'Admin', href: '/auth/admin' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      {protectedRoutes.map((route) => (
        <Button key={route.name} asChild variant={'link'}>
          <Link href={route.href}>{route.name}</Link>
        </Button>
      ))}
    </div>
  );
}
