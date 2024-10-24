import Image from "next/image";
import React from "react";

export default function ProductDetailsPage({params}: {params: {id: string}}) {
  const product = {
    id: params.id,
    name: `Product ${params.id}`,
    description: "Detailed description of the product...",
    image: `/images/product${params.id}.jpg`, // Ensure the image path is correct
    width: 500, // Specify the width of the image
    height: 500, // Specify the height of the image
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-2 text-2xl">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={product.width} // Set the width
        height={product.height} // Set the height
        className="mb-4 h-64 w-full object-cover" // You can keep these classes for styling, but width and height must also be defined
      />
      <p>{product.description}</p>
    </div>
  );
}
