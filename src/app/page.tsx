import HeroSection from "@/app/components/HeroSection";
import Footer from "@/app/ui/homepage/footer";
import Promotional from "@/components/promotionalProducts";
import React from "react";
import SatisfiedClients from "./components/SatisfiedClients";
import Navigation from "./ui/layout/Navigation";

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
