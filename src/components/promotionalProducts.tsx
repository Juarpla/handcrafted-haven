import React from 'react';
import Image from 'next/image';
import Blacksmith from '/src/public/images/blacksmithProducts.webp';
import AztecNecklace from '/src/public/images/aztecNecklace.jpg';
import HandwovenScarf from '/src/public/images/handwovenScarf.webp';
import { playfairDisplay } from '@/app/ui/fonts';

export default function Promotional () {
    return (
        <div className={`${playfairDisplay.className} p-4 border rounded text-3xl font-semibold text-gray-800 m-6 text-center bg-brown-200`}>
            <h2 >
            Our Most Exciting Products Right Now
            </h2>

            <div className='flex justify-center space-x-8'>
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
                    <Image
                    src={HandwovenScarf}
                    alt="Image of a scarf"
                    
                    height={240}
                    />
                </div>
            </div>
        </div>
    )
} 

