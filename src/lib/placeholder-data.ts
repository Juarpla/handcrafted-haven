import {Comment, Follower, Product, Sale, Salers} from "./definitions";

const salers: Salers[] = [
  {
    id: "5fdc7aaf-d067-4d0a-aeb5-2e7b8317f9b3",
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "securepassword123",
    profile_picture: "/public/images/saler2.jpg",
  },
  {
    id: "c87025a3-6182-4b57-8c8a-118b4e567b14",
    name: "Bob Smith",
    email: "bob@example.com",
    password: "anothersecurepassword",
    profile_picture: "/public/images/saler1.jpg",
  },
  {
    id: "a7d7f6e2-4567-4b21-bb93-221d8ef5b1e3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "yetanothersecurepassword",
    profile_picture: "/public/images/saler3.jpg",
  },
  {
    id: "d84f76b3-9021-42d2-a3c7-eec8f68a1a34",
    name: "Dani Prince",
    email: "dani@example.com",
    password: "supersecurepassword",
    profile_picture: "/public/images/saler4.jpg",
  },
];

const products: Product[] = [
  {
    id: "wooden-sculpture-" + Math.random().toString(36).substr(2, 9),
    productname: "Wooden Sculpture",
    description: "This beautifully carved wooden sculpture was crafted by a local artist who finds inspiration in the natural curves and textures of the wood. Each piece is meticulously shaped by hand, with attention to detail that brings the wood to life.",
    price: 40,
    image_url: "/public/images/wooden_sculpture.jpg",
    stock_quantity: 5
  },
  {
    id: "handwoven-basket-" + Math.random().toString(36).substr(2, 9),
    productname: "Handwoven Basket",
    description: "Woven with care by a skilled artisan, this sturdy and elegant handwoven basket is the result of a centuries-old tradition. Crafted from natural fibers, each basket is one-of-a-kind.",
    price: 35,
    image_url: "/public/images/handwoven_basket.jpg", 
    stock_quantity: 8
  },
  {
    id: "ceramic-vase-" + Math.random().toString(36).substr(2, 9),
    productname: "Ceramic Vase",
    description: "This hand-thrown ceramic vase is a true work of art. The potter, a local craftsman with a passion for ceramics, carefully shapes each piece on a pottery wheel.",
    price: 50,
    image_url: "/public/images/ceramic_vase.jpg",
    stock_quantity: 3
  },
  {
    id: "macrame-wall-" + Math.random().toString(36).substr(2, 9),
    productname: "Macramé Wall Hanging",
    description: "Crafted with an eye for detail and a love of traditional techniques, this intricate macramé wall hanging brings a warm, bohemian touch to any space.",
    price: 65,
    image_url: "/public/images/macrame_wall_hanging.jpg",
    stock_quantity: 4
  },
  {
    id: "silk-scarf-" + Math.random().toString(36).substr(2, 9),
    productname: "Hand-Painted Silk Scarf",
    description: "This luxurious hand-painted silk scarf is a true work of wearable art. The artist, who draws inspiration from the natural world, carefully applies vibrant dyes to the smooth silk surface.",
    price: 80,
    image_url: "/public/images/silk_scarf.jpg",
    stock_quantity: 6
  },
  {
    id: "suncatcher-" + Math.random().toString(36).substr(2, 9),
    productname: "Stained Glass Suncatcher",
    description: "Handcrafted by a local artisan with a passion for the ancient art of stained glass, this colorful suncatcher will brighten any window it graces.",
    price: 45,
    image_url: "/public/images/stained_glass_suncatcher.jpg",
    stock_quantity: 7
  },
  {
    id: "leather-journal-" + Math.random().toString(36).substr(2, 9),
    productname: "Leather Journal",
    description: "This handbound leather journal is the perfect companion for the creative mind. Crafted by a local bookbinder with years of experience.",
    price: 30,
    image_url: "/public/images/leather_journal.jpg",
    stock_quantity: 10
  },
  {
    id: "felted-wool-" + Math.random().toString(36).substr(2, 9),
    productname: "Felted Wool Animal",
    description: "These adorable felted wool animal figurines are the result of a painstaking process, lovingly crafted by a local artisan with a keen eye for detail.",
    price: 25,
    image_url: "/public/images/felted_wool_animal.jpg",
    stock_quantity: 12
  },
  {
    id: "soap-set-" + Math.random().toString(36).substr(2, 9),
    productname: "Handmade Soap Set",
    description: "Treat your senses to the luxurious experience of these artisanal handmade soaps. Crafted by a local soapmaker using natural ingredients.",
    price: 20,
    image_url: "/public/images/handmade_soap_set.jpg",
    stock_quantity: 15
  },
  {
    id: "table-runner-" + Math.random().toString(36).substr(2, 9),
    productname: "Quilted Table Runner",
    description: "This handcrafted quilted table runner is the result of countless hours of meticulous work by a local textile artist.",
    price: 55,
    image_url: "/public/images/quilted_table_runner.jpg",
    stock_quantity: 4
  },
  {
    id: "glass-ornament-" + Math.random().toString(36).substr(2, 9),
    productname: "Blown Glass Ornament",
    description: "These delicate hand-blown glass ornaments are the work of a talented local artisan who has honed her craft over many years.",
    price: 35,
    image_url: "/public/images/blown_glass_ornament.jpg",
    stock_quantity: 8
  },
  {
    id: "pillow-cover-" + Math.random().toString(36).substr(2, 9),
    productname: "Embroidered Pillow Cover",
    description: "This exquisite hand-embroidered pillow cover is a testament to the artistry and skill of local artisans.",
    price: 40,
    image_url: "/public/images/embroidered_pillow_cover.jpg",
    stock_quantity: 6
  },
  {
    id: "gemstone-pendant-" + Math.random().toString(36).substr(2, 9),
    productname: "Wire-Wrapped Gemstone Pendant",
    description: "This unique wire-wrapped pendant features a natural gemstone that has been carefully selected and incorporated into a one-of-a-kind design.",
    price: 45,
    image_url: "/public/images/wire_wrapped_pendant.jpg",
    stock_quantity: 9
  },
  {
    id: "wooden-spoon-" + Math.random().toString(36).substr(2, 9),
    productname: "Carved Wooden Spoon Set",
    description: "These hand-carved wooden spoons are not only functional kitchen tools but also beautiful works of art.",
    price: 30,
    image_url: "/public/images/wooden_spoon_set.jpg",
    stock_quantity: 7
  },
  {
    id: "flower-art-" + Math.random().toString(36).substr(2, 9),
    productname: "Pressed Flower Art Frame",
    description: "This framed artwork featuring delicately pressed flowers is a true testament to the beauty of nature and the skill of the artist who created it.",
    price: 60,
    image_url: "/public/images/pressed_flower_art.jpg",
    stock_quantity: 5
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
