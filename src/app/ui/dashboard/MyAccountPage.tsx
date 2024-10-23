/* eslint-disable prettier/prettier */
// src/app/components/MyAccountPage.tsx

import React from "react";
import Sidebar from "./sidebar";

const MyAccountPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar /> {/* Use the Sidebar component here */}
          {/* Main Content */}
          <div className="w-3/4 p-6">
            <div className="mb-6 flex items-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-gray-300">
                <span>No Photo</span>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">Username</h2>
              </div>
            </div>
            <div className="mb-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="rounded bg-orange-200 p-4 text-center">
                  <span>Pending Payment</span>
                </div>
                <div className="rounded bg-orange-200 p-4 text-center">
                  <span>Pending Shipment</span>
                </div>
                <div className="rounded bg-orange-200 p-4 text-center">
                  <span>Shipped</span>
                </div>
                <div className="rounded bg-orange-200 p-4 text-center">
                  <span>Pending Review</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Orders</h3>
              <ul className="space-y-2">
                <li className="cursor-pointer rounded bg-gray-100 p-4 hover:bg-gray-200">
                  Appeals
                </li>
                <li className="cursor-pointer rounded bg-gray-100 p-4 hover:bg-gray-200">
                  Refunds and Returns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
