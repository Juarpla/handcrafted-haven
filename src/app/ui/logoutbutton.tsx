/* eslint-disable */

'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Use next/navigation for app directory

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Prevent automatic redirect
    router.push('/'); // Manually redirect to homepage
  };

  return (
    <button
      className="px-4 py-2 text-white bg-red-500 rounded-md"
      onClick={handleLogout}
    >
      Sign out
    </button>
  );
}

