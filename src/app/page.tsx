/* eslint-disable */

import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import SatisfiedClients from './components/SatisfiedClients';
import Navigation from './ui/Navigation';



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