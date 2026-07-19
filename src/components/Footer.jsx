import React from "react";
import { FaHeart, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden font-serif bg-gradient-to-b from-pink-100 to-rose-400 text-white pt-16 px-6 sm:px-10 lg:px-16">
      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <FaHeart
            key={i}
            className="absolute text-red-400 opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-extrabold text-rose-800 flex items-center justify-center mb-6">
          LoveFashion
        </h3>
        <p className="text-rose-800 text-lg mb-8">
          Curating romantic styles for your special moments
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center space-x-6 text-3xl mb-12">
          <a href="#" className="transition-colors duration-300 text-blue-700">
            <FaFacebook />
          </a>
          <a href="#" className="transition-colors duration-300 text-red-700">
            <FaInstagram />
          </a>
          <a href="#" className="transition-colors duration-300 text-blue-400">
            <FaTwitter />
          </a>
        </div>

        {/* VALENTINE'S PICKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6 text-lg">
            <h4 className="text-2xl font-bold text-rose-800">Valentine's Picks</h4>
            <nav className="flex flex-col space-y-3">
              {[
                "Couple Outfits",
                "Romantic Dresses",
                "Love-themed Accessories",
                "Gift Packages",
                "Date Night Styles",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition-colors duration-300 text-rose-800 hover:text-rose-600"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* LOVE & CARE */}
          <div className="space-y-6 text-lg">
            <h4 className="text-2xl font-bold text-rose-800">Love & Care</h4>
            <nav className="flex flex-col space-y-3">
              {[
                "Contact Us",
                "Gift Wrapping",
                "Romantic Surprises",
                "Love Notes",
                "Special Requests",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition-colors duration-300 text-rose-800 hover:text-rose-600"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
