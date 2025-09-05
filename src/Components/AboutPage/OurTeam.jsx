import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import CoreImage from "../../assets/values.jpg";
import Image4 from "../../assets/F1.jpg";
import MissionImage from "../../assets/mission.jpg";
import Em from "/src/assets/Together.jpg";

const teamMembers = [
  {
    name: "Bhaskaran Rengaswamy",
    role: "Managing Trustee",
    phone: "+91 8248933317",
    image: CoreImage,
    description:
      "R. Bhaskaran, Managing Trustee of Trinity Plus Social Trust, is an MBA graduate in HR with 14 years of expertise in career counseling and skill-building. Author of multiple books and a key resource person for government programs, he has guided over 3 lakh students and led numerous initiatives in skill development, women empowerment, and de-addiction recovery.",
  },
  {
    name: "Arulvel Santhanam",
    role: "Financial Trustee",
    phone: "+91 9944377012",
    image: Image4,
    description:
      "Arulvel Santhanam, Financial Trustee of Trinity Plus Social Trust, holds an MBA and over 10 years of experience in community development. Passionate about education and empowerment, he ensures transparent financial planning and resource management to drive sustainable change and build resilient communities.",
  },
  {
    name: "S. Kannan",
    role: "Trustee",
    phone: "+91 9876543210",
    image: MissionImage,
    description:
      "S. Kannan, Trustee of Trinity Plus Social Trust, is an M.Ed graduate with years of experience in social service and education. He is dedicated to building inclusive and equitable opportunities for underprivileged communities.",
  },
];

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <div className="bg-white py-12 px-6 md:px-16 font-family">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="text-gray-700 mt-4 text-base max-w-3xl mx-auto leading-loose">
            Behind every initiative is a passionate team of trustees,
            volunteers, and partners who share a common dream – a better
            tomorrow for all. With diverse expertise and a shared purpose, our
            team works hand-in-hand with communities to design programs that
            truly make a difference.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div
                className="bg-white border border-green-700 rounded-lg shadow-md p-6 flex flex-col
             items-center text-center hover:shadow-lg transition h-100"
                data-aos="zoom-in"
              >
                {/* Team Member Photo */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mb-4"
                />

                {/* Name */}
                <h3 className="text-lg font-bold text-green-700">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  {member.role}
                </p>

                {/* Phone */}
                <p className="text-sm text-gray-600 mb-3">{member.phone}</p>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/**Transform Lives */}
      <div className="relative w-full h-[28rem] flex items-center justify-center 
      text-center text-white ">
        {/** Background Image */}
        <img
          src={Em}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div
          className="relative z-10 px-4"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h2
            className="md:text-3xl text-xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Together, We Can Transform Lives
          </h2>
          <p
            className="md:text-lg md:px-40 text-sm max-w-5xl leading-loose mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We believe that transformation is possible when people come together
            for a common cause. Whether through volunteering, donating, or
            collaborating, your support can change lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
