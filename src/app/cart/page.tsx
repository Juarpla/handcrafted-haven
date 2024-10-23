"use client";

import {useRouter} from "next/navigation";
import React, {useState} from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {id: 1, name: "Product 1", price: 10.99, quantity: 2},
    {id: 2, name: "Product 2", price: 12.99, quantity: 1},
    {id: 3, name: "Product 3", price: 9.99, quantity: 3},
    {id: 4, name: "Product 4", price: 15.99, quantity: 1},
  ]);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const router = useRouter();

  const handleIncreaseQuantity = (id: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 0
          ? {...item, quantity: item.quantity - 1}
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handlePurchase = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      router.push("/products"); // Redirect to the products page after 5 seconds
    }, 5000);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl">Your Cart</h1>
      {cart.map(item => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-2"
        >
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
          <div className="flex items-center">
            <button
              onClick={() => handleDecreaseQuantity(item.id)}
              className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => handleIncreaseQuantity(item.id)}
              className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
            >
              +
            </button>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="ml-4 rounded bg-gray-500 px-2 py-1 text-white hover:bg-gray-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 text-right">
        <span className="text-xl">Total: ${total.toFixed(2)}</span>
      </div>
      <button
        onClick={handlePurchase}
        className="mt-4 w-full rounded bg-green-500 py-2 text-white hover:bg-green-600"
      >
        Purchase
      </button>

      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded bg-white p-4 shadow-lg">
            <p className="text-lg font-semibold">
              Your purchase was successful
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
