import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://images.pexels.com/photos/30184615/pexels-photo-30184615.jpeg",
    "https://media.istockphoto.com/id/1065322310/photo/indian-wedding-stage-decorations-with-colorful-flowers.jpg?s=612x612&w=0&k=20&c=Gnk0LxEFlCnKbm96eKDm2NR5NACajMRRkSdZxotCo30=",
    "https://media.istockphoto.com/id/1426890531/photo/marriage-stage.jpg?s=612x612&w=0&k=20&c=Ntkk4Q3EJrr2TGKq5RgIMkFO5_SkZS24JtOq4iCzanU=",
    "https://media.istockphoto.com/id/538371899/photo/front-view-of-flowers-decoration-in-thai-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=QBwKkD-Dn6eMMWZc6GkuuruXDk-64kJrxEtBlVKl10c=",
    "https://media.istockphoto.com/id/1065322344/photo/indian-wedding-stage-decorations-with-colorful-flowers.jpg?s=612x612&w=0&k=20&c=INW7voERonkEqx1OPWFgjLsSKRe8mTwyqoYb-PQt-3c=",
    "https://images.pexels.com/photos/6387657/pexels-photo-6387657.jpeg",
    "https://images.pexels.com/photos/27906413/pexels-photo-27906413.jpeg",
    "https://images.pexels.com/photos/33417234/pexels-photo-33417234.jpeg",
    "https://images.pexels.com/photos/9497617/pexels-photo-9497617.jpeg",
    "https://images.pexels.com/photos/32866203/pexels-photo-32866203.jpeg",
    "https://images.pexels.com/photos/27635570/pexels-photo-27635570.jpeg",
    "https://images.pexels.com/photos/33784992/pexels-photo-33784992.jpeg",
    "https://media.istockphoto.com/id/1727326797/photo/indian-wedding-stage-decoration-setup-with-luxurious-royal-sofa-chair-and-flower-decoration.jpg?s=612x612&w=0&k=20&c=azw8chNCVgevQyzkHoQH8mEAHJRVY9cRyUNGkDFmImM=",
    "https://images.pexels.com/photos/27635464/pexels-photo-27635464.jpeg",
    "https://images.pexels.com/photos/33485968/pexels-photo-33485968.jpeg",
     "https://images.pexels.com/photos/6405771/pexels-photo-6405771.jpeg",
     "https://media.istockphoto.com/id/1497707620/photo/beautiful-return-gift-bag.jpg?s=612x612&w=0&k=20&c=E9C7mvr6lZB2NqNS2gRBz7GbE1eNW9fXyEtmIG_Ir2s=",
     "https://media.istockphoto.com/id/1210435759/photo/woman-wrapping-a-gift.jpg?s=612x612&w=0&k=20&c=AHn3AH4aQ8cfmorGl9Bugs6-hEJoBvXphjW92wBEIe4=",
     "https://media.istockphoto.com/id/2177550987/photo/luxury-color-theme-wedding-solemnisation-dinner-flower-florist-dinnerware-banquet-cloth-and.jpg?s=612x612&w=0&k=20&c=fwanPlx0An2vPK1QLXUxaYU3-PkgrfypisObvV3VsSA=",
     "https://media.istockphoto.com/id/2166315236/photo/orange-closed-curtain-or-drapery-in-theater-with-multicolored-balloons-with-copy-space.jpg?s=612x612&w=0&k=20&c=BkPTZyFq7-ouo1AVjnVw9TGxEugVR62ckwy-VH6y3C4=",
     "https://media.istockphoto.com/id/1093420728/photo/wedding-setup-detail-in-thailand.jpg?s=612x612&w=0&k=20&c=cSGTnSWeDtsGnusNp-BtHFgvRC8XcEWbPXBSUO-CzzA=",
     "https://media.istockphoto.com/id/2168043780/photo/empty-stage-decorated-for-a-wedding.jpg?s=612x612&w=0&k=20&c=AaLqLpD8h-0NYT5Q97pDw48qzrPCD-9Y0Jo2Mhta8yk=",

    "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_640.jpg",
    "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg",
    "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg",
    "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg",
    "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg",
    "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg",
    "https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg",
    "https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg",
    "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg",
    "https://images.pexels.com/photos/167478/pexels-photo-167478.jpeg",
    "https://images.pexels.com/photos/2466341/pexels-photo-2466341.jpeg",
    "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "https://images.pexels.com/photos/2337816/pexels-photo-2337816.jpeg",
    "https://images.pexels.com/photos/849/people-festival-party-dancing.jpg",

  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-20 px-6 md:px-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our <span className="text-pink-600">Gallery</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Explore the memories we’ve crafted through our elegant events, weddings,
          and corporate gatherings — captured in timeless frames.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 object-cover group-hover:opacity-80 transition"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
              <p className="text-white font-semibold text-lg">View More</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-700 transition">
          Load More Photos
        </button> */}
      </motion.div>
    </section>
  );
};

export default Gallery;
