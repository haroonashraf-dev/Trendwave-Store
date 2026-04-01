import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";

export function HireMe() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="py-24 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-6"
        >
          Want a Store Like This?
        </motion.h1>

        <p className="text-gray-600 text-lg mb-8">
          I design and develop modern, high-converting eCommerce websites 
          that help brands stand out and sell more.
        </p>

        <a
         href="https://api.whatsapp.com/send?phone=923137386619&text=Hi%20Haroon%2C%20I%20just%20visited%20your%20website%20and%20I%27m%20interested%20in%20getting%20a%20store%20like%20this.%20Can%20we%20discuss%20the%20details%3F" // 👉 PUT YOUR WHATSAPP NUMBER
          target="_blank"
          className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
        >
          Contact Me on WhatsApp
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <CheckCircle className="mx-auto mb-4 text-black" />
            <h3 className="font-semibold mb-2">Modern UI Design</h3>
            <p className="text-gray-500 text-sm">
              Clean, premium and mobile-friendly design like top brands.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <CheckCircle className="mx-auto mb-4 text-black" />
            <h3 className="font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-500 text-sm">
              Optimized for speed to improve user experience and sales.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <CheckCircle className="mx-auto mb-4 text-black" />
            <h3 className="font-semibold mb-2">Conversion Focused</h3>
            <p className="text-gray-500 text-sm">
              Built to turn visitors into customers with smart UX.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          What I Can Build For You
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">🛒 eCommerce Websites</h3>
            <p className="text-gray-500 text-sm">
              Full online stores with product pages, cart, and checkout system.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">💼 Business Websites</h3>
            <p className="text-gray-500 text-sm">
              Professional websites to showcase your brand and services.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">⚡ Landing Pages</h3>
            <p className="text-gray-500 text-sm">
              High-converting landing pages for ads and marketing campaigns.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">🎨 UI/UX Design</h3>
            <p className="text-gray-500 text-sm">
              Clean and modern interface design focused on user experience.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Let’s Build Your Store 🚀
        </h2>

        <p className="text-gray-300 mb-8">
          Message me now and let’s create something amazing together.
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=923137386619&text=Hi%20Haroon%2C%20I%20just%20visited%20your%20website%20and%20I%27m%20interested%20in%20getting%20a%20store%20like%20this.%20Can%20we%20discuss%20the%20details%3F" // 👉 PUT YOUR NUMBER
          target="_blank"
          className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition"
        >
          Start Your Project
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </section>

    </div>
  );
}