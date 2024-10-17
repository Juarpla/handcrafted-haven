/* eslint-disable */

"use client";

import {raleway} from "@/app/ui/fonts";
import {signIn} from "next-auth/react"; // Import signIn from NextAuth

import React from "react";

interface ButtonProps {
  onClick?: () => void; // Optional onClick function
  children?: React.ReactNode; // Optional children to display inside the button
}

export function Button({onClick, children}: ButtonProps) {
  return (
    <button
      className={`${raleway.className} w-full rounded-md bg-blue-500 px-4 py-2 text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
