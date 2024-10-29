export type Seller = {
  id: string;
  name: string;
  email: string;
  password: string;
  profile_picture: string;
};

export type Product = {
  id: string;
  productname: string;
  description: string;
  price: number;
  image_url: string;
  stock_quantity: number;
  seller_id: string;
};

export type Follower = {
  id: string;
  user_id: string;
  follower_id: string;
  follow_date: string;
};

export type Sale = {
  id: string;
  product_id: string;
  user_id: string;
  amount: number;
  status: string;
  date: string;
};

export type Comment = {
  id: string;
  user_name: string;
  rating: number;
  product_id: string;
  content: string;
  timestamp: string;
};
