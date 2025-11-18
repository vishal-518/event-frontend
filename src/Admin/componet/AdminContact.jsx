import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

function AdminContact() {
  const [contacts, setContacts] = useState([]);
    const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
    const [deleteId, setDeleteId] = useState(null);
  

  const fetchContacts = async () => {
    try {
      const res = await axios.get("https://event-backend-cg59.onrender.com/api/conatcts",{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      setContacts(res.data);
    } catch (err) {
      setError("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteId(id);
    console.log(deleteId)
    setPopup(true);
  };

   const confirmDelete = async () => {
    try {
      await axios.delete(`https://event-backend-cg59.onrender.com/api/conatcts/${deleteId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setContacts(contacts.filter((contact) => contact._id !== deleteId));
      setPopup(false);
      setDeleteId(null);
    } catch (error) {
      console.error("Error deleting contact:", error);
      setPopup(false);
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setPopup(false);
    setDeleteId(null);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

   if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400 text-center">All Contacts</h1>

      {error && <p className="text-red-400 mb-4">{error}</p>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 hover:border-yellow-500 transition"
            >
              <h2 className="text-xl font-semibold text-yellow-300">
                {contact.name}
              </h2>

              <p className="text-gray-300 mt-1">
                <span className="font-semibold">Email:</span> {contact.email}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> {contact.phone}
              </p>

              <p className="text-gray-400 mt-2">{contact.message}</p>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(contact._id)}
                className="mt-4 flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          ))}
        </div>
      
       {!loading && contacts.length === 0 && (
        <div className="text-center mt-10 text-gray-400">
          <p>No Contact found 😔</p>
          
        </div>
      )}

       {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-80 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4 text-white">Are you sure?</h2>
            <p className="text-gray-300 mb-6">
              Do you really want to delete this contact?
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

export default AdminContact;
