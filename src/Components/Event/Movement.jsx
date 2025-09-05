import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Em from "/src/assets/Donateimg.jpg";
import Image1 from "../../assets/F1.jpg";
import Image2 from "../../assets/F2.jpg";
import ellipse from "../../assets/Ellipse.png";

const Movement = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="font-family">
      {/* Hero Section */}
      <div
        className="relative w-full h-120 flex items-center justify-center text-center text-white"
        data-aos="fade-up"
      >
        {/* Background Image */}
        <img
          src={Em}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Content */}
        <div className="relative z-10 px-4">
          <h2
            className="md:text-3xl text-xl font-bold mb-4"
            data-aos="fade-down"
          >
            Be Part of the Movement
          </h2>
          <p
            className="md:text-lg md:px-50 text-sm max-w-5xl leading-loose"
            data-aos="fade-up"
          >
            Your participation in our programs helps us create lasting social
            impact. Together, we can bring hope, opportunities, and progress.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Building Stronger Communities
            </h2>
            <p className="text-gray-700 leading-loose">
              At Trinity Plus Social Trust, every event is a step toward unity
              and progress. We bring people together through meaningful programs
              that promote education, health, empowerment, and sustainable
              development. By creating spaces for learning, sharing, and
              collaboration, we work to strengthen the bonds of community and
              build a brighter future for all.
            </p>
          </div>

          {/* Right Images */}
          <div className="relative w-full flex justify-center" data-aos="zoom-in">
            {/* Green Ellipse Shape */}
            <img
              src={ellipse}
              alt="Ellipse Shape"
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-[250px] h-[250px] -z-10"
            />

            {/* Big Image */}
            <img
              src={Image1}
              alt="Community Event"
              className="w-96 h-82 rounded-xl object-cover shadow-lg relative"
              data-aos="zoom-in-up"
            />

            {/* Small Overlapping Image */}
            <img
              src={Image2}
              alt="Handshake"
              className="w-40 h-40 rounded-lg object-cover shadow-xl absolute 
              -left-5 top-1/2 transform -translate-y-1/2 border-4 border-white"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
