import "./MessagesPanel.css";

export default function MessageCard({ message }) {

    return (

        <div className="message-card">

            <div className="message-avatar-wrapper">

                <img
                    src={message.profileImage}
                    alt={message.name}
                    className="message-avatar"
                />

                {message.online && (
                    <span className="online-dot"></span>
                )}

            </div>

            <div className="message-content">

                <div className="message-top">

                    <h4>{message.name}</h4>

                    <span>{message.time}</span>

                </div>

                <div className="message-bottom">

                    <p>{message.lastMessage}</p>

                    {message.unread > 0 && (

                        <div className="unread-badge">

                            {message.unread}

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}