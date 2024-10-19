// This file contains type definitions for your data.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string; // New property for the user's image
  country: string; // New property for the user's country
};

export type Product = {
  id: string;
  name: string;
  price: number; // Price in cents
  image_url: string;
  description: string;
  followers_count: number; // Number of followers
};

export type Follower = {
  id: string;
  name: string;
  comments: string;
  likes: number; // Number of likes given by the follower
};

export type Payment = {
  id: string;
  user_id: string;
  amount: number; // Amount in cents
  status: "pending" | "paid";
  date: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type Message = {
  id: string;
  user_id: string;
  content: string;
  date: string;
};

export type PaymentStatus = "pending" | "paid";
