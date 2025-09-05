import React, { useEffect } from "react";
import hero1 from "../../assets/Herobg3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const OurVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-family">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16 py-12">
        {/* Left Side Content */}
        <div className="relative flex justify-center" data-aos="fade-right">
          {/* Outer container with dashed border */}
          <div className="absolute top-4 left-16 w-[80%] h-[105%] border-2 border-dashed border-green-600 rounded-lg -z-0"></div>

          {/* Content container */}
          <div className="relative">
            {/* Main Image */}
            <img
              src={hero1}
              alt="Our Vision"
              className="rounded-lg shadow-lg w-72 md:w-96"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-base ">
            A society where every individual has access to opportunities, lives
            with dignity, and contributes to positive social change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
