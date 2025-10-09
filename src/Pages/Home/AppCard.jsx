import React from "react";
import { useNavigate } from "react-router-dom";

export default function AppCard({ app }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 transition duration-200 cursor-pointer"
            onClick={() => navigate(`/app/${app.id}`)}
        >
            <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 mx-auto mb-3 rounded-xl object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-800 text-center">
                {app.title}
            </h2>
            <p className="text-sm text-gray-500 text-center">{app.companyName}</p>

            <div className="flex items-center justify-center mt-2 text-yellow-500">
                <span className="font-medium text-gray-700">{app.ratingAvg}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 ml-1"
                >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.416 8.241L12 18.897l-7.416 4.612L6 15.268 0 9.423l8.332-1.268z" />
                </svg>
            </div>

            <p className="text-sm text-gray-500 text-center mt-1">
                {app.downloads.toLocaleString()}+ downloads
            </p>
        </div>
    );
}