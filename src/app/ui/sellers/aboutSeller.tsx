"use client";

import React, {useState} from "react";
import {raleway} from "@/app/ui/fonts";

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
