import React from 'react';
import Navigation from '../Navigation';
import { playfairDisplay, raleway } from '../fonts';
import ProductImages from './ProductImages';

export default function Products () {
    return (
        <>
        <main>
            <Navigation />
            <h1 className={`${playfairDisplay.className} text-center text-4xl font-bold p-8`}>Our Handmade Products</h1>
            <div>
                <ProductImages />
            </div>

        </main>
        </>
    )
}