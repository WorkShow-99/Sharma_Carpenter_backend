import React,{useState,useRef} from "react";

import {
    Bookmark,
    MoreVertical,
    ArrowUpRight
} from "lucide-react";

import {
    useNavigate,
    useLocation
} from "react-router-dom";

import { useDispatch } from "react-redux";

import "./SavedProjectCard.css";

import { unsaveProject } from "../../../../../src/redux_store/SavedProjects/SavedProject_action.js";

import MenuProjectOverlay
    from "../ProjectUnorganized/MenuProjectOverlay/MenuProjectOverlay.jsx";
import { div } from "framer-motion/client";

export default function SavedProjectCard({
    project,
    directoryName,
    onRemove,
    onMove
}) {


    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();


const [menuOpen, setMenuOpen] = useState(false);
const menuButtonRef = useRef(null);

    // =========================================
    // PROJECT DATA
    // =========================================
    const projectId = project?._id;

    const projectTitle =
        project?.title || "Untitled Project";


    // =========================================
    // FIND PROJECT IMAGE
    // =========================================

    const heroMedia =
        project?.media?.find(
            media =>
                media?.isHero === true &&
                media?.type === "image"
        ) ||

        project?.media?.find(
            media =>
                media?.type === "image"
        ) ||

        project?.media?.find(
            media => media?.url
        );



    const projectImage =
        heroMedia?.url ||
        heroMedia?.thumbnail ||
        "";


    // =========================================
    // OWNER DATA
    // =========================================

    // const professionalProfile =
    //     project?.professionalProfileId;


    // const ownerUser =
    //     professionalProfile?.userId;


    // const ownerName =
    //     ownerUser?.name ||
    //     professionalProfile?.name ||
    //     "Unknown";


    // const ownerImage =
    //     ownerUser?.profileImage ||
    //     ownerUser?.photoURL ||
    //     ownerUser?.picture ||
    //     professionalProfile?.profileImage ||
    //     "";

    const professionalProfile =
    project?.professionalProfileId;

const ownerUser =
    professionalProfile?.userId;

const ownerName =
    `${ownerUser?.firstName || ""} ${
        ownerUser?.lastName || ""
    }`.trim() || "Unknown";


const ownerImage =
    ownerUser?.profileImage?.url || "";


    // =========================================
    // DEBUG
    // =========================================

   

   


    // =========================================
    // OPEN PROJECT
    // =========================================

    const handleProjectClick = () => {

        if (!projectId) {
            return;
        }

        navigate(
            `/explore/${projectId}`,
            {
                state: {
                    backgroundLocation: location
                }
            }
        );

    };


    // =========================================
    // REMOVE PROJECT
    // =========================================

    const handleRemove = (event) => {

        event.stopPropagation();

        if (onRemove) {
            onRemove(projectId);
        }

        dispatch(
            unsaveProject(projectId)
        );

    };


    // =========================================
    // MOVE PROJECT
    // =========================================

    const handleMove = (event) => {

       event.stopPropagation();

    setMenuOpen(true);


    };


    return (

        <article
            className="saved-project-card"
            onClick={handleProjectClick}
        >

            {/* =====================================
                IMAGE
            ===================================== */}

            <div className="saved-project-image-wrapper">

                {projectImage ? (

                    <img
                        src={projectImage}
                        alt={projectTitle}
                        className="saved-project-image"
                        loading="lazy"
                    />

                ) : (

                    <div className="saved-project-image-placeholder">

                        <span>
                            No Image
                        </span>

                    </div>

                )}


                {/* =================================
                    TOP ACTIONS
                ================================= */}

                <div className="saved-project-actions">

                    <button
                        type="button"
                        className="saved-bookmark-btn"
                        onClick={handleRemove}
                        aria-label="Remove from saved projects"
                    >
                        <Bookmark
                            size={18}
                            fill="currentColor"
                        />
                    </button>


                    {/* <button
                        type="button"
                        className="saved-more-btn"
                        onClick={handleMove}
                        aria-label="Move project"
                    >
                        <MoreVertical size={18} />
                    </button> */}
                   

                </div>


                {/* =================================
                    OPEN PROJECT
                ================================= */}

                <button
                    type="button"
                    className="saved-open-btn"
                    onClick={(event) => {

                        event.stopPropagation();

                        handleProjectClick();

                    }}
                    aria-label="Open project"
                >

                    <ArrowUpRight size={18} />

                </button>

            </div>


            {/* =====================================
                PROJECT INFORMATION
            ===================================== */}

            <div className="saved-project-info p-0 m-0">

                {/* <h3 className="saved-project-title">
                    {projectTitle}
                </h3> */}


                {/* =================================
                    OWNER
                ================================= */}


                <div className="saved-project-owner flex items-center justify-between p-0 m-0">

                    {ownerImage ? (
                        <div className=" flex items-center gap-2 p-0 m-0">

                        <img
                            src={ownerImage}
                            alt={ownerName}
                            className="saved-owner-image"
                            loading="lazy"
                        />
                        <span className="saved-owner-name">

                            {ownerName}

                        </span>
                        </div>

                    ) : (

                        <div className="saved-owner-placeholder p-0 m-0">

                            {ownerName
                                ?.charAt(0)
                                ?.toUpperCase()
                            }

                        </div>

                    )}


{/*                     
                    <button 
                        type="button"
                        className="saved-more-btn float-right self-right p-0 m-0"
                        onClick={handleMove}
                        aria-label="Project options"
                    >
                        <MoreVertical size={18} />
                    </button> */}
<button
    ref={menuButtonRef}
    type="button"
    className="saved-more-btn"
    onClick={(event) => {

        event.stopPropagation();

        // Only OPEN
        setMenuOpen(true);

    }}
    aria-label="Project options"
>
    <MoreVertical size={18} />
</button>

                </div>
                

            </div>


            {/* {menuOpen && (
    <MenuProjectOverlay
        project={project}

        onClose={() => {
            setMenuOpen(false);
        }}

        onShare={(project) => {
            console.log("Share project:", project);
        }}

        onDownload={(project) => {
            console.log("Download project:", project);
        }}

        onOrganize={(project) => {
            console.log("Organize project:", project);
        }}

        onRemove={(project) => {
            console.log("Remove project:", project);
        }}
    />
)}
              */}

              {menuOpen && (

    <MenuProjectOverlay

        project={project}

        anchorRef={menuButtonRef}

        onClose={() => {
            setMenuOpen(false);
        }}

        onShare={(project) => {

            console.log(
                "Share:",
                project
            );

        }}

        onDownload={(project) => {

            console.log(
                "Download:",
                project
            );

        }}

        onOrganize={(project) => {

            console.log(
                "Organize:",
                project
            );

        }}

        onRemove={(project) => {

            console.log(
                "Remove:",
                project
            );

        }}

        onReport={(project) => {

            console.log(
                "Report:",
                project
            );

        }}

    />

)}

        </article>

    );

}