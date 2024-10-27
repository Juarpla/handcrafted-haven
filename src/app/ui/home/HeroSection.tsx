import Handcrafted from "@/public/images/HandcraftedPottery.webp";
import Handmadetex from "@/public/images/HandmadeTextile.webp";
import Hero from "@/public/images/HeroImage.webp";
import Woven from "@/public/images/WovenBasket.webp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={Hero}
          alt="Background Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Content: Title and Text */}
      <div className="relative z-10 mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Discover Unique Handcrafted Treasures
        </h1>
        <p className="mb-8 text-lg text-white">
          Find the best artisanal pieces made with love and passion.
        </p>
      </div>

      <div className="relative z-10 mb-8 hidden gap-4 md:flex">
        <div className="relative h-60 w-60 overflow-hidden rounded-lg">
          <Image
            src={Handcrafted}
            alt="Handcrafted Pottery"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-60 w-60 overflow-hidden rounded-lg">
          <Image
            src={Handmadetex}
            alt="Handmade Textile"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-60 w-60 overflow-hidden rounded-lg">
          <Image
            src={Woven}
            alt="Woven Basket"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Button */}
      <div className="relative z-10">
        <Link
          href="/products"
          className="rounded-lg bg-[#264653] px-6 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-[#2a9d8f] focus:outline-none active:bg-[#e9c46a]"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
