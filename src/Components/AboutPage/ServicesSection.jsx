import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Image2 from "../../assets/Herobg.jpg";
import Image3 from "../../assets/community.jpg";
import Image4 from "../../assets/F1.jpg";
import MissionImage from "../../assets/mission.jpg"; // replace with your image
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Education",
    description:
      "Providing scholarships, school kits, and after-school programs to ensure every child has access to quality learning.",
    image: Image2,
  },
  {
    title: "Healthcare",
    description:
      "Organizing medical camps, nutrition programs, and maternal care to make healthcare accessible for all.",
    image: Image3,
  },
  {
    title: "Women Empowerment",
    description:
      "Equipping women with vocational training, microfinance support, and self-help groups to lead independent lives.",
    image: Image4,
  },
  {
    title: "Livelihood Training",
    description:
      "Offering skill development and vocational courses to help individuals secure stable incomes and careers.",
    image: Image3,
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-family relative mb-4">
      {/* Services Section */}
      <div className="py-12 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 flex flex-col items-center text-center 
              rounded-b-full rounded-t-xl shadow-xl shadow-gray-200 relative z-20"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // staggered delay
            >
              {/* Text */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-loose">
                {service.description}
              </p>

              {/* Image with icon */}
              <div
                className="relative w-32 h-32 mb-3 mt-10 text-center"
                data-aos="fade-up"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-20 -right-2 bg-green-600 text-white p-2 rounded-full shadow-md">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-[#f5f8f6] py-20 px-16 -mt-32 relative z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
          {/* Text */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To empower marginalized communities through education, healthcare,
              and sustainable livelihoods, ensuring equal opportunities for all.
            </p>
          </div>

          {/* Image */}
          <div className="w-100" data-aos="fade-left">
            <img
              src={MissionImage}
              alt="Our Mission"
              className="rounded-tl-4xl shadow-lg right-0 absolute 
              -mt-20 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
