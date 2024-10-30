"use client";

import CartIcon from "@/app/ui/products/CartIcon";
import ProductCard from "@/app/ui/products/ProductCard";
import SortDropdown from "./ProductSort";  // Add this import
import { fetchProducts } from "@/lib/actions";
import { Product } from "@/lib/definitions";
import { useSearchParams} from "next/navigation";
import {Suspense, useEffect, useState} from "react";

interface CartItem {
  id: number;
  quantity: number;
}

type SortOptionType = 'PRICE_LOW_HIGH' | 'PRICE_HIGH_LOW' | 'NAME_A_Z' | 'NAME_Z_A';

const Loading = () => <div>Loading...</div>; // Componente de carga

export default function ProductImages() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") || "";
  return (
    <Suspense fallback={<Loading />}>
      {" "}
      {/* Suspense boundary */}
      <ProductImagesContent />
    </Suspense>
  );
}

function ProductImagesContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") || "";
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentSort, setCurrentSort] = useState<SortOptionType | null>(null);

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

  const handleSort = (sortOption: SortOptionType) => {
    setCurrentSort(sortOption);
    
    const sortedProducts = [...products].sort((a, b) => {
      switch (sortOption) {
        case 'PRICE_LOW_HIGH':
          return a.price - b.price;
        case 'PRICE_HIGH_LOW':
          return b.price - a.price;
        case 'NAME_A_Z':
          return a.productname.localeCompare(b.productname);
        case 'NAME_Z_A':
          return b.productname.localeCompare(a.productname);
        default:
          return 0;
      }
    });
    
    setProducts(sortedProducts);
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Could not load products. Please try again later.");
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = searchQuery
    ? products.filter(product =>
        product.productname.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <SortDropdown onSort={handleSort} currentSort={currentSort} />
        <CartIcon
          itemCount={cart.reduce((total, item) => total + item.quantity, 0)}
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productCartId={parseInt(product.id)}
            name={product.productname}
            price={product.price}
            image_url={product.image_url}
            onAddToCart={(id: number) => handleAddToCart(Number(id))}
          />
        ))}
      </div>
    </div>
  );
}
