import React from "react";
import Form from "../../assets/Donateimg.jpg";
import Child from "../../assets/Herobg4.jpg";
import { GraduationCap, Stethoscope, Users, Leaf } from "lucide-react";

const Donate = () => {
  return (
    <div className="font-family">
      <div class="relative w-full h-110 flex items-center justify-center text-center text-white">
        {/** <! Background Image -->*/}
        <img
          src={Form}
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover"
        />

        {/* <!-- Overlay --> */}
        <div class="absolute inset-0 bg-black/30"></div>

        {/* <!-- Text Content --> */}
        <div class="relative z-10 px-4">
          <h2 class="md:text-3xl text-xl font-bold mb-4">
            Your Gift, Their Future
          </h2>
          <p class="md:text-lg md:px-50 text-sm max-w-4xl leading-loose">
            Every rupee you give helps a child learn, a woman grow, and a family
            thrive. Together, we can create lasting change.
          </p>
        </div>
      </div>

      {/*Donate now */}
      <section className="flex flex-col md:flex-row items-center justify-center
       max-w-6xl mx-auto p-6 gap-8 py-10">
      
      {/** Left Side - Image **/}
      <div className="w-full md:w-1/2">
        <img
          src={Child}
          alt="Children Smiling"
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/** Right Side - Text and Button **/}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-gray-700 text-base mb-6 leading-loose">
          Every contribution you make has the power to change lives. Your generosity helps provide education,
          healthcare, and livelihood opportunities for those in need, paving the way for a brighter tomorrow.
          By giving today, you're not just donating — you're investing in a future filled with hope, dignity,
          and opportunity.
        </p>
        
        <button className="bg-gradient-to-r from-green-900 to-green-600
       text-white px-10 py-3 rounded-full font-medium flex items-center mx-auto 
       gap-2 hover:shadow-md transition cursor-pointer">
          Donate Now
        </button>
      </div>
    </section>

    {/* Programsection */}

<section className="py-12 bg-white text-center">
      {/** Heading and Description **/}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect & Collaborate</h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-8">
        Your donation directly supports programs that bring real change — from providing meals and healthcare
        to skill development and women empowerment. Every rupee is carefully utilized to create lasting
        impact in the lives of individuals and communities who need it the most.
      </p>

      {/** Box with 4 Features **/}
      <div className="border border-green-600 rounded-lg p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/** Education **/}
          <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-black" />
            <div className="text-left">
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="text-gray-600 text-sm">Book & Scholarship</p>
            </div>
          </div>

          {/** Health Care **/}
          <div className="flex items-start gap-4">
            <Stethoscope className="w-8 h-8 text-black" />
            <div className="text-left">
              <h3 className="text-lg font-semibold">Health care</h3>
              <p className="text-gray-600 text-sm">Free medical checkup</p>
            </div>
          </div>

          {/** Women Empowerment **/}
          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-black" />
            <div className="text-left">
              <h3 className="text-lg font-semibold">Women</h3>
              <p className="text-gray-600 text-sm">Empowerment</p>
            </div>
          </div>

          {/** Farming **/}
          <div className="flex items-start gap-4">
            <Leaf className="w-8 h-8 text-black" />
            <div className="text-left">
              <h3 className="text-lg font-semibold">Farming</h3>
              <p className="text-gray-600 text-sm">Livelihoods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Donate;
