import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

// In-memory database for products
let products = [
  {
    id: "1",
    name: "Minimalist Linen Shirt",
    price: 19.99,
    category: "T-Shirts",
    image:
      "https://cdn.shopify.com/s/files/1/0639/9927/9161/files/SEOon_Gemini_Generated_Image_i4t8bii4t8bii4t8.jpg?v=1746792673",
    images: [
      "https://cdn.shopify.com/s/files/1/0639/9927/9161/files/SEOon_Gemini_Generated_Image_i4t8bii4t8bii4t8.jpg?v=1746792673",
      "https://2minimals.com/cdn/shop/files/angel_AI2.png?v=1758015399&width=500https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ns0KAq_ggpFk8mfz3-UnzRQKR4XILbwr5SVsieMviH7UaV0zuoB1L-E&s",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 5,
    description:
      "A breathable, lightweight linen shirt perfect for warm weather. Features a relaxed fit and premium natural fibers.",
    reviews: [
      {
        id: "r1",
        user: "Alex M.",
        rating: 5,
        comment: "Perfect fit and great quality!",
      },
    ],
  },
  {
    id: "2",
    name: "Premium Linen Relaxed Shirt",
    price: 30.0,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Sand", "Olive"],
    stock: 10,
    description:
      "Breathable linen shirt with a relaxed fit. Ideal for hot weather with a premium, minimal aesthetic.",
    reviews: [],
  },
  {
    id: "3",
    name: "Essential Oversized Tee",
    price: 25.0,
    category: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 2,
    description:
      "Heavyweight cotton t-shirt with a dropped shoulder and relaxed oversized fit. The perfect everyday staple.",
    reviews: [
      {
        id: "r2",
        user: "Sarah J.",
        rating: 4,
        comment: "Love the oversized look, very comfortable.",
      },
    ],
  },
  {
    id: "4",
    name: "Classic Slim Fit Formal Shirt",
    price: 30.0,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Grey"],
    stock: 20,
    description:
      "A sharp slim-fit formal shirt crafted from breathable cotton. Perfect for office wear and formal occasions.",
    reviews: [],
  },
  {
    id: "5",
    name: "Lightweight Linen Shorts",
    price: 29.99,
    category: "Summer Collection",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
    description:
      "Breathable linen shorts perfect for beach days and warm summer evenings.",
    reviews: [],
  },
  {
    id: "6",
    name: "Men Slim-Fit Formal Pants",
    price: 39.99,
    category: "Formal Pants",
    image:
      "https://www.hancockfashion.com/cdn/shop/files/2168navy_5.jpg?v=1734412400&width=1800",
    images: [
      "https://www.hancockfashion.com/cdn/shop/files/2168navy_3.jpg?v=1734412400&width=1800",
      "https://www.hancockfashion.com/cdn/shop/files/2168navy_2.jpg?v=1734412401&width=1800",
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Black", "Charcoal", "Navy"],
    stock: 20,
    description:
      "Classic slim-fit formal pants for office or business events. Tailored and comfortable.",
    reviews: [],
    badge: "Best Seller",
  },

  {
    id: "7",
    name: "Urban Cargo Pants",
    price: 30.5,
    category: "Pants",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["30", "32", "34", "36"],
    stock: 10,
    description:
      "Durable cotton-twill cargo pants with multiple utility pockets and a modern tapered silhouette.",
    reviews: [],
  },
  {
    id: "8",
    name: "Slim Fit Stretch Chinos",
    price: 25.0,
    category: "Pants",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["Beige", "Navy", "Olive"],
    stock: 15,
    description:
      "Versatile chinos with stretch fabric for all-day comfort. Perfect for casual and semi-formal outfits.",
    reviews: [],
    badge: "Best Seller",
  },

  {
    id: "10",
    name: "Minimalist Logo Cap",
    price: 20.0,
    category: "Summer Collection",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ["One Size"],
    stock: 2,
    colors: ["Black", "White", "Brown"],
    stock: 30,
    description:
      "Clean and minimal cap with premium embroidery. Adjustable fit designed for everyday wear.",
    reviews: [],
  },
  {
    id: "11",
    name: "Classic Aviator Sunglasses",
    price: 30.0,
    category: "Summer Collection",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["One Size"],
    stock: 30,
    description:
      "Timeless aviator sunglasses with polarized lenses and UV400 protection.",
    reviews: [],
  },
  {
    id: "9",
    name: "Mens Kurta Shalwar",
    price: 95.0,
    category: "Summer Collection",
    image:
      "https://img.drz.lazcdn.com/g/kf/S84d770323d2045e1a20b9d8ff8bd2468Y.jpg_720x720q80.jpg_.webp",
    images: [
      "https://img.drz.lazcdn.com/g/kf/S84d770323d2045e1a20b9d8ff8bd2468Y.jpg_720x720q80.jpg_.webp",
    ],
    sizes: ["28", "30", "32", "34"],
    stock: 15,
    description:
      "Elegant pleated trousers that can be dressed up or down. Made from a wrinkle-resistant wool blend.",
    reviews: [],
  },
  {
    id: "13",
    name: "Classic Denim Jacket",
    price: 79.99,
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=800",
    ],
    sizes: ["S", "M", "L"],
    stock: 8,
    description:
      "Timeless denim jacket with a vintage wash. Features branded hardware and a slightly cropped fit.",
    reviews: [],
  },
];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(express.json());

  // API Routes
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p.id === req.params.id);
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
      reviews: [],
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

  app.put("/api/products/:id", (req, res) => {
    const index = products.findIndex((p) => p.id === req.params.id);
    if (index !== -1) {
      products[index] = { ...products[index], ...req.body };
      res.json(products[index]);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

  app.delete("/api/products/:id", (req, res) => {
    const index = products.findIndex((p) => p.id === req.params.id);
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
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
