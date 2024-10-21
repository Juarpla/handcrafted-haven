import HeroSection from "@/app/ui/home/HeroSection";
import Promotional from "@/app/ui/home/promotionalProducts";
import SatisfiedClients from "@/app/ui/home/SatisfiedClients";
import React from "react";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Promotional />
        <SatisfiedClients />
      </main>
    </>
  );
}
