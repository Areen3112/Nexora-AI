'use client';

import React from 'react';
import { useLenis } from '@/lib/lenis';

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useLenis();
  return <>{children}</>;
};
