import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/data.json';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetails = () => {
    const { id } = useParams();
    const app = data.find(item => item.id === parseInt(id));
    const [installed, setInstalled] = useState(false);

    if (!app) {
        return <div className="text-center py-20 text-gray-600">App not found</div>;
    }

    const handleInstall = () => {
        setInstalled(true);
        toast.success(`${app.title} installed successfully!`);
    };

    const chartData = [...app.ratings].reverse(); // 5 star at top

    return (
        <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
            {/* App Info Section */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-12">
                <img src={app.image} alt={app.title} className="w-32 h-32 object-cover rounded-xl" />
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
                    <p className="text-sm text-gray-500 mb-2">by {app.companyName}</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-700 mb-4">
                        <span>⬇️ {app.downloads.toLocaleString()} downloads</span>
                        <span>⭐ {app.ratingAvg} ({app.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`px-6 py-2 rounded-lg shadow transition ${installed
                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                : 'bg-green-500 hover:bg-green-600 text-white'
                            }`}
                    >
                        {installed ? 'Installed' : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>

            {/* Ratings Chart */}
            <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-xl font-semibold mb-4">Ratings Breakdown</h2>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart layout="vertical" data={chartData} margin={{ left: 20 }}>
                        <XAxis type="number" hide />
                        <YAxis
                            type="category"
                            dataKey="name"
                            width={80}
                            tick={{ fill: '#4B5563', fontSize: 14 }}
                        />
                        <Tooltip formatter={(value) => `${value.toLocaleString()} ratings`} />
                        <Bar dataKey="count" fill="#8b5cf6" radius={[0, 6, 6, 0]}>
                            <LabelList dataKey="count" position="right" formatter={(val) => val.toLocaleString()} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Description Section */}
            <div className="max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">About This App</h2>
                <p className="text-gray-700 leading-relaxed text-justify">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;