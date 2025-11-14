import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-rose-100 via-amber-50 to-rose-50 text-gray-800 pt-16 pb-8 overflow-hidden">
      {/* Floating sparkles / overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/golden-fabric.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">
        {/* 🔸 Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-rose-700 mb-3">Genix Events</h2>
          <p className="text-gray-600 leading-relaxed">
            Your trusted luxury wedding planner — crafting royal, elegant & unforgettable destination weddings across India and abroad.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-white rounded-full shadow hover:scale-110 transition"><FaInstagram className="text-rose-600" /></a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:scale-110 transition"><FaFacebookF className="text-blue-600" /></a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:scale-110 transition"><FaLinkedinIn className="text-blue-700" /></a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:scale-110 transition"><FaYoutube className="text-red-600" /></a>
          </div>
        </motion.div>

        {/* 🔸 Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-rose-700 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/" className="hover:text-rose-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-rose-600 transition">About Us</a></li>
            <li><a href="/destinations" className="hover:text-rose-600 transition">Destinations</a></li>
            <li><a href="/gallery" className="hover:text-rose-600 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-rose-600 transition">Contact Us</a></li>
          </ul>
        </motion.div>

        {/* 🔸 Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-rose-700 mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Destination Wedding Planning</li>
            <li>Venue Booking & Decor</li>
            <li>Photography & Cinematography</li>
            <li>Artist & Celebrity Management</li>
            <li>Luxury Hospitality & Guest Care</li>
          </ul>
        </motion.div>

        {/* 🔸 Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-rose-700 mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><MdLocationOn className="text-rose-600" /> Jaipur, Rajasthan, India</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-green-600" /> +91 9024015986</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-amber-600" /> pixelgenixitsolutions@gmail.com</li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8 max-w-6xl mx-auto"></div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-600 text-sm"
      >
        © {new Date().getFullYear()} <span className="text-rose-700 font-semibold">Genix Events</span>. All Rights Reserved.  
        Crafted with ❤️ in Rajasthan.
      </motion.div>
    </footer>
  );
};

export default Footer;
