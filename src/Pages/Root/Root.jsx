import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from '../../Components/Loader/Loader';

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default Root;