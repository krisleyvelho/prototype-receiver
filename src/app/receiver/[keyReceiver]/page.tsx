'use client';

import { PageProps } from '@/app/utils/nextTypes';
import { api } from '@/providers';
import { use, useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useRouter } from 'next/navigation';

export default function ReceiverPage({ params, searchParams }: PageProps) {
  const usedParams = use(params);
  const { condominioId } = usedParams;
  const router = useRouter();

  useEffect(() => {
    const time = new Date().getTime()
    // router.replace(`/receiver/${condominioId}_${time}`);
    // router.replace(`/receiver/${condominioId}_${time}`);
  }, [])
  // const [condominioId, time] = keyReceiver.split('_');

  const { data: condominio } = api.condominio.byId.useQuery({
    id: condominioId,
  });
  console.log('🚀 ~ ReceiverPage ~ condominio:', condominio);

  const [secondsLeft, setSecondsLeft] = useState(0);
  // console.log("🚀 ~ ReceiverPage ~ clientData:", clientData)
  // console.log('🚀 ~ ReceiverPage ~ searchParams:', searchParams);
  // console.log('🚀 ~ ReceiverPage ~ params:', params);

  function createTimer() {
    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          return 0;
        }

        return prevSeconds - 1;
      });
    }, 1000);
  }
/* 
  useEffect(() => {
    setSecondsLeft(60);
    createTimer();

    // createTimer(60)
  }, []); */

  return (
    <div className="h-screen w-full bg-slate-800">
      <div className="flex flex-col gap-4 p-4 justify-center items-center h-full">
        <div className="w-fit h-fit bg-slate-400 flex flex-col p-4">
          <h3>Tempo Restante: {secondsLeft}</h3>
          <div className="flex flex-col gap-2 bg-slate-300 p-4">
            {Object.entries(condominio || {}).map(([keyReceiver, value]) => {
              return (
                <span>
                  {keyReceiver}: {value}
                </span>
              );
            })}
          </div>

          {/* <QRCodeSVG value={`${cliente.id}${new Date().getTime()}`} />, */}

          {/* Receiver Page {JSON.stringify(params)} */}
          {/* {clientData && <span>{JSON.stringify(clientData)}</span>} */}
        </div>
      </div>
    </div>
  );
}
