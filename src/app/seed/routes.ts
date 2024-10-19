import {db} from "@vercel/postgres";
import bcrypt from "bcrypt";
import {
  messages,
  payments,
  products,
  revenue,
  users,
} from "../lib/placeholder-data";

const client = await db.connect();

async function seedUsers() {
  // Crear tabla de usuarios
  await client.sql`CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    image_url VARCHAR(255),
    country VARCHAR(255)
  );`;

  const insertedUsers = await Promise.all(
    users.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password, image_url, country)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.image_url}, ${user.country})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedProducts() {
  // Crear tabla de productos
  await client.sql`CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    image_url VARCHAR(255),
    description TEXT NOT NULL,
    followers_count INT NOT NULL
  );`;

  const insertedProducts = await Promise.all(
    products.map(
      product => client.sql`
      INSERT INTO products (id, name, price, image_url, description, followers_count)
      VALUES (${product.id}, ${product.name}, ${product.price}, ${product.image_url}, ${product.description}, ${product.followers_count})
      ON CONFLICT (id) DO NOTHING;
    `
    )
  );

  return insertedProducts;
}

async function seedPayments() {
  // Crear tabla de pagos
  await client.sql`CREATE TABLE IF NOT EXISTS payments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );`;

  const insertedPayments = await Promise.all(
    payments.map(
      payment => client.sql`
      INSERT INTO payments (id, user_id, amount, status, date)
      VALUES (${payment.id}, ${payment.user_id}, ${payment.amount}, ${payment.status}, ${payment.date})
      ON CONFLICT (id) DO NOTHING;
    `
    )
  );

  return insertedPayments;
}

async function seedMessages() {
  // Crear tabla de mensajes
  await client.sql`CREATE TABLE IF NOT EXISTS messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL
  );`;

  const insertedMessages = await Promise.all(
    messages.map(
      message => client.sql`
      INSERT INTO messages (id, user_id, content, date)
      VALUES (${message.id}, ${message.user_id}, ${message.content}, ${message.date})
      ON CONFLICT (id) DO NOTHING;
    `
    )
  );

  return insertedMessages;
}

async function seedRevenue() {
  // Crear tabla de revenue
  await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      rev => client.sql`
      INSERT INTO revenue (month, revenue)
      VALUES (${rev.month}, ${rev.revenue})
      ON CONFLICT (month) DO NOTHING;
    `
    )
  );

  return insertedRevenue;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedProducts();
    await seedPayments();
    await seedMessages();
    await seedRevenue();
    await client.sql`COMMIT`;

    return Response.json({message: "Database seeded successfully"});
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.error("Seeding Error:", error); // Registro detallado del error
    return Response.json(
      {error: "Failed to seed the database. Please try again later."},
      {status: 500}
    );
  }
}
