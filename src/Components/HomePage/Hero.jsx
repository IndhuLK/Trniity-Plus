import React, { useState, useEffect } from "react";
import Image1 from "../../assets/Herobg.jpg";
import Image2 from "../../assets/Herobg3.jpg";
import Image3 from "../../assets/Herobg4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // Multiple slides
  const slides = [
    {
      img: Image1,
      title: "Empowering Communities, Transforming Lives",
      text: "Trinity Plus Social Trust has been uplifting marginalized communities since 2008 through education, healthcare, agriculture, and livelihood initiatives.",
    },
    {
      img: Image2,
      title: "Together We Can Make a Difference",
      text: "Join hands with us to provide education, food, and healthcare to those in need.",
    },
    {
      img: Image3,
      title: "Your Support Brings Hope",
      text: "Every contribution helps build a better future for the underprivileged.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-family ">
      <section className="relative w-full h-[80vh] md:h-[90vh] ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slides[current].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
            data-aos="fade-up"
          >
            {slides[current].title}
          </h1>
          <p
            className="max-w-2xl text-lg md:text-xl mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {slides[current].text}
          </p>
          <a
            href="/donate"
            className="bg-gradient-to-r from-green-900 to-green-600
             text-white px-10 py-3 rounded-full font-medium flex items-center mx-auto 
             gap-2 hover:shadow-md transition cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Donate Now
          </a>
        </div>

        {/* Dots Navigation */}
        <div
          className="absolute bottom-6 left-0 right-0 flex justify-center gap-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-green-600" : "bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
