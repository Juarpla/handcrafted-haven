"use client";

import AboutUs from "@/app/ui/dashboard/aboutUs";
import MyAccountPage from "@/app/ui/dashboard/MyAccountPage";
import {playfairDisplay} from "@/app/ui/fonts";
import LogoutButton from "@/app/ui/logoutButton";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";

export default function Page() {
  const {data: session, status} = useSession(); // Get session status
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login"); // Redirect unauthenticated users to login
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // Loading state while checking authentication
  }

  // Only render the dashboard if the user is authenticated
  if (status === "authenticated") {
    return (
      <>
        <main>
          <h1
            className={`${playfairDisplay.className} text-center text-4xl font-bold text-black`}
          >
            Welcome, {session.user?.name}!
          </h1>
          <AboutUs />
          <MyAccountPage userName={session.user?.name || "Guest"} />{" "}
          {/* Replace with your own MyAccount component */}
        </main>
      </>
    );
  }

  // Return null or nothing while redirecting if unauthenticated
  return null;
}
