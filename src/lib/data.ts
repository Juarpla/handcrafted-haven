import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import {Comment, Follower, Product, Sale, Seller} from "./definitions";
import {formatCurrency} from "./utils";

export async function fetchProducts() {
  try {
    const data =
      await sql<Product>`SELECT id, productname, description, price, image_url, stock_quantity, seller_id FROM products`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchProductById(id: string) {
  try {
    const data =
      await sql<Product>`SELECT id, productname, description, price, image_url, stock_quantity, seller_id FROM products WHERE id = ${id}`;
    revalidatePath(`/products/${id}`);
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}

export async function fetchCommentsByProductId(id: string) {
  try {
    const data =
      await sql<Comment>`SELECT id, user_name, product_id, content, timestamp, rating FROM comments WHERE product_id = ${id}`;
    revalidatePath(`/products/${id}`);
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch comment.");
  }
}

// Function to fetch users
export async function fetchUsers() {
  try {
    const data = await sql<Seller>`
      SELECT id, name, profile_picture 
      FROM sellers 
      ORDER BY name ASC`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(
      `Failed to fetch users. Reason: ${(error as Error).message}`
    );
  }
}

// Function to fetch followers
export async function fetchFollowers(userId: string) {
  try {
    const data = await sql<Follower>`
      SELECT 
        followers.id, 
        followers.follower_id, 
        sellers.name AS follower_name, 
        sellers.profile_picture AS follower_image,
        followers.follow_date
      FROM followers
      JOIN sellers ON followers.follower_id = sellers.id
      WHERE followers.user_id = ${userId}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(
      `Failed to fetch followers. Reason: ${(error as Error).message}`
    );
  }
}

// Function to fetch sales
export async function fetchSales() {
  try {
    const data = await sql<Sale>`
      SELECT 
        id, 
        product_id, 
        saler_id, 
        amount, 
        status, 
        date
      FROM sales
      ORDER BY date DESC
    `;
    return data.rows.map(sale => ({
      ...sale,
      amount: formatCurrency(sale.amount),
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(
      `Failed to fetch sales. Reason: ${(error as Error).message}`
    );
  }
}
