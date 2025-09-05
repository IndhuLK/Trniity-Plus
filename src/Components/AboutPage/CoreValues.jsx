import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import CoreImage from "../../assets/values.jpg"; // replace with your image

const CoreValues = () => {
  const values = [
    {
      title: "Compassion",
      description: "Reaching out with empathy and care.",
    },
    {
      title: "Integrity",
      description: "Working with transparency and accountability.",
    },
    {
      title: "Sustainability",
      description: "Building solutions that last.",
    },
    {
      title: "Collaboration",
      description: "Partnering with communities and stakeholders for impact.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-12 px-6 md:px-16 font-family">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-700 leading-loose mb-6 text-base ">
            At Trinity Plus Social Trust, our values guide every action we take,
            ensuring our efforts create lasting, compassionate, and sustainable
            impact for the communities we serve.
          </p>

          <ul className="space-y-4">
            {values.map((value, index) => (
              <li
                key={index}
                className="flex items-start space-x-2 text-gray-700 leading-loose"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <ArrowRight className="text-green-600 mt-1" size={18} />
                <span>
                  <strong>{value.title}</strong> – {value.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end" data-aos="fade-left">
          <img
            src={CoreImage}
            alt="Core Values"
            className="rounded-lg border-2 border-green-600 shadow-md 
            w-full md:w-[90%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
