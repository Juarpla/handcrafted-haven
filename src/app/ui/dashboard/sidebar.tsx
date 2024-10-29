/* eslint-disable prettier/prettier */
// src/components/Sidebar.tsx

"use client";

import {
  CogIcon,
  DocumentDuplicateIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

// Array of sidebar links
const links = [
  {name: "General", href: "/dashboard/", icon: HomeIcon},
  {name: "Settings", href: "/dashboard/settings", icon: CogIcon},
  {name: "My Products", href: "/account/products", icon: DocumentDuplicateIcon},
];

// Sidebar component
const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="w-full bg-gray-200 p-4 md:w-1/4">
      <h2 className="mb-4 text-lg font-bold">My Account</h2>
      <ul className="flex flex-wrap justify-center space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {links.map(link => {
          const LinkIcon = link.icon;
          return (
            <li key={link.name} className="mx-2 mb-2">
              {" "}
              <Link
                href={link.href}
                className={clsx(
                  "flex h-[60px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-black transition duration-200 hover:bg-sky-100 hover:text-blue-600", // Añadida transición suave
                  {"bg-sky-100 text-blue-600": pathname === link.href},
                  "md:h-auto md:justify-start md:p-2 md:px-3"
                )}
              >
                <LinkIcon className="h-6 w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
