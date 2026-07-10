import React, { useState } from "react";
import { 
  FaHeart, 
  FaSeedling, 
  FaSun, 
  FaSnowflake, 
  FaLeaf, 
  FaCloudRain, 
  FaCloud,
  FaChevronDown,
  FaLess
} from "react-icons/fa";
import SC1 from "../assets/SC1.jpg";
import SC2 from "../assets/SC2.jpg";
import SC3 from "../assets/SC3.jpg";
import SC4 from "../assets/SC4.jpg";
import SC5 from "../assets/SC5.jpg";
import SC6 from "../assets/SC6.jpg";
import "../components/index.css";

const seasonData = [
  { title: "SPRING", images: [SC1] },
  { title: "SUMMER", images: [SC2] },
  { title: "WINTER", images: [SC3] },
  { title: "AUTUMN", images: [SC4] },
  { title: "RAINY", images: [SC5] },
  { title: "MONSOON", images: [SC6] },
];

const getSeasonIcon = (season) => {
  switch (season) {
    case "SPRING":
      return <FaSeedling className="text-green-500 text-3xl" />;
    case "SUMMER":
      return <FaSun className="text-yellow-500 text-3xl" />;
    case "WINTER":
      return <FaSnowflake className="text-blue-500 text-3xl" />;
    case "AUTUMN":
      return <FaLeaf className="text-orange-500 text-3xl" />;
    case "RAINY":
      return <FaCloudRain className="text-blue-500 text-3xl" />;
    case "MONSOON":
      return <FaCloud className="text-gray-500 text-3xl" />;
    default:
      return null;
  }
};


const Season = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      id="season"
      className="text-center py-12 bg-gradient-to-br from-pink-100 to-rose-400 min-h-screen relative"
    >
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

      {/* HEADING */}
      <h2 className="text-xl sm:text-4xl md:text-4xl text-rose-600 animate-fade-in font-[cursive] font-extrabold mb-12 uppercase tracking-wider">
        <FaHeart className="inline-block text-red-500 mr-2" />
        Season Collections
        <FaHeart className="inline-block text-red-500 ml-2" />
      </h2>

      
    </div>
  );
};

export default Season;
