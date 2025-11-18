import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; 

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    venue: "",
    services: [],
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null); 
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://event-backend-cg59.onrender.com/api/events/create",formData,{headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },}
      );
      
      console.log("Booking successful:", response.data);
      setSubmissionStatus({ type: 'success', message: '🎉 Booking confirmed! We will contact you shortly.' });
      
      setFormData({
        name: "", phone: "", email: "", eventType: "", date: "", 
        guests: "", venue: "", services: [], message: "",
      });

    } catch (error) {
      console.error("Booking error:", error);
      setSubmissionStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Container */}
      <div className="relative z-10 container mx-auto px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-center text-rose-600 mb-8">
            Book Your Event Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Full Name *" required onChange={handleChange} value={formData.name} className="p-3 border rounded-lg w-full" />
              <input type="tel" name="phone" placeholder="Phone Number *" required onChange={handleChange} value={formData.phone} className="p-3 border rounded-lg w-full" />
            </div>

            <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} value={formData.email} className="p-3 border rounded-lg w-full" />

            <select name="eventType" required onChange={handleChange} value={formData.eventType} className="p-3 border rounded-lg w-full">
              <option value="">Select Event Type *</option>
              <option>Wedding</option>
              <option>Engagement</option>
              <option>Birthday Party</option>
              <option>Corporate Event</option>
              <option>Fashion Show</option>
              <option>Baby Shower</option>
              <option>Destination Event</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="date" name="date" required onChange={handleChange} value={formData.date} className="p-3 border rounded-lg w-full" />
              <input type="number" name="guests" placeholder="Guests *" required onChange={handleChange} value={formData.guests} className="p-3 border rounded-lg w-full" />
            </div>

            <select name="venue" required onChange={handleChange} value={formData.venue} className="p-3 border rounded-lg w-full">
              <option value="">Select Venue *</option>
              <option>Indoor</option>
              <option>Outdoor</option>
              <option>Banquet Hall</option>
              <option>Resort</option>
              <option>Destination Venue</option>
            </select>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Decoration",
                "Photography",
                "Catering",
                "DJ/Music",
                "Lights",
                "Makeup & Styling",
              ].map((label) => (
                <label key={label} className="flex items-center gap-2 text-gray-700">
                  <input 
                    type="checkbox" 
                    value={label} 
                    onChange={handleChange} 
                    
                    checked={formData.services.includes(label)} // Controlled checkbox state
                  />
                  {label}
                </label>
              ))}
            </div>

            <textarea name="message" placeholder="Additional Details" onChange={handleChange} value={formData.message} className="p-3 border rounded-lg w-full min-h-[100px]" />
            
            {/* Submission Status Feedback */}
            {submissionStatus && (
                <p className={`p-3 rounded-lg text-center font-semibold ${
                    submissionStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                    {submissionStatus.message}
                </p>
            )}

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }} 
              disabled={isLoading}
              className={`w-full text-white py-3 rounded-lg font-semibold transition ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-rose-600 hover:bg-rose-700'
              }`}
            >
              {isLoading ? "Booking..." : "Book Now"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookNow;