'use client';

import { Button } from '@/components/ui/button';
import { api } from '@/providers';
import {QRCodeSVG} from 'qrcode.react';

export default function AdminInitialPage() {
  const { data } = api.cliente.listar.useQuery();
  return (
    <div className="text-white">
      pagina inicial do adm
      <div className="flex gap-4">
        Lista de clientes:
        {data?.map((cliente) => (
          <div key={cliente.id} className='flex flex-col gap-2 border-[1px] border-slate-400 p-4 w-fit'>
            <span>ID: {cliente.id}</span>
            <span>Nome: {cliente.nome}</span>
            <span>Endereco: {cliente.endereco}</span>
            <div className='bg-white p-4'>
            <Button onClick={() => console.log('key: ', `${cliente.id}${new Date().getTime()}`)}>log key</Button>
            <QRCodeSVG value={`${cliente.id}${new Date().getTime()}`} />,
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
