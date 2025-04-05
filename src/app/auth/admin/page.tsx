'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AdminInitialPage() {
  const router = useRouter();

  function logOut() {
    localStorage.removeItem('token');
    router.push('/');
  }

  return (
    <div className="flex flex-col gap-4">
      <h2>Página inicial do painel administrativo</h2>
      <Button
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </Button>
    </div>
  );
}
