import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Loader2 } from 'lucide-react'

function Deatialimage() {
  const { id } = useParams()
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImageDetail = async () => {
      try {
        const response = await axios.get(`https://event-backend-cg59.onrender.com/api/eventsimg/${id}`, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        setDetail(response.data)
      } catch (error) {
        console.error('Error fetching image details:', error)
      } finally {
        setLoading(false)
      }
    }
    
    if (id) {
      fetchImageDetail()
    }
  }, [id])

   if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <Loader2 className="animate-spin h-10 w-10 text-yellow-400" />
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <p>Image not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={`https://event-backend-cg59.onrender.com/${detail.image}`}
            alt={detail.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{detail.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <p className="text-gray-400"><span className="font-semibold">📍 City:</span> {detail.city}</p>
                <p className="text-gray-400"><span className="font-semibold">🎭 Type:</span> {detail.type}</p>
                <p className="text-gray-400"><span className="font-semibold">🆔 ID:</span> {detail._id}</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-500 text-sm"><span className="font-semibold">📅 Created:</span> {new Date(detail.createdAt).toLocaleDateString()}</p>
                <p className="text-gray-500 text-sm"><span className="font-semibold">🔄 Updated:</span> {new Date(detail.updatedAt).toLocaleDateString()}</p>
                <p className="text-gray-500 text-sm"><span className="font-semibold">📂 Version:</span> {detail.__v}</p>
              </div>
            </div>

            {detail.description && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">📝 Description:</h3>
                <p className="text-gray-300 bg-gray-700 p-3 rounded-lg">{detail.description}</p>
              </div>
            )}

            {detail.venues && detail.venues.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">🏢 Venues:</h3>
                <div className="space-y-2">
                  {detail.venues.map((venue) => (
                    <div key={venue._id} className="bg-gray-700 p-3 rounded-lg">
                      <p className="text-white font-medium">{venue.name}</p>
                      <p className="text-gray-400 text-sm">ID: {venue._id}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deatialimage