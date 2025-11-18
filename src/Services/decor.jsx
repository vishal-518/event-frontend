import React from "react";
import { motion } from "framer-motion";

const Decor = () => {
  return (
    <div className="text-gray-800">
      {/* 🌸 Hero Section */}
      <section
        className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-6xl font-extrabold z-10 text-center drop-shadow-lg"
        >
          Elegant Decor & Design ✨
        </motion.h1>
      </section>

      {/* 🌷 Intro Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-pink-600 mb-4"
        >
          Transforming Spaces into Beautiful Experiences 🌸
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          Every event tells a story — and we make sure yours looks stunning.
          From luxurious stage setups to floral art, crystal lighting, and elegant
          drapes, <span className="text-pink-500 font-semibold">Genix Events</span> 
          turns your venue into a masterpiece of class, emotion, and perfection.
        </motion.p>
      </section>

      {/* 🏵️ Services Cards */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "🌺 Stage Design",
              desc: "Elegant stage concepts crafted with creativity and charm for grand celebrations.",
              img: "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg",
            },
            {
              title: "🌸 Floral Arrangements",
              desc: "Fresh, vibrant, and artistic floral designs that breathe beauty into every corner.",
              img: "https://images.pexels.com/photos/5414056/pexels-photo-5414056.jpeg",
            },
            {
              title: "💡 Lighting & Ambience",
              desc: "Professional lighting effects that set the perfect mood for your dream event.",
              img: "https://images.pexels.com/photos/1766673/pexels-photo-1766673.jpeg",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform transition-all"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-xl text-pink-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎥 Gallery Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-10">
          A Glimpse of Our Stunning Decor Work 💫
        </h2>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Image */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://media.gettyimages.com/id/1171816219/photo/wedding-ceremony-at-beautiful-farm.jpg?s=612x612&w=0&k=20&c=jTyhez8fktjQEXM1mL3dcWng9rNxqhih_hoQtCLvrME="
            alt="Decor Showcase"
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
              src="https://media.istockphoto.com/id/1221944627/video/indian-traditional-ceremony-venue-decoration.mp4?s=mp4-480x480-is&k=20&c=rzDscQxpCQhvavZmrLGq86SjpzgEYp8gux14TSzn7B4="
              type="video/mp4"
            />
          </motion.video>
        </div>
      </section>

      {/* 🌈 Final CTA Section */}
      <section className="text-center py-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4"
        >
          Let’s Design Your Dream Event Space 🌷
        </motion.h3>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Whether it’s a royal wedding, corporate gala, or birthday celebration —
          our decor specialists will turn your imagination into breathtaking reality.
        </p>
        <a
          href="/contact"
          className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Decor Consultation 💬
        </a>
      </section>
    </div>
  );
};

export default Decor;
