import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { cn } from '@/utils/cn';

const variants = cva(
  [
    'tracking-wide',
    'cursor-pointer',
    'inline-flex',
    'items-center',
    'justify-center',
    'realtive',
    'transition',
    'ountline-none',
    'focus:scale-[0.98]',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary',
          'text-white',
          'font-semibold',
          'shadow',
          'hover:bg-primary-600',
          'hover:shadow-md',
          'ring-primary-500/70',
          'ring-offset-2',
          'focus-visible:ring-2',
          'disabled:bg-primary-500/50',
          'disabled:shadow',
        ],
        secondary: [
          'bg-gray-50',
          'text-gray-950',
          'font-semibold',
          'shadow',
          'hover:bg-gray-100',
          'hover:shadow-md',
          'disabled:shadow',
          'disabled:text-gray-950/50',
          'border',
          'border-neutral-200/50',
          'ring-offset-2',
          'focus-visible:ring-2',
          'ring-gray-2',
        ],
        destructive: [
          'font-semibold',
          'bg-red-500',
          'hover:bg-red-600',
          'text-white',
          'rounded-full',
          'shadow',
          'hover:shadow-md',
          'disabled:bg-red-500/50',
          'disabled:shadow',
          'ring-offset-2',
          'focus-visible:ring-2',
          'ring-red-500',
        ],
        link: [
          'rounded-full outline-none focus:scale-[0.98] font-light text-indigo-500 hover:text-indigo-600 disabled:text-indigo-500/50 disabled:no-underline hover:underline ring-indigo-300 focus-visible:ring-1',
        ],
        ghost: [
          'rounded-full outline-none focus:scale-[0.98] font-light text-gray-950 hover:text-gray-600 disabled:text-gray-950 ring-gray-300 focus-visible:ring-1',
        ],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-4'],
        default: ['py-2', 'px-8', 'leading-6'],
        large: ['text-lg', 'py-3', 'px-12'],
      },
      roundness: {
        none: ['rounded-none'],
        default: ['rounded'],
        large: ['rounded-lg'],
        full: ['rounded-full'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      roundness: 'default',
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    // define your props here
    loading?: boolean;
  };

export const Loading = () => (
  <div role="status" className="absolute inline-flex items-center">
    <div className="inline-block h-[1.5em] w-[1.5em] animate-spin rounded-full border-2 lg:border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] sr-only">
        Loading...
      </span>
    </div>
  </div>
);
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, roundness, children, loading, ...rest },
    ref,
  ) => {
    return (
      <button
        data-testid="Button"
        className={cn(variants({ variant, size, roundness, className }))}
        {...rest}
        ref={ref}
      >
        {loading && <Loading />}
        <span
          className={clsx('transition', {
            'opacity-0': loading,
            'opacity-100': !loading,
          })}
        >
          {children}
        </span>
      </button>
    );
  },
);

export default Button;
