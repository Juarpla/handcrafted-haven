/* eslint-disable */

"use client";

import { signIn } from 'next-auth/react'; // Import signIn from NextAuth
import { raleway } from '@/app/ui/fonts';
import React from 'react';

interface ButtonProps {
  onClick?: () => void; // Optional onClick function
  children?: React.ReactNode; // Optional children to display inside the button
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className={`${raleway.className} px-4 py-2 w-full text-white bg-blue-500 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
