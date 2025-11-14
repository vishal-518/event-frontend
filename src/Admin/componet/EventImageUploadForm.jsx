// EventImageUploadForm.jsx

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaPlus, FaTrashAlt, FaCloudUploadAlt, FaSpinner } from "react-icons/fa";

const EventImageUploadForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    city: "",
    title: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [venues, setVenues] = useState([{ name: "" }]);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleVenueChange = (index, e) => {
    const updated = [...venues];
    updated[index].name = e.target.value;
    setVenues(updated);
  };

  const addVenue = () => setVenues([...venues, { name: "" }]);
  const removeVenue = (index) =>
    setVenues(venues.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false); // Reset success state

    // Form validation check
    if (!image || !formData.title || !formData.city) {
        alert("Please fill in all required fields and select an image.");
        setLoading(false);
        return;
    }

    const data = new FormData();
    data.append("image", image);
    data.append("type", formData.type);
    data.append("city", formData.city);
    data.append("title", formData.title);
    data.append("description", formData.description);
    
    data.append("venues", JSON.stringify(venues.filter(v => v.name.trim() !== ''))); 

    try {
      await axios.post("https://event-backend-cg59.onrender.com/api/eventsimg/add", data, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      
      setSuccess(true);
      // Reset form on success
      setFormData({ type: "", city: "", title: "", description: "" });
      setVenues([{ name: "" }]);
      setImage(null);
      setPreview("");
      
    } catch (error) {
      alert("Upload failed. Check console for details.");
      console.error("Upload Error:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-gray-800 text-white flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-700"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-400 mb-6">
          Add New Event
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload */}
          <div className="flex flex-col items-center">
            <label className="cursor-pointer flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-600 rounded-xl py-8 hover:border-indigo-400 transition">
              <FaCloudUploadAlt className="text-4xl text-indigo-400 mb-2" />
              <span className="text-sm text-gray-400">
                {image ? image.name : "Click to Upload Image"}
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
              />
            </label>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-56 h-40 object-cover rounded-xl shadow-lg border border-gray-700"
              />
            )}
          </div>

          {/* Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Event Type (e.g. Wedding)"
              className="bg-gray-800 rounded-lg p-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City (e.g. Jaipur)"
              className="bg-gray-800 rounded-lg p-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="w-full bg-gray-800 rounded-lg p-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Event Description"
            rows="3"
            className="w-full bg-gray-800 rounded-lg p-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          />

          {/* Venues Section (Enhanced Styling) */}
          <div className="bg-gray-850 p-4 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300 border-b border-gray-700 pb-2">
              Venues
            </h3>
            {venues.map((venue, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={venue.name}
                  onChange={(e) => handleVenueChange(index, e)}
                  placeholder={`Venue ${index + 1}`}
                  className="grow bg-gray-800 rounded-lg p-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                {venues.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeVenue(index)}
                    className="bg-red-600 hover:bg-red-700 p-2 rounded-lg text-sm transition"
                  >
                    <FaTrashAlt />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addVenue}
              className="mt-2 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-lg text-sm font-medium transition"
            >
              <FaPlus /> Add Venue
            </button>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2 mx-auto ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" /> <span>Uploading...</span>
                </>
              ) : (
                "Upload Event"
              )}
            </button>
          </div>

          {/* Success Message */}
          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-400 mt-4 font-semibold"
            >
              🎉 Event Uploaded Successfully!
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default EventImageUploadForm;