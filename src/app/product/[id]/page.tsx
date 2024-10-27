/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */

"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const product = {
    id: params.id,
    name: `Product ${params.id}`,
    description: "Detailed description of the product...",
    image: `/images/product${params.id}.jpg`,
    width: 500,
    height: 500,
  };

  const handleOpenReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
    setReviewText("");
    setRating(0);
  };

  const handleReviewSubmit = () => {
    console.log("Review submitted:", { reviewText, rating });
    handleCloseReviewModal();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="border-grey-500 container mx-auto max-w-lg rounded-xl border p-4">
        <h1 className="mb-2 text-left text-2xl">{product.name}</h1>
        <Image
          src={product.image}
          alt={product.name}
          width={product.width}
          height={product.height}
          className="mb-4 h-64 w-full object-cover"
        />
        <p className="text-left">{product.description}</p>
        
        <button 
          onClick={handleOpenReviewModal}
          className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add Review
        </button>

        {isReviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/2 max-w-md rounded bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-center text-xl">Write a Review</h2>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="mb-4 w-full rounded border p-2"
                placeholder="Write your review here..."
              />
              <div className="mb-4 text-center">
                <label className="mr-2">Rating:</label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={handleCloseReviewModal}
                  className="mr-2 rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleReviewSubmit}
                  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
