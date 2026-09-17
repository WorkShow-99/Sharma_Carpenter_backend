import {
    ADD_NOTIFICATION,
    REMOVE_NOTIFICATION,
    CLEAR_NOTIFICATIONS
} from "./Notification_types";


const initialState = {

    notifications: []

};


export default function notificationReducer(
    state = initialState,
    action
) {

    switch (action.type) {


        // ==========================================
        // ADD
        // ==========================================

        case ADD_NOTIFICATION:

            return {

                ...state,

                notifications: [

                    ...state.notifications,

                    action.payload

                ]

            };


        // ==========================================
        // REMOVE
        // ==========================================

        case REMOVE_NOTIFICATION:

            return {

                ...state,

                notifications:
                    state.notifications.filter(
                        notification =>
                            notification.id !==
                            action.payload
                    )

            };


        // ==========================================
        // CLEAR
        // ==========================================

        case CLEAR_NOTIFICATIONS:

            return {

                ...state,

                notifications: []

            };


        default:

            return state;

    }

}