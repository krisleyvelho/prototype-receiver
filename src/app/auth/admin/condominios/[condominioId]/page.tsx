import { PageProps } from '@/app/utils/nextTypes';
import { use } from 'react';
import { CollapseApartamentoList } from './components/CollapseApartamentoList';

export default function CondominioPage({ params, searchParams }: PageProps) {
  const usedParams = use(params);
  const { condominioId } = usedParams || {};

  return (
    <div>
      <CollapseApartamentoList condominioId={condominioId} />
    </div>
  );
}
