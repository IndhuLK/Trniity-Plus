import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "aos/dist/aos.css";
import AOS from "aos";
import Image1 from "../../assets/F1.jpg";
import Image2 from "../../assets/F2.jpg";
import Image3 from "../../assets/F3.jpg";
import CountUp from "react-countup";

const stats = [
  { number: 50, suffix: "+", label: "Volunteers" },
  { number: 980, suffix: "+", label: "Donations" },
  { number: 10, suffix: "+", label: "Projects" },
  { number: 25, suffix: "+", label: "Missions" },
];

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

const FeaturedProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in-out", // easing option
      once: true, // run animation only once
    });
  }, []);

  return (
    <div>
      {/* Featured Projects Section */}
      <section className="py-12 bg-white font-family" data-aos="fade-up">
        {/* Heading */}
        <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
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
            slidesPerView={2.5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative rounded-xl overflow-hidden shadow-md group"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <p className="text-white text-center font-semibold px-4">
                      {project.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Counter Section */}
      <section
        className="bg-green-800 py-12"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-3xl font-bold">
                <CountUp end={stat.number} duration={2.5} />
                {stat.suffix}
              </h3>
              <p className="mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProjects;
