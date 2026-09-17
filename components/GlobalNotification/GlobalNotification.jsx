import {
    useEffect
} from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    removeNotification
} from "../../src/redux_store/Notification_redux/Notification_actions";

import {
    X,
    CheckCircle,
    AlertCircle,
    Info
} from "lucide-react";

import "./GlobalNotification.css";


// function NotificationItem({

//     notification,

//     onClose

// }) {

//     useEffect(() => {

//         const timer =
//             setTimeout(() => {

//                 onClose();

//             }, 5000);


//         return () => {

//             clearTimeout(timer);

//         };

//     }, [notification.id]);


//     const Icon =
//         notification.type === "success"
//             ? CheckCircle
//             : notification.type === "error"
//                 ? AlertCircle
//                 : Info;


//     return (

//         <div
//             className={`
//                 global-notification
//                 ${notification.type}
//             `}
//         >

//             <Icon
//                 size={20}
//                 className="notification-icon"
//             />


//             <div className="notification-message">

//                 {notification.message}

//             </div>


//             <button
//                 className="notification-close"
//                 onClick={onClose}
//             >

//                 <X size={18} />

//             </button>

//         </div>

//     );

// }

function NotificationItem({
    notification,
    onClose
}) {

    useEffect(() => {

        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };

    }, [notification.id, onClose]);


    return (

        <div
            className={`global-notification ${notification.type}`}
        >

            <div className="notification-message">
                {notification.message}
            </div>

            <button
                className="notification-close"
                onClick={onClose}
                aria-label="Close notification"
            >
                <X size={16} />
            </button>

        </div>

    );
}

export default function GlobalNotification() {

    const dispatch =
        useDispatch();


    const notifications =
        useSelector(
            state =>
                state.notification?.notifications || []
        );


    return (

        <div className="global-notification-container">

            {notifications.map(
                notification => (

                    <NotificationItem

                        key={
                            notification.id
                        }

                        notification={
                            notification
                        }

                        onClose={() =>
                            dispatch(
                                removeNotification(
                                    notification.id
                                )
                            )
                        }

                    />

                )
            )}

        </div>

    );

}