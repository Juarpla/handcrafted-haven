import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import Logos from "./logos.webp";

export default function Navigation() {
  return (
    <>
      <nav className="fixed top-0 w-full h-auto flex items-center justify-between px-4 py-2 bg-opacity-100 z-50 bg-custom-orange shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                src={Logos}
                alt="handlecraft-haven-logo"
                width={80}
                height={60}
                className="ml-2 my-0 py-1 rounded-lg object-contain"
              />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              className="flex justify-center items-center transition duration-500 px-3 py-2 text-white font-bold text-lg hover:text-white hover:bg-opacity-90 hover:bg-gray-800 rounded-md"
              href="./ui/products"
            >
              Products
            </Link>
            <Link
              className="flex justify-center items-center transition duration-500 px-3 py-2 text-white font-bold text-lg hover:text-white hover:bg-opacity-90 hover:bg-gray-800 rounded-md"
              href="/sellers"
            >
              Sellers
            </Link>

            <Link
              className="flex justify-center items-center transition duration-500 px-1 py-2 text-black font-bold text-lg rounded-md"
              href="/dashboard/login"
            >
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
