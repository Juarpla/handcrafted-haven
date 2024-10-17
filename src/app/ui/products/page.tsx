import React from "react";
import {playfairDisplay, raleway} from "../fonts";
import Navigation from "../Navigation";
import ProductImages from "./ProductImages";

export default function Products() {
  return (
    <>
      <main>
        <h1
          className={`${playfairDisplay.className} p-8 text-center text-4xl font-bold text-black`}
        >
          Our Handmade Products
        </h1>
        <div>
          <ProductImages />
        </div>
      </main>
    </>
  );
}
