"use client";

import CartIcon from "@/app/ui/products/CartIcon";
import ProductCard from "@/app/ui/products/ProductCard";
import {fetchProducts} from "@/lib/actions";
import {Product} from "@/lib/definitions";
import {useEffect, useState} from "react";

//import React, {useEffect, useState} from "react";

// const Images = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const response = await fetchProducts();
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

interface CartItem {
  id: number;
  quantity: number;
}

export default function ProductImages() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Could not load products. Please try again later."); // Set error message
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-end">
        <CartIcon
          itemCount={cart.reduce((total, item) => total + item.quantity, 0)}
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.productname}
            price={product.price}
            image={product.image_url}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
