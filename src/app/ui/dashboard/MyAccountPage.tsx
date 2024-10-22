"use client";

// This is likely used to indicate that this component should run on the client side
import {
  CogIcon,
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx"; // Utility for conditionally joining classNames
import Link from "next/link"; // Importing Link from Next.js for navigation between pages
import {usePathname} from "next/navigation"; // Hook to get the current path in Next.js
import React from "react";

// Importing icons from Heroicons library

// Array of links for the sidebar with name, href (link), and icon
const links = [
  {name: "General", href: "/dashboard/", icon: HomeIcon},
  {name: "Settings", href: "/dashboard/settings", icon: CogIcon},
  {name: "Followers", href: "/dashboard/followers", icon: UserGroupIcon},
  {name: "Payment", href: "/account/payment", icon: CurrencyDollarIcon},
  {name: "My Products", href: "/account/products", icon: DocumentDuplicateIcon},
  {name: "Message Center", href: "/account/messages", icon: InboxIcon},
  {name: "My Earnings", href: "/account/earnings", icon: CurrencyDollarIcon},
];

interface MyAccountProps {
  userName: string
}
// Function to render sidebar links
function SidebarLinks() {
  const pathname = usePathname(); // Get the current pathname from Next.js
  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon; // Destructuring to get the icon for each link
        return (
          <Link
            key={link.name} // Unique key for each link
            href={link.href} // Link to the specific path
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 text-black",
              {
                "bg-sky-100 text-blue-600": pathname === link.href, // Apply specific styles if the current pathname matches the link's href
              }
            )}
          >
            <LinkIcon className="w-6" /> {/* Icon for the link */}
            <p className="hidden md:block">{link.name}</p>{" "}
            {/* Display link name, hidden on smaller screens */}
          </Link>
        );
      })}
    </>
  );
}

// Main account page component
const MyAccountPage: React.FC<MyAccountProps> = ({userName}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      {" "}
      {/* Main container with background and padding */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
        {" "}
        {/* Card-like container */}
        <div className="flex">
          {" "}
          {/* Flex container for sidebar and main content */}
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-200 p-4">
            <h2 className="mb-4 text-lg font-bold">My Account</h2>{" "}
            {/* Sidebar title */}
            <ul className="space-y-2">
              <SidebarLinks /> {/* Render the sidebar links */}
            </ul>
          </div>
          {/* Main Content */}
          <div className="w-3/4 p-6">
            {" "}
            {/* Main content section */}
            <div className="mb-6 flex items-center">
              {" "}
              {/* Profile info */}
              <div className="flex size-16 items-center justify-center rounded-full bg-gray-300">
                {" "}
                {/* Placeholder for profile picture */}
                <span>No Photo</span> {/* Placeholder text */}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{userName}</h2>{" "}
                {/* User name */}
              </div>
            </div>
            <div className="mb-6">
              {" "}
              {/* Section for status items */}
              <div className="grid grid-cols-4 gap-4">
                {" "}
                {/* Grid layout for status items */}
                <div className="rounded bg-orange-200 p-4 text-center">
                  <span>Pending Payment</span> {/* Status item */}
                </div>
                <div className="rounded bg-orange-200 p-4 text-center">
                  <span>Pending Shipment</span> {/* Status item */}
                </div>
                <div className="rounded bg-orange-200 p-4 text-center">
                  <span>Shipped</span> {/* Status item */}
                </div>
                <div className="rounded bg-orange-200 p-4 text-center">
                  <span>Pending Review</span> {/* Status item */}
                </div>
              </div>
            </div>
            <div>
              {" "}
              {/* Orders section */}
              <h3 className="mb-4 text-xl font-bold">Orders</h3>
              <ul className="space-y-2">
                <li className="cursor-pointer rounded bg-gray-100 p-4 hover:bg-gray-200">
                  Appeals
                </li>{" "}
                {/* Order-related item */}
                <li className="cursor-pointer rounded bg-gray-100 p-4 hover:bg-gray-200">
                  Refunds and Returns
                </li>{" "}
                {/* Order-related item */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage; // Exporting the main account page component
