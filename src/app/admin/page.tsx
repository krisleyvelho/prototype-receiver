'use client';


import { CondominioList } from './_condominios/CondominioList';
import { CreateCondominio } from './_condominios/CreateCondominio';


export default function AdminInitialPage() {

  

  return (
    <div className="flex flex-col gap-4">
      <CreateCondominio />
      <CondominioList />
    </div>
  );
}
