import Home from "../pages/Home";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Services from "../pages/Services";
import Doctor from "../pages/Doctors/Doctor";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import { Routes, Route } from "react-router-dom";
import GetVirtual from "../components/GetVirtual/GetVirtual.jsx";
import BookAppointment from "../components/BookAppointment/BookAppointment.jsx";
import DoctorLocation from "../components/DoctorLocation/DoctorLocation.jsx";
import ViewMoreAbout from "../components/ViewMoreAbout/ViewMoreAbout.jsx";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/doctor-details" element={<DoctorDetails />} />
      <Route path="/blog-posts" element={<GetVirtual />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/doctor-location" element={<DoctorLocation />} />
      <Route path="/view-more-about" element={<ViewMoreAbout />} />
    </Routes>
  );
}

export default Routers;
