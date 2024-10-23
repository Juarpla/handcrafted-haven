/* eslint-disable */
"use client";

import React, { useState } from "react";
import Sidebar from "@/app/ui/dashboard/sidebar";

export default function ProductsPage() {
  const [productData, setProductData] = useState<{
    image: File | null;
    description: string;
    price: string;
  }>({
    image: null,
    description: "",
    price: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProductData({ ...productData, image: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(productData);
    // Optionally redirect to another page after submission
    // router.push("/account/products"); // Example redirect
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar /> {/* Render Sidebar directly here */}

          {/* Main Content */}
          <div className="w-3/4 p-6">
            <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Product Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Product Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Product Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={productData.description}
                  onChange={handleInputChange}
                  className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Product Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  value={productData.price}
                  onChange={handleInputChange}
                  className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
