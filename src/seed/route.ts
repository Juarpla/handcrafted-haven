import {db} from "@vercel/postgres";
import bcrypt from "bcrypt";
import {
  comments,
  followers,
  products,
  sales,
  users,
} from "../lib/placeholder-data";

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email TEXT NOT NULL UNIQUE, -- Esta columna ya tiene restricción UNIQUE
  password TEXT NOT NULL,
  profile_picture TEXT NOT NULL
);
  `;

  const insertedUsers = await Promise.all(
    users.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (name, email, password, profile_picture)
        VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.profile_picture})
        ON CONFLICT (email) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
   CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  productname VARCHAR(255) NOT NULL UNIQUE, -- Añadir UNIQUE aquí
  description TEXT NOT NULL,
  price INT NOT NULL,
  image_url TEXT NOT NULL,
  stock_quantity INT NOT NULL
);
  `;

  const insertedProducts = await Promise.all(
    products.map(
      product => client.sql`
        INSERT INTO products (productname, description, price, image_url, stock_quantity)
        VALUES (${product.productname}, ${product.description}, ${product.price}, ${product.image_url}, ${product.stock_quantity})
        ON CONFLICT (productname) DO NOTHING;
      `
    )
  );

  return insertedProducts;
}

async function seedFollowers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS followers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      follower_id UUID NOT NULL,
      follow_date DATE NOT NULL
    );
  `;

  const insertedFollowers = await Promise.all(
    followers.map(
      follower => client.sql`
        INSERT INTO followers (user_id, follower_id, follow_date)
        VALUES (${follower.user_id}, ${follower.follower_id}, ${follower.follow_date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedFollowers;
}

async function seedSales() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS sales (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_id UUID NOT NULL,
      user_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedSales = await Promise.all(
    sales.map(
      sale => client.sql`
        INSERT INTO sales (product_id, user_id, amount, status, date)
        VALUES (${sale.product_id}, ${sale.user_id}, ${sale.amount}, ${sale.status}, ${sale.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedSales;
}

async function seedComments() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS comments (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      product_id UUID NOT NULL,
      content TEXT NOT NULL,
      timestamp TIMESTAMP NOT NULL
    );
  `;

  const insertedComments = await Promise.all(
    comments.map(
      comment => client.sql`
        INSERT INTO comments (user_id, product_id, content, timestamp)
        VALUES (${comment.user_id}, ${comment.product_id}, ${comment.content}, ${comment.timestamp})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedComments;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedProducts();
    await seedFollowers();
    await seedSales();
    await seedComments();
    await client.sql`COMMIT`;

    return Response.json({message: "Database seeded successfully"});
  } catch (error) {
    console.error("Seeding error:", error);
    await client.sql`ROLLBACK`;
    return Response.json(
      {error: error instanceof Error ? error.message : "Unknown error"},
      {status: 500}
    );
  }
}
