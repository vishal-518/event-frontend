import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2020/05/11/06/24/wedding-5156650_1280.jpg", // Haldi
  "https://cdn.pixabay.com/photo/2023/09/12/11/02/ai-generated-8248592_1280.jpg", // Phere
  "https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg", // Sangeet
  "https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600_1280.jpg", // Reception
  "https://media.istockphoto.com/id/1413007947/photo/wear-a-ring-wedding-ring-love-couple.jpg?s=612x612&w=0&k=20&c=21wVwzcBZ4Pe1TszGdDzu7zWqexY0nKhmtJ3kudJbP8=", // Engagement
  "https://media.istockphoto.com/id/1174369500/photo/theres-beauty-in-every-culture.jpg?s=612x612&w=0&k=20&c=rNpe4nabjIdmFlkEzszu83-EuoDl7GFXLHMp0ymiShI=", // Mehndi
];

export default function DestinationWeddingSection() {
  const [current, setCurrent] = useState(0);

  // Auto image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 sec
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden rounded-2xl shadow-xl">
      {/* Background Images with Zoom Animation */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute w-full h-full object-cover ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          initial={{ scale: 1.1 }}
          animate={{
            opacity: index === current ? 1 : 0,
            scale: index === current ? 1 : 1.2,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 text-white">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-wide mb-4"
        >
          Destination Wedding Planner in Jaipur
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl text-lg md:text-xl leading-relaxed text-gray-100"
        >
          Experience the magic of royal celebrations with our creative event experts.
          From elegant Jaipur palaces to serene beaches, we bring your dream wedding
          to life — beautifully, gracefully, and stress-free.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-500 to-pink-500 text-white text-lg rounded-full shadow-lg hover:shadow-2xl"
        >
          Book Your Wedding Expert
        </motion.button>
      </div>
    </section>
  );
}
