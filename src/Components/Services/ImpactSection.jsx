import React, { useState } from "react";
import Image2 from "../../assets/F2.jpg";

const ImpactSection = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const data = {
    Education: {
      title: "Education",
      content:
        "Ravi, a 13-year-old who had left school to work, rejoined education through our support. Today, he proudly attends high school and dreams of becoming a teacher.",
    },
    Health: {
      title: "Health",
      content:
        "Through healthcare camps, thousands of individuals gained access to medical check-ups and essential treatments that were previously out of reach.",
    },
    Women: {
      title: "Women Empowerment",
      content:
        "We empower women with vocational training and self-help groups, enabling them to earn a livelihood and become financially independent.",
    },
    Farmer: {
      title: "Farmer Support",
      content:
        "Farmers are supported with modern techniques and resources, helping them increase yield and secure a sustainable income.",
    },
  };

  return (
    <div className="font-family">
      <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-2 gap-8 items-center px-4">
        {/* Left Content */}
        <div>
          <h2 className="md:text-3xl text-2xl font-bold mb-4">
            Real People, Real Impact
          </h2>
          <p className="text-gray-600 mb-4 leading-loose">
            Every story is a reflection of resilience, hope, and change. Through
            small acts of support, we help individuals rewrite their futures—
            turning challenges into opportunities and dreams into reality.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(data).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-green-900 to-green-400 text-white p-6"
                    : "bg-gray-100 text-gray-900 hover:bg-green-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <p className="text-gray-600 leading-loose">
            {data[activeTab].content}
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img src={Image2} alt="Impact" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/*Skill Life */}
      <section className="px-6 md:px-20 py-12">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold  mb-4">
            Skill For Life
          </h2>

          <p className="text-gray-600 max-w-6xl mx-auto text-md leading-loose">
            Trinity Plus Social Trust is a non-profit committed to empowering
            rural communities through skill development. We focus on bridging
            the gap between industry needs and the potential of rural youth and
            women, creating pathways to sustainable livelihoods.
          </p>
        </div>
      </section>

      {/* */}

      <div className="max-w-6xl mx-auto py-10">
  <div className="grid md:grid-cols-2 relative gap-6 px-4">
    {/* Left Image */}
    <div className="h-full">
      <img
        src={Image2}
        alt="Skill Council"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Right Content */}
    <div
      className="
        flex items-center 
        bg-white/20 backdrop-blur-md border border-white/30 
        p-6 rounded-2xl shadow-lg
        mt-4 md:mt-0   /* margin only on mobile */
        md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2
        w-full md:w-[60%] lg:w-[50%] /* full width on mobile, limited on desktop */
      "
    >
      <ul className="list-disc list-inside space-y-3 text-gray-900 text-sm md:text-base">
        <li>IT-ITeS Sector Skill Council</li>
        <li>Apparel, Made-Ups &amp; Home Furnishing Sector Skill Council</li>
        <li>Electronics Sector Skills Council of India</li>
        <li>Healthcare Sector Skill Council</li>
        <li>Handicrafts and Carpet Sector Skill Council</li>
        <li>Retailers Association’s Skill Council of India</li>
        <li>Telecom Sector Skill Council</li>
        <li>Beauty &amp; Wellness Sector Skill Council</li>
        <li>Food Processing Sector Skill Council</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
};

export default ImpactSection;
