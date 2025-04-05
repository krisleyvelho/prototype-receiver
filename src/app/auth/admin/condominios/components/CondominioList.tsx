'use client';

import { Button } from '@/components/ui/button';

import mountHashReceiver from '@/app/utils/mountHashReceiver';
import Link from 'next/link';
import { useCondominioRouter } from '../hooks/useCondominioRouter';
import { DeleteCondominio } from './DeleteCondominio';
import { QRCodeSVG } from 'qrcode.react';
import { CondominioCardSkeleton } from './CondominioCardSkeleton';
import { API_HOST } from '@/providers';

export function CondominioList() {
  const { listQuery } = useCondominioRouter();
  const { data: condominioList, error, isSuccess, isError, isLoading } = listQuery || {};
  console.log("🚀 ~ CondominioList ~ isLoading:", isLoading)

  if(isLoading) {
    return <CondominioCardSkeleton />
  }
  return (
    <div className="flex flex-col gap-4">
      {isError && <span>Erro ao listar condominios: {error.message}</span>}
      {isSuccess && <span>Lista de condominios:</span>}
      {condominioList?.map((condominio) => (
        <div
          key={condominio.id}
          className="flex flex-col gap-2 border-[1px] border-slate-400 p-4 w-fit"
        >
          <span>ID: {condominio.id}</span>
          <span>Nome: {condominio.nome}</span>
          <span>Endereco: {condominio.endereco}</span>
          <div className="bg-white p-4">
            <div className="flex gap-4">
              <Button onClick={() => mountHashReceiver(condominio)}>
                log key
              </Button>

              <Link
                href={`/receiver/${mountHashReceiver(condominio)}`}
                target="_blank"
                className="p-2"
              >
                Ir para pagina de leitura do QrCode
              </Link>
            </div>
            {/* <QRCodeSVG value={mountHashReceiver(condominio)} />, */}
            <QRCodeSVG
              value={`${API_HOST}/receiver/${mountHashReceiver(
                condominio
              )}`}
            />
            ,
          </div>
          <DeleteCondominio condominioId={condominio.id} />
        </div>
      ))}
    </div>
  );
}
