/* eslint-disable */

import Link from "next/link"

export default function Navigation() {

    return (
        <div className="flex h-full px-5 my-5 justify-end">
            <Link className="flex justify-center flex-grow hover:shadow-text-yellow transition duration-300 px-3 py-3 rounded-md"
            href="/">
                <p>
                    Home</p>
            </Link>

            <Link className="flex justify-center flex-grow hover:shadow-text-yellow transition duration-300 px-3 py-3 rounded-md"
            href="/">
              <p>
              Products</p>
            </Link>

            <Link className="flex justify-center flex-grow hover:shadow-text-yellow transition duration-300 px-3 py-3 rounded-md"
            href="/dashboard/login/">
                <p>
                Login</p>
            </Link>

        </div>
    )
    
}