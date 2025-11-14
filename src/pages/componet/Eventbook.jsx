import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

const inputClass = (isError) =>
  `w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 placeholder-gray-500 shadow-inner shadow-gray-950/50 
   focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-200
   ${isError ? 'border-red-500 ring-red-500/50' : ''}`;

const EventBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    category: "",
    destination: "",
    date: "",
    address: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormErrors(prev => ({ ...prev, [e.target.name]: null }));
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) { errors.name = "Full Name is required."; isValid = false; }

    const contactRegex = /^\d{10}$/;
    if (!formData.contact.trim() || !contactRegex.test(formData.contact.trim())) {
      errors.contact = "Contact must be a valid 10-digit number."; isValid = false;
    }

    if (!formData.category) { errors.category = "Event Type is required."; isValid = false; }
    if (!formData.destination.trim()) { errors.destination = "Destination is required."; isValid = false; }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!formData.date || selectedDate < today) {
      errors.date = "Please select a future event date."; isValid = false;
    }

    if (!formData.address.trim()) { errors.address = "Full Address is required."; isValid = false; }

    if (!formData.description.trim() || formData.description.trim().length < 20) {
      errors.description = "Description must be at least 20 characters."; isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // 🔴 UPDATED handleSubmit (Login Check Added)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(null);

    // 🔐 LOGIN CHECK FIRST
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Please login first to book an event.");
      setIsSuccess(false);
      return; // 💥 STOP SUBMISSION
    }

    // 🔍 Validate form fields
    if (!validateForm()) {
      setMessage("Please fix the errors shown in red.");
      setIsSuccess(false);
      return;
    }

    setLoading(true);

    try {
      await axios.post("https://event-backend-cg59.onrender.com/api/events/create", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("Event booked successfully! We will contact you within 24 hours.");
      setIsSuccess(true);

      setFormData({
        name: "", contact: "", category: "", destination: "",
        date: "", address: "", description: "",
      });

    } catch (error) {
      console.error("Booking Error:", error);
      setMessage("Booking failed. Server error or connection issue.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const ErrorText = ({ children }) => (
    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
      <FaExclamationTriangle className="text-red-400" />
      {children}
    </p>
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black flex items-center justify-center p-6 font-sans">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-xl border-t border-indigo-900/50"
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-teal-400 to-indigo-500 text-center mb-10 tracking-wider">
          Book Your Dream Event
        </h2>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">

          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass(formErrors.name)}
              required
            />
            {formErrors.name && <ErrorText>{formErrors.name}</ErrorText>}
          </div>

          <div>
            <input
              type="tel"
              name="contact"
              placeholder="10-digit Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className={inputClass(formErrors.contact)}
              required
            />
            {formErrors.contact && <ErrorText>{formErrors.contact}</ErrorText>}
          </div>

          <div>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`${inputClass(formErrors.category)} appearance-none`}
              required
            >
              <option value="" disabled className="text-gray-500 bg-gray-900">
                Select Event Type
              </option>

              {/* Main Events */}
              <option value="Wedding">Wedding</option>
              <option value="Engagement">Engagement</option>
              <option value="Reception">Reception</option>
              <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
              <option value="Haldi Ceremony">Haldi Ceremony</option>
              <option value="Mehendi Ceremony">Mehendi Ceremony</option>
              <option value="Sangeet Night">Sangeet Night</option>

              {/* Celebrations */}
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Naamkaran Ceremony">Naamkaran Ceremony</option>
              <option value="House Warming">House Warming</option>
              <option value="Retirement Party">Retirement Party</option>
              <option value="Get Together">Get Together</option>
              <option value="Farewell">Farewell</option>
              <option value="New Year Party">New Year Party</option>

              {/* Corporate */}
              <option value="Corporate">Corporate</option>
              <option value="Seminar">Seminar</option>
              <option value="Conference">Conference</option>
              <option value="Product Launch">Product Launch</option>
              <option value="Office Party">Office Party</option>
              <option value="Award Ceremony">Award Ceremony</option>

              {/* Others */}
              <option value="Other">Other</option>
            </select>
            {formErrors.category && <ErrorText>{formErrors.category}</ErrorText>}
          </div>

          <div>
            <input
              type="text"
              name="destination"
              placeholder="Desired Venue / City"
              value={formData.destination}
              onChange={handleChange}
              className={inputClass(formErrors.destination)}
              required
            />
            {formErrors.destination && <ErrorText>{formErrors.destination}</ErrorText>}
          </div>

          <div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={inputClass(formErrors.date)}
              required
            />
            {formErrors.date && <ErrorText>{formErrors.date}</ErrorText>}
          </div>

          <div>
            <input
              type="text"
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              className={inputClass(formErrors.address)}
              required
            />
            {formErrors.address && <ErrorText>{formErrors.address}</ErrorText>}
          </div>
        </div>

        <div className="mt-6">
          <textarea
            name="description"
            placeholder="Describe your event details (minimum 20 characters)"
            value={formData.description}
            onChange={handleChange}
            className={`${inputClass(formErrors.description)} resize-none`}
            rows="4"
            required
          ></textarea>
          {formErrors.description && <ErrorText>{formErrors.description}</ErrorText>}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-8 flex items-center justify-center gap-2 font-bold text-lg py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.01] ${
            loading
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700 text-white shadow-xl shadow-teal-500/30"
          }`}
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin" />
              Submitting...
            </>
          ) : (
            "Finalize Booking"
          )}
        </button>

        {/* MESSAGE ALERT */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center text-sm mt-6 font-medium p-3 rounded-lg flex items-center justify-center gap-2 ${
              isSuccess === true
                ? "text-green-400 bg-green-900/30"
                : "text-red-400 bg-red-900/30"
            }`}
          >
            {isSuccess === true ? (
              <FaCheckCircle className="text-green-400" />
            ) : (
              <FaTimesCircle className="text-red-400" />
            )}
            {message}
          </motion.p>
        )}
      </motion.form>
    </div>
  );
};

export default EventBookingForm;
