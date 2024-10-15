import React from 'react';
import Image from 'next/image';
import { playfairDisplay, raleway } from '@/app/ui/fonts';

export default function Aboutus () {
    return (
        <div className={'p-4 m-6 border rounded border-gray-300'}>
            <h1 className={`${playfairDisplay.className} p-2 rounded border-black-500 rounded text-3xl font-semibold text-gray-800 m-6 text-center bg-brown-200`}>About Us</h1>
            <p className={`${raleway} p-2 text-center text-black`}>Handcrafted Haven is an innovative web application that aims to provide a platform for artisans and crafters to showcase and sell their unique handcrafted items. It serves as a virtual marketplace, connecting talented creators with potential customers who appreciate the beauty and quality of handmade products. The application focuses on fostering a sense of community, supporting local artisans, and promoting sustainable consumption.</p>
        </div>
    )
}