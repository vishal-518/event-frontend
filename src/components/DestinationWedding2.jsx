import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full px-6 py-3 transition duration-300 shadow-md ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`rounded-2xl bg-white shadow-lg p-4 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const images = [
  "https://cdn.pixabay.com/photo/2021/09/03/06/10/wedding-6595092_640.jpg",
  "https://cdn.pixabay.com/photo/2021/11/26/10/41/bride-6825609_640.jpg",
  "https://cdn.pixabay.com/photo/2017/12/03/19/06/wedding-2995619_640.jpg",
  "https://cdn.pixabay.com/photo/2017/10/04/07/14/wedding-2815343_640.jpg",
  "https://cdn.pixabay.com/photo/2021/08/24/11/32/couple-6570391_640.jpg",
];

export default function DestinationWedding2() {
  return (
    <section className="w-full bg-gradient-to-b from-amber-50 via-pink-50 to-rose-50 py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-rose-700 mb-4"
        >
          Indian Wedding Packages & Destination Wedding Planning Cost
        </motion.h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Rajasthan — the land of royalty, heritage, and timeless culture. From
          the grandeur of Udaipur to the majesty of Jodhpur, we craft your dream
          destination wedding in the palaces of Rajasthan, Goa beaches, or even
          the luxury resorts of Thailand and Dubai.
        </p>
      </div>

      {/* 🔸 Slider Section */}
      <div className="overflow-hidden mb-20">
        <motion.div
          className="flex animate-scroll gap-6"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Wedding"
              className="w-96 h-64 object-cover rounded-2xl shadow-md"
            />
          ))}
        </motion.div>
      </div>

      {/* 🔸 About Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 leading-relaxed"
        >
          <h3 className="text-2xl font-semibold text-rose-600 mb-4">
            Plan a Royal Wedding in Rajasthan
          </h3>
          <p>
            Choose from our exclusive collection of palace venues, resorts, and
            luxury hotels — all carefully handpicked for unforgettable wedding
            experiences. Our expert team helps you plan seamlessly — from
            decor, cuisine, and photography to artist management.
          </p>
          <p className="mt-4">
            Whether it’s the royal charm of Jaipur, the lakeside elegance of
            Udaipur, or the majestic vibes of Jodhpur, we make your wedding
            truly magical.
          </p>
          <Link
  to="/contact"
  className="mt-6 inline-block bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6 py-3 text-lg shadow-lg transition-all"
>
  Get Free Wedding Quote
</Link>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://cdn.pixabay.com/photo/2017/08/30/17/25/please-2697945_1280.jpg"
          alt="Wedding Setup"
          className="rounded-3xl shadow-lg w-full h-full object-cover"
        />
      </div>

      {/* 🔸 10 Reasons Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h3 className="text-3xl font-semibold text-center text-rose-700 mb-8">
          💍 10 Reasons to Plan Your Destination Wedding in Rajasthan
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Collection of Heritage Palaces & Resorts",
            "Well-connected via flights & roads",
            "100–250 rooms per property for large gatherings",
            "Perfect theme, decor & luxury match",
            "Royal Rajasthani cuisine adds flavour",
            "Internationally famous tourist spots",
            "Venues like Rambagh, Umaid Bhawan, Lake Palace",
            "Bridal collections & artists heaven",
            "Ideal October–March weather",
            "True Rajasthani hospitality — 'Padharo Mhare Desh'",
          ].map((reason, i) => (
            <Card
              key={i}
              className="shadow-lg border-none bg-white hover:shadow-rose-200 transition duration-300"
            >
              <CardContent className="p-6 text-gray-700 text-center font-medium">
                {reason}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* 🔸 Online Planning Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-20"
      >
        <h3 className="text-3xl font-semibold text-rose-700 mb-4">
          Plan Your Wedding Celebration to Perfection — Online!
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-6">
          Select your destination, venue, decor, photographer, makeup artist,
          DJ, catering, and entertainment — all in one place with expert
          guidance from <b>The Eventor Wedding Planner</b>. Plan everything
          digitally and celebrate stress-free!
        </p>
        
        <Link
  to="/booknow"
  className="mt-6 inline-block bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6 py-3 text-lg shadow-lg transition-all"
>
  Start Planning Now
</Link>
      </motion.div>
    </section>
  );
}
