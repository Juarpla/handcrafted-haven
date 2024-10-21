/* eslint-disable */

"use client";

import {Button} from "@/app/ui/button";
import {playfairDisplay, raleway} from "@/app/ui/fonts";
import {Metadata} from "next";
import {signIn} from "next-auth/react";

// export const metadata: Metadata = {
//   title: 'Login',
// };

export default function Page() {
  const handleSignIn = () => signIn("github", {callbackUrl: "/dashboard"});

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex h-96 max-h-full w-96 max-w-sm flex-col items-center justify-center space-y-9 rounded-lg bg-white p-9 shadow-lg">
        <h1
          className={`${playfairDisplay.className} mb-4 text-center text-4xl font-bold text-gray-500`}
        >
          Handcrafted Haven
        </h1>
        <h2 className={`${raleway.className} text-xl font-bold text-gray-500`}>
          Sign In For Access
        </h2>
        <Button onClick={handleSignIn}>Sign in with GitHub</Button>
      </div>
    </div>
  );
}
