export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  sizes: string[];
  stock: number;
  description: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

export interface CartItem extends Product {
  cartItemId: string;
  quantity: number;
  selectedSize: string;
}
