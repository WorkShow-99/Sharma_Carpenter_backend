import { X, Image, Play } from "lucide-react";

import "./LikedProjectCard.css";

import { useNavigate } from "react-router-dom";
import {Outlet} from "react-router-dom";
import {
    useDispatch,
    useSelector
} from "react-redux";

import DashboardAxios from "../../../../../src/api/DashboardAxios/DashboardAxios.js";
import {removeLikedProject} from "../../../../../src/redux_store/LikedProject/LikedProjects_actions.js";
import {Remove_from_lickedProjects} from "../../../../../src/redux_store/LikedProject/LikedProjects_actions.js";

// -----testing--------
import {addNotification} from "../../../../../src/redux_store/Notification_redux/Notification_actions.js";


export default function LikedProjectCard({ project }) {
    // console.log("LikedProjectCard project:", project);


    if (!project) {
        return null;
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const heroMedia =
        project.media?.find(
            media => media.isHero === true
        ) ||
        project.media?.[0] ||
        null;


const Remove_from_lickedProjects = async({projectId }) => {

console.log("Removing project with ID:", projectId);





        dispatch(
                removeLikedProject(
                    projectId 
                )
            );
      

    }
const handleProjectClick = (projectId) => {
    navigate(`/explore/final-dashboard/${projectId}`);
};


    const projectImage =
        heroMedia?.url || "";


    const mediaType =
        heroMedia?.type || "image";


    const projectTitle =
        project.title || "Untitled Project";
    
    
    const clickhandler = () => {
dispatch(
    addNotification({

        type: "error",

        message:
            error.message ||
            "Failed to fetch projects"

    })


);
       
    };


    return (

        <div className="liked-project-card" >

            {/* PROJECT IMAGE / VIDEO */}

            {mediaType === "video" ? (

                <video
                    className="project-image"
                    src={projectImage}
                    muted
                    playsInline
                    preload="metadata"
                />

            ) : (

                <img
                    className="project-image"
                    src={projectImage}
                    alt={projectTitle}
                    loading="lazy"
                    onClick={() => handleProjectClick( project.id || project._id)}
                />

            )}


            {/* MEDIA TYPE */}

            <div className="media-type-icon">

                {mediaType === "video" ? (

                    <Play
                        size={18}
                        fill="currentColor"
                    />

                ) : (

                    <Image
                        size={18}
                    />

                )}

            </div>


            {/* REMOVE */}

            <button
                type="button"
                className="remove-liked-btn"
                onClick={() => Remove_from_lickedProjects({ projectId: project.id || project._id })}
            >

                <X size={22} />

            </button>


           
            

        </div>

    );

}