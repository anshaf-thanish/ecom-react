import React from "react";
import { FaHeart, FaRegSmile, FaShoppingBag, FaStar, FaRibbon } from "react-icons/fa";

const Banner = () => {
  return (
    <div id="home" className="w-full overflow-hidden">
      {/* FLOATING ICONS BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => {
          const icons = [FaHeart, FaShoppingBag, FaRegSmile];
          const Icon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <Icon
              key={i}
              className="absolute text-red-400 opacity-50 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 2 + 1}rem`,
                animationDuration: `${Math.random() * 4 + 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          );
        })}
      </div>

      {/* MAIN CONTENT BANNER */}
      <div className="overflow-hidden z-10 flex flex-col md:flex-row items-center justify-between w-full bg-gradient-to-b md:bg-gradient-to-br from-pink-100 to-rose-400 h-auto md:min-h-screen px-4 sm:px-6 md:px-16 py-12 md:py-8">
        <div className="relative text-center max-w-7xl mx-auto space-y-10">
          {/* HEADING */}
          <div className="relative mt-14 group w-full text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600 tracking-tighter font-poppins transform group-hover:scale-105 transition-transform duration-500">
              REDEFINE YOUR STYLE
            </h1>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-700/30 to-pink-600/30 blur-2xl -z-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
          <p className="mt-6 text-lg text-gray-700 font-medium">
            Ready for a Style Revolution?
          </p>
        </div>

        {/* INTERACTIVE BUTTONS */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-10">
          {/* Shop Now Button */}
          <button className="flex items-center px-10 py-5 bg-rose-700 text-white rounded-full shadow-xl hover:bg-rose-800 transition-all duration-300 group/button">
            <FaShoppingBag className="mr-4 text-xl group-hover/button:animate-bounce" />
            <span className="text-lg font-semibold tracking-wide">Shop Now</span>
          </button>
          <div className="ml-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover/button:animate-ping"></div>

          {/* Style Quiz Button */}
          <button className="flex items-center px-10 py-5 bg-white text-rose-700 rounded-full shadow-xl hover:bg-rose-50 transition-all duration-300 group/button">
            <FaRegSmile className="mr-4 text-xl group-hover:rotate-12 transition-transform" />
            <span className="text-lg font-semibold tracking-wide">Style Quiz</span>
            <div className="ml-4 w-2 h-2 bg-rose-600 rounded-full opacity-0 group-hover/button:opacity-100 group-hover/button:animate-pulse"></div>
          </button>
        </div>
      </div>

      {/* ANIMATED STATS GRID */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-enter-slide">
        {[
          { value: "200K+", label: "Happy Customers", icon: FaHeart },
          { value: "98+", label: "Awards Won", icon: FaRibbon },
          { value: "98%", label: "Satisfaction", icon: FaRegSmile },
          { value: "24K+", label: "Items Sold", icon: FaStar },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
          >
            <stat.icon className="text-3xl text-rose-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
