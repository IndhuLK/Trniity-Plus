import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Pavithra",
    role: "Beneficiary Student",
    image: "/images/pavithra.jpg",
    text: "I never thought I could continue my studies after school. With Trinity Plus support, I received a scholarship and now I'm pursuing my dream of becoming a teacher.",
  },
  {
    name: "Mani",
    role: "Partner NGO Representative",
    image: "/images/mani.jpg",
    text: "Thanks to the sustainable farming program, I learned eco-friendly techniques that increased my yield and reduced costs.",
  },
  {
    name: "Divya",
    role: "Beneficiary Student",
    image: "/images/divya.jpg",
    text: "The vocational training program helped me start my small business and support my family.",
  },
];

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // animate progress bar
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 50); // fills in 2.5s (50ms * 50 steps)

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-12 px-4 sm:px-6 font-family">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
        Success Stories
      </h2>
      <p className="text-gray-600 mb-8 text-sm sm:text-base">
        Discover how our programs have helped transform lives, from education
        and healthcare to empowerment and livelihoods.
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1 }, // 📱 Mobile
          640: { slidesPerView: 1.2 }, // Small tablets
          768: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 2.5 }, // Desktop
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`p-4 sm:p-6 rounded-xl shadow-sm transition-all space-y-10 duration-500 h-full w-120 ${
                activeIndex === index
                  ? "bg-green-100 scale-105"
                  : "bg-white"
              }`}
            >
              <div className="flex items-center gap-10 sm:gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Pagination - aligned left */}
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className="relative w-8 sm:w-10 h-1 bg-gray-300 rounded-full overflow-hidden"
          >
            {activeIndex === index && (
              <div
                className="absolute left-0 top-0 h-full bg-green-600 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
