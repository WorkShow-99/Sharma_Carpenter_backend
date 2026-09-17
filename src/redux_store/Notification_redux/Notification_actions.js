import {
    ADD_NOTIFICATION,
    REMOVE_NOTIFICATION,
    CLEAR_NOTIFICATIONS
} from "./Notification_types";


export const addNotification = ({
    type = "info",
    message
}) => {

    return {

        type:
            ADD_NOTIFICATION,

        payload: {

            id:
                Date.now() +
                Math.random(),

            type,

            message

        }

    };

};


export const removeNotification = (
    id
) => {

    return {

        type:
            REMOVE_NOTIFICATION,

        payload:
            id

    };

};


export const clearNotifications = () => {

    return {

        type:
            CLEAR_NOTIFICATIONS

    };

};