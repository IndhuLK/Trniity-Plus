import React from "react";
import Em from "/src/assets/Em.jpg";

const Empowring = () => {
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
            Empowering People, Enriching Communities
          </h2>
          <p class="md:text-lg md:px-50 text-sm max-w-5xl leading-loose">
            Our mission is to provide education, healthcare, and livelihoods
            that help people stand strong and self-reliant.
          </p>
        </div>
      </div>

      {/*Who we Are */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {/** Who We Are Section **/}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center 
             md:w-1/3 leading-loose">
              Who We Are <br /> And What We Stand For
            </h2>
            <div className=" border border-gray-200 rounded-lg p-4 md:w-2/3 
            text-gray-700 text-base leading-loose">
              Trinity Plus Social Trust is a nonprofit committed to holistic
              community development. We focus on education, healthcare, women
              empowerment, sustainable farming, and livelihood
              training—empowering individuals to build self-reliant, thriving
              communities.
            </div>
          </div>

          {/** What We Do Section **/}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
            <p className="text-gray-700 max-w-4xl mx-auto leading-loose">
              At Trinity Plus Social Trust, we work at the grassroots level to
              bring meaningful change to communities. Our programs focus on
              education, healthcare, women empowerment, sustainable farming, and
              livelihood training. By addressing these key areas, we aim to
              break the cycle of poverty, create equal opportunities, and help
              individuals and families build brighter, self-reliant futures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empowring;
