/* eslint-disable prettier/prettier */
// src/components/Sidebar.tsx

"use client";

import {
  CogIcon,
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

// Array of sidebar links
const links = [
  {name: "General", href: "/dashboard/", icon: HomeIcon},
  {name: "Settings", href: "/dashboard/settings", icon: CogIcon},
  // {name: "Followers", href: "/dashboard/followers", icon: UserGroupIcon},
  // {name: "Payment", href: "/account/payment", icon: CurrencyDollarIcon},
  {name: "My Products", href: "/account/products", icon: DocumentDuplicateIcon},
  // {name: "Message Center", href: "/account/messages", icon: InboxIcon},
  // {name: "My Earnings", href: "/account/earnings", icon: CurrencyDollarIcon},
];

// Sidebar component
const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="mb-4 text-lg font-bold">My Account</h2>
      <ul className="space-y-2">
        {links.map(link => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-black hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {"bg-sky-100 text-blue-600": pathname === link.href}
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
