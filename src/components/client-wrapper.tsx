'use client';

import dynamic from 'next/dynamic';

export const DynamicHero = dynamic(
  () => import('@/components/hero/hero-scene').then(mod => mod.Hero),
  { ssr: false }
);

export const DynamicCodeBlock = dynamic(
  () => import('@/components/code/code-block').then(mod => mod.CodeBlock),
  { ssr: false }
);

export const DynamicErrorBoundary = dynamic(
  () => import('@/components/error-boundary').then(mod => mod.ErrorBoundary),
  { ssr: false }
);
