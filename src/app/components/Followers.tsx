import React from "react";

const FollowersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Followers</h2>
        <p>Here you can view and manage your followers.</p>
        {/* You can add logic to display a list of followers and buttons to remove them */}
      </div>
    </div>
  );
};

export default FollowersPage;
