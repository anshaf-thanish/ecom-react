import React from "react";
import {
  FaHeart,
  FaRegSmile,
  FaShoppingBag,
  FaStar,
  FaRibbon,
  FaShippingFast,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div id="home" className="relative w-full overflow-hidden">
      {/* FLOATING ICONS BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => {
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
      <div className="relative z-10 flex flex-col items-center justify-center w-full bg-gradient-to-b md:bg-gradient-to-br from-pink-100 to-rose-400 min-h-screen px-4 sm:px-6 md:px-16 py-24 md:py-32">
        <div className="text-center max-w-7xl mx-auto space-y-12">
          {/* HEADING */}
          <div className="relative group w-full text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600 tracking-tighter font-poppins transform group-hover:scale-105 transition-transform duration-500">
              REDEFINE YOUR STYLE
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-700/30 to-pink-600/30 blur-2xl -z-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
          </div>

          {/* CONTENT BOX */}
          <div className="bg-gradient-to-br from-pink-100 to-rose-400 rounded-[4rem] p-1 shadow-2xl transform hover:scale-[1.005] transition-transform duration-300 group">
            <div className="bg-white/90 backdrop-blur-xl rounded-[3.5rem] p-12">
              <p className="text-2xl md:text-4xl font-bold text-rose-800 mb-8">
                Ready for a Style Revolution?
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                {/* Shop Now Button */}
                <button className="cursor-pointer flex items-center px-10 py-5 bg-rose-700 text-white rounded-full shadow-xl hover:bg-rose-800 transition-all duration-300 group/button">
                  <FaShoppingBag className="mr-4 text-xl group-hover/button:animate-bounce" />
                  <span className="text-lg font-semibold tracking-wide">
                    Shop Now
                  </span>
                  <div className="ml-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover/button:opacity-100 group-hover/button:animate-ping" />
                </button>

                {/* Spacer for desktop only */}
                <span className="hidden lg:block mx-4"></span>

                {/* Style Quiz Button */}
                <button className="cursor-pointer flex items-center px-10 py-5 bg-white text-rose-700 rounded-full shadow-xl hover:bg-rose-50 transition-all duration-300 group/button">
                  <FaRegSmile className="mr-4 text-xl group-hover/button:rotate-12 transition-transform" />
                  <span className="text-lg font-semibold tracking-wide">
                    Style Quiz
                  </span>
                  <div className="ml-4 w-2 h-2 bg-rose-600 rounded-full opacity-0 group-hover/button:opacity-100 group-hover/button:animate-pulse" />
                </button>
              </div>

              {/* Shipping Info */}
              <div className="mt-8 flex items-center justify-center space-x-4 text-rose-700">
                <FaShippingFast className="animate-move-x" />
                <span className="text-sm font-medium">
                  Free Worldwide Shipping • 24/7 Support • 100-Day Returns
                </span>
              </div>
            </div>
          </div>

          {/* ANIMATED STATS GRID */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-enter-slide">
            {[
              { value: "200K+", label: "Happy Customers", icon: FaHeart },
              { value: "98+", label: "Awards Won", icon: FaRibbon },
              { value: "98%", label: "Satisfaction", icon: FaRegSmile },
              { value: "24K+", label: "Items Sold", icon: FaStar },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="text-3xl text-rose-600 mb-4" />
                <div className="text-3xl font-bold text-rose-600">
                  {stat.value}
                </div>
                <div className="text-sm text-rose-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
