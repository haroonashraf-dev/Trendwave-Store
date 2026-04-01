import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
export function Footer() {
  return <footer className="bg-gray-50 border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-14">

  {/* Brand */}
  <div>
    <Link to="/" className="flex items-center gap-3 group mb-5 inline-flex">
      <svg
        width="34"
        height="34"
        viewBox="0 0 100 100"
        fill="none"
        className="text-black group-hover:scale-110 transition-transform duration-500 ease-out"
      >
        <rect width="100" height="100" rx="24" fill="currentColor" />
        <path
          d="M25 50C25 50 35 30 50 50C65 70 75 50 75 50"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="font-serif text-2xl font-bold tracking-tight text-black">
        TrendWave<span className="text-gray-400">.</span>
      </span>
    </Link>

    <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
      Minimal, modern fashion designed for everyday confidence. 
      Premium essentials crafted for style and comfort.
    </p>

    <div className="flex space-x-4">
      {[Instagram, Twitter, Facebook].map((Icon, i) => (
        <a
          key={i}
          href="#"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  </div>

  {/* Shop */}
  <div>
    <h3 className="font-semibold text-xs tracking-widest uppercase mb-5 text-gray-900">
      Shop
    </h3>
    <ul className="space-y-3">
      <li>
        <Link to="/shop?category=New" className="text-gray-500 hover:text-black text-sm transition">
          New Arrivals
        </Link>
      </li>
      <li>
        <Link to="/shop?category=Shirts" className="text-gray-500 hover:text-black text-sm transition">
          Shirts
        </Link>
      </li>
      <li>
        <Link to="/shop?category=Pants" className="text-gray-500 hover:text-black text-sm transition">
          Pants
        </Link>
      </li>
    </ul>
  </div>

  {/* Support */}
  <div>
    <h3 className="font-semibold text-xs tracking-widest uppercase mb-5 text-gray-900">
      Support
    </h3>
    <ul className="space-y-3">
      
      {/* 🔥 Highlighted CTA */}
      <li>
        <Link
          to="/hire-me"
          className="text-black font-medium text-sm hover:underline"
        >
          Work With Us →
        </Link>
      </li>

      <li>
        <Link to="/contact" className="text-gray-500 hover:text-black text-sm transition">
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="/shipping" className="text-gray-500 hover:text-black text-sm transition">
          Shipping & Returns
        </Link>
      </li>
    </ul>
  </div>

  {/* Newsletter */}
  <div>
    <h3 className="font-semibold text-xs tracking-widest uppercase mb-5 text-gray-900">
      Newsletter
    </h3>

    <p className="text-gray-500 text-sm mb-5 leading-relaxed">
      Get exclusive drops, style updates, and special offers.
    </p>

    <form className="flex items-center overflow-hidden rounded-full border border-gray-300 focus-within:border-black transition">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
        required
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition flex items-center justify-center"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  </div>

</div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
  <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
    &copy; {(/* @__PURE__ */ new Date()).getFullYear()} TrendWave Store. All rights reserved.
  </p>

  {/* 👇 YOUR BRANDING (PROFESSIONAL + SUBTLE) */}
  <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center">
    Designed & Developed by
    <a
      href="https://api.whatsapp.com/send?phone=923137386619&text=Hi%20Haroon%2C%20I%20just%20visited%20your%20website%20and%20I%27m%20interested%20in%20getting%20a%20store%20like%20this.%20Can%20we%20discuss%20the%20details%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black font-medium hover:underline ml-1"
    >
      Haroon Ashraf
    </a>
    <span className="ml-1 text-gray-500">• Need a store like this?</span>
  </p>

  <div className="flex space-x-6">
    <Link to="/privacy" className="text-gray-400 hover:text-black text-sm transition-colors">
      Privacy Policy
    </Link>
    <Link to="/terms" className="text-gray-400 hover:text-black text-sm transition-colors">
      Terms of Service
    </Link>
  </div>
</div>
      </div>
    </footer>;
}
