import React from "react";
import { User, Mail, Shield, Phone, Edit, Calendar } from "lucide-react";

const AdminProfile = () => {
  const admin = {
    name: "Admin User",
    email: "admin@example.com",
    phone: "+91 9876543210",
    role: "Super Admin",
    joined: "12 Jan 2024",
    avatar:
      "https://images.unsplash.com/photo-1614289371518-722f3b5b3d55?q=80&w=500",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 relative">

        {/* Neon Border Effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-linear-to-r from-pink-600 to-purple-600 opacity-20 blur-xl -z-10"></div>

        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <img
            src={admin.avatar}
            alt="Admin Avatar"
            className="w-32 h-32 rounded-full border-4 border-pink-600 shadow-xl"
          />

          <h1 className="text-3xl font-bold text-white mt-4 tracking-wide">
            {admin.name}
          </h1>

          <p className="text-gray-300 text-sm flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-400" />
            {admin.role}
          </p>

          <button className="mt-4 bg-linear-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-all">
            <Edit className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Profile Details */}
        <div className="grid md:grid-cols-2 gap-6 text-white">
          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
            <Mail className="text-pink-400 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-300">Email Address</p>
              <p className="font-semibold">{admin.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
            <Phone className="text-purple-400 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-300">Phone Number</p>
              <p className="font-semibold">{admin.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
            <User className="text-blue-400 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-300">Admin Role</p>
              <p className="font-semibold">{admin.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
            <Calendar className="text-green-400 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-300">Joined On</p>
              <p className="font-semibold">{admin.joined}</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="bg-linear-to-br from-pink-600/20 to-purple-600/20 p-6 rounded-xl text-center border border-white/10 shadow-lg">
            <h2 className="text-3xl font-bold text-white">120</h2>
            <p className="text-xs text-gray-300">Total Events</p>
          </div>

          <div className="bg-linear-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-xl text-center border border-white/10 shadow-lg">
            <h2 className="text-3xl font-bold text-white">45</h2>
            <p className="text-xs text-gray-300">Clients</p>
          </div>

          <div className="bg-linear-to-br from-blue-600/20 to-green-600/20 p-6 rounded-xl text-center border border-white/10 shadow-lg">
            <h2 className="text-3xl font-bold text-white">12</h2>
            <p className="text-xs text-gray-300">Team Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
