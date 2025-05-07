'use client';

import { CondominioType } from '@/app/types/client';
import mountHashReceiver from '@/app/utils/mountHashReceiver';
import { Input } from '@/components/ui/input';
import { API_HOST } from '@/providers';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { useCondominioRouter } from '../hooks/useCondominioRouter';
import { CondominioCardSkeleton } from './CondominioCardSkeleton';
import { DeleteCondominio } from './DeleteCondominio';
import { Button } from '@/components/ui/button';

export function CondominioList() {
  const { listQuery } = useCondominioRouter();
  const {
    data: condominioList,
    error,
    isSuccess,
    isError,
    isLoading,
  } = listQuery || {};
    console.log("🚀 ~ CondominioList ~ isLoading:", isLoading)
    console.log("🚀 ~ CondominioList ~ condominioList:", condominioList)
  const [filteredCondominioList, setFilteredCondominioList] = useState<
    CondominioType[] | undefined
  >(undefined);

  if (isLoading) {
    return <CondominioCardSkeleton />;
  }

  if (isError) {
    return <span>Erro ao listar condominios: {error.message}</span>;
  }
  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Pesquisar..."
        onChange={(e) =>
          setFilteredCondominioList(
            condominioList.filter((condominio) =>
              condominio.nome.includes(e.target.value)
            )
          )
        }
      />
      {isSuccess && <span>Lista de condominios:</span>}
      <div className="flex flex-col gap-4">
        {(filteredCondominioList ?? condominioList)?.map((condominio) => (
          <div
            key={condominio.id}
            className="flex justify-between gap-2 rounded-md border-[1px] border-slate-400 p-4 w-full"
          >
            <div className="flex flex-col gap-2">
              <span>ID: {condominio.id}</span>
              <span>Nome: {condominio.nome}</span>
              <span>Endereco: {condominio.endereco}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Ações</h3>
              <DeleteCondominio condominio={condominio} />
              <Button asChild>
                <Link href={`./condominios/${condominio.id}`} className="p-2">
                  Ir para condominio
                </Link>
              </Button>
            </div>
            {/* <div className="bg-white p-4 flex gap-4 items-center justify-center">
              <Button asChild>
                <Link
                  href={`/receiver/${mountHashReceiver(condominio)}`}
                  target="_blank"
                  className="p-2"
                >
                  Ir para pagina de leitura do QrCode
                </Link>
              </Button>
              <QRCodeSVG
                value={`${API_HOST}/receiver/${mountHashReceiver(condominio)}`}
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
