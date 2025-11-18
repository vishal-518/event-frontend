import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Fashion = () => {
  // Gallery images including Indian fashion show style + runway
  const galleryImages = [
    "https://images.pexels.com/photos/17503286/pexels-photo-17503286.jpeg", // Indian traditional runway :contentReference[oaicite:3]{index=3}
    "https://images.unsplash.com/photo-1610047879156-17b33d3d2c10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZmFzaGlvbiUyMHNob3clMjBldmVudHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D", // Indian model :contentReference[oaicite:4]{index=4}
    "https://images.unsplash.com/photo-1736866143136-7ffdd4a4cf0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZmFzaGlvbiUyMHNob3clMjBldmVudHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D", // runway fashion :contentReference[oaicite:5]{index=5}
    "https://images.unsplash.com/photo-1610047881616-8e9f2c855cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZhc2hpb24lMjBzaG93JTIwZXZlbnRzJTIwaW1hZ2VzfGVufDB8fDB8fHww", // runway fashion variant :contentReference[oaicite:6]{index=6}
    "https://images.unsplash.com/flagged/photo-1568988041298-26931e97a28e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZhc2hpb24lMjBzaG93JTIwZXZlbnRzJTIwaW1hZ2VzfGVufDB8fDB8fHww", // another runway :contentReference[oaicite:7]{index=7}
    "https://images.unsplash.com/photo-1610313416458-8e435d6f7ed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGZhc2hpb24lMjBzaG93JTIwZXZlbnRzJTIwaW1hZ2VzfGVufDB8fDB8fHww", // modern runway  
    "https://plus.unsplash.com/premium_photo-1664303722806-6342e68db1ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", // fashion model  
    "https://images.unsplash.com/photo-1610048467807-0689a5f6c2a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZmFzaGlvbiUyMHNob3clMjBldmVudHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D", // stage / runway feel  
    // "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg", // fashion crowd  
    // "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg", // designer backstage style  
  ];

  return (
    <div className="text-gray-900 overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative h-[80vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white text-5xl md:text-7xl font-extrabold 
            drop-shadow-[0_0_25px_rgba(255,0,120,0.6)] tracking-widest uppercase text-center"
        >
          Fashion Events
        </motion.h1>
      </section>

      {/* ABOUT */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-pink-600 mb-6"
        >
          Where Style Meets Luxury
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg"
        >
          From runway to backstage — we curate premium fashion experiences with
          stunning lighting, model management, designer collaborations, cinematic coverage & glamorous themes.
        </motion.p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Runway & Lighting",
              desc: "Premium stage visuals with a luxury spotlight setup.",
            },
            {
              title: "Models & Designers",
              desc: "Top fashion icons, stylists & backstage support.",
            },
            {
              title: "Cinematic Shoots",
              desc: "Reels, media coverage & high-end photography.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border hover:shadow-2xl transition-all text-center"
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📸 GALLERY SECTION */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-4xl font-bold text-pink-600 mb-12">
          Fashion Show Moments
        </h2>

        <div className="container mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={img}
                alt={`Fashion Show ${index}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-16">
        <motion.a
          whileHover={{ scale: 1.08 }}
          href="/contact"
          className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-red-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg flex w-fit mx-auto items-center gap-2"
        >
          Book Your Fashion Show <ArrowRight size={20} />
        </motion.a>
      </div>
    </div>
  );
};

export default Fashion;
