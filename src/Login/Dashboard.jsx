import React, { useState } from "react";

const allEvents = [
  {
    id: 1,
    title: "Skill Development Workshop",
    photo: "/images/workshop.jpg",
    description: "A hands-on workshop designed to empower rural youth...",
    date: "12 Aug 2025, 11:00 am",
    location: "Trinity Plus Training Center, Chennai",
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Skill Development Workshop",
    photo: "/images/workshop.jpg",
    description: "A hands-on workshop designed to empower rural youth...",
    date: "12 Aug 2025, 11:00 am",
    location: "Trinity Plus Training Center, Chennai",
    status: "Scheduled",
  },
  {
    id: 3,
    title: "Skill Development Workshop",
    photo: "/images/workshop.jpg",
    description: "A hands-on workshop designed to empower rural youth...",
    date: "12 Aug 2025, 11:00 am",
    location: "Trinity Plus Training Center, Chennai",
    status: "Scheduled",
  },
  {
    id: 4,
    title: "Digital Literacy Bootcamp",
    photo: "/images/workshop.jpg",
    description: "Basic computer and internet skills for rural youth...",
    date: "20 Sep 2025, 10:00 am",
    location: "Trinity Plus Training Center, Chennai",
    status: "Completed",
  },
  {
    id: 5,
    title: "Entrepreneurship Training",
    photo: "/images/workshop.jpg",
    description: "Helping youth start small businesses in rural areas...",
    date: "15 Oct 2025, 2:00 pm",
    location: "Trinity Plus Training Center, Chennai",
    status: "Completed",
  },
  {
    id: 6,
    title: "Soft Skills Development",
    photo: "/images/workshop.jpg",
    description: "Improving communication and leadership skills...",
    date: "22 Nov 2025, 9:30 am",
    location: "Trinity Plus Training Center, Chennai",
    status: "Completed",
  },
];

const events = [
  {
    id: 1,
    title: "Skill Development Workshop",
    photo: "/images/workshop.jpg", // Replace with your image
    description: "A hands-on workshop designed to empower rural youth...",
    date: "12 Aug 2025, 11:00 am",
    location: "Trinity Plus Training Center, Chennai",
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Skill Development Workshop",
    photo: "/images/workshop.jpg",
    description: "A hands-on workshop designed to empower rural youth...",
    date: "12 Aug 2025, 11:00 am",
    location: "Trinity Plus Training Center, Chennai",
    status: "Scheduled",
  },
  {
    id: 3,
    title: "Skill Development Workshop",
    photo: "/images/workshop.jpg",
    description: "A hands-on workshop designed to empower rural youth...",
    date: "12 Aug 2025, 11:00 am",
    location: "Trinity Plus Training Center, Chennai",
    status: "Scheduled",
  },
];

const Dashboard = () => {
  const [event, setEvent] = useState({
    title: "",
    dateTime: "",
    location: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setEvent({ ...event, [name]: files[0] });
    } else {
      setEvent({ ...event, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Uploaded:", event);
    alert("✅ Event uploaded successfully!");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = allEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);

  return (
    <div className="font-family ">
    <div className="min-h-screen bg-white/10 p-6 ">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 ">
        Event Management Dashboard
      </h1>

      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add new Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Title */}
          <div>
            <label className="block font-medium mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              value={event.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter event title"
              required
            />
          </div>

          {/* Event Date & Time */}
          <div>
            <label className="block font-medium mb-1">Event Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={event.dateTime}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Event Location */}
          <div>
            <label className="block font-medium mb-1">Event Location</label>
            <input
              type="text"
              name="location"
              value={event.location}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter event location"
              required
            />
          </div>

          {/* Event Description */}
          <div>
            <label className="block font-medium mb-1">Event Description</label>
            <input
              type="text"
              name="description"
              value={event.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter event description"
              required
            />
          </div>

          {/* Event Photo */}
          <div>
            <label className="block font-medium mb-1">Upload Event Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex bg-gradient-to-r from-green-900 to-green-600
       text-white px-10 py-2 rounded-xl font-medium items-center mx-auto 
       gap-2 hover:shadow-md transition cursor-pointer"
          >
            Upload Events
          </button>
        </form>
      </div>
    </div>

    {/*New Event */}
    <div className="p-6 px-20">
      <h2 className="text-2xl font-bold mb-4">Next Upcoming Event</h2>

      <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Event Title</th>
              <th className="px-6 py-3 text-left">Photos</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Location</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="px-6 py-3">{event.title}</td>
                <td className="px-6 py-3">
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="h-14 w-20 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-3 max-w-[200px] truncate">
                  {event.description}
                </td>
                <td className="px-6 py-3">{event.date}</td>
                <td className="px-6 py-3">{event.location}</td>
                <td className="px-6 py-3">
                  <span className="text-green-600 font-medium">
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-3 flex gap-2">
  <button className="px-3 py-1 text-sm rounded-md border border-gray-300 hover:bg-gray-100">
    Edit
  </button>
  <button className="px-3 py-1 text-sm rounded-md bg-green-600 text-white hover:bg-green-700">
    View
  </button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/*Past Event */}
    <div className="p-6 px-20">
      <h2 className="text-2xl font-bold mb-4">Past Events</h2>

      <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Event Title</th>
              <th className="px-6 py-3 text-left">Photos</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Location</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentEvents.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="px-6 py-3">{event.title}</td>
                <td className="px-6 py-3">
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="h-14 w-20 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-3 max-w-[200px] truncate">
                  {event.description}
                </td>
                <td className="px-6 py-3">{event.date}</td>
                <td className="px-6 py-3">{event.location}</td>
                <td className="px-6 py-3">
                  <span
                    className={`font-medium ${
                      event.status === "Scheduled"
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-3 flex gap-2">
                  <button className="px-3 py-1 text-sm rounded bg-gray-200">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm rounded bg-green-700 text-white">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 px-6 py-4">
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
            className="px-2 py-1 text-gray-500 hover:text-black"
            disabled={currentPage === 1}
          >
            ←
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                currentPage === index + 1
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-2 py-1 text-gray-500 hover:text-black"
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
