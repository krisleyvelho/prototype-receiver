'use client';

import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { useApartamentoRouter } from '../useApartamentoRouter';
import { ApartamentoCardSkeleton } from './ApartamentoCardSkeleton';
import { CreateApartamentoDialog } from './CreateApartamentoDialog';

export function CollapseApartamentoList({condominioId}: {condominioId: string}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="w-full p-0">
        <CollapsibleTrigger asChild>
          <Button
            variant={'ghost'}
            className="flex justify-between items-center w-full h-full"
          >
            <h3 className="text-sm font-semibold">Apartamentos</h3>
            {isOpen ? <ChevronDown size={4} /> : <ChevronUp size={4} />}
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-2">
          <div className="flex justify-end">
            <CreateApartamentoDialog condominioId={condominioId} />
          </div>
          <CollapseApartamentoContent />
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}

export function CollapseApartamentoContent() {
  const { listApartamentoQuery } = useApartamentoRouter();
  const { data: listApartamento, isLoading } = listApartamentoQuery;

  if (isLoading) {
    return Array.from({ length: 5 }, (_, i) => (
      <ApartamentoCardSkeleton key={i} />
    ));
  }

  return (
    <div className="flex flex-col gap-2">
      {listApartamento?.map((apartment) => (
        <div key={apartment.id}>
          <h3>{apartment.numero}</h3>
          <p>{apartment.andar}</p>
          <p>{apartment.bloco}</p>
        </div>
      ))}
    </div>
  );
}
