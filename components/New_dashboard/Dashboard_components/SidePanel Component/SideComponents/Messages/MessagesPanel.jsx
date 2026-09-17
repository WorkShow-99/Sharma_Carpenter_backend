import "./MessagesPanel.css";

import { Search, X } from "lucide-react";

// import messages from "./messageData";

import MessageCard from "./MessagesCard";

export default function MessagePanel({

    onClose,

}) {

    const messages = [

    {
        id: 1,
        name: "Rahul Sharma",
        profileImage: "https://i.pravatar.cc/150?img=11",
        lastMessage: "Can you share the material list?",
        time: "2m",
        unread: 2,
        online: true,
    },

    {
        id: 2,
        name: "Amit Verma",
        profileImage: "https://i.pravatar.cc/150?img=8",
        lastMessage: "Thank you 👍",
        time: "18m",
        unread: 0,
        online: false,
    },

    {
        id: 3,
        name: "Neha Singh",
        profileImage: "https://i.pravatar.cc/150?img=15",
        lastMessage: "I'll upload the project tomorrow.",
        time: "1h",
        unread: 1,
        online: true,
    },

    {
        id: 4,
        name: "Deepak Kumar",
        profileImage: "https://i.pravatar.cc/150?img=20",
        lastMessage: "Let's connect next week.",
        time: "Yesterday",
        unread: 0,
        online: false,
    },

    {
        id: 5,
        name: "Workspace Support",
        profileImage: "https://i.pravatar.cc/150?img=5",
        lastMessage: "Your verification is completed.",
        time: "2d",
        unread: 0,
        online: false,
    }

];



    return (

        <aside className="message-panel">

            <div className="message-header">

                <h2>Messages</h2>

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    <X />
                </button>

            </div>

            <div className="message-search">

                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search messages"
                />

            </div>

            <div className="message-list">

                {messages.map((message) => (

                    <MessageCard
                        key={message.id}
                        message={message}
                    />

                ))}

            </div>

        </aside>

    );

}