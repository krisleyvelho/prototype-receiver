'use client';

import { PageProps } from '@/app/utils/nextTypes';
import { api } from '@/providers';
import { use } from 'react';

export default function ReceiverPage({ params, searchParams }: PageProps) {
  const usedParams = use(params);
  // console.log("🚀 ~ ReceiverPage ~ usedParams:", usedParams)
  const clientId = usedParams.keyReceiver[0]
  const {data: clientData} = api.cliente.byId.useQuery({ id: clientId });
  // console.log("🚀 ~ ReceiverPage ~ clientData:", clientData)
  // console.log('🚀 ~ ReceiverPage ~ searchParams:', searchParams);
  // console.log('🚀 ~ ReceiverPage ~ params:', params);

  return (
    <div>
      Receiver Page {JSON.stringify(params)}
      {clientData && <div>{JSON.stringify(clientData)}</div> }
    </div>
  );
}
