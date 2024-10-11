import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import Navigation from './ui/Navigation';
import SatisfiedClients from '@/app/components/SatisfiedClients';

export default function Home() {
  return (
    <>
    <main>
      <Navigation />
      <HeroSection />
      <SatisfiedClients />

    </main>
    </>
  );
}
