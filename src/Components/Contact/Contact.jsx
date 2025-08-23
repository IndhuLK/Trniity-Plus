import React from "react";
import ContactImg from "../../assets/bgContact.jpg";
import Form from "../../assets/Contactform.png";
import { Mail, Phone, MapPin } from "lucide-react";


const Contact = () => {
  return (
    <div className="font-family">
      <div class="relative w-full h-110 flex items-center justify-center text-center text-white">
        {/** <! Background Image -->*/}
        <img
          src={ContactImg}
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover"
        />

        {/* <!-- Overlay --> */}
        <div class="absolute inset-0 bg-black/30"></div>

        {/* <!-- Text Content --> */}
        <div class="relative z-10 px-4">
          <h2 class="md:text-3xl text-xl font-bold mb-4">We’re Here for You</h2>
          <p class="md:text-lg md:px-50 text-sm">
            Whether you need more information about our programs or want to
            support our initiatives, our team is ready to assist you. Connect
            with us anytime.
          </p>
        </div>
      </div>

      {/*Contact Collabrate */}
      <section className="py-12 bg-white text-center p-4">
        {/** Heading **/}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Connect & Collaborate
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Let’s join hands to create lasting change. Reach out to us and be part
          of a movement that empowers communities and transforms lives.
        </p>

        {/** Contact Info Cards **/}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          {/** Email Card **/}
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm p-4 w-full md:w-1/3 hover:shadow-md transition">
            <Mail className="w-6 h-6 text-green-600 mr-4" />
            <div className="text-left">
              <p className="text-gray-500 text-sm">Email us</p>
              <p className="font-semibold">trinityplussocial@gmail.com</p>
            </div>
          </div>

          {/** Call Card **/}
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm p-4 w-full md:w-1/3 hover:shadow-md transition">
            <Phone className="w-6 h-6 text-green-600 mr-4" />
            <div className="text-left">
              <p className="text-gray-500 text-sm">Call us</p>
              <p className="font-semibold">+91 9514 222122</p>
            </div>
          </div>

          {/** Location Card **/}
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm p-4 w-full md:w-1/3 hover:shadow-md transition">
            <MapPin className="w-6 h-6 text-green-600 mr-4" />
            <div className="text-left">
              <p className="text-gray-500 text-sm">Our location</p>
              <p className="font-semibold">Tiruchirappalli, Tamilnadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form  */}
      <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-6 gap-6">
        {/** Left Side - Image **/}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Form}
            alt="Contact Person"
            className="w-full  object-contain transform scale-x-[-1]"
          />
        </div>

        {/** Right Side - Contact Form **/}
        <div className="w-full md:w-1/2 bg-white border border-gray-300 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">
            Let’s Start a Conversation
          </h2>

          <form className="space-y-4">
            {/** Name Field **/}
            <div>
              <label className="block text-left font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/** Email Field **/}
            <div>
              <label className="block text-left font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/** Message Field **/}
            <div>
              <label className="block text-left font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/** Submit Button **/}
            <button
              type="submit"
              className="bg-gradient-to-r from-green-900 to-green-600
       text-white px-10 py-3 rounded-full font-medium flex items-center mx-auto 
       gap-2 hover:shadow-md transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>


    </div>
  );
};

export default Contact;
