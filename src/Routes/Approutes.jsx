import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EventBookingForm from '../pages/componet/Eventbook';
import Home from '../pages/Home';
import EventImageUploadForm from '../Admin/componet/EventImageUploadForm';
import Deatialimage from '../Admin/componet/Deatialimage';
import Showevent from '../pages/componet/Showevent';
import Showuplodedimage from '../Admin/componet/Showuplodedimage';
import Showbooking from '../Admin/componet/Showbooking';
import Adminlayout from '../Layout/Adminlayout';
import ProctededRoute from '../components/ProctededRoute';
import AdminDashboard from '../Admin/componet/AdminDashboard';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Applayout from '../Layout/Applayout';
import ScrollToTop from '../ScrollToTop';
import AdminProfile from '../Admin/componet/AdminProfile';
import UserProfile from '../components/UserProfile';

function Approutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Applayout />} >
          <Route index element={<Home />} />
          <Route path="book-event" element={<EventBookingForm />} />
          <Route path="show-event" element={<Showevent />} />
          {/* <Route path="profile" element={<UserProfile />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/admin" element={<ProctededRoute role="admin"><Adminlayout /></ProctededRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="event-image-uplode" element={<EventImageUploadForm />} />
          <Route path="show-uplode-image" element={<Showuplodedimage />} />
          <Route path="show-booking" element={<Showbooking />} />
          <Route path="detail/:id" element={<Deatialimage />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default Approutes