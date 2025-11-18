import React from "react";
import { motion } from "framer-motion";

const Birthday = () => {
  return (
    <div className="text-gray-800">
      {/* 🎉 Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-6xl font-bold z-10 text-center drop-shadow-xl"
        >
          Memorable Birthday Parties 🎂
        </motion.h1>
      </section>

      {/* ✨ Introduction Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Celebrate Life with Colors & Fun 🎈
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Every birthday deserves to be special — full of laughter, joy, and vibrant memories!
          At <span className="font-semibold text-primary">Genix Events</span>,
          we craft magical birthday moments with elegant décor, delicious treats, and
          entertainment that brings smiles to every face, from kids to grown-ups.
        </p>
      </section>

      {/* 🎯 Highlights Section */}
      <section className="bg-gradient-to-r from-pink-50 to-yellow-50 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "🎨 Themed Decorations",
              desc: "Choose from cartoon, royal, floral, or custom themes designed to perfection.",
              img: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
            },
            {
              title: "🎪 Games & Activities",
              desc: "Magic shows, photo booths, treasure hunts, and fun-filled activities for all ages.",
              img: "https://media.gettyimages.com/id/1475829739/photo/children-hula-hoop-and-friends-playing-outdoor-together-during-break-or-recess-on-a-school.jpg?s=612x612&w=0&k=20&c=k3LanyVj7saOXrXEWmyGcyhFweM2elgUbV_hPqc1m38=",
            },
            {
              title: "🍰 Catering & Cake",
              desc: "Savor gourmet delights, snacks, and creative designer cakes that steal the show.",
              img: "https://media.gettyimages.com/id/1365221617/photo/pastries-on-buffet-table.jpg?s=612x612&w=0&k=20&c=66IE6OlZhJWnhemBG2h3I6u8FJmcbY5g7hYo4k7nrag=",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎥 Gallery & Video Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          Sneak Peek of Our Magical Birthdays ✨
        </h2>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Images */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://media.gettyimages.com/id/1493646763/photo/close-up-of-video-camer-at-the-studio-is-broadcast-live.jpg?s=612x612&w=0&k=20&c=JBoLG9a3MLrcTpHwFwuALl-vOokhzr26VFqL9B_sRWc="
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
          {/* Video */}
          <motion.video
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source
              src="https://cdn.pixabay.com/video/2021/06/05/76526-559511539_tiny.mp4"
              type="video/mp4"
            />
          </motion.video>
        </div>
      </section>

      {/* 🌟 Call To Action */}
      <div className="text-center py-12 bg-gradient-to-r from-pink-500 to-yellow-400 text-white">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4"
        >
          Ready to Plan a Fun-Filled Birthday?
        </motion.h3>
        <a
          href="/contact"
          className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Your Celebration 🎁
        </a>
      </div>
    </div>
  );
};

export default Birthday;
