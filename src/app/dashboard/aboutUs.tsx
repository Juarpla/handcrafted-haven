import {playfairDisplay, raleway} from "@/app/ui/fonts";
import React from "react";

export default function Aboutus() {
  return (
    <div className={"m-6 rounded border border-gray-300 p-4"}>
      <h1
        className={`${playfairDisplay.className} border-black-500 bg-brown-200 m-6 rounded p-2 text-center text-3xl font-semibold text-gray-800`}
      >
        About Us
      </h1>
      <p className={`${raleway} p-2 text-center text-black`}>
        Handcrafted Haven is an innovative web application that aims to provide
        a platform for artisans and crafters to showcase and sell their unique
        handcrafted items. It serves as a virtual marketplace, connecting
        talented creators with potential customers who appreciate the beauty and
        quality of handmade products. The application focuses on fostering a
        sense of community, supporting local artisans, and promoting sustainable
        consumption.
      </p>
    </div>
  );
}
