import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { hideloader, showloader } from "../../Redux/feacture/lodericonSlice";

function Showbooking() {
  const [bookings, setBookings] = useState([]);
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const dispatch = useDispatch();

  const fetchBookings = async () => {
    dispatch(showloader())
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please login to view bookings");
        dispatch(hideloader());
        return;
      }

      const response = await axios.get("https://event-backend-cg59.onrender.com/api/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(response.data);
    } catch (error) {
      if (error.response?.status === 403) {
        setError("Access denied. Please login again.");
        localStorage.removeItem("token");
      } else {
        setError("Failed to fetch bookings");
      }
      console.error("Error fetching bookings:", error);
    } finally {
      dispatch(hideloader());
    }
  };

  // ⭐ Update Status Function
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(
        `https://event-backend-cg59.onrender.com/api/events/status/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setBookings((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handledelete = (id) => {
    setDeleteId(id);
    setPopup(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`https://event-backend-cg59.onrender.com/api/events/${deleteId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setBookings(bookings.filter((booking) => booking._id !== deleteId));
      setPopup(false);
      setDeleteId(null);
    } catch (error) {
      console.error("Error deleting event:", error);
      setPopup(false);
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setPopup(false);
    setDeleteId(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const loading = useSelector((state) => state.loader.loading);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <Loader2 className="animate-spin h-10 w-10 text-yellow-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 p-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold"> Your Bookings</h1>
        <p className="text-gray-400 mt-2">Here are your upcoming shows and events</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold">{booking.category}</h3>
                <p className="text-sm opacity-80">Event</p>
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{booking.name}</h2>

              <div className="text-gray-400 text-sm space-y-1 mb-4">
                <p>📅 {formatDate(booking.date)}</p>
                <p>🎉 {booking.category}</p>
                <p>📍 {booking.destination}</p>
                <p>📞 {booking.contact}</p>
                <p>🟢 Status: <span className="font-bold capitalize">{booking.status}</span></p>
              </div>

              <p className="text-gray-300 text-xs mb-4 line-clamp-2">
                {booking.description}
              </p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => handledelete(booking._id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Delete Event
                </button>

                {/* ⭐ Status Dropdown */}
                <select
                  className="bg-gray-700 px-4 py-2 rounded-lg text-sm font-semibold text-white"
                  value={booking.status}
                  onChange={(e) => updateStatus(booking._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

     

      {/* Delete Confirmation Popup */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-80 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4 text-white">Are you sure?</h2>
            <p className="text-gray-300 mb-6">
              Do you really want to delete this booking?
              <br />
              This action cannot be undone.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Showbooking;
