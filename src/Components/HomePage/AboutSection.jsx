import React from "react";
import { MoreHorizontal } from "lucide-react";
import aboutImg from "/src/assets/Herobg2.jpg"; // Replace with your image path

const AboutSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 font-family">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 text-green-700 font-semibold">
      <span className="text-lg">About us</span>
      <MoreHorizontal className="w-8 h-8 text-green-700" /> {/* Big icon */}
    </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Empowering Communities for a Better Tomorrow
          </h2>
          <p className="text-gray-600 mb-6 leading-loose">
            Trinity Plus Social Trust is a nonprofit dedicated to holistic community
            development. Our focus areas include education, healthcare, women
            empowerment, agriculture, and livelihood training. We believe that lasting
            change comes from empowering individuals and communities to stand strong
            and self-reliant.
          </p>
          <a
            href="/about"
            className="inline-flex bg-gradient-to-r from-green-900 to-green-600
       text-white px-10 py-3 rounded-full font-medium items-center mx-auto 
       gap-2 hover:shadow-md transition cursor-pointer"
          >
            Read more about us →
          </a>
        </div>

        {/* Right Image with border effect */}
        <div className="relative flex justify-center">
          {/* Decorative border */}
          <div className="md:block hidden absolute -top-5 left-4 border-2 border-green-600 w-50 h-50 rounded-lg z-10"></div>
          <img
            src={aboutImg}
            alt="About"
            className="rounded-lg shadow-lg w-full max-w-md object-cover z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
