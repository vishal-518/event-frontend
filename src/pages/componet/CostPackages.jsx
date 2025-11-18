import React from "react";
import { motion } from "framer-motion";

const CostPackages = () => {
  const packages = [
    {
      title: "Weddings in Rajasthan",
      desc: "Experience royal grandeur with heritage palaces, regal décor, and traditional hospitality — a true royal affair in Rajasthan.",
      price: "₹10 – 15 Lakhs",
      img: "https://media.gettyimages.com/id/534303532/photo/dilip-mehtas-wedding-at-the-samode-palace.jpg?s=612x612&w=0&k=20&c=FEGnG0PXrWiibUhbd8PMfg4rzEZVKWra5GZSU2vOmz0=",
    },
    {
      title: "Weddings in Thailand",
      desc: "Exotic beach vibes, island resorts, and cultural beauty make Thailand a perfect international wedding destination.",
      price: "₹25 – 70 Lakhs",
      img: "https://media.gettyimages.com/id/1210501082/photo/wall-decorated-flower-wedding-day-wedding-arch-decorated-with-flowers.jpg?s=612x612&w=0&k=20&c=LqMnCUkW-qU4IPWDwwUfnnXgsLAb8faEbRVAY-jILaQ=",
    },
    {
      title: "Beach Weddings in Goa",
      desc: "Celebrate love under the sun and stars with seaside décor, tropical themes, and an easy-breezy wedding vibe.",
      price: "₹10 – 35 Lakhs",
      img: "https://media.gettyimages.com/id/1469164045/photo/bachelor-and-bachelorette-party.jpg?s=612x612&w=0&k=20&c=KdKPyUjxGuJjaaMtCpEWuU6TDhdagr8a3eAHSr4ATPk=",
    },
    {
      title: "Weddings in Sri Lanka",
      desc: "A mesmerizing blend of beaches and culture — plan your dream destination wedding amidst the beauty of Sri Lanka.",
      price: "₹30 – 80 Lakhs",
      img: "https://media.gettyimages.com/id/579304657/photo/wedding-tables-outdoors.jpg?s=612x612&w=0&k=20&c=UD811dRWX6M1oc7a3sIYjMn86teGrT_1p5WdwykmAk0=",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-100" id="cost-packages">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          <span className="text-yellow-600">Cost & Packages</span> for Dream Weddings
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          We offer exclusive wedding packages tailored for every destination — designed to fit your dream, your style, and your budget.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <img
                src={pkg.img}
                alt={pkg.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{pkg.desc}</p>
                <div className="text-yellow-600 font-bold text-lg">Starting from {pkg.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostPackages;
