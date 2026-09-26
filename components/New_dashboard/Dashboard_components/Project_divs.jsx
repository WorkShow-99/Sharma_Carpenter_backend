// import "./ProjecxtCard.css";



// // const ProjectCard = ({
// //   projectImage,
// //   userImage,
// //   workerName,
// //   profession,
// //   location,
// //   likes = 0,
// //   views = 0,
// // }) => {

// //   return (

// //     <div className="project-card">

// //       {/* Project Image */}

// //       <div className="image-container">

// //         <img
// //           src={projectImage}
// //           alt={workerName}
// //           className="project-image"
// //         />

// //       </div>


// //       {/* User Details */}

// //       <div className="card-details">

// //         <div className="profile-section">

// //           <img
// //             src={userImage}
// //             alt={workerName}
// //             className="profile-image"
// //           />

// //           <div>

// //             <h3>{workerName}</h3>

// //             <p className="profession">
// //               {profession}
// //             </p>

// //           </div>

// //         </div>


// //         <div className="footer">

// //           <span className="location">
// //             📍 {location}
// //           </span>

// //           <div className="stats">

// //             <span>
// //               ❤️ {likes}
// //             </span>

// //             <span>
// //               👁 {views}
// //             </span>

// //           </div>

// //         </div>

// //       </div>

// //     </div>

// //   );
// // };

// // export default ProjectCard;




// // import "./ProjectxCard.css";

// import { Heart, ArrowUpRight } from "lucide-react";
// import {useDispatch} from "react-redux";
// // import {fetchProjectRequest,fetchProjectSuccess , fetchProjectFailure,OpenOverlay,CloseOverlay} from "../../../src/redux_store/Project_redux/Project_featch_functions";
// import {useNavigate} from "react-router-dom";
// import { useLocation } from "react-router-dom";



// export default function ProjectCard({

//     projectId,

//     projectImage,

//     ownerName,

//     ownerSlug,

//     ownerImage,

//     ownerType,

//     companyName,

//     likes,

//     views,

//     onProjectClick,

//     onOwnerClick,

// })
// {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();


//     const onProjectClickHandler = (projectId) => {


//         // dispatch(fetchProjectRequest(projectId));
//         // dispatch(OpenOverlay());
//         // navigate(`${projectId}`);
//         //  navigate("/explore");
// //         navigate(projectId.toString(), {
// //     relative: "path",
// // });

// // navigate(`/explore/${projectId}`);
//         navigate(`/explore/${projectId}`, {
//     state: {
//         backgroundLocation: location,
//     },
// });
        
//     }
        
        


//     console.log("Project rendered with project:", projectId, projectImage);

// const  projectIage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQBJB-UHMUdyknONrzZVd79doyiZ5LLMuBA&s";



//     return(

//         <div

//         className="project-card"
//         key={projectId}

//         onClick={()=>onProjectClickHandler(projectId)}

//         >

//             {/* IMAGE */}


//             <div className="image-wrapper">

//                 <img

//                 src={projectImage}
//                 className="project-image"

//                 alt={projectImage}
//                 // onError={(e) => {e.target.src = "https://via.placeholder.com/300?text=No+Image"}}

//                 />


//                 {/* Hover Overlay */}


//                 <div className="overlay">


//                     <button

//                     className="like-btn"

//                     onClick={(e)=>{

//                         e.stopPropagation()

//                     }}

//                     >

//                         <Heart

//                         fill="white"

//                         />

//                         {likes}

//                     </button>


//                     <button

//                     className="visit-btn"

//                     onClick={(e)=>{

//                         e.stopPropagation();

//                         onOwnerClick(ownerSlug);

//                     }}

//                     >

//                         Visit

//                         <ArrowUpRight/>

//                     </button>


//                 </div>

//             </div>


//             {/* OWNER DETAILS */}


//             <div

//             className="owner-section"

//             onClick={(e)=>{

//                 e.stopPropagation();

//                 onOwnerClick(ownerSlug)

//             }}

//             >

//                 <img

//                 src={ownerImage}

//                 className="owner-image"

//                 alt=""

//                 />


//                 <div>

//                     <h4>

//                         {

//                             companyName ||

//                             ownerName

//                         }

//                     </h4>


//                     <p>

//                         {ownerType}

//                     </p>

//                 </div>


//             </div>

//         </div>

//     )

// }

// import "./ProjecxtCard.css";

// import {
//     Heart,
//     ArrowUpRight
// } from "lucide-react";

// import {
//     useNavigate,
//     useLocation
// } from "react-router-dom";


// export default function ProjectCard({

//     projectId,

//     projectTitle,

//     projectImage,

//     mediaType,

//     ownerName,

//     ownerSlug,

//     ownerImage,

//     ownerType,

//     likes = 0,

//     views = 0,

//     onProjectClick,

//     onOwnerClick,

// }) {

//     const navigate = useNavigate();

//     const location = useLocation();


//     // ==========================================
//     // PROJECT CLICK
//     // ==========================================

//     const onProjectClickHandler = (event) => {

//         event.stopPropagation();


//         /*
//          * Keep the current Explore page as the
//          * background location.
//          */

//         navigate(
//             `/explore/${projectId}`,
//             {
//                 state: {
//                     backgroundLocation:
//                         location
//                 }
//             }
//         );


//         /*
//          * Optional callback for parent.
//          */

//         if (onProjectClick) {

//             onProjectClick(projectId);

//         }

//     };


//     // ==========================================
//     // OWNER CLICK
//     // ==========================================

//     const onOwnerClickHandler = (event) => {

//         event.stopPropagation();


//         if (!ownerSlug) {
//             return;
//         }


//         /*
//          * For now we use username/slug.
//          */

//         navigate(
//             `/explore/profile/${ownerSlug}`
//         );


//         if (onOwnerClick) {

//             onOwnerClick(ownerSlug);

//         }

//     };


//     return (

//         <div

//             className="project-card"

//             onClick={
//                 onProjectClickHandler
//             }

//         >

//             {/* ================================= */}
//             {/* IMAGE                              */}
//             {/* ================================= */}

//             <div className="image-wrapper">

//                 {mediaType === "video" ? (

//                     <video

//                         src={projectImage}

//                         className="project-image"

//                         muted

//                         playsInline

//                         preload="metadata"

//                     />

//                 ) : (

//                     <img

//                         src={projectImage}

//                         className="project-image"

//                         alt={
//                             projectTitle ||
//                             "Project"
//                         }

//                         loading="lazy"

//                         onError={(event) => {

//                             event.currentTarget.style.display =
//                                 "none";

//                         }}

//                     />

//                 )}


//                 {/* ================================= */}
//                 {/* HOVER OVERLAY                      */}
//                 {/* ================================= */}

//                 <div className="overlay">


//                     {/* LIKE */}

//                     <button

//                         className="like-btn"

//                         onClick={(event) => {

//                             event.stopPropagation();

//                         }}

//                     >

//                         <Heart
//                             fill="white"
//                         />

//                         {likes}

//                     </button>


//                     {/* VISIT OWNER */}

//                     <button

//                         className="visit-btn"

//                         onClick={
//                             onOwnerClickHandler
//                         }

//                     >

//                         Visit

//                         <ArrowUpRight />

//                     </button>


//                 </div>

//             </div>


//             {/* ================================= */}
//             {/* PROJECT TITLE                     */}
//             {/* ================================= */}

//             {/* <div className="project-title">

//                 <h3>

//                     {projectTitle}

//                 </h3>

//             </div> */}


//             {/* ================================= */}
//             {/* OWNER                             */}
//             {/* ================================= */}

//             <div

//                 className="owner-section"

//                 onClick={
//                     onOwnerClickHandler
//                 }

//             >

//                 {ownerImage ? (

//                     <img

//                         src={ownerImage}

//                         className="owner-image"

//                         alt={
//                             ownerName
//                         }

//                         loading="lazy"

//                     />

//                 ) : (

//                     <div className="owner-image placeholder">

//                         {ownerName
//                             ?.charAt(0)
//                             ?.toUpperCase()
//                         }

//                     </div>

//                 )}


//                 <div>

//                     <h4>

//                         {ownerName}

//                     </h4>


//                     <p>

//                         {ownerType}

//                     </p>

//                 </div>

//             </div>

//         </div>

//     );

// }


import {
    saveProject,unsaveProject
} from "../../../src/redux_store/SavedProjects/SavedProject_action.js";


import {
    useSelector,
    useDispatch
} from "react-redux";

import "./ProjecxtCard.css";

import ProjectMenu from "./ProjectCard/ProjectMenu/ProjectMenu.jsx";

import {
    Heart,
    ArrowUpRight,
    Eclipse,Bookmark,
    MoreVertical
} from "lucide-react";


import {
    useNavigate,
    useLocation
} from "react-router-dom";

import {
    useEffect,
    useState,
    useRef
} from "react";




import {addNotification} from "../../../src/redux_store/Notification_redux/Notification_actions.js";

import API from "../../../src/api/CenteralAxios/CenteralAxios.js";


export default function ProjectCard({

    projectId,

    projectTitle,

    projectImage,

    mediaType,

    ownerName,

    ownerSlug,

    ownerImage,

    ownerType,

    likes = 0,
isLiked =false,

    views = 0,

    onProjectClick,

    onOwnerClick,

}) {

    

    console.log(projectId,"isLiked:",isLiked,"likes:",likes);

    const navigate = useNavigate();
    const dispatch = useDispatch();
const [menuOpen, setMenuOpen] = useState(false);

const menuButtonRef = useRef(null);
    const location = useLocation();

    const [saved, setSaved] = useState(false);

    const [saveLoading, setSaveLoading] =
        useState(false);

    const handleSave = async (event) => {

            event.stopPropagation();

            if (saveLoading || saved) {

                try {
                setSaveLoading(true);
                dispatch(unsaveProject(projectId));
                setSaved(false);

               
                } catch (error) {
                    console.error(
                        "Error unsaving project:",
                        error
                    );
                } finally {
                    setSaveLoading(false);
                    setSaved(false);

                }
                return;
                
            }
            
            


            try {

                setSaveLoading(true);

                 dispatch(
                    saveProject(projectId, null)
                );

                setSaved(true);
                

            } catch (error) {
                   
                console.error(
                    "Error saving project:",
                    error
                );
                

            } finally {

                setSaveLoading(false);
            }
        };
    // ==========================================
    // LOGGED IN USER
    // ==========================================

    // const user = useSelector(
    //     (state) => state.user?.user
    // );


    // ==========================================
    // ACCESS TOKEN
    // ==========================================

    const accessToken = localStorage.getItem('accessToken');


    // ==========================================
    // LIKE STATE
    // ==========================================

    const [liked, setIsLiked] =
        useState(isLiked);


    const [likesCount, setLikesCount] =
        useState(likes);


    const [likeLoading, setLikeLoading] =
        useState(false);


    // ==========================================
    // UPDATE LOCAL COUNT WHEN PROP CHANGES
    // ==========================================



    // ==========================================
    // PROJECT CLICK
    // ==========================================

    const onProjectClickHandler = (event) => {

        event.stopPropagation();


        navigate(
            `/explore/${projectId}`,
            {
                state: {
                    backgroundLocation:
                        location
                }
            }
        );


        if (onProjectClick) {

            onProjectClick(projectId);

        }

    };


    // ==========================================
    // OWNER CLICK
    // ==========================================

    const onOwnerClickHandler = (event) => {

        event.stopPropagation();


        if (!ownerSlug) {
            return;
        }


        navigate(
            `/explore/profile/${ownerSlug}`
        );


        if (onOwnerClick) {

            onOwnerClick(ownerSlug);

        }

    };


    // ==========================================
    // LIKE PROJECT
    // ==========================================


            const handleLike = async (event) => {

            event.stopPropagation();

            // console.log("LIKE CLICK");


            setLikeLoading(true);

            // console.log("LOADING TRUE");

            const response = await API.post(
                `/api/projects/${projectId}/like`
            );

            const data = response.data;

            // console.log("API RESPONSE");

            setIsLiked(data.liked);
            setLikesCount(data.likesCount);

            // console.log("LIKE STATE UPDATED");

            setLikeLoading(false);

            // console.log("LOADING FALSE");
        };
            // const handleLike = async (event) => {

            //     event.stopPropagation();


            //     // Prevent multiple requests
            //     if (likeLoading) {
            //         return;
            //     }


            //     // ======================================
            //     // CHECK LOGIN
            //     // ======================================

            //     // if (!user || !accessToken) {

            //     //     console.log(
            //     //         "User must be logged in to like a project"
            //     //     );

            //     //     /*
            //     //      * Later we can replace this with:
            //     //      *
            //     //      *
            //     //      * or open a login modal.
            //     //      */
            //     //      navigate("/login")


            //     //     return;

            //     // }


            //     try {

            //         setLikeLoading(true);

            //         const responsee  = await API.post(`/api/projects/${projectId}/like`
                        
            //         );

            //         const data = responsee.data;
            //         console.log("datā:", responsee.status, data);

            //         if (responsee.status == 200 && data.success) {

                    

            //              setIsLiked(
            //                 data.liked
            //                 );


            //                 setLikesCount(
            //                     data.likesCount
            //                 );



            //             return;
                    
            //         }
            //         else {

            //             console.log("Like API response:",

            //                 data
            //             );
            //             console.error(
            //                 "Like API error:",
            //                 responsee.data.error
            //             );

            //             throw new Error(
            //                 data.message ||
            //                 "Failed to like project"
            //             );


            //         }   

                


                


            //         // ==================================
            //         // API ERROR
            //         // ==================================

            

            //         // ==================================
            //         // UPDATE UI FROM SERVER
            //         // ==================================

                


            //     } catch (error) {

            //         console.error(
            //             "Error liking project:",
            //             error
            //         );

            //     } finally {

            //         setLikeLoading(false);

            //     }

            // };


    return (

        <div

            className="project-card"

            onClick={
                onProjectClickHandler
            }

        >

            {/* ================================= */}
            {/* IMAGE                              */}
            {/* ================================= */}

            <div className="image-wrapper">

                {mediaType === "video" ? (

                    <video

                        src={projectImage}

                        className="project-image"

                        muted

                        playsInline

                        preload="metadata"

                    />

                ) : (

                    <img

                        src={projectImage}

                        className="project-image"

                        alt={
                            projectTitle ||
                            "Project"
                        }

                        loading="lazy"

                        onError={(event) => {

                            event.currentTarget.style.display =
                                "none";

                        }}

                    />

                )}
{/* PROJECT MENU                       */}
{/* ================================= */}

{/* <div
    className="project-menu-wrapper"
    onClick={(event) => {
        event.stopPropagation();
    }}
>

    <button
        type="button"
        className="project-menu-button"
    onClick={(event) => {

    event.stopPropagation();

    setMenuOpen(true);

}}
        aria-label="Project options"
    >

        <MoreVertical size={20} strokeWidth={2} />

    </button>


    {menuOpen && (

        // <ProjectMenu
        //     projectId={projectId}
        //     saved={saved}

        //     onSave={() => {
        //         handleSave({
        //             stopPropagation: () => {}
        //         });
        //         setMenuOpen(false);
        //     }}

        //     onDownload={(id) => {
        //         console.log(
        //             "Download project:",
        //             id
        //         );

        //         setMenuOpen(false);
        //     }}

        //     onShare={(id) => {
        //         console.log(
        //             "Share project:",
        //             id
        //         );

        //         setMenuOpen(false);
        //     }}

        //     onReport={(id) => {
        //         console.log(
        //             "Report project:",
        //             id
        //         );

        //         setMenuOpen(false);
        //     }}
        // />
<ProjectMenu
    projectId={projectId}
    saved={saved}

    onClose={() => {
        setMenuOpen(false);
    }}

    onSave={() => {

        handleSave({
            stopPropagation: () => {}
        });

        setMenuOpen(false);

    }}

    onDownload={(id) => {

        console.log(
            "Download:",
            id
        );

        setMenuOpen(false);

    }}

    onShare={(id) => {

        console.log(
            "Share:",
            id
        );

        setMenuOpen(false);

    }}

    onReport={(id) => {

        console.log(
            "Report:",
            id
        );

        setMenuOpen(false);

    }}
/>
    )}

</div> */}

                {/* ================================= */}
                {/* HOVER OVERLAY                      */}
                {/* ================================= */}

                <div className="overlay">

                    {/* ================================= */}



                    {/* ================================= */}
                    {/* LIKE                              */}
                    {/* ================================= */}

                    {/* <button

                        className={`like-btn ${
                            liked
                                ? "liked"
                                : ""
                        }`}

                        onClick={
                            handleLike
                        }

                        disabled={
                            likeLoading
                        }

                    >

                        <Heart

                            size={20}

                            // fill={
                            //     liked || isLiked
                            //         ? "currentColor"
                            //         : "none"
                            // }
                              fill={isLiked ? "currentColor" : "none"}

                        />

                        {likesCount}

                    </button> */}

                <button
                    className={`like-btn ${
                        liked ? "liked" : ""
                    }`}
                    onClick={handleLike}
                    disabled={likeLoading}
                >
                    <Heart
                        size={20}
                        fill={liked ? "currentColor" : "none"}
                    />
                                        {/* <Heart
                        size={20}
                        fill={liked ? "white" : "none"}
                        color="white"
                    /> */}
                    {/* <Heart

                            size={20}

                            // fill={
                            //     liked || isLiked
                            //         ? "currentColor"
                            //         : "none"
                            // }
                              fill={isLiked ? "currentColor" : "none"}

                        /> */}

                    {likesCount}
                </button>
                    {/* ================================= */}
                    {/* VISIT OWNER                       */}
                    {/* ================================= */}

                    {/* <button

                        className="visit-btn"

                        onClick={
                            onOwnerClickHandler
                        }

                    >

                        Visit

                        <ArrowUpRight />

                    </button> */}

{/* -----------------------------save---------------- */}
                    <button
                            className={`save-btn ${
                                saved ? "saved" : ""
                            }`}
                            onClick={handleSave}
                            disabled={saveLoading}
                        >
                            <Bookmark
                                size={20}
                                fill={
                                    saved
                                        ? "currentColor"
                                        : "none"
                                }
                            />

                            {saveLoading
                                ? "Saving..."
                                : saved
                                    ? "Saved"
                                    : ""
                            }
                        </button>


                </div>

            </div>


            {/* ================================= */}
            {/* OWNER                             */}
            {/* ================================= */}

            <div

                className="owner-section"

                onClick={
                    onOwnerClickHandler
                }

            >

                {ownerImage ? (

                    <img

                        src={ownerImage}

                        className="owner-image"

                        alt={
                            ownerName
                        }

                        loading="lazy"

                    />

                ) : (

                    <div className="owner-image placeholder">

                        {ownerName
                            ?.charAt(0)
                            ?.toUpperCase()
                        }

                    </div>

                )}


                <div>

                    <h4>

                        {ownerName}

                    </h4>


                    <p>

                        {ownerType}

                    </p>

                </div>

            </div>

    {/* ============================= */}
    {/* THREE DOT MENU                 */}
    {/* ============================= */}

    <div
        className="project-menu-wrapper"
        onClick={(e) => e.stopPropagation()}
    >

        <button
            type="button"
            ref={menuButtonRef}
            className="project-menu-button"
            onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(true);
            }}
            aria-label="Project options"
        >
            <MoreVertical size={21} strokeWidth={2} />
        </button>


        {/* {menuOpen && (

            <ProjectMenu
                projectId={projectId}
                saved={saved}

                onClose={() => setMenuOpen(false)}

                onSave={() => {
                    handleSave();
                    setMenuOpen(false);
                }}

                onDownload={() => {
                    console.log("Download", projectId);
                    setMenuOpen(false);
                }}

                onShare={() => {
                    console.log("Share", projectId);
                    setMenuOpen(false);
                }}

                onReport={() => {
                    console.log("Report", projectId);
                    setMenuOpen(false);
                }}
            />

        )} */}

        {menuOpen && (

    <ProjectMenu

        projectId={projectId}

        saved={saved}

        anchorRef={menuButtonRef}

        onClose={() => {
            setMenuOpen(false);
        }}

        onSave={() => {

            handleSave();

        }}

        onDownload={(id) => {

            console.log(
                "Download:",
                id
            );

        }}

        onShare={(id) => {

            console.log(
                "Share:",
                id
            );

        }}

        onReport={(id) => {

            console.log(
                "Report:",
                id
            );

        }}

    />

)}

    </div>

        </div>

    );

}