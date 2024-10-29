/* eslint-disable prettier/prettier */
// src/app/components/MyAccountPage.tsx

import React from "react";
import Sidebar from "./sidebar";

const MyAccountPage = ({userName}: {userName: string}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {" "}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
        <div className="flex flex-col md:flex-row">
          {" "}
          {/* Sidebar */}
          <Sidebar /> {/* Use the Sidebar component here */}
          {/* Main Content */}
          <div className="w-full p-4 md:w-3/4 md:p-6">
            {" "}
            <div className="mb-4 flex items-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-gray-300">
                <span>No Photo</span>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold text-black md:text-2xl">
                  {userName}
                </h2>{" "}
              </div>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {" "}
                <div className="rounded bg-orange-200 p-2 text-center text-black">
                  <span className="text-sm md:text-base">Pending Payment</span>{" "}
                </div>
                <div className="rounded bg-orange-200 p-2 text-center text-black">
                  <span className="text-sm md:text-base">Pending Shipment</span>{" "}
                </div>
                <div className="rounded bg-orange-200 p-2 text-center text-black">
                  <span className="text-sm md:text-base">Shipped</span>{" "}
                </div>
                <div className="rounded bg-orange-200 p-2 text-center text-black">
                  <span className="text-sm md:text-base">Pending Review</span>{" "}
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-black md:text-xl">
                Orders
              </h3>{" "}
              <ul className="space-y-2">
                <li className="cursor-pointer rounded bg-gray-100 p-2 text-sm text-black hover:bg-gray-200 md:text-base">
                  {" "}
                  Appeals
                </li>
                <li className="cursor-pointer rounded bg-gray-100 p-2 text-sm text-black hover:bg-gray-200 md:text-base">
                  {" "}
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
