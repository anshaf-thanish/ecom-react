import React, { useState } from 'react';
import { FaBars, FaTimes, FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="w-full flex justify-between items-center px-4 sm:px-6 md:px-2 lg:px-6 py-4 shadow-md bg-gradient-to-r from-pink-500 to-red-500 relative md:fixed md:top-0 md:left-0 md:right-0 z-50">
        
        {/* MOBILE MENU */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* CENTER LOGO */}
        <h1 className="text-xl xl:text-4xl sm:text-2xl md:text-xl font-bold tracking-wide text-white font-[Poppins] flex items-center cursor-pointer gap-2">
          LoveFashion <FaHeart className="text-red-300 animate-pulse" />
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-red-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="season"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-red-300 transition-colors"
            >
              Season
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-red-300 transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="collections"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-red-300 transition-colors"
            >
              Collections
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-red-300 transition-colors"
            >
              Testimonials
            </Link>
          </li>
        </ul>

        {/* SEARCH BAR (DESKTOP) */}
        <div className="flex space-x-4 sm:space-x-6 items-center text-white">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-white bg-transparent px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white placeholder-white w-32 md:w-28 lg:w-40"
            />
            <FaSearch className="absolute right-3 top-3 text-white cursor-pointer" />
          </div>

          {/* CART ICONS AND PROFILE */}
        <div className="flex space-x-3 sm:space-x-4">
          <FaShoppingCart className="text-lg sm:text-xl cursor-pointer hover:text-pink-200 transition-colors duration-300" />
          <FaUser className="text-lg sm:text-xl cursor-pointer hover:text-pink-200 transition-colors duration-300" />
        </div>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-gradient-to-r from-pink-500 to-red-500 z-40 shadow-md transition-all duration-300">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-white bg-transparent px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
              />
              <FaSearch className="absolute right-3 top-3 text-white cursor-pointer" />
            </div>
            <ul className="space-y-4 text-white font-medium">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-red-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-red-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Seasons
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-red-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-red-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-red-300 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
            
    </div>
  );
};

export default Navbar;
