import Image from "next/image";
import React from "react";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: number) => void;
};

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="rounded-lg border p-4 text-center">
      <a href={`/product/${id}`} className="cursor-pointer">
        <Image
          src={image}
          alt={name}
          className="mb-2 h-48 w-full rounded-lg object-cover"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
      </a>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(id)}
        className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
