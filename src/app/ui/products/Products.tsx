/* eslint-disable prettier/prettier */
"use client";

import {sql} from "@vercel/postgres";
import React, {useEffect, useState} from "react";
// import { db } from 'postgres://default:P1mpXd9UgeMO@ep-frosty-boat-a4w2aqbi-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require';
import { fetchProducts } from "@/lib/data";

async function handler(req, res) {
    try {
        const items = await db.getItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
}

interface Product {
    id: number;
    productname: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const data = fetchProducts();
  console.log(data);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/lib/data');
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded">
          <h2 className="text-lg">{product.productname}</h2>
          <img src="{product.image_url}" alt="image of {product.productname}"></img>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;