import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export { cn };