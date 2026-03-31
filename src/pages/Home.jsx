import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
export function Home() {
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);
  const summerProducts = products.filter((p) => p.category === "Summer Collection").slice(0, 4);
  return <div className="flex flex-col min-h-screen">
      {
    /* Hero Section */
  }
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000"
    alt="Fashion Hero"
    className="w-full h-full object-cover object-center"
  />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight"
  >
            Elevate Your Everyday Style
          </motion.h1>
          <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
  >
            Discover our curated collection of premium essentials designed for the modern minimalist. Quality that speaks for itself.
          </motion.p>
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
  >
            <Link
    to="/shop"
    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white hover:bg-gray-100 transition-colors rounded-full"
  >
              Shop the Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {
    /* Features Section */
  }
      <section className="py-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Global Shipping</h3>
              <p className="text-gray-500 text-sm">On all orders over $150. Fast and reliable delivery worldwide.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <RefreshCcw className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-500 text-sm">30-day hassle-free return policy. We want you to love your purchase.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Checkout</h3>
              <p className="text-gray-500 text-sm">Your payment information is processed securely with end-to-end encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {
    /* Featured Products */
  }
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 mb-2">Featured Arrivals</h2>
              <p className="text-gray-500">Handpicked selections for the season.</p>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center text-sm font-medium text-black hover:underline underline-offset-4">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {loading ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[3/4] rounded-xl mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                </div>)}
            </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => <motion.div
    key={product.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative flex flex-col"
  >
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-4">
                    <img
    src={product.image}
    alt={product.name}
    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
    loading="lazy"
  />
                    {product.stock < 5 && product.stock > 0 && <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Only {product.stock} left
                      </div>}
                    {
    /* Quick Add Overlay */
  }
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button
    onClick={(e) => {
      e.preventDefault();
      addToCart(product, product.sizes[0]);
    }}
    className="w-full bg-white/90 backdrop-blur-sm text-black font-medium py-3 rounded-lg hover:bg-black hover:text-white transition-colors shadow-lg"
  >
                        Quick Add
                      </button>
                    </div>
                  </Link>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        <Link to={`/product/${product.id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                  </div>
                </motion.div>)}
            </div>}
          <div className="mt-8 sm:hidden text-center">
            <Link to="/shop" className="inline-flex items-center text-sm font-medium text-black hover:underline underline-offset-4">
              View All Products <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {
    /* Summer Collection */
  }
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 mb-2">Summer Collection</h2>
              <p className="text-gray-500">Get ready for the sun with our latest warm-weather essentials.</p>
            </div>
            <Link to="/shop?category=Summer%20Collection" className="hidden sm:flex items-center text-sm font-medium text-black hover:underline underline-offset-4">
              Shop Summer <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {loading ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[3/4] rounded-xl mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                </div>)}
            </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {summerProducts.map((product, index) => <motion.div
    key={product.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative flex flex-col"
  >
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-4">
                    <img
    src={product.image}
    alt={product.name}
    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
    loading="lazy"
  />
                    {product.stock < 5 && product.stock > 0 && <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Only {product.stock} left
                      </div>}
                    {
    /* Quick Add Overlay */
  }
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button
    onClick={(e) => {
      e.preventDefault();
      addToCart(product, product.sizes[0]);
    }}
    className="w-full bg-white/90 backdrop-blur-sm text-black font-medium py-3 rounded-lg hover:bg-black hover:text-white transition-colors shadow-lg"
  >
                        Quick Add
                      </button>
                    </div>
                  </Link>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        <Link to={`/product/${product.id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                  </div>
                </motion.div>)}
            </div>}
          <div className="mt-8 sm:hidden text-center">
            <Link to="/shop?category=Summer%20Collection" className="inline-flex items-center text-sm font-medium text-black hover:underline underline-offset-4">
              Shop Summer <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {
    /* Testimonial Section */
  }
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />)}
          </div>
          <blockquote className="text-2xl md:text-4xl font-serif font-medium leading-tight mb-8">
            "The quality of the materials and the attention to detail is unmatched. TrendWave has completely transformed my wardrobe."
          </blockquote>
          <cite className="text-sm uppercase tracking-widest text-gray-400 not-italic">
            — Michael T., Verified Buyer
          </cite>
        </div>
      </section>
    </div>;
}
