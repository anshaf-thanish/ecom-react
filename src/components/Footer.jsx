import React from "react";
import { FaHeart } from "react-icons/fa";

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
      </div>  
    </footer>
    )
    }

    export default Footer;       