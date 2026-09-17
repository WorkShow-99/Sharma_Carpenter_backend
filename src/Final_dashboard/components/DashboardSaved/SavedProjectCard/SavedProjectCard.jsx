import React from "react";
import {
    Bookmark,
    MoreVertical,
    ArrowUpRight
} from "lucide-react";

import {
    useNavigate,
    useLocation
} from "react-router-dom";

import "./SavedProjectCard.css";

import {useDispatch} from "react-redux";


import API from "../../../../../src/api/CenteralAxios/CenteralAxios.js";

import {unsaveProject} from "../../../../../src/redux_store/SavedProjects/SavedProject_action.js";

export default function SavedProjectCard({
    projectId,
    projectTitle,
    projectImage,
    ownerName,
    ownerImage,
    directoryName,
    onRemove,
    onMove
}) {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();



    // ==============================
    // OPEN PROJECT
    // ==============================

    const handleProjectClick = () => {

        navigate(
            `/explore/${projectId}`,
            {
                state: {
                    backgroundLocation: location
                }
            }
        );

    };


    // ==============================
    // REMOVE PROJECT
    // ==============================

    const handleRemove = (event) => {

        event.stopPropagation();

        if (onRemove) {
            onRemove(projectId);
        }

        const removeProject  = unsaveProject(projectId);
        const removeProjectPromise = dispatch(removeProject);

        console.log(
            "Remove project promise:",
            removeProjectPromise
        );
        // const removeProject = async () => {

        //     try {

        //         const response = await API.delete(
        //             `/api/saved-projects/${projectId}`
        //         );

        //         if (response.status === 401) {
        //             throw new Error(
        //                 "Login required. Please log in again."
        //             );
        //         }

        //         if (response.status !== 200) {
        //             throw new Error(
        //                 "Failed to remove project"
        //             );
        //         }

        //         const data = await response.data;

        //         if (!data.success) {

        //             throw new Error(
        //                 data.message ||
        //                 "Failed to remove project"
        //             );
        //         }

        //     } catch (error) {

        //         console.error(
        //             "Error removing project:",
        //             error
        //         );

        //     }

        // }

    };


    // ==============================
    // MOVE PROJECT
    // ==============================

    const handleMove = (event) => {

        event.stopPropagation();

        if (onMove) {
            onMove(projectId);
        }

    };


    return (

        <article
            className="saved-project-card"
            onClick={handleProjectClick}
        >

            {/* ==========================
                IMAGE
            =========================== */}

            <div className="saved-project-image-wrapper">

                <img
                    src={projectImage}
                    alt={projectTitle || "Saved project"}
                    className="saved-project-image"
                    loading="lazy"
                />


                {/* ==========================
                    TOP ACTIONS
                =========================== */}

                <div className="saved-project-actions">

                    <button
                        type="button"
                        className="saved-bookmark-btn"
                        onClick={handleRemove}
                        aria-label="Remove from saved projects"
                    >
                        <Bookmark
                            size={19}
                            fill="currentColor"
                        />
                    </button>


                    <button
                        type="button"
                        className="saved-more-btn"
                        onClick={handleMove}
                        aria-label="Move project"
                    >
                        <MoreVertical size={19} />
                    </button>

                </div>


                {/* ==========================
                    OPEN PROJECT
                =========================== */}

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


            {/* ==========================
                PROJECT INFORMATION
            =========================== */}

            <div className="saved-project-info">

                {/* <h3 className="saved-project-title">
                    {projectTitle}
                </h3> */}


                {/* ==========================
                    OWNER
                =========================== */}

                {/* <div className="saved-project-owner">

                    {ownerImage ? (

                        <img
                            src={ownerImage}
                            alt={ownerName || "Owner"}
                            className="saved-owner-image"
                            loading="lazy"
                        />

                    ) : (

                        <div className="saved-owner-placeholder">
                            {ownerName
                                ?.charAt(0)
                                ?.toUpperCase()
                            }
                        </div>

                    )}


                    <span className="saved-owner-name">
                        {ownerName}
                    </span>

                </div> */}
                {/* ==========================
                    OWNER
                =========================== */}

                <div className="saved-project-owner">

                    {ownerImage ? (

                        <img
                            src={ownerImage}
                            alt={ownerName || "Owner"}
                            className="saved-owner-image"
                            loading="lazy"
                        />

                    ) : (

                        <div className="saved-owner-placeholder">
                            {ownerName
                                ?.charAt(0)
                                ?.toUpperCase()
                            }
                        </div>

                    )}

                    <span className="saved-owner-name">
                         {ownerName || "Unknown"}
                    </span>

                </div>

                {/* ==========================
                    DIRECTORY
                =========================== */}

                {/* <div className="saved-project-directory">

                    <Bookmark size={14} />

                    <span>
                        {directoryName || "Unorganized"}
                    </span>

                </div> */}

            </div>

        </article>

    );
}