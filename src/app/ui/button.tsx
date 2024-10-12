/* eslint-disable */

"use client";

import { signIn } from 'next-auth/react'; // Import signIn from NextAuth
import { raleway } from '@/app/ui/fonts';

// Define Button component
export function Button() {
  return (
    <button
      className={`${raleway.className} px-4 py-2 w-full text-white bg-blue-500 rounded-md`}
      onClick={() => signIn('github')} // Trigger GitHub sign-in on click
    >
      Sign in with GitHub
    </button>
  );
}
