import Link from 'next/link';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GradientButton({
  children,
  href,
  variant = 'default',
  size = 'md',
  className = ''
}: GradientButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  const variantStyles = {
    default: `
      text-white
      bg-gradient-to-r from-blue-500 to-purple-600
      hover:from-blue-600 hover:to-purple-700
      active:from-blue-700 active:to-purple-800
    `,
    outline: `
      text-white
      bg-transparent
      border border-gray-700
      hover:border-blue-500
      hover:bg-gray-800
      active:bg-gray-700
    `
  };

  return (
    <Link
      href={href}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {/* Gradient background for hover effect */}
      {variant === 'default' && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/50 to-purple-600/50 opacity-0 hover:opacity-100 transition-opacity" />
      )}

      {/* Button content */}
      <span className="relative">{children}</span>
    </Link>
  );
}
