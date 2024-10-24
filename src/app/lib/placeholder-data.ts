import {Comment, Follower, Product, Sale, Salers} from "./definitions";

const salers: Salers[] = [
  {
    id: "5fdc7aaf-d067-4d0a-aeb5-2e7b8317f9b3",
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "securepassword123",
    profile_picture: "../ui/images/saler2.jpg",
  },
  {
    id: "c87025a3-6182-4b57-8c8a-118b4e567b14",
    name: "Bob Smith",
    email: "bob@example.com",
    password: "anothersecurepassword",
    profile_picture: "../ui/images/saler1.jpg",
  },
  {
    id: "a7d7f6e2-4567-4b21-bb93-221d8ef5b1e3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "yetanothersecurepassword",
    profile_picture: "../ui/images/saler3.jpg",
  },
  {
    id: "d84f76b3-9021-42d2-a3c7-eec8f68a1a34",
    name: "Dani Prince",
    email: "diana@example.com",
    password: "supersecurepassword",
    profile_picture: "../ui/images/saler4.jpg",
  },
];

const products: Product[] = [
  {
    id: "1b6d4e30-45fd-402d-b44b-4b2a72909ad7",
    productname: "Ceramic Vase",
    description: "Handcrafted ceramic vase with intricate floral designs.",
    price: 45,
    image_url: "../ui/images/product 3.jpeg",
    stock_quantity: 30,
  },
  {
    id: "a3f8c772-70b8-4f59-b21a-1d52be1c7623",
    productname: "Wooden Jewelry Box",
    description: "Elegant wooden box carved with traditional patterns.",
    price: 55,
    image_url: "../ui/images/wooden.webp",
    stock_quantity: 40,
  },
  {
    id: "b49d1b7f-637a-4122-9350-ef9347b72d2e",
    productname: "Handwoven Basket",
    description: "Colorful handwoven basket made from natural fibers.",
    price: 20,
    image_url: "../ui/images/product 2.jpeg",
    stock_quantity: 100,
  },
  {
    id: "e1b3c987-9a2c-44c8-883d-4b688f89d04f",
    productname: "Pottery Mug Set",
    description: "Set of 4 pottery mugs with unique hand-painted designs.",
    price: 35,
    image_url: "../ui/images/pottery.webp",
    stock_quantity: 25,
  },
  {
    id: "5e5b2c34-17f7-4a29-9f87-fc2747e57df2",
    productname: "Hand-painted Ceramic Plate",
    description: "Decorative ceramic plate with vibrant hand-painted designs.",
    price: 25,
    image_url: "../ui/images/handPainted.jpg",
    stock_quantity: 70,
  },
  {
    id: "3a5e6a9b-b9e2-4b3b-95f1-829b29d7dbf8",
    productname: "Woolen Scarf",
    description: "Soft, hand-knitted woolen scarf in various colors.",
    price: 30,
    image_url: "../ui/images/woolenscarf.webp",
    stock_quantity: 50,
  },
  {
    id: "cb6a5e3d-88d4-4a1c-8cb7-267acb6f1e27",
    productname: "Leather Wallet",
    description: "Handcrafted leather wallet with multiple compartments.",
    price: 40,
    image_url: "../ui/images/leatherWallet.webp",
    stock_quantity: 35,
  },
  {
    id: "72f9b7f8-8d5e-4b1e-8e5f-c7d8a4f2b317",
    productname: "Bamboo Cutting Board",
    description: "Durable bamboo cutting board with a smooth finish.",
    price: 18,
    image_url: "../ui/images/bambooCuttingBoard.jpg",
    stock_quantity: 80,
  },
  {
    id: "a8f9d6c1-5b5e-4731-90d4-1b2a7c5e947d",
    productname: "Handmade Soap Set",
    description: "Set of 3 natural, handmade soaps with organic ingredients.",
    price: 22,
    image_url: "../ui/images/handmadesoapset.webp",
    stock_quantity: 90,
  },
];

const followers: Follower[] = [
  {
    id: "e4df71f6-aba0-482e-9000-523d8a32d7e1",
    user_id: "5fdc7aaf-d067-4d0a-aeb5-2e7b8317f9b3",
    follower_id: "c87025a3-6182-4b57-8c8a-118b4e567b14",
    follow_date: "2024-10-18",
  },
  {
    id: "f7b6d8e1-2f0e-45f6-b37e-bf7c1db6f5a2",
    user_id: "5fdc7aaf-d067-4d0a-aeb5-2e7b8317f9b3",
    follower_id: "a7d7f6e2-4567-4b21-bb93-221d8ef5b1e3",
    follow_date: "2024-10-19",
  },
  {
    id: "b4e5d9c0-329a-4b72-901b-6e9472b7f9d3",
    user_id: "c87025a3-6182-4b57-8c8a-118b4e567b14",
    follower_id: "d84f76b3-9021-42d2-a3c7-eec8f68a1a34",
    follow_date: "2024-10-20",
  },
];

const sales: Sale[] = [
  {
    id: "a5f53d6e-cf2e-4f7c-849a-2f58e7a6e946",
    product_id: "1b6d4e30-45fd-402d-b44b-4b2a72909ad7",
    user_id: "5fdc7aaf-d067-4d0a-aeb5-2e7b8317f9b3",
    amount: 2,
    status: "completed",
    date: "2024-10-17",
  },
];

const comments: Comment[] = [
  {
    id: "e4cfb845-b01d-47c1-84bb-9cfd2e8a6f7a",
    user_id: "c87025a3-6182-4b57-8c8a-118b4e567b14",
    product_id: "75f1b994-b5b3-453f-a8df-fdd0b8b1ef14",
    content: "This keyboard is amazing!",
    timestamp: "2024-10-18T12:34:56Z",
  },
];

export {salers, comments, sales, followers, products};
