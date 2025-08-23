import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VolunteerImg from "../../assets/volunteer.png";
import DonateImg from "../../assets/donate.png";
import PartnerImg from "../../assets/partner.png";

const actions = [
  {
    image: VolunteerImg,
    title: "Volunteer",
    description: "Share your skills & time",
    border: "border-b-4 border-green-600", // bottom border
  },
  {
    image: DonateImg,
    title: "Donate",
    description: "Every rupee counts",
    border: "border-t-4 border-green-600", // top border
  },
  {
    image: PartnerImg,
    title: "Partner",
    description: "Collaborate with us for large impact",
    border: "border-b-4 border-green-600", // bottom border
  },
];

const CallToAction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in-out",
      once: true, // trigger only once
    });
  }, []);

  return (
    <section className="text-center py-12 px-16 font-family" data-aos="fade-up">
      {/* Heading */}
      <h2
        className="text-2xl md:text-3xl font-bold mb-2"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Be Part of the Change
      </h2>
      <p
        className="text-gray-600 mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Your actions today can shape brighter futures. Join hands with us to
        make a lasting difference.
      </p>

      {/* Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {actions.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg hover:shadow-md transition bg-white ${item.border}`}
            data-aos="zoom-in"
            data-aos-delay={index * 150 + 300}
          >
            <div className="flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-green-800 font-bold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        className="bg-gradient-to-r from-green-900 to-green-600
       text-white px-10 py-3 rounded-full font-medium flex items-center mx-auto 
       gap-2 hover:shadow-md transition cursor-pointer"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        Join Us Today
        <span>→</span>
      </button>
    </section>
  );
};

export default CallToAction;
