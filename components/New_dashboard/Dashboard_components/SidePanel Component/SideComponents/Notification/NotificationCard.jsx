import "./NotificationPanel.css";
import { MoreHorizontal } from "lucide-react";

export default function NotificationCard({ notification }) {

    return (

        <div className="notification-card">

            <img
                src={notification.profileImage}
                alt={notification.userName}
                className="notification-avatar"
            />

            <div className="notification-content">

                <p>

                    <strong>
                        {notification.userName}
                    </strong>

                    {" "}

                    {notification.message}

                </p>

                <span className="notification-time">

                    {notification.time}

                </span>

            </div>

            <div className="notification-actions">

                {notification.unread && (

                    <div className="notification-dot" />

                )}

                <button className="notification-menu">

                    <MoreHorizontal size={18} />

                </button>

            </div>

        </div>

    );

}