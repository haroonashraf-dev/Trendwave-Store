import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Checkout } from './pages/Checkout';
import { AdminDashboard } from './pages/AdminDashboard';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <CartDrawer />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/admin" element={<AdminDashboard />} />
                {/* Fallback routes */}
                <Route path="/collections" element={<Shop />} />
                <Route path="/about" element={<div className="pt-32 pb-24 text-center min-h-screen"><h1 className="text-4xl font-serif">About Us</h1><p className="mt-4 text-gray-500">Coming soon.</p></div>} />
                <Route path="*" element={<div className="pt-32 pb-24 text-center min-h-screen"><h1 className="text-4xl font-serif">404 - Page Not Found</h1><p className="mt-4 text-gray-500">The page you are looking for does not exist.</p></div>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}
