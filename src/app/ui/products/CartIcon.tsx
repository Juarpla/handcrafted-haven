import Link from "next/link";
import React from "react";

type CartIconProps = {
  itemCount: number;
};

const CartIcon: React.FC<CartIconProps> = ({itemCount}) => {
  return (
    <Link href="/cart">
      <div className="relative cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 0l1.1 5m0 0H20m-1 2a2 2 0 11-4 0 2 2 0 014 0zm-7 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute right-0 top-0 rounded-full bg-red-500 px-2 text-sm text-white">
            {itemCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
