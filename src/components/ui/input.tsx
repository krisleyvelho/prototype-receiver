import { cn } from '@/app/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const inputVariants = cva(
  cn(
    'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
  ),
  {
    variants: {
      variant: {
        default: 'bg-white text-black',
      },
      size: {
        default: 'h-7 text-sm px-2',
        md: 'h-10 py-1.5 pl-3.5 pr-4',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type InputVariantsType = VariantProps<typeof inputVariants>;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  InputVariantsType;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, size, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant, size, className }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';


export { Input };
