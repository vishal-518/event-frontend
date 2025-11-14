import React, { useEffect, useState } from "react";

const Showevent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://event-backend-cg59.onrender.com/api/events", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "text-green-400 bg-green-900/40";
      case "rejected":
        return "text-red-400 bg-red-900/40";
      default:
        return "text-yellow-400 bg-yellow-900/40";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-lg">
        Loading events...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
        Upcoming Events<span className="text-blue-400">.</span>
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-400">No events available</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-600 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              {event.image && (
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5">
                <h2 className="text-xl font-semibold text-blue-300">
                  {event.name}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {event.description}
                </p>

                <p className="text-gray-500 mt-3 text-sm">
                  📅 {new Date(event.date).toLocaleDateString()}  
                  | 📍 {event.destination}
                </p>

                <p className="mt-1 text-gray-400 text-sm">
                  📞 {event.contact}
                </p>

                <p className="mt-1 text-gray-400 text-sm">
                  🏠 {event.address}
                </p>

                <p className="mt-1 text-yellow-400 text-sm">
                  ⭐ Category: {event.category}
                </p>

                <p className={`mt-3 inline-block px-3 py-1 rounded-lg text-sm font-semibold ${getStatusColor(event.status || "pending")}`}>
                  Status: {event.status ? event.status : "pending"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Showevent;


// import React, { useEffect, useState } from "react";

// const Showevent = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("https://event-backend-cg59.onrender.com/api/events", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const data = await response.json();
//         setEvents(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "approved":
//         return "bg-green-500/20 text-green-400 border border-green-400/30";
//       case "rejected":
//         return "bg-red-500/20 text-red-400 border border-red-400/30";
//       default:
//         return "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-white text-lg">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 pt-24">
//       {/* Heading */}
//       <h1 className="text-4xl font-extrabold text-center mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//         Your Event Bookings
//       </h1>

//       {events.length === 0 ? (
//         <p className="text-center text-gray-400">No events available</p>
//       ) : (
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {events.map((event) => (
//             <div
//               key={event._id}
//               className="rounded-xl shadow-xl overflow-hidden bg-gray-800/40 backdrop-blur-xl border border-gray-700/30 hover:border-blue-500/40 hover:shadow-blue-500/20 transition duration-300"
//             >
//               {/* Image Section */}
//               <div className="relative">
//                 <img
//                   src={
//                     event.image ||
//                     "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
//                   }
//                   alt={event.name}
//                   className="w-full h-52 object-cover rounded-t-xl"
//                 />

//                 {/* Status Badge */}
//                 <span
//                   className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xl ${getStatusStyle(
//                     event.status || "pending"
//                   )}`}
//                 >
//                   {event.status ? event.status.toUpperCase() : "PENDING"}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <h2 className="text-xl font-bold text-blue-300">
//                   {event.name}
//                 </h2>

//                 <p className="text-gray-400 text-sm mt-2 line-clamp-2">
//                   {event.description}
//                 </p>

//                 <div className="mt-4 space-y-1 text-sm text-gray-300">
//                   <p>📅 {new Date(event.date).toLocaleDateString()}</p>
//                   <p>📍 {event.destination}</p>
//                   <p>📞 {event.contact}</p>
//                   <p>🏠 {event.address}</p>

//                   <p className="text-purple-400 font-semibold mt-2">
//                     ⭐ {event.category}
//                   </p>
//                 </div>

//                 <button className="mt-5 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-white transition shadow-lg shadow-blue-500/20">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Showevent;
