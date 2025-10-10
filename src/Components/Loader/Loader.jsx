import React from 'react';
import logo from '../../assets/logo.png';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-white min-h-screen">
      <img
        src={logo}
        alt="Loading Logo"
        className="w-16 h-16 mb-4 animate-spin-slow"
      />
      <p className="text-purple-600 font-bold text-lg">Loading!!</p>
    </div>
  );
};

export default Loader;