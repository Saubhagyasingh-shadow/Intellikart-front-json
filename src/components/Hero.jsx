import React from 'react';
import heroimg from '../assets/Home.jpg';
import Filter from './Filter';

function Hero() {
  return (
    <div className="relative h-screen">
      {/* Image */}
      <img src={heroimg} alt="Hero" className="w-full h-[80%] object-cover" />

      {/* Text container */}
      <div className="absolute top-1/4 left-12 ml-10 md:ml-20 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-0">
          Your ONE STOP 
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-0">
           SOLUTION
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-0">
          for your needs 
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-0">
          wants 
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-0">INTELLIKART</h1>
        <p className="text-base md:text-lg lg:text-xl mb-0">Apni Dukan</p>
        {/* You can add more text or elements here */}
      </div>
      <div className='text-center my-1'>
        <h1 className='text-4xl font-bold mb-4'>YOUR PRODUCTS, START FROM BELOW  HAPPY SHOPPING</h1>
        <div>
        <Filter/>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
