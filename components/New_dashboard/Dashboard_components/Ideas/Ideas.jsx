

import React from "react";

const dummyIdeas = [
  {
    id: 1,
    title: "Modern Wooden Kitchen",
    category: "Carpentry",
    description: "A clean modular kitchen idea using warm wood, simple handles, and hidden storage.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Small Room Storage Design",
    category: "Interior",
    description: "Space-saving wall shelves, under-bed storage, and a compact study table layout.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Balcony Sitting Corner",
    category: "Outdoor",
    description: "A simple balcony idea with wooden flooring, plants, and soft evening lighting.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
];

const Idea = () => {
  return (
    <section className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Ideas</h1>
        <p className="text-gray-500 mt-1">
          Explore project ideas and inspiration for your next work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {dummyIdeas.map((idea) => (
          <div
            key={idea.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={idea.image}
              alt={idea.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {idea.category}
              </span>

              <h2 className="text-lg font-semibold text-gray-900 mt-3">
                {idea.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                {idea.description}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                View Idea
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Idea;