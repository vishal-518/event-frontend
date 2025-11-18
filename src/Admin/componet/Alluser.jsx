import React, { useEffect, useState } from "react";
import { Trash2, User2, Mail, Loader2, Phone } from "lucide-react";
import axios from "axios";

function AllUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popap, setpopap] = useState(false)
    const [deleteId, setDeleteId] = useState(null);
  

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://event-backend-cg59.onrender.com/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setpopap(true)
    setDeleteId(id)
  };

  const confirmDelete= async()=>{
    try {
      await axios.delete(`https://event-backend-cg59.onrender.com/api/users/${deleteId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
     setUsers((perv)=> perv.filter((user)=> user._id !== deleteId))
      setpopap(false)
    } catch (error) {
      console.error("Error deleting user:", error);
      setpopap(false);
      setDeleteId(null);
      
    }
  }

  const cancelDelete=()=>{
    setpopap(false)
    setDeleteId(null)

  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <Loader2 className="animate-spin h-10 w-10 text-yellow-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-yellow-400 text-center mb-8">
        All Users
      </h1>

      {users.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No users found</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-2xl border border-gray-700">
          <table className="min-w-full divide-y divide-gray-700">
            {/* Table Header */}
            <thead className="bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="bg-gray-800/50 divide-y divide-gray-700">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-700/50 transition">
                  {/* Name */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User2 className="text-blue-400 h-5 w-5 mr-3" />
                      <p className="text-sm font-medium text-white">{user?.name || "N/A"}</p>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Mail className="text-pink-400 h-4 w-4 mr-2" />
                      <p className="text-sm text-gray-300 truncate max-w-xs">{user?.email || "N/A"}</p>
                    </div>
                  </td>

                  {/* Phone (Hidden on small screens) */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 hidden sm:table-cell">
                    <div className="flex items-center">
                      <Phone className="text-green-400 h-4 w-4 mr-2" />
                      <p>{user?.phone || "N/A"}</p>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user?.role === "admin"
                          ? "bg-purple-600/30 text-purple-300"
                          : "bg-teal-600/30 text-teal-300"
                        }`}
                    >
                      {(user?.role || "user").toUpperCase()}
                    </span>
                  </td>

                  {/* Delete Button */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="text-red-400 hover:text-red-500 transition focus:outline-none"
                      title="Delete User"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {popap && (
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

export default AllUser;