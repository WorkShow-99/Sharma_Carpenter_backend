
import MessagePanel from "./SideComponents/Messages/MessagesPanel";
import NotificationPanel from "./SideComponents/Notification/NotificationPanel";

export const   SidePanel_MN = ({ activePanel ,setActivePanel}) => {

    switch(activePanel){

        case "notifications":
            return <NotificationPanel   onClose={() => setActivePanel(null)}/>;

        case "messages":
            return <MessagePanel   onClose={() => setActivePanel(null)}/>;

        // case "projects":
        //     return <Projects />;

        default:
            return null;

    }

}