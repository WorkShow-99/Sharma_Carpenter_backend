import React from "react";

const dummyNotifications = [
  {
    id: 1,
    type: "like",
    title: "Rahul Sharma liked your project",
    message: "Modern Wooden Kitchen received a new like.",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "message",
    title: "New message from Amit Verma",
    message: "He asked about your wardrobe design.",
    time: "30 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "project",
    title: "Project view milestone",
    message: "Your Balcony Sitting Corner project reached 250 views.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    type: "account",
    title: "Profile update reminder",
    message: "Complete your professional profile to get more visibility.",
    time: "2 days ago",
    unread: false,
  },
];

const Notifications = () => {
  return (
    <section className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Notification
        </h1>

        <p className="text-gray-500 mt-1">
          Track project activity, messages, and account updates.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden max-w-3xl">
        {dummyNotifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                ${
                  notification.unread
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600"
                }
              `}
            >
              {notification.type.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-semibold text-gray-900">
                  {notification.title}
                </h2>

                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {notification.time}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {notification.message}
              </p>
            </div>

            {notification.unread && (
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notifications;