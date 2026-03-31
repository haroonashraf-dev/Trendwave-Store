import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
export function Footer() {
  return <footer className="bg-gray-50 border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black group-hover:scale-110 transition-transform duration-500 ease-out">
                <rect width="100" height="100" rx="24" fill="currentColor" />
                <path d="M25 50C25 50 35 30 50 50C65 70 75 50 75 50" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-serif text-2xl font-bold tracking-tight text-black">
                TrendWave<span className="text-gray-400">.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Curated fashion for the modern minimalist. Elevate your everyday wardrobe with our premium essentials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop?category=New" className="text-gray-500 hover:text-black text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?category=Shirts" className="text-gray-500 hover:text-black text-sm transition-colors">Shirts</Link></li>
              <li><Link to="/shop?category=Pants" className="text-gray-500 hover:text-black text-sm transition-colors">Pants</Link></li>
              <li><Link to="/shop?category=Outerwear" className="text-gray-500 hover:text-black text-sm transition-colors">Outerwear</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-500 hover:text-black text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-500 hover:text-black text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-black text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/size-guide" className="text-gray-500 hover:text-black text-sm transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 min-w-0 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
    required
  />
              <button
    type="submit"
    className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors flex items-center justify-center"
  >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {(/* @__PURE__ */ new Date()).getFullYear()} TrendWave Store. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-black text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-black text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
}
