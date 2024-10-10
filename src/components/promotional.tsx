import Blacksmith from '/src/public/images/blacksmithProducts.jpg';
import AztecNecklace from '/src/public/images/aztecNecklace.jpg';
import HandwovenScarf from '/src/public/images/handwovenScarf.jpg';
import React from 'react';
import { playfairDisplay } from '/src/app/fonts';

export default function Promotional () {
    return (
        <div className="w-full md:col-span-3">
            <h2 className={`${playfairDisplay.className} mb-4 text-xl md:text-xl`}>
            Our Best Current Products
            </h2>

            <div>
                <Image src={Blacksmith} alt="Image of a variety of blacksmith made products"/>
                <Image src={AztecNecklace} alt="Image of aztec silver and turqoise necklace"/>
                <Image src={HandwovenScarf} alt="Image of a scarf"/>
            </div>
        </div>
    )
} 

