import React, { useEffect, useState } from "react";
import { Trash2, User2, Mail, Loader2, Phone } from "lucide-react";

function Alluser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users (admin only)
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://event-backend-cg59.onrender.com/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const token = localStorage.getItem("token");
      await fetch(`https://event-backend-cg59.onrender.com/api/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Loading UI
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

      <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-xl">
        <table className="w-full border-collapse">
          <thead className="bg-gray-800 text-yellow-300">
            <tr>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-center">Role</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-6 text-gray-400 text-lg"
                >
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-700 hover:bg-gray-800/80 transition"
                >
                  <td className="p-3 flex items-center gap-2">
                    <User2 className="text-blue-400 h-5 w-5" />
                    {user.name}
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <Mail className="text-pink-400 h-5 w-5" />
                    {user.email}
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <Phone className="text-green-400 h-5 w-5" />
                    {user.phone || "N/A"}
                  </td>

                  <td className="p-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "admin"
                          ? "bg-purple-600/30 text-purple-300"
                          : "bg-teal-600/30 text-teal-300"
                      }`}
                    >
                      {user.role.toUpperCase()}
                    </span>
                  </td>

                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="text-red-400 hover:text-red-600 transition"
                    >
                      <Trash2 className="inline-block h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Alluser;
