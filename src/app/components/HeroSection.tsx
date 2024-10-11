import React from 'react';
import Image from 'next/image';
import Hero from '/src/public/images/HeroImage.webp';
import Handcrafted from '/src/public/images/HandcraftedPottery.webp';
import Handmadetex from '/src/public/images/Handmade Textile.webp'
import Woven from '/src/public/images/WovenBasket.webp'
import './HeroSection.css'; // Ensure you import the CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Background image */}
      <div className="background">
        <Image
          src={Hero}
          alt="Background Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          
        />
      </div>

      {/* Content: Title and Text */}
      <div className="content">
        <h1 className="hero-title">Discover Unique Handcrafted Treasures</h1>
        <p className="hero-description">Find the best artisanal pieces made with love and passion.</p>
      </div>

      {/* Image Container */}
      <div className="image-container">
        <div className="image-item">
          <Image
            src={Handcrafted}
            alt="Handcrafted Pottery"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="image-item">
          <Image
            src={Handmadetex}
            alt="Handmade Textile"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="image-item">
          <Image
            src={Woven}
            alt="Woven Basket"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Button */}
      <button className="shop-button">
        Shop Now
      </button>
    </div>
  );
};

export default HeroSection;