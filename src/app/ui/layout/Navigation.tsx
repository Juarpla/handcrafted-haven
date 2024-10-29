// components/Navigation.tsx

import {Button} from "@/app/ui/button";
import Logos from "@/app/ui/logos.webp";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import LogoutButton from "../logoutButton";
import SearchBar from "../products/SearchBar";

export default function Navigation() {
  const {data: session, status} = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when the window is resized above the mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false); // close mobile menu on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-custom-orange bg-opacity-100 px-4 py-2 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo (left-aligned) */}
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                src={Logos}
                alt="handlecraft-haven-logo"
                width={80}
                height={60}
                className="rounded-lg object-contain"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <SearchBar />

          {/* Desktop Links */}
          <div className="hidden items-center lg:flex lg:space-x-8">
            {" "}
            {/* Added items-center for vertical alignment */}
            <Link
              className="rounded-md px-3 py-2 text-lg font-bold text-white hover:bg-gray-800 hover:bg-opacity-90"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="rounded-md px-3 py-2 text-lg font-bold text-white hover:bg-gray-800 hover:bg-opacity-90"
              href="/sellers"
            >
              Sellers
            </Link>
            {status === "authenticated" ? (
              <>
                <Link
                  className="rounded-md px-3 py-2 text-lg font-bold text-white hover:bg-gray-800 hover:bg-opacity-90"
                  href="/dashboard"
                >
                  Profile
                </Link>
                <LogoutButton />
              </>
            ) : (
              <Link
                className="rounded-md px-2 py-2 text-lg font-bold text-black hover:bg-gray-800 hover:bg-opacity-90 sm:px-2 sm:py-1 sm:text-sm sm:font-semibold"
                href="/dashboard/login"
              >
                <Button>Login</Button>
              </Link>
            )}
          </div>

          {/* Mobile Toggle Button (right-aligned) */}
          <div className="ml-auto lg:hidden">
            <button
              className="flex items-center rounded border border-white px-3 py-2 text-white hover:border-gray-300 hover:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full mt-2 w-full bg-custom-orange bg-opacity-90 shadow-md lg:hidden">
            <div className="flex flex-col space-y-2 px-4 py-3">
              <Link
                className="rounded-md px-3 py-2 text-lg font-bold text-white hover:bg-gray-800 hover:bg-opacity-90"
                href="/products"
              >
                Products
              </Link>
              <Link
                className="rounded-md px-3 py-2 text-lg font-bold text-white hover:bg-gray-800 hover:bg-opacity-90"
                href="/sellers"
              >
                Sellers
              </Link>
              {status === "authenticated" ? (
                <>
                  <Link
                    className="rounded-md px-3 py-2 text-lg font-bold text-white hover:bg-gray-800 hover:bg-opacity-90"
                    href="/dashboard"
                  >
                    Profile
                  </Link>
                  <LogoutButton />
                </>
              ) : (
                <Link
                  className="rounded-md px-3 py-2 text-lg font-bold text-white hover:bg-gray-800 hover:bg-opacity-90"
                  href="/dashboard/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
