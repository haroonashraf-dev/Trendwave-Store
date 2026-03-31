import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

// In-memory database for products
let products = [
  {
    id: "1",
    name: "Minimalist Linen Shirt",
    price: 89.99,
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 5,
    description: "A breathable, lightweight linen shirt perfect for warm weather. Features a relaxed fit and premium natural fibers.",
    reviews: [
      { id: "r1", user: "Alex M.", rating: 5, comment: "Perfect fit and great quality!" }
    ]
  },
  {
    id: "2",
    name: "Urban Cargo Pants",
    price: 119.50,
    category: "Pants",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["30", "32", "34", "36"],
    stock: 12,
    description: "Durable cotton-twill cargo pants with multiple utility pockets and a modern tapered silhouette.",
    reviews: []
  },
  {
    id: "3",
    name: "Essential Oversized Tee",
    price: 45.00,
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 2,
    description: "Heavyweight cotton t-shirt with a dropped shoulder and relaxed oversized fit. The perfect everyday staple.",
    reviews: [
      { id: "r2", user: "Sarah J.", rating: 4, comment: "Love the oversized look, very comfortable." }
    ]
  },
  {
    id: "4",
    name: "Classic Denim Jacket",
    price: 149.99,
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L"],
    stock: 8,
    description: "Timeless denim jacket with a vintage wash. Features branded hardware and a slightly cropped fit.",
    reviews: []
  },
  {
    id: "5",
    name: "Pleated Trousers",
    price: 95.00,
    category: "Pants",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["28", "30", "32", "34"],
    stock: 15,
    description: "Elegant pleated trousers that can be dressed up or down. Made from a wrinkle-resistant wool blend.",
    reviews: []
  },
  {
    id: "6",
    name: "Knit Polo Sweater",
    price: 79.00,
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1618517351616-3898bd307a5b?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1618517351616-3898bd307a5b?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 3,
    description: "Soft cotton-cashmere blend polo sweater. Features a retro-inspired collar and ribbed trims.",
    reviews: []
  },
  {
    id: "7",
    name: "Lightweight Linen Shorts",
    price: 55.00,
    category: "Summer Collection",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800"],
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
    description: "Breathable linen shorts perfect for beach days and warm summer evenings.",
    reviews: []
  },
  {
    id: "8",
    name: "Tropical Resort Shirt",
    price: 65.00,
    category: "Summer Collection",
    image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1604644401890-0bd678c83788?auto=format&fit=crop&q=80&w=800"],
    sizes: ["S", "M", "L", "XL"],
    stock: 15,
    description: "Relaxed fit resort shirt featuring a subtle tropical print. Made from eco-friendly viscose.",
    reviews: []
  },
  {
    id: "9",
    name: "Classic Aviator Sunglasses",
    price: 89.00,
    category: "Summer Collection",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"],
    sizes: ["One Size"],
    stock: 30,
    description: "Timeless aviator sunglasses with polarized lenses and UV400 protection.",
    reviews: []
  },
  {
    id: "10",
    name: "Woven Straw Fedora",
    price: 45.00,
    category: "Summer Collection",
    image: "https://images.unsplash.com/photo-1580247817119-c6cb496270a4?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1580247817119-c6cb496270a4?auto=format&fit=crop&q=80&w=800"],
    sizes: ["One Size"],
    stock: 10,
    description: "Hand-woven straw hat providing excellent sun protection with a classic silhouette.",
    reviews: []
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

  app.post("/api/products", (req, res) => {
    const newProduct = {
      ...req.body,
      id: Date.now().toString(),
      reviews: []
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

  app.put("/api/products/:id", (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
      products[index] = { ...products[index], ...req.body };
      res.json(products[index]);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

  app.delete("/api/products/:id", (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
      const deleted = products.splice(index, 1);
      res.json(deleted[0]);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
