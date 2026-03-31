import { useCart } from "../../context/CartContext";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, total } = useCart();
  return <AnimatePresence>
      {isCartOpen && <>
          <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    exit={{ opacity: 0 }}
    onClick={() => setIsCartOpen(false)}
    className="fixed inset-0 bg-black z-40"
  />
          <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", damping: 25, stiffness: 200 }}
    className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
  >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Your Cart
              </h2>
              <button
    onClick={() => setIsCartOpen(false)}
    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
  >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <ShoppingBag className="w-12 h-12 opacity-20" />
                  <p>Your cart is empty.</p>
                  <button
    onClick={() => setIsCartOpen(false)}
    className="text-black underline underline-offset-4 hover:text-gray-700"
  >
                    Continue Shopping
                  </button>
                </div> : items.map((item) => <div key={item.cartItemId} className="flex gap-4 border-b pb-4">
                    <img
    src={item.image}
    alt={item.name}
    className="w-20 h-24 object-cover rounded-md"
  />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                          <button
    onClick={() => removeFromCart(item.cartItemId)}
    className="text-gray-400 hover:text-red-500"
  >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Size: {item.selectedSize}</p>
                        <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border rounded-md">
                          <button
    onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
    className="p-1 hover:bg-gray-100 transition-colors"
  >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
    onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
    className="p-1 hover:bg-gray-100 transition-colors"
  >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
            </div>

            {items.length > 0 && <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link
    to="/checkout"
    onClick={() => setIsCartOpen(false)}
    className="w-full bg-black text-white py-3 rounded-md font-medium flex justify-center items-center hover:bg-gray-800 transition-colors"
  >
                  Checkout
                </Link>
              </div>}
          </motion.div>
        </>}
    </AnimatePresence>;
}
