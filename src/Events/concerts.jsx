import React from "react";
import { motion } from "framer-motion";

const Concerts = () => {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-6xl font-bold z-10 text-center"
        >
          Electrifying Live Concerts 🎤
        </motion.h1>
      </section>

      {/* About */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Where Music Meets Magic
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We manage artist coordination, stage setup, lighting, and crowd
          control for concerts that keep the energy alive from start to finish.
          Be it local or international artists — Genix Events brings sound to
          life!
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Artist Management",
              desc: "End-to-end coordination with top performers and bands.",
            },
            {
              title: "Stage & Sound Setup",
              desc: "High-quality lighting, sound, and visuals for massive impact.",
            },
            {
              title: "Crowd Management",
              desc: "Security and event flow handled by experienced professionals.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎸 Concert Photo Gallery */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold text-primary mb-10">
          Concert Highlights 📸
        </h2>

        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
            "https://images.pexels.com/photos/2111017/pexels-photo-2111017.jpeg",
            "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
            "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
            "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg",
            "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
          ].map((src, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.08 }}
              src={src}
              alt="Concert Event"
              className="w-full h-56 object-cover rounded-xl shadow-md hover:shadow-xl 
                         transition-all duration-500"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-12">
        <a
          href="/contact"
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
        >
          Book Your Concert Event
        </a>
      </div>
    </div>
  );
};

export default Concerts;
