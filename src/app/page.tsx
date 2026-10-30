import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { ProblemChorus } from '@/components/sections/ProblemChorus';
import { Capabilities } from '@/components/sections/Capabilities';
import { Industries } from '@/components/sections/Industries';
import { Methodology } from '@/components/sections/Methodology';
import { SystemsProducts } from '@/components/sections/SystemsProducts';
import { Principles } from '@/components/sections/Principles';
import { Inquiry } from '@/components/sections/Inquiry';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemChorus />
      <Capabilities />
      <Industries />
      <Methodology />
      <SystemsProducts />
      <Principles />
      <Inquiry />
    </>
  );
}
