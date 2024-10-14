import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Pottery from '/src/public/images/HandcraftedPottery.webp';
import AztecNecklace from '/src/public/images/aztecNecklace.jpg';
import HandwovenScarf from '/src/public/images/handwovenScarf.webp';
import Textile from '/src/public/images/Handmade Textile.webp';
import { playfairDisplay } from '@/app/ui/fonts';

// const Images = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const response = await fetch(    our database    );
//                 const data = await response.json();
//                 setImages(data);
//             } catch (error) {
//                 console.error('Error fetching images:', error);
//             }
//         };

//         fetchImages();
//     }, []);

//     return (
//         <div className="grid grid-cols-4 gap-4">
//             {images.map((image) => (
//                 <img key={image.id} src={image.img} alt={`Image ${image.description}`}className="w-full h-32 object-cover rounded-md shadow" />
//             ))}
//         </div>
//     );
// };


export default function ProductImages () {
    return (
        <div className='flex justify-center space-x-8'>
            <div>
                <Image
                    src={Pottery} 
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
            <div>
                <Image
                src={Textile}
                alt="Image of a scarf"
                
                height={240}
                />
            </div>
            {/* <Images /> */}
        </div>
        
    )
}