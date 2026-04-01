import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "Hire Me", path: "/hire-me" }
  ];
  return <header
    className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 border-b",
      isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-xl border-gray-200 shadow-sm py-3" : "bg-white/60 backdrop-blur-lg border-gray-200/30 py-5"
    )}
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {
    /* Mobile menu button */
  }
          <div className="flex items-center md:hidden">
            <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="p-2 -ml-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100/50"
  >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {
    /* Logo */
  }
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black group-hover:scale-110 transition-transform duration-500 ease-out">
              <rect width="100" height="100" rx="24" fill="currentColor" />
              <path d="M25 50C25 50 35 30 50 50C65 70 75 50 75 50" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-serif text-2xl font-bold tracking-tight text-black">
              TrendWave<span className="text-gray-400">.</span>
            </span>
          </Link>

          {
    /* Desktop Navigation */
  }
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => <Link
    key={link.name}
    to={link.path}
    className={cn(
      "relative text-sm font-medium transition-colors hover:text-black group py-2",
      location.pathname === link.path ? "text-black" : "text-gray-500"
    )}
  >
                {link.name}
                <span className={cn(
    "absolute inset-x-0 bottom-0 h-[2px] bg-black transition-transform duration-300 ease-out origin-left rounded-full",
    location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
  )} />
              </Link>)}
          </nav>

          {
    /* Icons */
  }
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className="p-2.5 text-gray-600 hover:text-black hidden sm:flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-all">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <Link to="/admin" className="p-2.5 text-gray-600 hover:text-black hidden sm:flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-all">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <button
    onClick={() => setIsCartOpen(true)}
    className="p-2.5 text-gray-600 hover:text-black relative flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-all group"
  >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              {itemCount > 0 && <span className="absolute top-1.5 right-1.5 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                  {itemCount}
                </span>}
            </button>
          </div>
        </div>
      </div>

      {
    /* Mobile Menu */
  }
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
  >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => <Link
    key={link.name}
    to={link.path}
    className={cn(
      "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
      location.pathname === link.path ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50 hover:text-black"
    )}
  >
                  {link.name}
                </Link>)}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
    to="/admin"
    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-black rounded-xl transition-colors"
  >
                  <User className="w-5 h-5" />
                  Admin Dashboard
                </Link>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}
