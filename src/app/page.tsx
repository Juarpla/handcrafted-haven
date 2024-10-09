import React from 'react';
import HeroSection from '@/components/HeroSection';
import Navigation from './ui/Navigation';

export default function Home() {
  return (
    <>
    <main>
      <Navigation />
      <HeroSection />
    </main>
    </>
  );
}
