import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Star, Truck, RefreshCcw, ShieldCheck, ChevronRight } from "lucide-react";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState("");
  useEffect(() => {
    if (!loading && products.length > 0) {
      const found = products.find((p) => p.id === id);
      if (found) {
        setProduct(found);
        setSelectedSize(found.sizes[0]);
        setActiveImage(found.image);
      } else {
        navigate("/shop");
      }
    }
  }, [id, products, loading, navigate]);
  if (loading || !product) {
    return <div className="pt-24 pb-16 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-gray-200 rounded-2xl" />
          <div className="space-y-6 pt-8">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-1/4" />
            <div className="h-24 bg-gray-200 rounded w-full" />
            <div className="h-12 bg-gray-200 rounded w-full" />
          </div>
        </div>
      </div>;
  }
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
    }
  };
  const handleBuyNow = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
      navigate("/checkout");
    }
  };
  return <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {
    /* Breadcrumbs */
  }
        <nav className="flex text-sm text-gray-500 mb-8">
          <ol className="flex items-center space-x-2">
            <li><button onClick={() => navigate("/")} className="hover:text-black">Home</button></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li><button onClick={() => navigate("/shop")} className="hover:text-black">Shop</button></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li className="text-black font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {
    /* Image Gallery */
  }
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:w-24 hide-scrollbar">
              {product.images.map((img, idx) => <button
    key={idx}
    onClick={() => setActiveImage(img)}
    className={`flex-shrink-0 w-20 lg:w-full aspect-[3/4] rounded-lg overflow-hidden border-2 transition-colors ${activeImage === img ? "border-black" : "border-transparent hover:border-gray-300"}`}
  >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>)}
            </div>
            <div className="flex-1 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
              <motion.img
    key={activeImage}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    src={activeImage}
    alt={product.name}
    className="w-full h-full object-cover"
  />
            </div>
          </div>

          {
    /* Product Info */
  }
          <div className="flex flex-col pt-4 lg:pt-8">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-gray-900 mb-6">${product.price.toFixed(2)}</p>

            {
    /* Reviews summary */
  }
            {product.reviews.length > 0 && <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <span className="text-sm text-gray-500 underline underline-offset-4 cursor-pointer">
                  {product.reviews.length} reviews
                </span>
              </div>}

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {
    /* Size Selection */
  }
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
                <button className="text-sm text-gray-500 underline underline-offset-4 hover:text-black">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => <button
    key={size}
    onClick={() => setSelectedSize(size)}
    className={`py-3 text-sm font-medium rounded-md border transition-all ${selectedSize === size ? "border-black bg-black text-white" : "border-gray-300 bg-white text-gray-900 hover:border-black"}`}
  >
                    {size}
                  </button>)}
              </div>
            </div>

            {
    /* Stock Indicator */
  }
            {product.stock < 10 && product.stock > 0 && <div className="flex items-center gap-2 text-red-600 text-sm font-medium mb-6 bg-red-50 p-3 rounded-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                </span>
                Only {product.stock} items left in stock - order soon.
              </div>}

            {
    /* Actions */
  }
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
    onClick={handleAddToCart}
    disabled={product.stock === 0}
    className="flex-1 bg-white border-2 border-black text-black py-4 rounded-full font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
                Add to Cart
              </button>
              <button
    onClick={handleBuyNow}
    disabled={product.stock === 0}
    className="flex-1 bg-black border-2 border-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
                {product.stock === 0 ? "Out of Stock" : "Buy It Now"}
              </button>
            </div>

            {
    /* Guarantees */
  }
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-b">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCcw className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Free Returns</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
