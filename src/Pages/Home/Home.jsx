import React, { useEffect, useState } from "react";
import heroImage from "../../assets/hero.png";
import AppCard from "./AppCard";
import data from "../../Data/data.json";

const Home = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        // Load top 8 apps from data.json
        setApps(data.slice(0, 8));
    }, []);

    return (
        <div className="bg-white text-center">

            {/* Banner Section */}
            <section className="py-16 px-6 flex flex-col items-center text-center bg-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                    <span className="text-black">We Build</span>{" "}
                    <span className="text-purple-600">Productive Apps</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    At APP.IO, we craft innovative apps designed to make everyday life simpler,
                    smarter, and more exciting. Our goal is to turn your ideas into digital
                    experiences that truly make an impact.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Play Store"
                                className="h-6"
                            />
                        </div>
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="App Store"
                                className="h-6"
                            />
                        </div>
                    </a>
                </div>

                {/* Hero Image */}
                <img
                    src={heroImage}
                    alt="Hero Section"
                    className="max-w-xs md:max-w-md lg:max-w-lg mx-auto"
                />
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16 px-6">
                <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                    Trusted By Millions, Built For You
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md">
                        <h3 className="text-4xl font-bold mb-2">29.6M+</h3>
                        <p className="text-gray-200">Total Downloads</p>
                        <p className="text-xs text-gray-300">21% more than last month</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md">
                        <h3 className="text-4xl font-bold mb-2">906K</h3>
                        <p className="text-gray-200">Total Reviews</p>
                        <p className="text-xs text-gray-300">46% more than last month</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md">
                        <h3 className="text-4xl font-bold mb-2">132+</h3>
                        <p className="text-gray-200">Active Apps</p>
                        <p className="text-xs text-gray-300">31 more launching soon</p>
                    </div>
                </div>
            </section>

            {/* 🌟 Trending Apps Section */}
            <section className="py-16 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Trending Apps
                </h2>
                <p className="text-gray-500 mb-10">
                    Explore all trending apps on the market developed by us
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {apps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => (window.location.href = "/apps")}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl shadow-md transition-all duration-200"
                    >
                        Show All
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
