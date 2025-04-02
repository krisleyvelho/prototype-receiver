import { Button } from '@/components/ui/button';

import mountHashReceiver from '@/app/utils/mountHashReceiver';
import Link from 'next/link';
import { useCondominioRouter } from './useCondominioRouter';
import { DeleteCondominio } from './DeleteCondominio';
import { QRCodeSVG } from 'qrcode.react';

export function CondominioList() {
  const { condominioList } = useCondominioRouter();
  return (
    <div className="flex flex-col gap-4">
      Lista de condominios:
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
                href={`receiver/${mountHashReceiver(condominio)}`}
                target="_blank"
                className="p-2"
              >
                Ir para pagina de leitura do QrCode
              </Link>
            </div>
            {/* <QRCodeSVG value={mountHashReceiver(condominio)} />, */}
            <QRCodeSVG value={`http://192.168.31.168/receiver/${mountHashReceiver(condominio)}`} />,
          </div>
          <DeleteCondominio condominioId={condominio.id} />
        </div>
      ))}
    </div>
  );
}
