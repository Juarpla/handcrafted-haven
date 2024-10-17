"use client";

import React from "react";
import Link from 'next/link'; // Asegúrate de importar Link de tu framework si usas Next.js u otro
import { usePathname } from 'next/navigation'; // Asegúrate de tener un hook similar para obtener el path actual
import clsx from 'clsx';
import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  CogIcon,
  InboxIcon,
  CurrencyDollarIcon,

} from "@heroicons/react/24/outline"; // Asegúrate de tener estos íconos instalados

const links = [
  { name: 'General', href: '/account/general', icon: HomeIcon },
  { name: 'Settings', href: '/account/settings', icon: CogIcon },
  { name: 'Followers', href: '/account/followers', icon: UserGroupIcon },
  { name: 'Payment', href: '/account/payment', icon: CurrencyDollarIcon },
  { name: 'My Products', href: '/account/products', icon: DocumentDuplicateIcon },
  { name: 'Message Center', href: '/account/messages', icon: InboxIcon },
  { name: 'My Earnings', href: '/account/earnings', icon: CurrencyDollarIcon },
 
];

function SidebarLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

const MyAccountPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-200 p-4">
            <h2 className="font-bold text-lg mb-4">My Account</h2>
            <ul className="space-y-2">
              <SidebarLinks />
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span>No Photo</span>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">Alexander Chagua</h2>
              </div>
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="p-4 bg-orange-200 rounded text-center">
                  <span>Pending Payment</span>
                </div>
                <div className="p-4 bg-orange-200 rounded text-center">
                  <span>Pending Shipment</span>
                </div>
                <div className="p-4 bg-orange-200 rounded text-center">
                  <span>Shipped</span>
                </div>
                <div className="p-4 bg-orange-200 rounded text-center">
                  <span>Pending Review</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Orders</h3>
              <ul className="space-y-2">
                <li className="p-4 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">Appeals</li>
                <li className="p-4 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">Refunds and Returns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
