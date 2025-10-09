import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600';

    return (
        <div className="navbar bg-white shadow-sm px-4">
            {/* Left: Logo */}
            <div className="navbar-start">
                <NavLink to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-gray-800">APP.IO</span>
                </NavLink>
            </div>

            {/* Center: Navigation Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4">
                    <li>
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apps" className={navLinkClass}>Apps</NavLink>
                    </li>
                    <li>
                        <NavLink to="/installation" className={navLinkClass}>Installation</NavLink>
                    </li>
                </ul>
            </div>

            {/* Mobile Dropdown */}
            <div className="navbar-center lg:hidden">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                        <li><NavLink to="/apps" className={navLinkClass}>Apps</NavLink></li>
                        <li><NavLink to="/installation" className={navLinkClass}>Installation</NavLink></li>
                    </ul>
                </div>
            </div>

            {/* Right: GitHub Contribute Button */}
            <div className="navbar-end">
                <a
                    href="https://github.com/EsteakAhamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.218.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;