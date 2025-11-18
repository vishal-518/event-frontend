import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGlassCheers, FaMapMarkerAlt, FaUserFriends, FaWhatsapp } from "react-icons/fa";

const Wedding = () => {
  const highlights = [
    {
      icon: <FaHeart className="text-pink-600 text-4xl mb-3" />,
      title: "Theme Planning",
      desc: "Custom wedding themes — from royal palace style to modern minimalist concepts.",
    },
    {
      icon: <FaMapMarkerAlt className="text-pink-600 text-4xl mb-3" />,
      title: "Venue & Decor",
      desc: "Venue selection and floral luxury decor that bring your dream setting to life.",
    },
    {
      icon: <FaUserFriends className="text-pink-600 text-4xl mb-3" />,
      title: "Guest Management",
      desc: "Hospitality, travel, and guest coordination handled with complete care.",
    },
    {
      icon: <FaGlassCheers className="text-pink-600 text-4xl mb-3" />,
      title: "Entertainment & Catering",
      desc: "Celebrity performances, live music, and world-class catering to delight your guests.",
    },
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "https://images.pexels.com/photos/1028725/pexels-photo-1028725.jpeg",
    "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg",
    "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
  ];

  return (
    <div className="text-gray-800">
      {/* 🌸 Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-7xl font-bold z-10 text-center drop-shadow-lg"
        >
          Dream Weddings by <span className="text-pink-400">Genix Events</span> 💍
        </motion.h1>
      </section>

      {/* 💖 About Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-600 mb-6"
        >
          Your Perfect Day, Crafted With Love
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          From intimate gatherings to royal destination weddings, Genix Events
          transforms every dream into an unforgettable celebration. Our team
          manages everything — decor, logistics, themes, entertainment, and more
          — ensuring your big day shines as bright as your love story.
        </motion.p>
      </section>

      {/* 💎 Highlights Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-pink-100"
            >
              {item.icon}
              <h3 className="font-semibold text-xl mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📸 Gallery Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Wedding Moments Gallery
        </h2>
        <div className="flex overflow-x-auto space-x-4 px-6 snap-x snap-mandatory">
          {galleryImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Wedding ${i}`}
              className="w-[350px] h-[250px] object-cover rounded-2xl shadow-md snap-center"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="bg-pink-50 py-16">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          What Our Clients Say ❤️
        </h2>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya & Arjun",
              text: "Genix made our wedding a fairytale! The decor and arrangements were breathtaking. Highly recommended!",
            },
            {
              name: "Ritika Sharma",
              text: "Everything was perfect — from the haldi ceremony to the reception. The team handled everything professionally.",
            },
            {
              name: "Vikram & Neha",
              text: "Our destination wedding was a dream come true thanks to Genix Events. They truly care about your story!",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-pink-100 text-center"
            >
              <p className="italic text-gray-600 mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-pink-600">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📞 CTA Section */}
      <section className="text-center py-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-gray-800"
        >
          Let’s Create Your Dream Wedding Together 💕
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="/contact"
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            Book Your Wedding Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-pink-600 text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
          >
            <FaWhatsapp className="text-green-600 text-2xl" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Wedding;
