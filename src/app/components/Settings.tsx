"use client";

import Image from "next/image"; // Import Image from next/image
import React, {useState} from "react";

const SettingsPage: React.FC = () => {
  const [name, setName] = useState("Alexander Chagua");
  const [photo, setPhoto] = useState<string | null>(null); // Adjusted state type

  // Handles changes to the name input field
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Handles file selection for profile photo
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result as string); // Converts file to a data URL
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Saves the changes made to name and photo
  const handleSave = () => {
    alert("Changes saved successfully.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Account Settings</h2>

        {/* Name input field */}
        <div className="mb-4">
          <label className="mb-2 block font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full rounded-md border p-2"
          />
        </div>

        {/* Profile photo upload */}
        <div className="mb-4">
          <label className="mb-2 block font-medium">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="block"
          />
          {photo && (
            <div className="mt-4">
              <Image
                src={photo} // Use the Image component for optimized loading
                alt="Profile"
                className="size-24 rounded-full"
                width={96} // Set the width for the Image component
                height={96} // Set the height for the Image component
              />
            </div>
          )}
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
