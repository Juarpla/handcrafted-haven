"use client";

import {useCart} from "@/app/context/CartContext";
import Image from "next/image";
import type {StaticImageData} from "next/image";
import React from "react";

type ProductProps = {
  productId: number; // Cambiado a number
  name: string;
  price: number;
  image: string | StaticImageData;
  onAddToCart: (id: number) => void; // Cambiado a number
};

const ProductCard: React.FC<ProductProps> = ({
  productId,
  name,
  price,
  image,
  onAddToCart,
}) => {
  const {addToCart} = useCart();

  const handleAddToCart = () => {
    addToCart({id: productId, name, price, quantity: 1});
    onAddToCart(productId); // Usar directamente como número
  };

  return (
    <div className="rounded-lg border p-4 text-center">
      <a href={`/product/${productId}`} className="cursor-pointer">
        <Image
          src={typeof image === "string" ? image : ""}
          alt={name}
          className="mb-2 h-48 w-full rounded-lg object-cover"
          width={300}
          height={200}
          unoptimized
        />
        <h2 className="text-lg font-semibold">{name}</h2>
      </a>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
