import {sql} from "@vercel/postgres";
import {
  Follower,
  Message,
  Payment,
  PaymentStatus,
  Product,
  Revenue,
  User,
} from "./definitions";

// Fetch monthly revenue data
export async function fetchRevenue() {
  try {
    console.log("Fetching revenue data...");
    const data = await sql<Revenue>`SELECT * FROM revenue;`;

    console.log("Revenue data fetched.");
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

// Fetch list of users
export async function fetchUsers() {
  try {
    const data = await sql<User>`SELECT * FROM users ORDER BY name ASC;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

// Fetch products and their information
export async function fetchProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM products ORDER BY name ASC;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

// Fetch followers
export async function fetchFollowers() {
  try {
    const data =
      await sql<Follower>`SELECT * FROM followers ORDER BY name ASC;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch followers.");
  }
}

// Fetch payments by their status
export async function fetchPaymentsByStatus(status: PaymentStatus) {
  try {
    const data =
      await sql<Payment>`SELECT * FROM payments WHERE status = ${status};`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch payments.");
  }
}

// Fetch messages by user ID
export async function fetchMessagesByUser(userId: string) {
  try {
    const data =
      await sql<Message>`SELECT * FROM messages WHERE user_id = ${userId} ORDER BY date DESC;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch messages.");
  }
}

// Fetch the count of users and products
export async function fetchCounts() {
  try {
    const userCountPromise = sql`SELECT COUNT(*) FROM users;`;
    const productCountPromise = sql`SELECT COUNT(*) FROM products;`;

    const data = await Promise.all([userCountPromise, productCountPromise]);

    const numberOfUsers = Number(data[0].rows[0].count ?? "0");
    const numberOfProducts = Number(data[1].rows[0].count ?? "0");

    return {
      numberOfUsers,
      numberOfProducts,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch counts.");
  }
}

// Fetch filtered products based on search query
export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  const ITEMS_PER_PAGE = 10;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<Product>`
      SELECT * FROM products
      WHERE name ILIKE ${"%" + query + "%"} OR description ILIKE ${"%" + query + "%"}
      ORDER BY name ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered products.");
  }
}

// Fetch total number of pages for filtered products
export async function fetchProductPages(query: string) {
  const ITEMS_PER_PAGE = 10;

  try {
    const count =
      await sql`SELECT COUNT(*) FROM products WHERE name ILIKE ${"%" + query + "%"} OR description ILIKE ${"%" + query + "%"};`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total product pages.");
  }
}

// Fetch product by ID
export async function fetchProductById(id: string) {
  try {
    const data = await sql<Product>`SELECT * FROM products WHERE id = ${id};`;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product by ID.");
  }
}
