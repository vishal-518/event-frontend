import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-yellow-50" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT: Media Grid (3 Images + 2 Videos) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4 relative"
        >
          {/* Haldi Ceremony */}
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
            alt="Haldi Ceremony"
            className="rounded-2xl shadow-2xl object-cover h-56 w-full hover:scale-105 transition-all duration-500"
          />

          {/* Mahila Sangeet */}
          <img
            src="https://cdn.pixabay.com/photo/2019/05/24/18/41/marriage-4226896_1280.jpg"
            alt="Mahila Sangeet"
            className="rounded-2xl shadow-2xl object-cover h-56 w-full hover:scale-105 transition-all duration-500"
          />

          {/* Wedding Video */}
          <video
            className="rounded-2xl shadow-2xl object-cover h-60 w-full col-span-1 hover:scale-105 transition-all duration-500"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdn.pixabay.com/video/2016/06/27/3565-172488151_large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Phera Ceremony Video */}
          <video
            className="rounded-2xl shadow-2xl object-cover h-60 w-full col-span-1 hover:scale-105 transition-all duration-500"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdn.pixabay.com/video/2015/12/11/1630-148614385_large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Wedding Decor */}
          <img
            src="https://cdn.pixabay.com/photo/2021/08/03/21/20/woman-6520542_1280.jpg"
            alt="Wedding Decor"
            className="col-span-2 rounded-2xl shadow-2xl object-cover h-64 w-full hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* RIGHT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800"
        >
          <h3 className="text-yellow-500 uppercase text-sm font-bold tracking-widest mb-3">
            About Genix Events
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Crafting Unforgettable <span className="text-yellow-500">Indian Celebrations</span>
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            From mesmerizing pheras to vibrant haldi and soulful sangeet nights,
            Genix Events blends creativity, elegance, and cultural richness to make
            every celebration shine with emotion and class.
          </p>

          <p className="text-gray-600 text-lg mb-6">
            We specialize in luxury weddings, birthdays, and corporate galas — turning
            your vision into a beautifully crafted reality.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            <Link to="/contact">Book Appointment with Our Expert</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
