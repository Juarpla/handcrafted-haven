/* eslint-disable */

"use client";

import LogoutButton from "../ui/logoutbutton";
import React, { useEffect } from 'react';
import Navigation from '../ui/Navigation';
import Aboutus from './aboutUs';
import { playfairDisplay } from '@/app/ui/fonts';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { data: session, status } = useSession(); // Get session status
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/dashboard/login'); // Redirect unauthenticated users to login
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>; // Loading state while checking authentication
  }

  // Only render the dashboard if the user is authenticated
  if (status === 'authenticated') {
    return (
      <>
        <main>
          <h1 className={`${playfairDisplay.className} text-center text-4xl font-bold text-black`}>Welcome, {session.user?.name}!</h1>
          <div className="flex justify-center">
            <Navigation /> {/* You can add navigation here */}
          </div>
          <Aboutus />
          <LogoutButton />
        </main>
      </>
    );
  }

  // Return null or nothing while redirecting if unauthenticated
  return null;
}
