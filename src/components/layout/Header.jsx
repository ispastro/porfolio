import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; 
import Logo from "../../assets/logo.png";

function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinkStyles = (path) =>
    `relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 ${
      isActive(path)
        ? "text-blue-600 dark:text-blue-400 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 dark:after:from-blue-400 dark:after:to-purple-400"
        : "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 dark:after:from-blue-400 dark:after:to-purple-400 after:transition-all hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#001220]  shadow-lg  text-teal-400">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo} // path to your logo's location
              alt="Logo"
              className="w-12 h-12 object-contain"

            />
          </Link>

          {/* Mobile: Hamburger menu */}
          <div className="md:hidden flex items-center">

          <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors mr-6"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <FaMoon className="text-gray-800" size={20} />
              ) : (
                <FaSun className="text-yellow-400" size={20} />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? (
                // Close Icon
                <>
                  <div className="w-10 h-1 bg-orange-500 mb-2"></div>
                  <div className="w-8 h-1 bg-orange-500 mb-2 ml-2"></div>
                  <div className="w-10 h-1 bg-orange-500"></div>
                </>
              ) : (
                // Open Icon
                <>
                  <div className="w-10 h-1 bg-orange-500 mb-2"></div>
                  <div className="w-8 h-1 bg-orange-500 mb-2 mr-2"></div>
                  <div className="w-10 h-1 bg-orange-500"></div>
                </>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkStyles("/")}>Home</Link>
            <Link to="/projects" className={navLinkStyles("/projects")}>Projects</Link>
            <Link to="/contact" className={navLinkStyles("/contact")}>Contact</Link>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg  bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {theme === "light" ? (
                <FaMoon className="text-gray-800" size={20} />
              ) : (
                <FaSun className="text-yellow-400" size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 space-y-4 pb-4`}
        >
          <Link
            to="/"
            className={`block ${navLinkStyles("/")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`block ${navLinkStyles("/projects")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`block ${navLinkStyles("/contact")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
