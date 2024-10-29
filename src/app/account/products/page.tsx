/* eslint-disable */
"use client";

import Sidebar from "@/app/ui/dashboard/sidebar";
import React, {useState} from "react";

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setProductData({...productData, [name]: value});
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProductData({...productData, image: file});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(productData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <Sidebar /> {/* Render Sidebar directly here */}
          {/* Main Content */}
          <div className="w-full p-4 md:w-3/4 md:p-6">
            <div className="mb-6 border-b-2 border-gray-300 pb-8">
              <h1 className="mb-6 text-2xl font-bold">
                Your Current Listed Products:
              </h1>
              {/* Product Grid */}
              <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {/* Placeholder Product Tiles */}
                {[1, 2, 3].map(item => (
                  <div
                    key={item}
                    className="rounded-lg border border-gray-300 p-4 shadow"
                  >
                    <img
                      src="https://via.placeholder.com/150"
                      alt={`Product ${item}`}
                      className="mb-2 w-full rounded-lg object-cover"
                    />
                    <p className="text-lg font-semibold">
                      Placeholder Product {item}
                    </p>
                    <p className="text-gray-500">
                      Description of Product {item}...
                    </p>
                    <p className="mt-2 font-semibold">$10.00</p>
                  </div>
                ))}
              </section>
            </div>
            <h1 className="mb-6 text-2xl font-bold">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              {/* Product Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={productData.description}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              {/* Product Price */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  value={productData.price}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
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
