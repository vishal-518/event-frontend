import React from 'react'
import {  NavLink } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Events</h3>
            <p className="text-3xl font-bold text-blue-400">24</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
            <p className="text-3xl font-bold text-green-400">156</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-purple-400">89</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-yellow-400">₹2.5L</p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NavLink to='/admin/event-image-uplode' className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition">
              Upload New Event Images
            </NavLink>
            <NavLink to='/admin/show-booking' className="bg-green-600 hover:bg-green-700 p-4 rounded-lg transition">
              View All Bookings
            </NavLink>
            <NavLink to='/admin/alluser' className="bg-purple-600 hover:bg-purple-700 p-4 rounded-lg transition">
              Manage Users
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard