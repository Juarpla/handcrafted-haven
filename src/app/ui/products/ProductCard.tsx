"use client";

import {useCart} from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductProps = {
  productId: string;
  productCartId: number; // For cart use
  name: string;
  price: number;
  image_url: string;
  onAddToCart: (id: number) => void;
};

const ProductCard: React.FC<ProductProps> = ({
  productId,
  productCartId,
  name,
  price,
  image_url,
  onAddToCart,
}) => {
  const {addToCart} = useCart();

  const handleAddToCart = () => {
    addToCart({id: productCartId, name, price, quantity: 1});
    onAddToCart(productCartId); // Use as number
  };

  return (
    <div className="rounded-lg border p-4 text-center">
      <Link href={`/products/${productId}`} className="cursor-pointer">
        <Image
          src={image_url}
          alt={name}
          className="mb-2 h-48 w-full rounded-lg object-cover"
          width={300}
          height={200}
          unoptimized
        />
        <h2 className="text-lg font-semibold">{name}</h2>
      </Link>
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
