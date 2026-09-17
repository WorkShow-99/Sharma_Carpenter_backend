import React from "react";

const dummyMessages = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Electrician",
    message: "Can you share more details about the kitchen project?",
    time: "10:24 AM",
    unread: true,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Carpenter",
    message: "I liked your wardrobe design. Is this available in plywood?",
    time: "Yesterday",
    unread: false,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 3,
    name: "Sanjay Kumar",
    role: "Interior Designer",
    message: "Let's discuss the living room layout tomorrow.",
    time: "Mon",
    unread: true,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

const Messages = () => {
  return (
    <section className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-500 mt-1">
          View conversations and project inquiries.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden max-w-3xl">
        {dummyMessages.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-semibold text-gray-900 truncate">
                  {chat.name}
                </h2>

                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {chat.time}
                </span>
              </div>

              <p className="text-xs text-gray-500">{chat.role}</p>

              <p className="text-sm text-gray-600 mt-1 truncate">
                {chat.message}
              </p>
            </div>

            {chat.unread && (
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Messages;