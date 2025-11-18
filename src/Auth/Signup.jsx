import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, UserPlus } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://event-backend-cg59.onrender.com/api/auth/register",
        formData
      );
      alert(res.data.msg || "Registered successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <motion.div
        className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 md:p-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <UserPlus className="w-10 h-10 text-pink-600 mx-auto mb-3" />
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account <span className="text-pink-600">(Sign Up)</span>
          </h1>
          <p className="text-gray-500 mt-2">Join and manage your events easily.</p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 text-center p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none transition"
              required
              disabled={loading}
            />
          </div>

          <div className="relative">
            <Mail className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none transition"
              required
              disabled={loading}
            />
          </div>

          <div className="relative">
            <Lock className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none transition"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition transform ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-700 active:scale-98"
            } shadow-md hover:shadow-lg`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <span
            onClick={() => navigate("/login")} 
            className="text-pink-600 ml-1 cursor-pointer hover:underline"
          >
            Login
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Signup;
