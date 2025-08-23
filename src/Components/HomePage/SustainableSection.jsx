import React from "react";
import image from "/src/assets/community.jpg"; 
import icon1 from "/src/assets/healthcare.png"; 
import icon2 from "/src/assets/graduation.png"; 
import icon3 from "/src/assets/independence.png"; 
import icon4 from "/src/assets/gender.png"; 


const SustainableSection = () => {
  return (
    <section className="bg-green-50 py-12 font-family">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Community"
            className="rounded-lg shadow-lg max-w-md w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:text-center">
            Driving Sustainable Change for Communities
          </h2>
          <p className="text-gray-600 mb-8 leading-loose">
            At Trinity Plus Social Trust, we align our mission with the United
            Nations Sustainable Development Goals (SDGs) to create measurable
            impact in education, healthcare, women empowerment, agriculture,
            livelihood, and community well-being.
          </p>

          {/* Grid for 4 features */}
          <div className="grid grid-cols-2 gap-6">
  {/* Feature Item */}
  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-full border-2 border-green-700 flex items-center justify-center">
      <img
        src={icon1} // Replace with your image path
        alt="Quality Education"
        className="w-8 h-8"
      />
    </div>
    <span className="text-gray-700 font-medium">Quality Education</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-full border-2 border-green-700 flex items-center justify-center">
      <img
        src={icon2}
        alt="Good Health & Well-Being"
        className="w-8 h-8"
      />
    </div>
    <span className="text-gray-700 font-medium">Good Health & Well-Being</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-full border-2 border-green-700 flex items-center justify-center">
      <img
        src={icon3}
        alt="Sustainable Livelihoods"
        className="w-8 h-8"
      />
    </div>
    <span className="text-gray-700 font-medium">Sustainable Livelihoods</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-full border-2 border-green-700 flex items-center justify-center">
      <img
        src={icon4}
        alt="Gender Equality & Empowerment"
        className="w-8 h-8"
      />
    </div>
    <span className="text-gray-700 font-medium">Gender Equality & Empowerment</span>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default SustainableSection;
