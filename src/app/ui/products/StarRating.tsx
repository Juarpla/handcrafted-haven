"use client";

import {useState} from "react";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export const StarRating = ({
  rating,
  onRatingChange,
  readonly = false,
}: StarRatingProps) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          type="button"
          key={star}
          className={`text-2xl ${
            star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
          } ${readonly ? "cursor-default" : "cursor-pointer"}`}
          onClick={() => !readonly && onRatingChange?.(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(rating)}
          disabled={readonly}
        >
          ★
        </button>
      ))}
    </div>
  );
};
