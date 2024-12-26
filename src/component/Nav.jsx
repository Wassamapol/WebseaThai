import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-950 p-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">Sea in Thailand</div>

                {/* Toggle Menu Button */}
                <div className="md:hidden">
                    <button
                        id="menu-toggle"
                        className="text-white"
                        onClick={toggleMenu}
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="text-white hover:text-gray-500">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-500">History</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-gray-500">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-white font-bold hover:text-gray-500">Login</Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Navigation Links */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col space-y-2 mt-4">
                        <li>
                            <Link to="/" className="text-white block py-2">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="text-white block py-2">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white block py-2">History</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white block py-2">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login" className="text-white block py-2 font-bold">Login</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Nav;
