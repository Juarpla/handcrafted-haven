// This file contains type definitions for your data.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string; // Nueva propiedad para la imagen del usuario
  country: string; // Nueva propiedad para el país del usuario
};

export type Product = {
  id: string;
  name: string;
  price: number; // Precio en centavos
  image_url: string;
  description: string;
  followers_count: number; // Cantidad de seguidores
};

export type Follower = {
  id: string;
  name: string;
  comments: string;
  likes: number; // Cantidad de "me gusta" dados por el seguidor
};

export type Payment = {
  id: string;
  user_id: string;
  amount: number; // Monto en centavos
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
