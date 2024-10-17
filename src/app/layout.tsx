/* eslint-disable */

"use client";

// Mark this as a Client Component
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {SessionProvider} from "next-auth/react"; // Import SessionProvider
import Navigation from "./ui/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mt-[8%] bg-custom-white antialiased`}
      >
        <SessionProvider>
          {" "}
          {/* Wrap your app with SessionProvider */}
          <Navigation />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
