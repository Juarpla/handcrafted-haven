"use client";

import React, {useActionState} from "react";
import {raleway} from "../ui/fonts";

export default function aboutForm() {
  return (
    <form className="flex-col space-y-6">
      <div>
        <h1 className={`${raleway.className} m-3 text-xl`}>
          Enter your bio here
        </h1>
      </div>
      <div className="m-6 flex-col rounded p-4">
        <label>Name</label>
        <input id="name" type="text" name="name" required />
        <label>Type of craft</label>
        <input id="craft" type="text" name="craft" required />
        <label>Enter your bio here</label>
        <input id="bio" type="textbox" name="bio" required />
      </div>
      <button type="submit" className="bg-brown-200 rounded text-black">
        Submit
      </button>
    </form>
  );
}
