import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { MessageCircle, ShieldCheck, Lock } from "lucide-react";
export function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "United States",
    zipCode: "",
    phone: ""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    let message = `*New Order from TrendWave Store*%0A%0A`;
    message += `*Customer Details:*%0A`;
    message += `Name: ${formData.firstName} ${formData.lastName}%0A`;
    message += `Email: ${formData.email}%0A`;
    message += `Phone: ${formData.phone}%0A`;
    message += `Address: ${formData.address}, ${formData.city}, ${formData.zipCode}, ${formData.country}%0A%0A`;
    message += `*Order Items:*%0A`;
    items.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (Size: ${item.selectedSize}) - $${(item.price * item.quantity).toFixed(2)}%0A`;
    });
    message += `%0A*Total: $${total.toFixed(2)}*`;
    const businessPhone = "1234567890";
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    clearCart();
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This is a demo. Please use the "Order via WhatsApp" button to see the portfolio feature.');
  };
  if (items.length === 0) {
    return <div className="pt-32 pb-24 min-h-screen text-center max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-4">Checkout</h1>
        <p className="text-gray-500 mb-8">Your cart is empty.</p>
        <button
      onClick={() => navigate("/shop")}
      className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
    >
          Return to Shop
        </button>
      </div>;
  }
  return <div className="pt-24 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {
    /* Checkout Form */
  }
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
  />
                </div>

                <h2 className="text-2xl font-serif font-bold pt-6 border-t mb-6">Shipping Address</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
    type="text"
    id="firstName"
    name="firstName"
    value={formData.firstName}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
  />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input
    type="text"
    id="lastName"
    name="lastName"
    value={formData.lastName}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
  />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
    type="text"
    id="address"
    name="address"
    value={formData.address}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
    type="text"
    id="city"
    name="city"
    value={formData.city}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
  />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
    id="country"
    name="country"
    value={formData.country}
    onChange={handleInputChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black bg-white"
  >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP code</label>
                    <input
    type="text"
    id="zipCode"
    name="zipCode"
    value={formData.zipCode}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
  />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (for WhatsApp order)</label>
                  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
  />
                </div>

                <div className="pt-6 border-t space-y-4">
                  <button
    type="button"
    onClick={handleWhatsAppOrder}
    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-500/30"
  >
                    <MessageCircle className="w-6 h-6" />
                    Order via WhatsApp
                  </button>
                  
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-300" />
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or pay with card</span>
                    <div className="flex-grow border-t border-gray-300" />
                  </div>

                  <button
    type="submit"
    className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
  >
                    <Lock className="w-5 h-5" />
                    Pay ${total.toFixed(2)} Securely
                  </button>
                </div>
              </form>
            </div>
          </div>

          {
    /* Order Summary */
  }
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2 hide-scrollbar">
                {items.map((item) => <div key={item.cartItemId} className="flex gap-4">
                    <div className="relative">
                      <img
    src={item.image}
    alt={item.name}
    className="w-16 h-20 object-cover rounded-md border"
  />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>)}
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at next step</span>
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">
                    <span className="text-sm text-gray-500 font-normal mr-1">USD</span>
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
                <ShieldCheck className="w-4 h-4" />
                Secure encrypted checkout
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>;
}
