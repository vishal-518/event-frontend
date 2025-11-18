import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaBuilding,
  FaChartLine,
  FaUsersCog,
  FaMicrophoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Corporate = () => {
  const highlights = [
    {
      icon: <FaBuilding className="text-blue-600 text-4xl mb-3" />,
      title: "Corporate Conferences",
      desc: "Seamless event execution with world-class setups and elegant decor tailored to your brand identity.",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-4xl mb-3" />,
      title: "Brand & Product Launches",
      desc: "Impactful launch events that position your brand at the forefront of innovation.",
    },
    {
      icon: <FaUsersCog className="text-blue-600 text-4xl mb-3" />,
      title: "Employee Engagement",
      desc: "Interactive sessions and team-building programs to strengthen workplace unity.",
    },
    {
      icon: <FaMicrophoneAlt className="text-blue-600 text-4xl mb-3" />,
      title: "Seminars & Award Nights",
      desc: "Professional presentations, audio-visual arrangements, and elegant stage management.",
    },
  ];

  const gallery = [
    "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    "https://images.pexels.com/photos/3184170/pexels-photo-3184170.jpeg",
    "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  ];

  return (
    <div className="text-gray-800">
      {/* 🏙️ Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-7xl font-bold z-10 text-center drop-shadow-lg"
        >
          Professional <span className="text-blue-400">Corporate Events</span> 💼
        </motion.h1>
      </section>

      {/* 💼 About Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-600 mb-6"
        >
          Elevate Your Brand with Seamless Events
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          Genix Events brings sophistication and precision to your corporate
          gatherings — from global conferences and product launches to employee
          engagement and award nights. We combine creativity, technology, and
          flawless logistics to make your event memorable and meaningful.
        </motion.p>
      </section>

      {/* 🔹 Highlights Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100"
            >
              {item.icon}
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎥 Video Showcase */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          A Glimpse Into Our Corporate Excellence
        </h2>
        <div className="container mx-auto px-6">
          <motion.video
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full h-[450px] rounded-2xl shadow-lg object-cover"
            controls
            autoPlay
            loop
            muted
          >
            <source src="https://cdn.pixabay.com/video/2019/09/04/26533-357855242_tiny.mp4" type="video/mp4" />
          </motion.video>
        </div>
      </section>

      {/* 🖼️ Gallery Section */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Our Corporate Event Highlights
        </h2>
        <div className="flex overflow-x-auto space-x-4 px-6 snap-x snap-mandatory">
          {gallery.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Corporate ${i}`}
              className="w-[350px] h-[250px] object-cover rounded-2xl shadow-md snap-center"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Trusted by Industry Leaders 🌟
        </h2>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              name: "TechNova Pvt. Ltd.",
              text: "Our product launch handled by Genix Events was absolutely flawless. Their technical precision and attention to detail were unmatched.",
            },
            {
              name: "FinEdge Corporation",
              text: "Professional, creative, and well-coordinated! The team handled our annual meet with excellence from start to finish.",
            },
            {
              name: "NextEra Global",
              text: "The best corporate event team we’ve ever worked with. Every moment was managed with perfection and elegance.",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100 text-center"
            >
              <p className="italic text-gray-600 mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-blue-600">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📞 CTA Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Plan Your Next Corporate Event With Genix Events 💼
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            <FaWhatsapp className="text-green-400 text-2xl" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
