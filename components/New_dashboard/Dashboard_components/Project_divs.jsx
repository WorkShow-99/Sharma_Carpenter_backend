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





import "./ProjecxtCard.css";

import {
    Heart,
    ArrowUpRight
} from "lucide-react";

import {
    useNavigate,
    useLocation
} from "react-router-dom";

import {
    useEffect,
    useState
} from "react";

import {
    useSelector
} from "react-redux";


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

    console.log(
    projectId,
    "isLiked:",
    isLiked,
    "likes:",
    likes
);

    const navigate = useNavigate();

    const location = useLocation();


    // ==========================================
    // LOGGED IN USER
    // ==========================================

    const user = useSelector(
        (state) => state.user?.user
    );


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

    useEffect(() => {

        setLikesCount(likes);

    }, [likes]);


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


        // Prevent multiple requests
        if (likeLoading) {
            return;
        }


        // ======================================
        // CHECK LOGIN
        // ======================================

        if (!user || !accessToken) {

            console.log(
                "User must be logged in to like a project"
            );

            /*
             * Later we can replace this with:
             *
             * navigate("/login")
             *
             * or open a login modal.
             */

            return;

        }


        try {

            setLikeLoading(true);


            const response = await fetch(

                `http://localhost:8080/api/projects/${projectId}/like`,

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${accessToken}`

                    },

                    credentials: "include"

                }

            );


            const data =
                await response.json();


            // ==================================
            // API ERROR
            // ==================================

            if (!response.ok) {

                console.error(
                    "Like API error:",
                    data
                );

                return;

            }


            // ==================================
            // UPDATE UI FROM SERVER
            // ==================================

            setIsLiked(
                data.liked
            );


            setLikesCount(
                data.likesCount
            );


        } catch (error) {

            console.error(
                "Error liking project:",
                error
            );

        } finally {

            setLikeLoading(false);

        }

    };


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


                {/* ================================= */}
                {/* HOVER OVERLAY                      */}
                {/* ================================= */}

                <div className="overlay">


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

                    <button

                        className="visit-btn"

                        onClick={
                            onOwnerClickHandler
                        }

                    >

                        Visit

                        <ArrowUpRight />

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

        </div>

    );

}