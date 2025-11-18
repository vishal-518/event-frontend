import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const AdminFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t border-gray-700 shadow-xl backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">
            Event Admin Panel
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Manage events, bookings, users, and analytics with powerful tools.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href=""  className="hover:text-blue-400 transition">Dashboard</a></li>
            <li><a  href="" className="hover:text-blue-400 transition">Events</a></li>
            <li><a href="" className="hover:text-blue-400 transition">Users</a></li>
            <li><a href="" className="hover:text-blue-400 transition">Settings</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex md:justify-end justify-center gap-4 text-2xl text-gray-400">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />
            <FaGithub className="hover:text-white cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}  
        <span className="text-blue-400 font-semibold"> Event Manager</span> — All Rights Reserved  
        <br />
        <span className="text-xs">Designed & Developed by <span className="text-white">Vishal Kumawat</span></span>
      </div>
    </footer>
  );
};

export default AdminFooter;
