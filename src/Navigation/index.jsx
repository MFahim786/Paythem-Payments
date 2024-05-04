import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Screens/Auth/Login';
import Dashboard from '../Screens/Navbar';
import Onboarding from '../Screens/VenderOnbording';
import PayPortal from '../Screens/Payportal';

// import '../css/navbar.css';


const Navigation = () => {
  const DefaultRoute = () => {
    return (
      <div>
        <h2>404 - Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  };

  return (
    <div>
      {/* <AppNavigation /> Render the navigation component */}
      <Routes>
        {/* Redirect to login page by default */}
        <Route path="/" element={<Navigate to="/login" />} />
         <Route path="/login" index element={<Login />} /> 
        {/*<Route path="/dashboard/add-video" element={<AddVideo />} />*/}
        <Route path="/dashboard/PayPortal" element={<PayPortal />} />
        <Route path="/dashboard/Onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="*" element={<DefaultRoute />} /> 
      </Routes>
    </div>
  );
};

export default Navigation;
