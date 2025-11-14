import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RoyalVenuesList() {
  const [eventapi, seteventapi] = useState([]);

  const fectchapi = async () => {
    try {
      const response = await fetch("https://event-backend-cg59.onrender.com/api/eventsimg");
      const data = await response.json();
      seteventapi(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fectchapi();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-rose-50 via-amber-50 to-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-rose-700 text-center mb-16"
        >
          👑 Best Royal Venues for Destination Weddings in Rajasthan
        </motion.h2>

        {eventapi.map((city, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="mb-20 rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition duration-500"
          >
            {/* City Image */}
            <div className="relative  overflow-hidden">
              <motion.img
               src={`https://event-backend-cg59.onrender.com/${city.image}`}
                alt={city.title}
                className="w-full h-96 object-cover  transform transition-transform duration-[3000ms] hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {city.city}
                </h3>
                <p className="text-amber-200 text-lg">
                  {city.description} 
                </p>
              </div>
            </div>

            {/* Venues List */}
            <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-br from-amber-50 via-pink-50 to-rose-50">
              {city.venues?.map((venue, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="p-4 rounded-xl bg-white shadow hover:shadow-rose-200 text-gray-700 font-medium flex items-center gap-3"
                >
                  <span className="text-rose-600 text-xl">🏰</span>
                  {venue.name} {/* <-- FIXED */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
