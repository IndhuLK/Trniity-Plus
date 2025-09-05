import React, { useEffect } from "react";
import Em from "/src/assets/strong.jpg";
import Image1 from "../../assets/F1.jpg";
import Image2 from "../../assets/F2.jpg";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Communities = () => {
  const stats = [
    { id: 1, number: 500, label: "Students Guided" },
    { id: 2, number: 100, label: "Healthcare Camps Organized" },
    { id: 3, number: 3000, label: "Women Empowered" },
  ];

  // initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="font-family overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full h-120 flex items-center justify-center text-center text-white"
        data-aos="fade-in"
      >
        <img
          src={Em}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 px-4" data-aos="zoom-in">
          <h2 className="md:text-3xl text-xl font-bold mb-4">
            Building Stronger Communities Together
          </h2>
          <p className="md:text-lg md:px-50 text-sm max-w-5xl leading-loose">
            We provide education, healthcare, and livelihood opportunities that
            uplift families and create lasting impact at the grassroots.
          </p>
        </div>
      </div>

      {/* அன்ன தான்யா Section */}
      <section className="px-6 md:px-20 py-12">
        <div className="text-center mb-4" data-aos="fade-up">
          <h2
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-900 
          to-green-400 bg-clip-text text-transparent mb-4 "
          >
            அன்ன தான்யா
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Towards Zero Hunger
          </h3>
          <p className="text-gray-600 max-w-6xl mx-auto text-sm leading-loose">
            தானங்களில் சிறந்தது அன்னதானம்" என்பதற்கான சின்ன முயற்சியே
            அன்னதான்யா. நூறு பேருக்கு உணவளிக்க முடியாவிட்டாலும், ஒருவருக்கு கூட
            கொடுத்தால் அதுவே பெரும் தானம். சிறிய தொகையிலேயே ஒரு உணவை வாங்கி
            பசியால் வாடுபவர்க்கு வழங்கலாம். அவர்களின் நன்றி பார்வையில்
            கிடைக்கும் ஆனந்தம் உலகில் எதனாலும் சமமாகாது. அன்னதானம் செய்து
            மகிழ்ச்சியை பகிர்வதே இந்த திட்டத்தின் நோக்கம்.
          </p>
        </div>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center py-10">
          <div data-aos="fade-right">
            <img
              src={Image1}
              alt="Education"
              className="rounded-lg shadow-md h-80 w-200 object-cover border-2 border-green-700"
            />
          </div>
          <div className="text-center" data-aos="fade-left">
            <p className="text-gray-600 mb-4 leading-loose text-center">
              The ANNA DHANYA project was created with the belief that even a
              small act of kindness, like sharing a simple meal, can bring
              immense joy. With just a little, we can feed someone in need,
              spread happiness, and uplift spirits. Its purpose is simple: to
              ensure no one waits in hunger and to remind us that true bliss
              comes from giving selflessly.
            </p>
            <button
              className="inline-flex bg-gradient-to-r from-green-900 to-green-600
       text-white px-10 py-2 rounded-full font-medium items-center mx-auto 
       gap-2 hover:shadow-md transition cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* CountUp Section */}
      <div className="bg-gray-100 py-10 mb-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
                <CountUp end={stat.number} duration={3} />+
              </h2>
              <p className="mt-2 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;
