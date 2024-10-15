/* eslint-disable */

"use client";

import { signIn } from 'next-auth/react';
import { playfairDisplay, raleway } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Button } from '@/app/ui/button';

// export const metadata: Metadata = {
//   title: 'Login',
// };

export default function Page() {
  const handleSignIn = () => signIn('github', { callbackUrl: '/dashboard' });
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center justify-between space-y-9 p-9 max-w-sm w-96 h-96 max-h-full mx-auto bg-white rounded-lg shadow-lg">
        <h1 className={`${playfairDisplay.className} text-4xl text-center font-bold text-gray-500 mb-4`}>Handcrafted Haven</h1>
        <h2 className={`${raleway.className} text-xl text-gray-500 font-bold`}>Sign In For Access</h2>
        <Button onClick={handleSignIn}>
          Sign in with GitHub
        </Button>
      </div>
    </div>
  );
}
