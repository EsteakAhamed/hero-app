import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImage from '../../assets/error-404.png';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar />

            {/* Main content */}
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8">
                <img
                    src={errorImage}
                    alt="404 Error"
                    className="max-w-md w-full mb-6"
                />
                <h1 className="text-4xl font-bold text-purple-600 mb-2">Oops, page not found!</h1>
                <p className="text-gray-600 mb-6">
                    The page you are looking for is not available.
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-primary bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded"
                >
                    Go Back!
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default ErrorPage;