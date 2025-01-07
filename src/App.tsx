import React, { ReactNode } from 'react';
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from "./components/ScrollToTop";
import { Navigation } from './navigation';
import Home from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faqs';
import Error404 from './pages/Error404';
import Login from './pages/Login';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; 
  };

  return isAuthenticated() ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

function App() {
  const location = useLocation();
  
  const adminRoutes: string[] = [
    "/admin",
    "/admin/contacts",
    "/admin/enquiries",
    "/admin/bookings",
    "/admin/profile",
    "/update_profile",
    "/update-password",
    "/admin/send-email",
    "/admin/sent-mails"
  ];
  

  return (
    <ChakraProvider>
      <div className="App">
        {!adminRoutes.includes(location.pathname) && <Navigation />}
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />


          {/* Admin Routes */}
          {/* 
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="/admin/contacts" element={<PrivateRoute><AdminContactList /></PrivateRoute>} />
          <Route path="/admin/enquiries" element={<PrivateRoute><AdminEnquiryList /></PrivateRoute>} />
          <Route path="/admin/bookings" element={<PrivateRoute><AdminBookingList /></PrivateRoute>} />
          <Route path="/admin/profile" element={<PrivateRoute><AdminProfile /></PrivateRoute>} />
          <Route path="/update_profile" element={<PrivateRoute><AdminUpdateProfile /></PrivateRoute>} />
          <Route path="/update-password" element={<PrivateRoute><AdminChangePassword /></PrivateRoute>} />
          <Route path="/admin/send-email" element={<PrivateRoute><SendMail /></PrivateRoute>} />
          <Route path="/admin/sent-mails" element={<PrivateRoute><AdminSentMails /></PrivateRoute>} />
          */}
          {/* Fallback route */}
          
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
