import React from 'react';
import HeroSection from '@/components/HeroSection';
import Navigation from './ui/Navigation';
import Promotional from '@/components/promotionalProducts';

export default function Home() {
  return (
    <>
    <main>
      <Navigation />
      <HeroSection />
      <Promotional />
    </main>
    </>
  );
}
