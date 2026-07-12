import React from 'react'
import { FaHeart } from 'react-icons/fa'
import '../components/theme.css'

import BL1 from '../assets/BL1.png'
import BL2 from '../assets/BL2.png'
import BR1 from '../assets/BR1.png'
import BR2 from '../assets/BR2.png'

const Banner2 = () => {
  return (
    <div className='bg-gradient-to-br from-pink-100 to-rose-400 py-12 px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between relative'>
      
      {/* Decorative Hearts */}
      <div className='absolute top-0 left-0 transform -translate-x-6 -translate-y-6'>
        <FaHeart className='text-red-500 text-3xl' />
      </div>
      <div className='absolute right-0 bottom-0 transform -translate-x-6 -translate-y-6'>
        <FaHeart className='text-red-500 text-3xl' />
      </div>

      {/* LEFT SIDE IMG */}
      <div className='flex gap-4 md:w-1/3 justify-end relative'>
        <img 
          src={BL1} 
          alt="Left IMG" 
          className="w-24 sm:w-32 md:w-2/5 rounded-lg transform rotate-[-5deg] transition duration-300 hover:scale-105" 
        />
        <img 
          src={BL2} 
          alt="Left IMG" 
          className="w-24 sm:w-32 md:w-2/5 rounded-lg transform rotate-[-5deg] transition duration-300 hover:scale-105" 
        />
      </div>

      {/* CENTER TEXT */}
      <div className="text-center md:w-1/3 my-6 md:my-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-md">
          Get 15% off
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">
          For all new product purchases Rs 1000.00
        </p>
        <button className='mt-5 px-6 sm:px-8 py-3 sm:py-3 font-semibold bg-gradient-to-r 
          from-gray-800 to-gray-800 text-white text-base sm:text-lg rounded-full hover:from-gray-700 
          hover:to-black transition duration-300 shadow-lg transform hover:scale-105'>
          SHOP NOW
        </button>
      </div>

      {/* RIGHT SIDE IMG */}
      <div className='flex gap-4 md:w-1/3 justify-start relative'>
        <img 
          src={BR1} 
          alt='Right IMG' 
          className='w-24 sm:w-32 md:w-2/5 rounded-lg transform rotate-[-5deg] transition duration-300 hover:scale-105' 
        />
        <img 
          src={BR2} 
          alt='Right IMG' 
          className='w-24 sm:w-32 md:w-2/5 rounded-lg transform rotate-[-5deg] transition duration-300 hover:scale-105' 
        />
      </div>
    </div>
  )
}

export default Banner2
