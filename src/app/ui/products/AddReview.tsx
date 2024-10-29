"use client";

import {createComment} from "@/lib/actions";
import {delay} from "@/lib/utils";
import React, {useState} from "react";

type AddReviewProps = {
  productId: string;
};

export default function AddReview({productId}: AddReviewProps) {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleOpenReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setReviewText("");
    setRating(0);
    setAuthor("");
    setMessage("");
    setIsReviewModalOpen(false);
  };

  const handleReviewSubmit = async () => {
    const newComment = {
      content: reviewText,
      rating,
      user_name: author,
      product_id: productId,
      timestamp: new Date().toDateString(),
    };
    const response = await createComment(newComment);
    setMessage(response.message);
    await delay(2000);
    handleCloseReviewModal();
  };

  return (
    <>
      <button
        onClick={handleOpenReviewModal}
        className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Add Review
      </button>

      {isReviewModalOpen && (
        <div className="--tw-bg-opacity fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-1/2 max-w-md rounded bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-center text-xl">Write a Review</h2>
            <textarea
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
              className="mb-4 w-full rounded border p-2"
              placeholder="Write your review here..."
            />
            <div className="mb-4 text-center">
              <h2 className="mb-4 text-center text-xl">What is your name?</h2>
              <input
                value={author}
                onChange={e => setAuthor(e.target.value)}
                className="mb-4 w-full rounded border p-2"
                placeholder="Write your name here..."
              />
              <div className="mb-4 text-center"></div>
              <label className="mr-2">Rating:</label>
              {[1, 2, 3, 4, 5].map(star => (
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
            {message.length > 0 && <p className="py-4">{message}</p>}
          </div>
        </div>
      )}
    </>
  );
}
