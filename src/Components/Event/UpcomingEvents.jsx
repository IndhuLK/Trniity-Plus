import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image1 from "../../assets/F1.jpg";
import { Hourglass } from "lucide-react";

// Countdown Hook
const useCountdown = (targetDate) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

// Card Component
const EventCard = ({
  date,
  month,
  image,
  location,
  title,
  description,
  targetDate,
}) => {
  const timeLeft = useCountdown(targetDate);

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden border max-w-sm"
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {/* Date Badge */}
        <div className="absolute top-2 left-2 bg-green-600 text-white text-sm px-3 py-1 rounded-md">
          {date} {month}
        </div>
        {/* Location */}
        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {location}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold" data-aos="fade-right">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mt-2" data-aos="fade-up">
          {description}
        </p>

        {/* Remaining Time Section */}
        <div
          className="mt-4 border rounded-lg p-4 relative border-green-900"
          data-aos="fade-up"
        >
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Remaining Times
          </h3>

          {/* Countdown with dividers */}
          <div className="flex justify-between items-center text-center">
            <div className="flex-1">
              <p className="text-xl font-bold">{timeLeft.hours}</p>
              <p className="text-xs text-gray-500">Hours</p>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-300 h-8 mx-2"></div>

            <div className="flex-1">
              <p className="text-xl font-bold">{timeLeft.minutes}</p>
              <p className="text-xs text-gray-500">Minutes</p>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-300 h-8 mx-2"></div>

            <div className="flex-1">
              <p className="text-xl font-bold">{timeLeft.seconds}</p>
              <p className="text-xs text-gray-500">Seconds</p>
            </div>
          </div>

          {/* Icon at right corner */}
          <div className="absolute top-4 right-4 text-green-600">
            <Hourglass size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const UpcomingEvents = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  const events = [
    {
      date: "15",
      month: "SEP",
      image: Image1, // replace with real img
      location: "Trinity Plus Training Center, Chennai",
      title: "Skill Development Workshop",
      description:
        "A hands-on workshop designed to empower rural youth with job-ready skills in communication, IT, and entrepreneurship.",
      targetDate: "2025-09-15T10:00:00",
    },
    {
      date: "22",
      month: "SEP",
      image: Image1, // replace with real img
      location: "Trinity Plus Training Center, Chennai",
      title: "Healthcare Camp",
      description:
        "A free medical camp providing essential check-ups, consultations, and medicines for underprivileged families.",
      targetDate: "2025-09-22T10:00:00",
    },
    {
      date: "05",
      month: "OCT",
      image: Image1, // replace with real img
      location: "Coimbatore, Tamil Nadu",
      title: "Women Empowerment Meet",
      description:
        "An interactive session to support women entrepreneurs with training, resources, and mentorship for sustainable livelihoods.",
      targetDate: "2025-10-05T10:00:00",
    },
  ];

  return (
    <div className="py-10 bg-green-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1
          className="text-2xl font-bold mb-4 text-center"
          data-aos="fade-down"
        >
          Next Upcoming Event
        </h1>
        <p
          className="text-gray-600 mb-10 text-center leading-loose"
          data-aos="fade-up"
        >
          Join us for our next event, where we bring communities together to
          learn, share, and grow. This program is designed to create awareness,
          inspire action, and empower individuals to make a lasting impact.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
