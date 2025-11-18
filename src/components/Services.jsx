import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Complete Wedding Planning",
      desc: "From royal décor to dream destinations — we plan and execute weddings with perfection.",
      img: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    },
    {
      title: "Venue Booking",
      desc: "Choose from the best luxury venues across India. We handle bookings and arrangements flawlessly.",
      img: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
    },
    {
      title: "Wedding Decor",
      desc: "Elegant, vibrant, and customized décor that transforms every venue into a masterpiece.",
      img: "https://cdn.pixabay.com/photo/2016/11/23/17/56/beach-1854076_1280.jpg",
    },
    {
      title: "Catering & Entertainment",
      desc: "From gourmet cuisines to celebrity performances — we make your celebrations unforgettable.",
      img: "https://cdn.pixabay.com/photo/2017/01/26/02/06/christmas-wallpaper-2009590_1280.jpg",
    },
    {
      title: "Wedding Cards & Gifts",
      desc: "Personalized invitation cards and creative gifting ideas matching your wedding theme.",
      img: "https://cdn.pixabay.com/photo/2020/12/18/20/52/christmas-5842978_1280.jpg",
    },
    {
      title: "Luxury Logistics",
      desc: "Premium transport & guest management services to ensure seamless comfort throughout the event.",
      img: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden"
      id="services"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.15),transparent)]"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800"
        >
          Our Premium <span className="text-yellow-500">Event Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              {/* Background Image */}
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-full h-72 object-cover rounded-2xl brightness-75 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Always Visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end text-white px-6 pb-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-2xl font-semibold mb-2"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="text-sm md:text-base leading-relaxed text-gray-100"
                >
                  {service.desc}
                </motion.p>
              </div>

              {/* Glow Border Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-2xl border border-yellow-400/60 shadow-[0_0_20px_rgba(255,215,0,0.4)] pointer-events-none"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
