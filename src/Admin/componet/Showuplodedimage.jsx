import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Showuplodedimage() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("https://event-backend-cg59.onrender.com/api/eventsimg", {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
        setUploadedImages(res.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  // 🗑️ Delete Confirmation Logic
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setPopup(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`https://event-backend-cg59.onrender.com/api/eventsimg/${selectedId}`, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      setUploadedImages(uploadedImages.filter((img) => img._id !== selectedId));
      setPopup(false);
      setSelectedId(null);
    } catch (error) {
      console.error("Error deleting image:", error);
      setPopup(false);
    }
  };

  const cancelDelete = () => {
    setPopup(false);
    setSelectedId(null);
  };

  const detail = (id) => {
    navigate(`/admin/detail/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center">
        <div className="text-center text-white animate-pulse">
          <div className="h-12 w-12 border-4 border-t-transparent border-indigo-500 rounded-full mx-auto mb-4 animate-spin"></div>
          <p className="text-lg text-gray-300">Loading images...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-gray-800 text-white pt-20 p-8 relative">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          📸 Uploaded Gallery
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Explore all your uploaded memories
        </p>
      </div>

      {/* Image Grid */}
      {uploadedImages.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {uploadedImages.map((img) => (
            <div
              key={img._id}
              className="relative bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="relative group">
                <img
                  src={`https://event-backend-cg59.onrender.com/${img.image}`}
                  alt={img.title || "Uploaded Image"}
                  className="h-64 w-full object-cover group-hover:opacity-80 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button
                    onClick={() => detail(img._id)}
                    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
                  >
                    View Full
                  </button>
                </div>
              </div>

              {/* Image Details */}
              <div className="p-5">
                <h2 className="text-lg font-semibold capitalize text-white mb-1 line-clamp-1">
                  {img.title || "Untitled"}
                </h2>
                <p className="text-gray-400 text-sm mb-2">
                  📍 {img.city || "Unknown City"}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  Uploaded on{" "}
                  {img.createdAt
                    ? new Date(img.createdAt).toLocaleDateString()
                    : "—"}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleDeleteClick(img._id)}
                    className="bg-red-600/80 hover:bg-red-700 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-16 text-gray-400">
          <p className="text-2xl mb-2">📭 No images uploaded yet</p>
          <p className="text-sm">Start uploading to see your collection here!</p>
        </div>
      )}

      {/* 🧩 Delete Confirmation Popup */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-80 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4 text-white">Are you sure?</h2>
            <p className="text-gray-300 mb-6">
              Do you really want to delete this image? <br />
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

export default Showuplodedimage;
