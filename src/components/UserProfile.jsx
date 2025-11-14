import React from "react";
import { Mail, Phone, Calendar, User, Edit } from "lucide-react";

const UserProfile = () => {
  const user = {
    name: "Vishal Kumawat",
    email: "vishal@example.com",
    phone: "8949032430",
    joined: "13 Nov 2025",
    address: "Kalwara, Jaipur",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black flex justify-center items-center p-5">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 relative">

        {/* Neon Glow */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 opacity-20 blur-xl -z-10"></div>

        {/* Avatar + Basic Info */}
        <div className="flex flex-col items-center text-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-xl"
          />

          <h1 className="text-3xl text-white font-bold mt-4 tracking-wide">
            {user.name}
          </h1>

          <p className="text-gray-300 text-sm flex items-center gap-2">
            <User className="w-4 h-4 text-blue-400" /> User Profile
          </p>

          <button className="mt-4 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-all">
            <Edit className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Profile Details */}
        <div className="grid md:grid-cols-2 gap-6 text-white">
          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
            <Mail className="text-blue-400 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-300">Email</p>
              <p className="font-semibold">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
            <Phone className="text-purple-400 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-300">Phone</p>
              <p className="font-semibold">{user.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
            <Calendar className="text-pink-400 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-300">Joined</p>
              <p className="font-semibold">{user.joined}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
            <User className="text-green-400 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-300">Address</p>
              <p className="font-semibold">{user.address}</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl text-center border border-white/10 shadow-lg">
            <h2 className="text-3xl font-bold text-white">05</h2>
            <p className="text-xs text-gray-300">Events Booked</p>
          </div>

          <div className="bg-linear-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl text-center border border-white/10 shadow-lg">
            <h2 className="text-3xl font-bold text-white">03</h2>
            <p className="text-xs text-gray-300">Completed</p>
          </div>

          <div className="bg-linear-to-br from-pink-600/20 to-orange-500/20 p-6 rounded-xl text-center border border-white/10 shadow-lg">
            <h2 className="text-3xl font-bold text-white">02</h2>
            <p className="text-xs text-gray-300">Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
