/* eslint-disable prettier/prettier */
"use client";

//import {playfairDisplay} from "@/app/ui/fonts";
import CartIcon from "@/app/ui/products/CartIcon";
import ProductCard from "@/app/ui/products/ProductCard";
import AztecNecklace from "/src/public/images/aztecNecklace.jpg";
import Pottery from "/src/public/images/HandcraftedPottery.webp";
import Textile from "/src/public/images/Handmade Textile.webp";
import HandwovenScarf from "/src/public/images/handwovenScarf.webp";
import React, {useEffect, useState} from "react";
import { fetchProducts } from "@/lib/data";



const products = [
  {id: 1, name: "Product 1", price: 10.99, image: AztecNecklace},
  {id: 2, name: "Product 2", price: 15.99, image: Pottery},
  {id: 3, name: "Product 3", price: 20.99, image: Textile},
  {id: 4, name: "Product 4", price: 25.99, image: HandwovenScarf},
  // Add more products until you have 10
];

export default function ProductImages() {
  const [cart, setCart] = useState<{id: number; quantity: number}[]>([]);

  const handleAddToCart = (id: number) => {
    setCart(prevCart => {
      const item = prevCart.find(p => p.id === id);
      if (item) {
        return prevCart.map(p =>
          p.id === id ? {...p, quantity: p.quantity + 1} : p
        );
      }
      return [...prevCart, {id, quantity: 1}];
    });
  };
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-end">
        <CartIcon
          itemCount={cart.reduce((total, item) => total + item.quantity, 0)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
