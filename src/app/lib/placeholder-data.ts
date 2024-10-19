const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User One",
    email: "user1@example.com",
    password: "123456",
    image_url: "/users/user1.png",
    country: "USA",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "User Two",
    email: "user2@example.com",
    password: "123456",
    image_url: "/users/user2.png",
    country: "Canada",
  },
  // Add more users...
];

const products = [
  {
    id: "product1",
    name: "Product One",
    price: 1999, // $19.99
    image_url: "/products/product1.png",
    description: "Description for product one.",
    followers_count: 10,
  },
  {
    id: "product2",
    name: "Product Two",
    price: 2999, // $29.99
    image_url: "/products/product2.png",
    description: "Description for product two.",
    followers_count: 15,
  },
  // Add more products...
];

const payments = [
  {
    id: "payment1",
    user_id: users[0].id,
    amount: 1999,
    status: "paid",
    date: "2023-01-15",
  },
  {
    id: "payment2",
    user_id: users[1].id,
    amount: 2999,
    status: "pending",
    date: "2023-02-20",
  },
  // Add more payments...
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  // Add the other months...
];

const messages = [
  {
    id: "message1",
    user_id: users[0].id,
    content: "Great product!",
    date: "2023-03-01",
  },
  // Add more messages...
];

export { users, products, payments, revenue, messages };
