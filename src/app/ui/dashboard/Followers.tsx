/* eslint-disable prettier/prettier */
import React from "react";
import Sidebar from "./sidebar";

const FollowersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto flex">
        <Sidebar />
        <div className="max-w-4xl overflow-hidden rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-bold">Followers</h2>
          <p>Here you can view and manage your followers.</p>
          {/* You can add logic to display a list of followers and buttons to remove them */}
        </div>
      </div>
    </div>
  );
};

export default FollowersPage;
