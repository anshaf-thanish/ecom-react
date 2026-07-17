import React from "react";

import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import WTS1 from "../assets/WTS1.jpg";
import WTS2 from "../assets/WTS2.jpg";
import WTS3 from "../assets/WTS3.jpg";
import "../components/theme.css";

const testimonials = [
  {
    image: WTS1,
    title: "Essence Long Denim",
    rating: 5,
    name: "Lisa",
    review:
      "I like these pants. The fit is perfect for me. The material is so comfortable that it can be used anywhere.",
  },
  {
    image: WTS2,
    title: "Andcable Knit Top",
    rating: 5,
    name: "Celine",
    review:
      "I like knitted materials. I bought this shirt because the design is very pretty and comfortable to wear casually.",
  },
  {
    image: WTS3,
    title: "Candy Stripe Boxy",
    rating: 5,
    name: "Tiffany",
    review:
      "This shirt is very pretty and nice. The color is cute too. At first, I bought it as a present for my friend.",
  },
];

const Carousel = () => {
  return (
    <div
      id="testimonials"
      className="relative py-16 bg-linear-to-b from-pink-100 to-rose-400 text-gray-900 overflow-hidden"
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

      {/* SECTION TITLE */}

      <h2 className="text-2xl sm:text-5xl md:text-4xl text-center font-extrabold uppercase text-rose-700 mb-12 animate-fade-in font-[cursive] tracking-wide">
        <FaHeart className="inline-block text-red-500 mr-2" />
        What they Said
        <FaHeart className="inline-block text-red-500 ml-2" />
      </h2>
    </div>
  );
};

export default Carousel;
