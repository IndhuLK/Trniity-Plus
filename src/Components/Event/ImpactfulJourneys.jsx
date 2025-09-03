import React from "react";
import { MapPin, Clock } from "lucide-react";
import Image2 from "../../assets/Herobg.jpg";
import Image3 from "../../assets/community.jpg";
import Image4 from "../../assets/F1.jpg";

const events = [
  {
    id: 1,
    title: "Education for All",
    description:
      "Provided school bags, notebooks, and stationary to children from underserved families, encouraging education continuity.",
    location: "Tiruvannamalai – Tamil Nadu",
    date: "12 Aug 2025",
    time: "11:00 am – 01:00 pm",
    image:Image2, // Replace with your image
  },
  {
    id: 2,
    title: "Farming Awareness Program",
    description:
      "Conducted training on eco-friendly farming techniques, soil health, and water-saving practices to boost farmer incomes.",
    location: "Erode – Tamil Nadu",
    date: "12 Aug 2025",
    time: "11:00 am – 01:00 pm",
    image:
      Image3, // Replace with your image
  },
  {
    id: 3,
    title: "Clean Water & Hygiene Drive",
    description:
      "Distributed hygiene kits, held water-quality testing, and educated families on safe water practices.",
    location: "Cuddalore – Tamil Nadu",
    date: "12 Aug 2025",
    time: "11:00 am – 01:00 pm",
    image:
      Image4, // Replace with your image
  },
  {
    id: 4,
    title: "Free medical camp",
    description:
      "Delivered free consultations, medicines, and health checkups to over 200 rural villagers in need.",
    location: "Erode – Tamil Nadu",
    date: "12 Aug 2025",
    time: "11:00 am – 01:00 pm",
    image:
      Image3, // Replace with your image
  },
  {
    id: 5,
    title: "Women Skill Development Training",
    description:
      "Conducted workshops on tailoring, small business management, and financial literacy for 100+ women.",
    location: "Erode – Tamil Nadu",
    date: "12 Aug 2025",
    time: "11:00 am – 01:00 pm",
    image:
      Image4, // Replace with your image
  },
  {
    id: 6,
    title: "Green Future Plantation Drive",
    description:
      "Provided school bags, notebooks, and stationery to children from underserved families, encouraging education continuity.",
    location: "Erode – Tamil Nadu",
    date: "12 Aug 2025",
    time: "11:00 am – 01:00 pm",
    image:
      Image2, // Replace with your image
  },
];

const ImpactfulJourneys = () => {
  return (
    <div className="px-6 md:px-16 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our Impactful Journeys
      </h2>
      <p className="text-gray-600 text-center max-w-4xl mx-auto mb-10 leading-loose">
        Over the past months, we have carried out a range of programs that
        touched lives across education, health, environment, and empowerment.
        Each event was a step toward creating positive change and building a
        stronger, more inclusive community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <MapPin size={16} className="mr-2 text-green-800" />
                {event.location}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-2 text-green-800" />
                {event.date} &nbsp; {event.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactfulJourneys;
