import {sql} from "@vercel/postgres";
import {Follower, Product, Sale, UsersHaven} from "./definitions";
import {formatCurrency} from "./utils";

// Function to fetch products
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

// Function to fetch users
export async function fetchUsers() {
  try {
    const data =
      await sql<UsersHaven>`SELECT id, name, profile_picture FROM users ORDER BY name ASC`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

// Function to update user data
export async function updateUser(id: string, updates: Partial<UsersHaven>) {
  const {name, email, profile_picture} = updates;

  try {
    await sql`
        UPDATE users
        SET
          name = COALESCE(${name}, name),
          email = COALESCE(${email}, email),
          profile_picture = COALESCE(${profile_picture}, profile_picture)
        WHERE id = ${id}
      `;

    return {message: "User updated successfully"};
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update user data.");
  }
}
// Function to fetch followers
export async function fetchFollowers(userId: string) {
  try {
    const data = await sql<Follower>`
      SELECT 
        followers.id, 
        followers.follower_id, 
        users.name AS follower_name, 
        users.profile_picture AS follower_image,
        followers.follow_date
      FROM followers
      JOIN users ON followers.follower_id = users.id
      WHERE followers.user_id = ${userId}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch followers.");
  }
}

// Function to fetch sales
export async function fetchSales() {
  try {
    const data = await sql<Sale>`
      SELECT 
        id, 
        product_id, 
        user_id, 
        amount, 
        status, 
        date
      FROM sales
      ORDER BY date DESC
    `;
    return data.rows.map(sale => ({
      ...sale,
      // Optionally format amount if necessary
      amount: formatCurrency(sale.amount),
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch sales.");
  }
}
