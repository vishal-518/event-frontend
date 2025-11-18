// import React from "react";
// import { motion } from "framer-motion";

// const cities = [
//   {
//     name: "Jaipur",
//     img: "https://media.istockphoto.com/id/2197451076/photo/illuminated-city-palace-in-udaipur-reflecting-on-calm-waters.jpg?s=612x612&w=0&k=20&c=9TpT1hGzNILBnexsO4KpN5ojXSjPqyEq0H8Omoot5yM=",
//     venues: [
//       "Rambagh Palace",
//       "Oberoi Rajvilas Palace",
//       "Taj Jai Mahal Palace",
//       "JW Marriott",
//       "Fairmont",
//       "Le Meridien",
//       "VYOM - Luxury Wedding Venue",
//       "Buena Vista Luxury Resort",
//       "Chomu Palace",
//       "Zone Palace",
//       "Shiv Vilas",
//       "Gold Palace",
//     ],
//   },
//   {
//     name: "Udaipur",
//     img: "https://images.unsplash.com/photo-1595859017776-93dcbb2e2ed3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=740",
//     venues: [
//       "Jagmandir Island Palace",
//       "Zenana Mahal City Palace",
//       "Manek Chowk City Palace",
//       "The Oberoi Udaivilas",
//       "The Leela Palace",
//       "Aurika - Luxury by Lemon Tree",
//       "Taj Aravali Resort",
//       "Ananta Resort",
//       "Chunda Palace",
//       "Fateh Garh",
//       "Bhairavgarh",
//     ],
//   },
//   {
//     name: "Kumbhalgarh",
//     img: "https://media.istockphoto.com/id/696039096/photo/kumbhalgarh-fort-rajasthan-india.jpg?s=612x612&w=0&k=20&c=2dwp6DtZHp_8R-AF_ws2VAQMWF24QHET9uxMnAN_6bk=",
//     venues: [
//       "The Kumbha Bagh",
//       "The Aodhi",
//       "Ramada Resort",
//       "Mahua Bagh",
//       "Fateh Safari",
//       "Via Lakhela Resort",
//       "Everest Hill Resort",
//       "Bella Basera",
//     ],
//   },
//   {
//     name: "Jaisalmer",
//     img: "https://media.istockphoto.com/id/2161499999/photo/gadisar-lake-in-jaisalmer-at-sunrise.jpg?s=612x612&w=0&k=20&c=hWmGr1xXYxgBvWr0sESo5O4rQOqgu_-gIGLNz4HbQ9M=",
//     venues: [
//       "Suryagarh",
//       "Jaisalkot",
//       "Marriott",
//       "Gorbandh Palace",
//       "Fort Rajwada",
//       "Mirvana Nature Resort",
//       "Brys Fort",
//       "Heritage Inn",
//       "Rang Mahal",
//       "Desert Tulip",
//     ],
//   },
//   {
//     name: "Jodhpur",
//     img: "https://media.istockphoto.com/id/1731321367/photo/chambal-riverfront-is-located-in-kota-rajasthan-india.jpg?s=612x612&w=0&k=20&c=0LjYyKRYpjWAuouQk-4Drs5ePx5fkxoQJz0pGEtmlq0=",
//     venues: [
//       "Umaid Bhawan Palace",
//       "Indana Palace",
//       "Ranbanka Palace",
//       "Ajit Bhawan Palace",
//       "Marugarh Resort",
//       "Amargarh Palace",
//       "Taj Hari Mahal",
//       "Bal Samand Lake Palace",
//       "Radisson",
//       "Devi Bhawan",
//     ],
//   },
// ];

// export default function RoyalVenuesList() {
//   return (
//     <section className="w-full bg-gradient-to-b from-rose-50 via-amber-50 to-white py-20 px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-rose-700 text-center mb-16"
//         >
//           👑 Best Royal Venues for Destination Weddings in Rajasthan
//         </motion.h2>

//         {cities.map((city, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: index * 0.1 }}
//             className="mb-20 rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition duration-500"
//           >
//             {/* City Image with Overlay */}
//             <div className="relative h-72 md:h-96 overflow-hidden">
//               <motion.img
//                 src={city.img}
//                 alt={city.name}
//                 className="w-full h-full object-cover transform transition-transform duration-[3000ms] hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
//                 <h3 className="text-3xl md:text-4xl font-bold text-white">
//                   {city.name}
//                 </h3>
//                 <p className="text-amber-200 text-lg">
//                   {city.venues.length} Best Destination Wedding Venues
//                 </p>
//               </div>
//             </div>

//             {/* Venues List */}
//             <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-br from-amber-50 via-pink-50 to-rose-50">
//               {city.venues.map((venue, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.05, x: 5 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   className="p-4 rounded-xl bg-white shadow hover:shadow-rose-200 text-gray-700 font-medium flex items-center gap-3"
//                 >
//                   <span className="text-rose-600 text-xl">🏰</span>
//                   {venue}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RoyalVenuesList() {
  const [eventapi, seteventapi] = useState([]);

  const fectchapi = async () => {
    try {
      const response = await fetch("https://event-backend-cg59.onrender.com/api/eventsimg");
      const data = await response.json();
      seteventapi(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fectchapi();
  }, []);

  return (
    <section className="w-full bg-linear-to-b from-rose-50 via-amber-50 to-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-rose-700 text-center mb-16"
        >
          👑 Best Royal Venues for Destination Weddings in Rajasthan
        </motion.h2>

        {eventapi.map((city, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="mb-20 rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition duration-500"
          >
            {/* City Image */}
            <div className="relative  overflow-hidden">
              <motion.img
               src={`https://event-backend-cg59.onrender.com/${city.image}`}
                alt={city.title}
                className="w-full h-96 object-cover  transform transition-transform duration-3000 hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {city.city}
                </h3>
                <p className="text-amber-200 text-lg">
                  {city.description} 
                </p>
              </div>
            </div>

            {/* Venues List */}
            <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-br from-amber-50 via-pink-50 to-rose-50">
              {city.venues?.map((venue, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="p-4 rounded-xl bg-white shadow hover:shadow-rose-200 text-gray-700 font-medium flex items-center gap-3"
                >
                  <span className="text-rose-600 text-xl">🏰</span>
                  {venue.name} {/* <-- FIXED */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
