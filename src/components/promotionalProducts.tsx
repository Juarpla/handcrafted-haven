import {playfairDisplay} from "@/app/ui/fonts";
import AztecNecklace from "/src/public/images/aztecNecklace.jpg";
import Blacksmith from "/src/public/images/blacksmithProducts.webp";
import HandwovenScarf from "/src/public/images/handwovenScarf.webp";
import Image from "next/image";
import React from "react";

export default function Promotional() {
  return (
    <div
      className={`${playfairDisplay.className} bg-brown-200 m-6 rounded border p-4 text-center text-3xl font-semibold text-gray-800`}
    >
      <h2>Our Most Exciting Products Right Now</h2>

      <div className="flex justify-center space-x-8">
        <div>
          <Image
            src={Blacksmith}
            alt="Image of a variety of blacksmith made products"
            height={240}
          />
        </div>
        <div>
          <Image
            src={AztecNecklace}
            alt="Image of aztec silver and turqoise necklace"
            width={240}
            height={240}
          />
        </div>
        <div>
          <Image src={HandwovenScarf} alt="Image of a scarf" height={240} />
        </div>
      </div>
    </div>
  );
}
