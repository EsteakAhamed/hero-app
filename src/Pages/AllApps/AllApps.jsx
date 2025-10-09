import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../Data/data.json';
import appErrorImage from '../../assets/app-error.png'; 

const AllApps = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleReload = () => {
        setSearchTerm('');
    };

    return (
        <div className="bg-white min-h-screen py-12 px-6 text-gray-800">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Our All Applications</h1>
                <p className="text-gray-600 mt-2">
                    Explore All Apps on the Market developed by us. We code for Millions.
                </p>
            </div>

            {/* Search and Stats */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 max-w-6xl mx-auto gap-4">
                <p className="text-gray-700 text-sm">
                    ({filteredApps.length}) Apps Found
                </p>
                <input
                    type="text"
                    placeholder="Search Apps"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            {/* App Grid or Error */}
            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {filteredApps.map(app => (
                        <div
                            key={app.id}
                            className="border rounded-xl p-4 shadow hover:shadow-md cursor-pointer transition"
                            onClick={() => navigate(`/app/${app.id}`)}
                        >
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-32 object-cover rounded mb-3"
                            />
                            <h3 className="text-lg font-semibold">{app.title}</h3>
                            <p className="text-sm text-gray-500">
                                {app.downloads.toLocaleString()} downloads
                            </p>
                            <p className="text-sm text-yellow-500">⭐ {app.ratingAvg.toFixed(1)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-20 text-center">
                    <img
                        src={appErrorImage}
                        alt="App Not Found"
                        className="w-48 h-48 mb-6"
                    />
                    <h2 className="text-2xl font-bold text-black mb-4">OPPS!! App Not Found</h2>
                    <button
                        onClick={handleReload}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow transition"
                    >
                        Go Back!
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllApps;