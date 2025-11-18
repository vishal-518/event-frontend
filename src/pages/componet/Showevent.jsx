import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const Showevent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("https://event-backend-cg59.onrender.com/api/events", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        // console.log(data);

        if (!response.ok || !Array.isArray(data)) {
          setEvents([]);
          setLoading(false);
          return;
        }

        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-500/20 text-green-300 border border-green-400/40";
      case "rejected":
        return "bg-red-500/20 text-red-300 border border-red-400/40";
      default:
        return "bg-yellow-500/20 text-yellow-300 border border-yellow-400/40";
    }
  };

   if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <Loader2 className="animate-spin h-10 w-10 text-yellow-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
        Your Events
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-400">No events found</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-gray-800 rounded-xl shadow-xl p-5 border border-gray-700/40 hover:border-blue-500/50 hover:shadow-blue-500/30 transition duration-300"
            >
              {/* Title */}
              <h2 className="text-xl font-bold text-blue-300">{event.name}</h2>

              <div className="mt-3 space-y-2 text-sm text-gray-300">
                <p> <span className="text-gray-400">{event.email}</span></p>
                <p> <span className="text-gray-400">{event.phone}</span></p>

                <p> Date: {new Date(event.date).toLocaleDateString()}</p>
                <p> Event Type: {event.eventType}</p>
                <p> Guests: {event.guests}</p>
                <p> Venue: {event.venue}</p>

                <p> Services:
                  {event.services.length > 0 ? (
                    <span className="text-blue-300"> {event.services.join(", ")}</span>
                  ) : (
                    <span className="text-gray-400"> None</span>
                  )}
                </p>

                <p> Message:
                  {event.message ? (
                    <span className="text-gray-300"> {event.message}</span>
                  ) : (
                    <span className="text-gray-500"> No message</span>
                  )}
                </p>

                <p> Created: {new Date(event.createdAt).toLocaleString()}</p>
              </div>


              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm text-gray-300">
                  Your booking is
                </p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm border 
      ${getStatusStyle(event.status || "pending")}`}
                >
                  {event.status.toUpperCase()}
                </span>

              </div>

            </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default Showevent;
