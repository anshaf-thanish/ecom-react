import React, { useState } from 'react';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
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
      </nav>
    </div>
  );
};

export default Navbar;
