import {playfairDisplay} from "@/app/ui/fonts";
import ProductImages from "@/app/ui/products/ProductImages";
import React from "react";

export default function Products() {
  return (
    <>
      <main className="mx-auto block min-h-screen w-6/12">
        <h1
          className={`${playfairDisplay.className} mt-24 p-8 text-center text-4xl font-bold text-black`}
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
