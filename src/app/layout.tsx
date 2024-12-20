"use client";

import localFont from "next/font/local";
import "./globals.css";
import {CartProvider} from "@/app/context/CartContext";
import Footer from "@/app/ui/layout/footer";
import Navigation from "@/app/ui/layout/Navigation";
import {SessionProvider} from "next-auth/react"; // Import SessionProvider

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
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
          <CartProvider>
            <Navigation />
            {children}
            <Footer />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
