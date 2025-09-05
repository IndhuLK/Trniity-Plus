import React from "react";
import hero1 from "../../assets/Herobg3.jpg";
import hero2 from "../../assets/Herobg4.jpg";

const WhatDrives = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16 py-12 bg-white">
        {/* Left Side Content */}
        <div data-aos="fade-right">
          <p className="text-green-700 font-medium mb-2 flex items-center gap-2">
            What Drives Us
            <span className="text-green-700 text-xl">••••</span>
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Guided by Purpose, Driven by Impact
          </h2>
          <p className="text-gray-700 leading-loose">
            Trinity Plus Social Trust is guided by a strong purpose and a clear
            vision. Our mission fuels our daily work, while our vision inspires
            us to create a future where dignity, equality, and opportunities are
            accessible to all.
          </p>
        </div>

        {/* Right Side Images */}
        <div className="relative flex justify-center" data-aos="fade-left">
          {/* Outer container with single dashed border */}
          <div className="absolute top-4 left-4 w-[95%] h-[105%] border-2 border-dashed border-green-600 rounded-lg -z-0"></div>

          {/* Content container */}
          <div className="relative">
            {/* Main Image */}
            <img
              src={hero1}
              alt="Main"
              className="rounded-lg shadow-lg w-80 md:w-96"
              data-aos="zoom-in"
              data-aos-delay="200"
            />

            {/* Overlapping Image */}
            <img
              src={hero2}
              alt="Donation"
              className="absolute bottom-[-40px] right-15 rounded-lg shadow-md w-52 md:w-60"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDrives;
