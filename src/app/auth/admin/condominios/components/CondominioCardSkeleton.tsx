import { Skeleton } from '@/components/ui/skeleton';

export function CondominioCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 p-4 w-full">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton className="h-[200px] w-full rounded-md" key={index} />
      ))}
    </div>
  );
}
