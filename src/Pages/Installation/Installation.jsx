import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Installation = () => {
    const [apps, setApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('high');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setApps(installedApps);
        setLoading(false);
    }, []);

    const handleUninstall = (id) => {
        const updatedApps = apps.filter(app => app.id !== id);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        setApps(updatedApps);
        toast.info('App uninstalled successfully');
    };

    const sortedApps = [...apps].sort((a, b) =>
        sortOrder === 'high' ? b.downloads - a.downloads : a.downloads - b.downloads
    );

    return (
        <div className="bg-white min-h-screen py-12 px-6 text-gray-800">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Your Installed Apps</h1>
                <p className="text-gray-600 mt-2">
                    Explore All Trending Apps on the Market developed by us.
                </p>
            </div>

            <div className="flex justify-end mb-6 max-w-6xl mx-auto">
                <select
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2"
                >
                    <option value="high">Sort By Downloads: High-Low</option>
                    <option value="low">Sort By Downloads: Low-High</option>
                </select>
            </div>

            {loading ? (
                <div className="text-center py-20 text-gray-500 animate-pulse">Loading apps...</div>
            ) : sortedApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {sortedApps.map(app => (
                        <div key={app.id} className="border rounded-xl p-4 shadow hover:shadow-md transition">
                            <img src={app.image} alt={app.title} className="w-full h-32 object-cover rounded mb-3" />
                            <h3 className="text-lg font-semibold">{app.title}</h3>
                            <p className="text-sm text-gray-500">
                                ⬇️ {app.downloads.toLocaleString()} | 📦 {app.size} MB
                            </p>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 mt-20">No apps installed yet.</div>
            )}
        </div>
    );
};

export default Installation;