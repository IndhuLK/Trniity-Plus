import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Image1 from "../../assets/F1.jpg";
import Image2 from "../../assets/F2.jpg";
import Image3 from "../../assets/F3.jpg";

const events = [
  {
    title: "Free Eye Check-up Camp",
    description:
      "500+ patients benefited from free consultations and treatment support.",
    image: Image1,
  },
  {
    title: "Blood Donation Drive",
    description: "Over 200+ units of blood collected to save lives.",
    image: Image2,
  },
  {
    title: "Community Health Awareness",
    description: "Awareness sessions conducted for 1000+ people.",
    image: Image3,
  },
];

const RecentEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-8 p-6 md:py-20 py-6 font-family overflow-hidden"
      data-aos="fade-up"
    >
      {/* Left Image changes with slide */}
      <div
        className="w-full md:w-1/2"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={events[activeIndex].image}
          alt={events[activeIndex].title}
          className="rounded-lg shadow-md w-full h-100 object-cover"
        />
      </div>

      {/* Right Side Swiper for Title + Description */}
      <div
        className="w-full md:w-1/2"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h2 className="text-2xl font-bold mb-3">Recent Events</h2>
        <p className="text-sm md:text-base text-gray-600 leading-loose">
          Stay updated with our latest initiatives, workshops, and community
          programs that are creating real impact on the ground.
        </p>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper custom-swiper mt-4"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // updates image
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div
                className="md:px-50 px-20 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 500} // staggered effect for slides
              >
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentEvents;
