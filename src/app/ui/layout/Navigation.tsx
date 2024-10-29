import {Button} from "@/app/ui/button";
import Logos from "@/app/ui/logos.webp";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";
import LogoutButton from "../logoutButton";
import SearchBar from "../products/SearchBar";

export default function Navigation() {
  const {data: session, status} = useSession();

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-auto w-full items-center justify-between bg-custom-orange bg-opacity-100 px-4 py-2 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                src={Logos}
                alt="handlecraft-haven-logo"
                width={80}
                height={60}
                className="my-0 ml-2 rounded-lg object-contain py-1"
              />
            </Link>
          </div>
          <SearchBar />
          <div className="flex space-x-4">
            <Link
              className="flex items-center justify-center rounded-md px-3 py-2 text-lg font-bold text-white transition duration-500 hover:bg-gray-800 hover:bg-opacity-90 hover:text-white"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="flex items-center justify-center rounded-md px-3 py-2 text-lg font-bold text-white transition duration-500 hover:bg-gray-800 hover:bg-opacity-90 hover:text-white"
              href="/sellers"
            >
              Sellers
            </Link>

            {status === "authenticated" ? (
              <>
                <Link
                  className="flex items-center justify-center rounded-md px-3 py-2 text-lg font-bold text-white transition duration-500 hover:bg-gray-800 hover:bg-opacity-90 hover:text-white"
                  href="/dashboard"
                >
                  Profile
                </Link>
                <LogoutButton />
              </>
            ) : (
              <Link
                className="flex items-center justify-center rounded-md px-1 py-2 text-lg font-bold text-black transition duration-500"
                href="/dashboard/login"
              >
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
