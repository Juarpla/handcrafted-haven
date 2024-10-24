"use client"

import { raleway } from "../ui/fonts";
import React, { useState } from "react";

export default function aboutForm() {
  const [formData] = useState({
    name: '',
    craftType: '',
    bio: '',
  });

  return (
    <form className="space-y-6 border border-orange-400 rounded p-3">
        <div >
          <h1 className={`${raleway.className} text-3xl`}>
          Enter your bio here
          </h1>
      </div>
      <div >
        <label className=" block">Name</label>
        <input id="name" type="text" name="name" required className="m-2 block rounded"/>
        <label className="m-2 block">Type of craft</label>
        <input id="craft" type="text" name="craft" required className="m-2 block rounded" />
        <label className="m-2 block">Enter your bio here</label>
        <input id="bio" type="textbox" name="bio" required className="m-2 block rounded" />
      </div>
      <button type="submit" className="bg-orange-200 rounded text-black py-2 px-4 hover:bg-orange-500 transition duration-300">
        Submit
      </button>
    </form>
  );
}