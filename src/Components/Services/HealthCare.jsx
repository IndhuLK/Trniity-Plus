import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "aos/dist/aos.css";
import AOS from "aos";

import Image1 from "../../assets/F1.jpg";
import Image2 from "../../assets/F2.jpg";
import Image3 from "../../assets/F3.jpg";

const projects = [
  {
    title: "Scholarships, school kits and after-school support",
    image: Image1,
  },
  {
    title: "Training farmers in eco-friendly methods",
    image: Image2,
  },
  {
    title: "Vocational training & self-help programs",
    image: Image3,
  },
  {
    title: "Healthcare awareness campaigns",
    image: Image2,
  },
];

const HealthCare = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in-out", // smooth effect
      once: true, // run animation only once
    });
  }, []);

  return (
    <div className="font-family">
      {/* Featured Projects Section */}
      <section className="py-12 bg-white" data-aos="fade-up">
        {/* Heading */}
        <div
          className="text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover how Trinity Plus Social Trust is driving impact with
            innovative programs designed to uplift and empower people.
          </p>
        </div>

        {/* Auto Slider */}
        <div
          className="container mx-auto px-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3.5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative rounded-xl overflow-hidden shadow-md group"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* De-Addiction & Rehabilitation Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-2xl font-bold mb-4">
              De-Addiction &amp; Rehabilitation
            </h2>
            <p className="text-gray-700 mb-3 leading-loose">
              Helping individuals reclaim their lives from the grip of
              addiction, our programs focus on healing, counseling, and
              long-term recovery.
            </p>
            <p className="text-gray-700 mb-6 leading-loose">
              Through community support, awareness campaigns, and rehabilitation
              initiatives, we guide people towards a healthier, substance-free
              future.
            </p>

            {/* Button */}
            <button
              className="inline-flex bg-gradient-to-r from-green-900 to-green-600
       text-white px-10 py-2 rounded-full font-medium items-center mx-auto 
       gap-2 hover:shadow-md transition cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Contact Us
            </button>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" data-aos-delay="200">
            <img
              src={Image2}
              alt="De-Addiction & Rehabilitation"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
