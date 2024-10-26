/* eslint-disable prettier/prettier */
import {playfairDisplay} from "@/app/ui/fonts";
import ProductImages from "@/app/ui/products/ProductImages";
import React from "react";
import ProductList from "@/app/ui/products/Products";

export default function Products() {
  return (
    <>
      <main className="mx-auto mt-[5%] block min-h-screen w-6/12">
        <h1
          className={`${playfairDisplay.className} p-8 text-center text-4xl font-bold text-black`}
        >
          Our Handmade Products
        </h1>
        <div>
          <ProductImages />
          <ProductList />
        </div>
      </main>
    </>
  );
}
