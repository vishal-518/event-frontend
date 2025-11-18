import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const WhyJoinUs = () => {
  useEffect(() => {
    // Floating button animation pulse
    const floatBtn = document.querySelector(".float-btn");
    if (floatBtn) floatBtn.classList.add("animate-bounce");
  }, []);

  const steps = [
    "Think of the places where you recently attended a wedding and also look for top weddings of the year.",
    "Select your favourite out of those and shortlist destinations you always dreamed of.",
    "Prepare the guest list (ideal count: 250–300 for destination weddings).",
    "Match the hotel or resort capacity with your guest count.",
    "Filter by budget — remove destinations that don’t fit.",
    "Check travel connectivity for you and your guests.",
    "Ensure each destination has 3–5 venues for all ceremonies.",
    "Narrow your selection to 3 destinations.",
    "Visit those destinations for recce (venues, stay, food).",
    "Negotiate & finalize your perfect wedding destination!"
  ];

  return (
    <section className="relative w-full min-h-[130vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="https://www.shutterstock.com/image-photo/indian-woman-haldi-ceremony-2650345113"
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-75 scale-105"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Join Us
          </motion.h2>

          <motion.p
            className="text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            💍 Plan your dream wedding with our professional & creative planners.
            Experience luxury, trust, and perfection in every detail.
          </motion.p>

          <div className="space-y-3 mt-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20 shadow-lg hover:bg-white/20 transition"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                {index + 1}. {step}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6 text-xl font-semibold text-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Wedding Expert: <span className="text-white">(+91) 7976601227</span>
          </motion.div>
        </div>

        {/* Right Side Funny Image */}
        <motion.div
          className="flex justify-center relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          <img
            src="https://media.istockphoto.com/id/1440768584/photo/elderly-indian-man-in-traditional-clothes-and-ina-turban-happily-greeting.jpg?s=612x612&w=0&k=20&c=-c6teOL7GSiSO0i4yF_XNum_HohmYV8gl_Z6Ruytmaw="
            alt="Padharo Sa"
            className="w-80 md:w-[28rem] drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="float-btn fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/7976601227"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="tel:+917976601227"
          className="bg-yellow-500 hover:bg-yellow-600 p-4 rounded-full shadow-lg"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>
    </section>
  );
};

export default WhyJoinUs;
