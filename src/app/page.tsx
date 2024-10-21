import HeroSection from "@/app/components/HeroSection";
import SatisfiedClients from "@/app/components/SatisfiedClients";
import Footer from "@/app/ui/homepage/footer";
import Navigation from "@/app/ui/layout/Navigation";
import Promotional from "@/components/promotionalProducts";
import React from "react";

export default function Home() {
  return (
    <>
      <main>
        <Navigation />
        <HeroSection />
        <Promotional />
        <SatisfiedClients />
        <Footer />
      </main>
    </>
  );
}
