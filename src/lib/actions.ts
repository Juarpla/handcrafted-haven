"use server";

import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {z} from "zod";
import {Product} from "./definitions";

// Definition of the schema for the product using Zod
const ProductSchema = z.object({
  productname: z.string().min(1, {message: "Product name is required."}),
  description: z.string().optional(),
  price: z.coerce.number().positive({message: "Price must be greater than 0."}),
  image_url: z.string().url({message: "Invalid URL for the image."}),
  stock_quantity: z.coerce
    .number()
    .nonnegative({message: "Stock quantity cannot be negative."}),
});

// Exported type for the product
export type ProductData = z.infer<typeof ProductSchema>;

// Function to create a new product
export async function createProduct(formData: FormData) {
  // Validate form data
  const validatedFields = ProductSchema.safeParse({
    productname: formData.get("productname"),
    description: formData.get("description"),
    price: formData.get("price"),
    image_url: formData.get("image_url"),
    stock_quantity: formData.get("stock_quantity"),
  });

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to create product due to validation errors.",
    };
  }

  const {productname, description, price, image_url, stock_quantity} =
    validatedFields.data;

  // Insert data into the database
  try {
    await sql`
      INSERT INTO products (productname, description, price, image_url, stock_quantity)
      VALUES (${productname}, ${description}, ${price}, ${image_url}, ${stock_quantity})
    `;
    revalidatePath("/dashboard/products"); // Revalidate the cache if necessary
    redirect("/dashboard/products"); // Redirect after creation
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to create product.",
    };
  }
}

// Function to retrieve all products
export async function fetchProducts() {
  try {
    const data =
      await sql<Product>`SELECT id, productname, description, price, image_url, stock_quantity FROM products`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

// Function to retrieve a product by ID
export async function fetchProductById(id: string) { // number
  try {
    const data =
      await sql<Product>`SELECT id, productname, description, price, image_url FROM products WHERE id = ${id}`;
    return data.rows[0]; // Return the product
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}
