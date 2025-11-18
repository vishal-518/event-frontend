import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [statusMsg, setStatusMsg] = useState("");   
  const [isSuccess, setIsSuccess] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://event-backend-cg59.onrender.com/api/conatcts/contact",
        formData
      );

      setIsSuccess(true);
      setStatusMsg("Message sent successfully!");

      setFormData({ name: "", email: "", phone: "", message: "" });

    } catch (error) {
      setIsSuccess(false);
      setStatusMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-white to-pink-50 py-20 px-6 md:px-16">

      {/* heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact <span className="text-pink-600">Us</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Have a question or want to book your next event with us?
          Fill out the form below or reach us through our contact details.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left side info (Same as your code) */}
         <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-600 text-lg" />
              <p>+91 7976601227</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-600 text-lg" />
              <p>genixevents5@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-600 text-lg" />
              <p>Address: 662, Surender Pal Singh Marg, Katewa Nagar, Vivek Vihar, Shyam Nagar, Jaipur, Rajasthan 302019</p>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-600 text-lg" />
              <a href="https://wa.me/919876543210" target="_blank" className="hover:underline">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden shadow-md">
            <iframe title="Genix Events Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.440671113645!2d75.7996230747282!3d26.890108660828156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4c0a95d0d2b%3A0x6bb3d7e2a9998d0d!2sVivek%20Vihar%20Metro%20Station!5e0!3m2!1sen!2sin!4v1705600000000!5m2!1sen!2sin" width="100%" height="250" allowFullScreen="" loading="lazy" className="border-none" >
            </iframe>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
              required
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Send Message
            </button>

            {/* ⭐ Message show here */}
            {statusMsg && (
              <p
                className={`mt-3 text-center font-medium ${
                  isSuccess ? "text-green-600" : "text-red-600"
                }`}
              >
                {statusMsg}
              </p>
            )}

          </div>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
