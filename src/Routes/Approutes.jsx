import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EventImageUploadForm from '../Admin/componet/EventImageUploadForm';
import Deatialimage from '../Admin/componet/Deatialimage';
import Showevent from '../pages/componet/Showevent';
import Showuplodedimage from '../Admin/componet/Showuplodedimage';
import Showbooking from '../Admin/componet/Showbooking';
import Adminlayout from '../Layout/Adminlayout';
import AdminDashboard from '../Admin/componet/AdminDashboard';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Applayout from '../Layout/Applayout';
import ScrollToTop from '../ScrollToTop';
import AdminProfile from '../Admin/componet/AdminProfile';
import Wedding from '../Services/wedding';
import Corporate from '../Services/corporate';
import Birthday from '../Services/birthday';
import Decor from '../Services/decor';
import Concerts from '../Events/concerts';
import DestinationEvents from '../Events/destination';
import Fashion from '../Events/fashion';
import Gallery from '../pages/componet/gallery';
import BookNow from '../pages/componet/Booknow';
import About from '../components/About';
import ProctededRoute from '../components/ProctededRoute';
import Home from '../pages/Home';
import Contact from '../pages/componet/Contact';
import AdminContact from '../Admin/componet/AdminContact';
import Alluser from '../Admin/componet/Alluser';

function Approutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Applayout />} >
          <Route index element={<Home />} />
          <Route path="show-event" element={<Showevent />} />
          {/* <Route path="profile" element={<UserProfile />} /> */}
          <Route path="/services/wedding" element={<Wedding />} />
          <Route path="/services/corporate" element={<Corporate />} />
          <Route path="/services/birthday" element={<Birthday />} />
          <Route path="/services/decor" element={<Decor />} />
          <Route path="/events/concerts" element={<Concerts />} />
          {/* <Route path="/events/fashion" element={<Fashion />} /> */}
          <Route path="/events/destination" element={<DestinationEvents />} />
          <Route path="/events/fashion" element={<Fashion />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin" element={<ProctededRoute role="admin"><Adminlayout /></ProctededRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="event-image-uplode" element={<EventImageUploadForm />} />
          <Route path="show-uplode-image" element={<Showuplodedimage />} />
          <Route path="show-booking" element={<Showbooking />} />
          <Route path="contact-event" element={<AdminContact />} />
          <Route path="alluser" element={<Alluser />} />
          <Route path="detail/:id" element={<Deatialimage />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default Approutes