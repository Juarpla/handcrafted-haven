"use client";

import {raleway} from "@/app/ui/fonts";
import React, {useState} from "react";

export default function AboutForm() {
  const [formData] = useState({
    name: "",
    craftType: "",
    bio: "",
  });

  return (
    <form className="mx-auto max-w-md space-y-6 rounded border border-orange-400 p-4">
      <div>
        <h1 className={`${raleway.className} text-center text-3xl`}>
          Enter your bio here
        </h1>
      </div>
      <div>
        <label className="mb-1 block">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="m-2 block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-orange-300"
        />
        <label className="m-2 mb-1 block">Type of craft</label>
        <input
          id="craft"
          type="text"
          name="craft"
          required
          className="m-2 block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-orange-300"
        />
        <label className="m-2 mb-1 block">Enter your bio here</label>
        <input
          id="bio"
          type="textbox"
          name="bio"
          required
          className="m-2 block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-orange-300"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-orange-200 px-4 py-2 text-black transition duration-300 hover:bg-orange-500"
      >
        Submit
      </button>
    </form>
    // <form className="flex-col space-y-6">
    //   <div>
    //     <h1 className={`${raleway.className} m-3 text-xl`}>
    //       Enter your bio here
    //     </h1>
    //   </div>
    //   <div className="m-6 flex-col rounded p-4">
    //     <label>Name</label>
    //     <input id="name" type="text" name="name" required />
    //     <label>Type of craft</label>
    //     <input id="craft" type="text" name="craft" required />
    //     <label>Enter your bio here</label>
    //     <input id="bio" type="textbox" name="bio" required />
    //   </div>
    //   <button type="submit" className="bg-brown-200 rounded text-black">
    //     Submit
    //   </button>
    // </form>
  );
}
