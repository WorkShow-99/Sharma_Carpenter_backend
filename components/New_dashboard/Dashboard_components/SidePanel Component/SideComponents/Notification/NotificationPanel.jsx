import "./NotificationPanel.css";

// import notifications from "./notificationData";

import NotificationCard from "./NotificationCard";

import { X } from "lucide-react";

export default function NotificationPanel({

    onClose,

}) 
{

    const notifications = [

    {
        id: 1,
        userName: "Rahul Sharma",
        profileImage: "https://i.pravatar.cc/150?img=11",
        message: "liked your project.",
        type: "like",
        time: "2m",
        unread: true,
    },

    {
        id: 2,
        userName: "Amit Verma",
        profileImage: "https://i.pravatar.cc/150?img=8",
        message: "commented on your project.",
        type: "comment",
        time: "15m",
        unread: true,
    },

    {
        id: 3,
        userName: "Neha Singh",
        profileImage: "https://i.pravatar.cc/150?img=15",
        message: "saved your project.",
        type: "save",
        time: "1h",
        unread: false,
    },

    {
        id: 4,
        userName: "Deepak Kumar",
        profileImage: "https://i.pravatar.cc/150?img=20",
        message: "started following you.",
        type: "follow",
        time: "Yesterday",
        unread: false,
    },

    {
        id: 5,
        userName: "Workspace",
        profileImage: "https://i.pravatar.cc/150?img=5",
        message: "Your project reached 1K views.",
        type: "views",
        time: "2d",
        unread: false,
    },

];




    return (

        <aside className="notification-panel">

            <div className="notification-header">

                <h2>

                    Notifications

                </h2>

                <button

                    onClick={onClose}

                    className="close-btn"

                >

                    <X />

                </button>

            </div>

            <div className="notification-list">

                {notifications.map((notification) => (

                    <NotificationCard

                        key={notification.id}

                        notification={notification}

                    />

                ))}

            </div>

        </aside>

    );

}