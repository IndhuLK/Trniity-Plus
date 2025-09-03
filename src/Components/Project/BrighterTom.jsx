import React from "react";
import Em from "/src/assets/Em.jpg";
import Image1 from "../../assets/F1.jpg";
import Image2 from "../../assets/F2.jpg";
import Image3 from "../../assets/F3.jpg";

const BrightherTom = () => {
  return (
    <div className="font-family">
      <div class="relative w-full h-110 flex items-center justify-center text-center text-white">
        {/** <! Background Image -->*/}
        <img
          src={Em}
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover"
        />

        {/* <!-- Overlay --> */}
        <div class="absolute inset-0 bg-black/30"></div>

        {/* <!-- Text Content --> */}
        <div class="relative z-10 px-4">
          <h2 class="md:text-3xl text-xl font-bold mb-4">
            Together for a Brighter Tomorrow
          </h2>
          <p class="md:text-lg md:px-50 text-sm max-w-5xl leading-loose">
            Discover how our community-driven projects are changing lives and
            shaping a better future.
          </p>
        </div>
      </div>

      {/*Project */}
      <section className="px-6 md:px-20 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Trinity Plus Social Trust, our projects are designed to create
            lasting change. From education and healthcare to sustainable farming
            and women’s empowerment, every initiative reflects our mission to
            uplift marginalized communities.
          </p>
        </div>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative">
            <img
              src={Image1} // Replace with your image
              alt="Education"
              className="rounded-lg shadow-md h-80 w-200 object-cover border-2  border-green-700"
            />
            <p className="px-10 bg-green-700 h-1.5 left-20 absolute md:w-130  rounded"></p>
          </div>
          <div>
            <h3 className="md:text-2xl text-xl font-bold mb-3">
              Education for All
            </h3>
            <p className="text-gray-600 mb-4 leading-loose">
              We believe education is the key to breaking the cycle of poverty.
              Our programs provide access to quality learning, scholarships, and
              skill-building opportunities for children and youth from
              underserved communities, empowering them to dream bigger and
              achieve more.
            </p>
          </div>
        </div>

        {/* Healthcare Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <img
              src={Image2} // Replace with your image
              alt="Healthcare"
              className="rounded-lg shadow-md h-80 w-200 object-cover border-2 border-green-700"
            />
            <p className="px-10 bg-green-700 h-1.5 right-20 absolute md:w-150  rounded"></p>
          </div>
          <div className="md:order-1">
            <h3 className="md:text-2xl text-xl font-bold mb-3 ">
              Healthcare Access
            </h3>
            <p className="text-gray-600 mb-4 leading-loose">
              Good health is the foundation of a strong community. Through free
              medical camps, maternal care, and nutrition programs, we ensure
              that underserved families have access to essential healthcare
              services, improving their quality of life and well-being.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16 ">
          <div className="relative">
            <img
              src={Image1} // Replace with your image
              alt="Education"
              className="rounded-lg shadow-md h-80 w-200 object-cover border-2  border-green-700"
            />
            <p className="px-10 bg-green-700 h-1.5 left-20 absolute md:w-130  rounded"></p>
          </div>
          <div>
            <h3 className="md:text-2xl text-xl font-bold mb-3">
              Women Empowerment
            </h3>
            <p className="text-gray-600 mb-4 leading-loose">
              We believe women are the pillars of change. By providing
              vocational training, micro-finance opportunities, and self-help
              groups, we empower women to gain financial independence, build
              confidence, and create a stronger future for their families and
              communities.
            </p>
          </div>
        </div>

        {/* Healthcare Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <div className="md:order-2">
            <img
              src={Image2} // Replace with your image
              alt="Healthcare"
              className="rounded-lg shadow-md h-80 w-200 object-cover border-2 border-green-700"
            />
            <p className="px-10 bg-green-700 h-1.5 right-20 absolute md:w-150  rounded"></p>
          </div>
          <div className="md:order-1">
            <h3 className="md:text-2xl text-xl font-bold mb-3 ">
              Sustainable Farming
            </h3>
            <p className="text-gray-600 mb-4 leading-loose">
              We support farmers with training in eco-friendly practices,
              organic farming, and modern techniques that protect the
              environment. By promoting sustainability, we help farming families
              increase their income while ensuring healthier food and a greener
              future.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <div className="relative">
            <img
              src={Image1} // Replace with your image
              alt="Education"
              className="rounded-lg shadow-md h-80 w-200 object-cover border-2  border-green-700"
            />
            <p className="px-10 bg-green-700 h-1.5 left-20 absolute md:w-130  rounded"></p>
          </div>
          <div>
            <h3 className="md:text-2xl text-xl font-bold mb-3">
              Skill Development & Livelihoods
            </h3>
            <p className="text-gray-600 mb-4 leading-loose">
              We provide vocational training, entrepreneurship support, and
              livelihood opportunities that empower individuals to become
              self-reliant. By equipping people with practical skills, we enable
              them to secure sustainable incomes and build brighter futures for
              their families.
            </p>
          </div>
        </div>

        {/* Healthcare Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <div className="md:order-2">
            <img
              src={Image2} // Replace with your image
              alt="Healthcare"
              className="rounded-lg shadow-md h-80 w-200 object-cover border-2 border-green-700"
            />
            <p className="px-10 bg-green-700 h-1.5 right-20 absolute md:w-150  rounded"></p>
          </div>
          <div className="md:order-1">
            <h3 className="md:text-2xl text-xl font-bold mb-3 ">
              Special Initiatives
            </h3>
            <p className="text-gray-600 mb-4 leading-loose">
              Our special initiatives are focused on bridging critical gaps in
              community well-being. From running eye-care camps to promoting
              mental health awareness, these projects are designed to bring
              timely solutions where they are needed most.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrightherTom;
