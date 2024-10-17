/* eslint-disable */

import HeroSection from "@/app/components/HeroSection";
import Promotional from "@/components/promotionalProducts";
import React from "react";
import SatisfiedClients from "./components/SatisfiedClients";
import Navigation from "./ui/Navigation";

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
