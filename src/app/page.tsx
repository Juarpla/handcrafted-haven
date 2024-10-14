/* eslint-disable */

import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import SatisfiedClients from './components/SatisfiedClients';
import Navigation from './ui/Navigation';
import Promotional from '@/components/promotionalProducts';



export default function Home() {
  return (
    <>
    <main>
      <Navigation />
      <HeroSection />
      <Promotional />
      <SatisfiedClients />

    </main>
    </>
  );
}