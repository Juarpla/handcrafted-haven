/* eslint-disable */

import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"

export default function Navigation() {

    return (
        <>
        <nav className="fixed top-0 w-full h-[10%] flex items-center justify-between px-0 py-0 bg-opacity-100 z-50 bg-custom-orange">
            <div className="flex-shrink-0">
                <Link
                href={"/"}>
                    <Image 
                    src="https://placehold.co/600x400"
                    alt="handlecraft-haven-logo"
                    width={100}
                    height={80}
                    className="ml-1 my-0 py-1"
                />
                </Link>    
            </div>
            <div className="flex flex-shrink-0 h-full py-0 my-0 space-x-0 ">
                <Link className="flex justify-center items-center transition duration-500 px-3 py-5 text-black font-bold text-xl" href="/">
                    Products
                </Link>
                <Link className="flex justify-center items-center transition duration-500 px-3 py-5 text-black font-bold text-xl" href="/Sellers">
                    Sellers
                </Link>

                <Link className="flex justify-center transition duration-500 px-1 py-5 text-black font-bold text-xl" href="/dashboard/login">
                    <Button>
                        Login
                    </Button>
                </Link>

                <Link className="flex justify-center transition duration-500 px-1 py-5 text-black font-bold text-xl" href="/dashboard/login">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </nav>
    </>
    )
    
}