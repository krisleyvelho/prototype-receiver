import { Skeleton } from "@/components/ui/skeleton";

export function ApartamentoCardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-12 w-12 rounded-full" />
    </div>
  );
}