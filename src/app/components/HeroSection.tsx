import React from 'react';
import Image from 'next/image';
import Hero from '/src/public/images/HeroImage.webp';
import Handcrafted from '/src/public/images/HandcraftedPottery.webp';
import Handmadetex from '/src/public/images/Handmade Textile.webp';
import Woven from '/src/public/images/WovenBasket.webp';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16">
      {/* Background image */}
      <div className="absolute inset-0 z-[-10] opacity-70">
        <Image
          src={Hero}
          alt="Background Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Content: Title and Text */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Discover Unique Handcrafted Treasures
        </h1>
        <p className="text-lg text-white mb-8">
          Find the best artisanal pieces made with love and passion.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative z-10 hidden md:flex gap-4">
        <div className="relative w-60 h-60 rounded-lg overflow-hidden">
          <Image
            src={Handcrafted}
            alt="Handcrafted Pottery"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-60 h-60 rounded-lg overflow-hidden">
          <Image
            src={Handmadetex}
            alt="Handmade Textile"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-60 h-60 rounded-lg overflow-hidden">
          <Image
            src={Woven}
            alt="Woven Basket"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 px-6 py-3 bg-[#264653] text-white rounded-lg shadow-lg transition-colors duration-300 hover:bg-[#2a9d8f] active:bg-[#e9c46a] focus:outline-none">
        Shop Now
      </button>
    </div>
  );
};

export default HeroSection;
