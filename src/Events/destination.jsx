import React from "react";
import { motion } from "framer-motion";

const DestinationEvents = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-primary mb-4"
        >
          Destination Events
        </motion.h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Experience unforgettable celebrations in breathtaking locations.  
          From serene beaches to royal palaces — we make your dream destination event come true.
        </p>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "https://media.gettyimages.com/id/2207222893/photo/nighttime-scene-of-goa-beachfront-with-illuminated-huts-and-lively-atmosphere.jpg?s=612x612&w=0&k=20&c=pyhb13C6ALEGmiLRN0TnmfMbUTiI4kkQU3Y9sveW6g0=",
              title: "Beachside Weddings (Goa)",
              desc: "Celebrate love by the waves with a stunning ocean backdrop.",
            },
            {
              img: "https://media.gettyimages.com/id/2151012436/photo/an-interior-landscaped-courtyard-and-garden-with-indian-architectural-elements-inside-the.jpg?s=612x612&w=0&k=20&c=Ye-hSBHq6JPKn22tfXlwenY6TJ1-VJx3d1yA4v8fuLw=",
              title: "Royal Palace (Jaipur/Udaipur)",
              desc: "Heritage venues with royal grand entrance and luxury decor.",
            },
            {
              img: "https://media.gettyimages.com/id/1058297160/photo/salisbury-crags-holyrood-park-with-edinburgh-city-the-in-background-at-sunset.jpg?s=612x612&w=0&k=20&c=IJ2eXIBzvvrZ4LR2tLnTVCsJFa4GUwLmKnTaQXw9EY4=",
              title: "Hilltop Destinations (Manali)",
              desc: "Vows exchanged amidst clouds and scenic mountain views.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Let’s Plan Your Dream Destination Event!
          </h3>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationEvents;
