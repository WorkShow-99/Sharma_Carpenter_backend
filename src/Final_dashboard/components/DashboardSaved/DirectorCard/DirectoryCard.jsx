// // import React, {
// //     useCallback,
// //     useEffect
// // } from "react";

// // import {
// //     useDispatch,
// //     useSelector
// // } from "react-redux";

// // import {
// //     Folder,
// //     ArrowUpRight
// // } from "lucide-react";

// // import {
// //     useNavigate,
// //     useLocation
// // } from "react-router-dom";

// // import {
// //     fetchDirectoryProjects
// // } from "../../../../../src/redux_store/SavedProjects/SavedProject_action.js";

// // import "./DirectoryCard.css";


// // export default function DirectoryCard({
// //     directory
// // }) {

// //     const dispatch = useDispatch();

// //     const navigate = useNavigate();

// //     const location = useLocation();


// //     // =========================================
// //     // DIRECTORY ID
// //     // =========================================

// //     const directoryId = directory?._id;


// //     // =========================================
// //     // REDUX
// //     // =========================================

// //     const directoryState = useSelector(
// //         state =>
// //             state.savedProjects
// //                 ?.directoryProjects?.[directoryId]
// //     );


// //     const projects =
// //         directoryState?.projects || [];

// //     const loading =
// //         directoryState?.loading || false;

// //     const initialized =
// //         directoryState?.initialized || false;


// //     // =========================================
// //     // FETCH PROJECTS
// //     // =========================================

// //     useEffect(() => {

// //         if (
// //             directoryId &&
// //             !initialized &&
// //             !loading
// //         ) {

// //             dispatch(
// //                 fetchDirectoryProjects(
// //                     directoryId,
// //                     null,
// //                     3
// //                 )
// //             );

// //         }

// //     }, [
// //         dispatch,
// //         directoryId,
// //         initialized,
// //         loading
// //     ]);


// //     // =========================================
// //     // OPEN DIRECTORY
// //     // =========================================

// //     const handleDirectoryClick = () => {

// //         navigate(
// //             `/dashboard/saved/${directoryId}`
// //         );

// //     };


// //     // =========================================
// //     // OPEN PROJECT
// //     // =========================================

// //     const handleProjectClick = (
// //         event,
// //         projectId
// //     ) => {

// //         event.stopPropagation();

// //         navigate(
// //             `/explore/${projectId}`,
// //             {
// //                 state: {
// //                     backgroundLocation: location
// //                 }
// //             }
// //         );

// //     };


// //     // =========================================
// //     // GET PROJECT IMAGE
// //     // =========================================

// //     const getProjectImage = (
// //         project
// //     ) => {

// //         if (!project?.media?.length) {
// //             return "";
// //         }

// //         const heroImage =
// //             project.media.find(
// //                 media =>
// //                     media.type === "image" &&
// //                     media.isHero
// //             );

// //         if (heroImage?.url) {
// //             return heroImage.url;
// //         }

// //         const firstImage =
// //             project.media.find(
// //                 media =>
// //                     media.type === "image" &&
// //                     media.url
// //             );

// //         return firstImage?.url || "";

// //     };


// //     // =========================================
// //     // PROJECTS TO SHOW
// //     // =========================================

// //     const visibleProjects =
// //         projects.slice(0, 3);


// //     return (

// //         <article
// //             className="directory-card"
// //             onClick={handleDirectoryClick}
// //         >

// //             {/* =================================
// //                 IMAGE COLLAGE
// //             ================================= */}

// //             <div className="directory-image-grid">

// //                 {/* =============================
// //                     PROJECT 1
// //                 ============================== */}

// //                 <div
// //                     className="directory-image-main"
// //                     onClick={(event) => {

// //                         if (
// //                             visibleProjects[0]?._id
// //                         ) {

// //                             handleProjectClick(
// //                                 event,
// //                                 visibleProjects[0]._id
// //                             );

// //                         }

// //                     }}
// //                 >

// //                     {loading &&
// //                     !visibleProjects[0] ? (

// //                         <div className="directory-image-loading" />

// //                     ) : visibleProjects[0] ? (

// //                         <img
// //                             src={getProjectImage(
// //                                 visibleProjects[0]
// //                             )}
// //                             alt={
// //                                 visibleProjects[0].title ||
// //                                 "Project"
// //                             }
// //                             loading="lazy"
// //                         />

// //                     ) : (

// //                         <div className="directory-image-empty">
// //                             <Folder size={30} />
// //                         </div>

// //                     )}

// //                 </div>


// //                 {/* =============================
// //                     PROJECT 2
// //                 ============================== */}

// //                 <div
// //                     className="directory-image-small"
// //                     onClick={(event) => {

// //                         if (
// //                             visibleProjects[1]?._id
// //                         ) {

// //                             handleProjectClick(
// //                                 event,
// //                                 visibleProjects[1]._id
// //                             );

// //                         }

// //                     }}
// //                 >

// //                     {visibleProjects[1] ? (

// //                         <img
// //                             src={getProjectImage(
// //                                 visibleProjects[1]
// //                             )}
// //                             alt={
// //                                 visibleProjects[1].title ||
// //                                 "Project"
// //                             }
// //                             loading="lazy"
// //                         />

// //                     ) : (

// //                         <div className="directory-image-empty">
// //                             <Folder size={24} />
// //                         </div>

// //                     )}

// //                 </div>


// //                 {/* =============================
// //                     PROJECT 3
// //                 ============================== */}

// //                 <div
// //                     className="directory-image-small"
// //                     onClick={(event) => {

// //                         if (
// //                             visibleProjects[2]?._id
// //                         ) {

// //                             handleProjectClick(
// //                                 event,
// //                                 visibleProjects[2]._id
// //                             );

// //                         }

// //                     }}
// //                 >

// //                     {visibleProjects[2] ? (

// //                         <img
// //                             src={getProjectImage(
// //                                 visibleProjects[2]
// //                             )}
// //                             alt={
// //                                 visibleProjects[2].title ||
// //                                 "Project"
// //                             }
// //                             loading="lazy"
// //                         />

// //                     ) : (

// //                         <div className="directory-image-empty">
// //                             <Folder size={24} />
// //                         </div>

// //                     )}

// //                 </div>

// //             </div>


// //             {/* =================================
// //                 DIRECTORY INFORMATION
// //             ================================= */}

// //             <div className="directory-card-info">

// //                 <div className="directory-card-text">

// //                     <h3>
// //                         {directory?.name ||
// //                             "Untitled Directory"}
// //                     </h3>

// //                     <p>
// //                         {projects.length}{" "}
// //                         {projects.length === 1
// //                             ? "Project"
// //                             : "Projects"}
// //                     </p>

// //                 </div>


// //                 {/* =================================
// //                     OPEN DIRECTORY
// //                 ================================= */}

// //                 <button
// //                     type="button"
// //                     className="directory-open-btn"
// //                     onClick={(event) => {

// //                         event.stopPropagation();

// //                         handleDirectoryClick();

// //                     }}
// //                     aria-label="Open directory"
// //                 >

// //                     <ArrowUpRight size={18} />

// //                 </button>

// //             </div>

// //         </article>

// //     );

// // }



// // import React, {
// //     useEffect
// // } from "react";

// // import {
// //     Plus
// // } from "lucide-react";

// // import {
// //     useDispatch,
// //     useSelector
// // } from "react-redux";

// // import {
// //     useNavigate,
// //     useLocation
// // } from "react-router-dom";

// // import {
// //     fetchDirectoryProjects
// // } from "../../../../../src/redux_store/SavedProjects/SavedProject_action.js";

// // import "./DirectoryCard.css";


// // export default function DirectoryCard({
// //     directory,
// //     onAddProject
// // }) {



    
// //     const dispatch = useDispatch();

// //     const navigate = useNavigate();

// //     const location = useLocation();


// //     // =========================================
// //     // DIRECTORY ID
// //     // =========================================

// //     const directoryId =
// //         directory?._id;


// //     // =========================================
// //     // DIRECTORY PROJECT STATE
// //     // =========================================

// //     const directoryState =
// //         useSelector(
// //             state =>
// //                 state.savedProjects
// //                     ?.directoryProjects?.[directoryId]
// //         );


// //     const projects =
// //         directoryState?.projects || [];

// //     const loading =
// //         directoryState?.loading || false;

// //     const initialized =
// //         directoryState?.initialized || false;


// //     // =========================================
// //     // FETCH PROJECTS
// //     // =========================================

// //     useEffect(() => {

// //         if (
// //             directoryId &&
// //             !initialized &&
// //             !loading
// //         ) {

// //             dispatch(
// //                 fetchDirectoryProjects(
// //                     directoryId,
// //                     null,
// //                     4
// //                 )
// //             );

// //         }

// //     }, [
// //         dispatch,
// //         directoryId,
// //         initialized,
// //         loading
// //     ]);


// //     // =========================================
// //     // PROJECT IMAGE
// //     // =========================================

// //     const getProjectImage = (
// //         project
// //     ) => {

// //         if (
// //             !project?.media ||
// //             project.media.length === 0
// //         ) {
// //             return "";
// //         }


// //         // First priority:
// //         // Hero image

// //         const heroImage =
// //             project.media.find(
// //                 media =>
// //                     media.type === "image" &&
// //                     media.isHero &&
// //                     media.url
// //             );


// //         if (heroImage?.url) {
// //             return heroImage.url;
// //         }


// //         // Second priority:
// //         // First available image

// //         const firstImage =
// //             project.media.find(
// //                 media =>
// //                     media.type === "image" &&
// //                     media.url
// //             );


// //         return firstImage?.url || "";
// //     };


// //     // =========================================
// //     // OPEN DIRECTORY
// //     // =========================================

// //     const handleDirectoryClick = () => {

// //         navigate(
// //             `/dashboard/saved/${directoryId}`
// //         );

// //     };


// //     // =========================================
// //     // OPEN PROJECT
// //     // =========================================

// //     const handleProjectClick = (
// //         event,
// //         projectId
// //     ) => {

// //         event.stopPropagation();

// //         navigate(
// //             `/explore/${projectId}`,
// //             {
// //                 state: {
// //                     backgroundLocation:
// //                         location
// //                 }
// //             }
// //         );

// //     };


// //     // =========================================
// //     // ADD PROJECT
// //     // =========================================

// //     const handleAddProject = (
// //         event
// //     ) => {

// //         event.stopPropagation();

// //         if (onAddProject) {

// //             onAddProject(
// //                 directoryId
// //             );

// //         }

// //     };


// //     // =========================================
// //     // ONLY SHOW MAXIMUM 4
// //     // =========================================

// //     const visibleProjects =
// //         projects.slice(0, 4);


// //     // =========================================
// //     // EMPTY DIRECTORY
// //     // =========================================

// //     if (
// //         initialized &&
// //         !loading &&
// //         visibleProjects.length === 0
// //     ) {

// //         return (

// //             <article
// //                 className="directory-card directory-card-empty"
// //             >

// //                 <button
// //                     type="button"
// //                     className="directory-empty-add"
// //                     onClick={handleAddProject}
// //                     aria-label="Add project to directory"
// //                 >

// //                     <Plus size={26} />

// //                 </button>


// //                 <div className="directory-name">

// //                     {directory?.name ||
// //                         "Untitled Directory"}

// //                 </div>

// //             </article>

// //         );
// //     }


// //     // =========================================
// //     // DIRECTORY CARD
// //     // =========================================

// //     return (

// //         <article
// //             className="directory-card"
// //             onClick={handleDirectoryClick}
// //         >

// //             {/* =====================================
// //                 PROJECT STACK
// //             ====================================== */}

// //             <div className="directory-stack">

// //                 {/* ---------------------------------
// //                     BACK PROJECTS
// //                 ---------------------------------- */}

// //                 {visibleProjects
// //                     .slice()
// //                     .reverse()
// //                     .map(
// //                         (
// //                             project,
// //                             reversedIndex
// //                         ) => {

// //                             const originalIndex =
// //                                 visibleProjects.length -
// //                                 1 -
// //                                 reversedIndex;


// //                             return (

// //                                 <div
// //                                     key={
// //                                         project._id
// //                                     }

// //                                     className={
// //                                         `directory-stack-item stack-item-${originalIndex}`
// //                                     }

// //                                     onClick={(event) =>
// //                                         handleProjectClick(
// //                                             event,
// //                                             project._id
// //                                         )
// //                                     }
// //                                 >

// //                                     {getProjectImage(
// //                                         project
// //                                     ) ? (

// //                                         <img
// //                                             src={
// //                                                 getProjectImage(
// //                                                     project
// //                                                 )
// //                                             }

// //                                             alt={
// //                                                 project.title ||
// //                                                 "Project"
// //                                             }

// //                                             loading="lazy"
// //                                         />

// //                                     ) : (

// //                                         <div className="directory-no-image">
// //                                             No Image
// //                                         </div>

// //                                     )}

// //                                 </div>

// //                             );

// //                         }
// //                     )}


// //                 {/* ---------------------------------
// //                     LOADING
// //                 ---------------------------------- */}

// //                 {loading &&
// //                     visibleProjects.length === 0 && (

// //                         <>

// //                             <div className="directory-stack-loading stack-loading-1" />

// //                             <div className="directory-stack-loading stack-loading-2" />

// //                             <div className="directory-stack-loading stack-loading-3" />

// //                             <div className="directory-stack-loading stack-loading-4" />

// //                         </>

// //                     )}

// //             </div>


// //             {/* =====================================
// //                 DIRECTORY NAME
// //             ====================================== */}

// //             <div className="directory-name">

// //                 {directory?.name ||
// //                     "Untitled Directory"}

// //             </div>

// //         </article>

// //     );

// // }





// import React, {
//     useEffect,
//     useState
// } from "react";

// import {
//     Plus
// } from "lucide-react";

// import {
//     useNavigate,
//     useLocation
// } from "react-router-dom";

// import API from "../../../../../src/api/CenteralAxios/CenteralAxios";

// import "./DirectoryCard.css";


// import {
//     fetchFewDirectoriesProjects
// } from "../../../../../src/redux_store/SavedProjects/SavedProject_action.js";

// export default function DirectoryCard({
//     directory,
//     onAddProject
// }) {

//     // =========================================
//     // ROUTER
//     // =========================================

//     const navigate = useNavigate();

//     const location = useLocation();


//     // =========================================
//     // DIRECTORY ID
//     // =========================================

//     const directoryId =
//         directory?._id;


//     // =========================================
//     // LOCAL PREVIEW STATE
//     // =========================================

//     const [projects, setProjects] =
//         useState([]);

//     const [loading, setLoading] =
//         useState(false);

//     const [error, setError] =
//         useState(null);


//     // =========================================
//     // FETCH FEW PROJECTS
//     // =========================================

//     useEffect(() => {

//         const fetchPreviewProjects =
//             async () => {

//                 if (!directoryId) {
//                     return;
//                 }

//                 try {

//                     setLoading(true);
//                     setError(null);


//                     const response =
//                         await API.get(
//                             `/api/project-directories/few/${directoryId}/projects`,
//                             {
//                                 params: {
//                                     limit: 4
//                                 }
//                             }
//                         );


//                     const data =
//                         response.data;


//                     if (!data.success) {

//                         throw new Error(
//                             data.message ||
//                             "Failed to load directory projects"
//                         );

//                     }


//                     setProjects(
//                         data.projects || []
//                     );


//                 } catch (error) {

//                     console.error(
//                         "Directory preview error:",
//                         error
//                     );


//                     setError(
//                         error.response?.data?.message ||
//                         error.message ||
//                         "Failed to load projects"
//                     );


//                     setProjects([]);

//                 } finally {

//                     setLoading(false);

//                 }

//             };


//         fetchPreviewProjects();

//     }, [directoryId]);


//     // =========================================
//     // OPEN DIRECTORY
//     // =========================================

//     const handleDirectoryClick =
//         () => {

//             if (!directoryId) {
//                 return;
//             }


//             navigate(
//                 `/dashboard/saved/${directoryId}`
//             );

//         };


//     // =========================================
//     // OPEN PROJECT
//     // =========================================

//     const handleProjectClick =
//         (
//             event,
//             projectId
//         ) => {

//             event.stopPropagation();


//             if (!projectId) {
//                 return;
//             }


//             navigate(
//                 `/explore/${projectId}`,
//                 {
//                     state: {
//                         backgroundLocation:
//                             location
//                     }
//                 }
//             );

//         };


//     // =========================================
//     // ADD PROJECT
//     // =========================================

//     const handleAddProject =
//         (event) => {

//             event.stopPropagation();


//             if (
//                 onAddProject &&
//                 directoryId
//             ) {

//                 onAddProject(
//                     directoryId
//                 );

//             }

//         };


//     // =========================================
//     // MAX 4 PROJECTS
//     // =========================================

//     const visibleProjects =
//         projects.slice(0, 4);


//     // =========================================
//     // EMPTY DIRECTORY
//     // =========================================

//     if (
//         !loading &&
//         visibleProjects.length === 0
//     ) {

//         return (

//             <article
//                 className="
//                     directory-card
//                     directory-card-empty
//                 "
//                 onClick={
//                     handleDirectoryClick
//                 }
//             >

//                 <div
//                     className="directory-empty-preview"
//                 >

//                     <button
//                         type="button"
//                         className="
//                             directory-empty-add
//                         "
//                         onClick={
//                             handleAddProject
//                         }
//                         aria-label="
//                             Add project to directory
//                         "
//                     >

//                         <Plus size={30} />

//                     </button>

//                 </div>


//                 <div
//                     className="directory-name"
//                 >

//                     {directory?.name ||
//                         "Untitled Directory"}

//                 </div>

//             </article>

//         );

//     }


//     // =========================================
//     // DIRECTORY CARD
//     // =========================================

//     return (

//         <article
//             className="directory-card"
//             onClick={
//                 handleDirectoryClick
//             }
//         >

//             {/* =================================
//                 PROJECT STACK
//             ================================== */}

//             <div
//                 className="
//                     directory-stack
//                 "
//             >

//                 {/* BACK → FRONT */}

//                 {visibleProjects
//                     .slice()
//                     .reverse()
//                     .map(
//                         (
//                             project,
//                             reversedIndex
//                         ) => {

//                             const originalIndex =
//                                 visibleProjects.length -
//                                 1 -
//                                 reversedIndex;


//                             return (

//                                 <button
//                                     key={
//                                         project._id
//                                     }
//                                     type="button"
//                                     className={`
//                                         directory-stack-item
//                                         stack-item-${originalIndex}
//                                     `}
//                                     onClick={
//                                         (event) =>
//                                             handleProjectClick(
//                                                 event,
//                                                 project._id
//                                             )
//                                     }
//                                 >

//                                     {project.image ? (

//                                         <img
//                                             src={
//                                                 project.image
//                                             }
//                                             alt="Saved project"
//                                             loading="lazy"
//                                         />

//                                     ) : (

//                                         <div
//                                             className="
//                                                 directory-no-image
//                                             "
//                                         />

//                                     )}

//                                 </button>

//                             );

//                         }
//                     )}


//                 {/* LOADING */}

//                 {loading && (

//                     <>

//                         <div
//                             className="
//                                 directory-stack-loading
//                                 stack-loading-1
//                             "
//                         />

//                         <div
//                             className="
//                                 directory-stack-loading
//                                 stack-loading-2
//                             "
//                         />

//                         <div
//                             className="
//                                 directory-stack-loading
//                                 stack-loading-3
//                             "
//                         />

//                         <div
//                             className="
//                                 directory-stack-loading
//                                 stack-loading-4
//                             "
//                         />

//                     </>

//                 )}

//             </div>


//             {/* =================================
//                 DIRECTORY NAME
//             ================================== */}

//             <div
//                 className="directory-name"
//             >

//                 {directory?.name ||
//                     "Untitled Directory"}

//             </div>

//         </article>

//     );

// }




import React, {
    useEffect,
    useState
} from "react";

import {
    Plus
} from "lucide-react";

import {
    useDispatch
} from "react-redux";

import {
    useNavigate,
    useLocation
} from "react-router-dom";

import {
    fetchFewDirectoriesProjects
} from "../../../../../src/redux_store/SavedProjects/SavedProject_action.js";

import "./DirectoryCard.css";


// export default function DirectoryCard({
//     directory,
//     onAddProject
// }) {

export default function DirectoryCard({
    directory,
    onAddProject,
    cardIndex = 0,


}) {


    // =========================================
    // REDUX DISPATCH
    // =========================================


    const dispatch = useDispatch();



      
const cardVariant =
    cardIndex % 4;

    // =========================================
    // ROUTER
    // =========================================

    const navigate =
        useNavigate();

    const location =
        useLocation();


    // =========================================
    // DIRECTORY ID
    // =========================================

    const directoryId =
        directory?._id;


    // =========================================
    // LOCAL PREVIEW STATE
    // =========================================

    const [
        projects,
        setProjects
    ] = useState([]);


    const [
        loading,
        setLoading
    ] = useState(false);


    const [
        error,
        setError
    ] = useState(null);


    // =========================================
    // FETCH PROJECT PREVIEW
    // =========================================

    // useEffect(() => {


    //     if (!directoryId) {
    //         return;
    //     }


    //     const fetchPreview =
    //         async () => {

    //             try {

    //                 setLoading(true);

    //                 setError(null);


    //                 // =================================
    //                 // USE OUR ACTION
    //                 // =================================
    //                 // USE OUR ACTION
    //                 // =================================

    //                 const previewProjectss =
    //                      fetchFewDirectoriesProjects(
    //                             directoryId,
    //                             4
    //                         )
    //                     ;

    //                 const previewProjects = await previewProjectss();

                   


    //                 // =================================
    //                 // STORE ONLY IN LOCAL STATE
    //                 // =================================

    //                 setProjects(
    //                     previewProjects
    //                 );


    //             } catch (error) {

    //                 console.error(
    //                     "Directory preview error:",
    //                     error
    //                 );


    //                 setError(
    //                     error.response?.data?.message ||
    //                     error.message ||
    //                     "Failed to load projects"
    //                 );


    //                 setProjects([]);

    //             } finally {

    //                 setLoading(false);

    //             }

    //         };


    //     fetchPreview();


    // }, [
    //     dispatch,
    //     directoryId
    // ]);

    // =========================================
// FETCH PROJECT PREVIEW
// =========================================


// useEffect(() => {

//     if (!directoryId) {
//         return;
//     }

//     return () => {
//         setDirectoryMode(false);
//     };
// }, [directoryId]);

useEffect(() => {

    if (!directoryId) {
        return;
    }


    const fetchPreview =
        async () => {

            try {

                setLoading(true);

                setError(null);


                const previewProjectss =
                    
                        fetchFewDirectoriesProjects(
                            directoryId,
                            4
                        )
                    

                const previewProjects = await previewProjectss();

                setProjects(
                    previewProjects
                );


            } catch (error) {

                console.error(
                    "Directory preview error:",
                    error
                );


                setError(
                    error.response?.data?.message ||
                    error.message ||
                    "Failed to load projects"
                );


                setProjects([]);

            } finally {

                setLoading(false);

            }

        };


    fetchPreview();


}, [
    dispatch,
    directoryId
]);


    // =========================================
    // OPEN DIRECTORY
    // =========================================

    // const handleDirectoryClick =
    //     () => {

    //         if (!directoryId) {
    //             return;
    //         }

    //         setDirectoryMode(true);

    //         navigate(
    //             `directory/${directoryId}`
    //         );

    //     };


    // =========================================
    // OPEN PROJECT
    // =========================================

    // const handleProjectClick =
    //     (
    //         event,
    //         projectId
    //     ) => {

    //         event.stopPropagation();


    //         if (!projectId) {
    //             return;
    //         }


    //         navigate(
    //             `/explore/${projectId}`,
    //             {
    //                 state: {
    //                     backgroundLocation:
    //                         location
    //                 }
    //             }
    //         );

    //     };


    // =========================================
    // OPEN PROJECT INSIDE DIRECTORY
    // =========================================

    const handleProjectClick =
        (
            event,
            projectId
        ) => {

            event.stopPropagation();

            if (!directoryId || !projectId) {
                return;
            }



            navigate(
                `directory/${directoryId}`,
            
                {
                    state: {
                        selectedProjectId: projectId
                    }
                }
            );

        };

    // =========================================
    // ADD PROJECT
    // =========================================

    const handleAddProject =
        (event) => {

            event.stopPropagation();


            if (onAddProject) {

                onAddProject(
                    directoryId
                );

            }

        };


    // =========================================
    // MAXIMUM 4 PROJECTS
    // =========================================

    const visibleProjects =
        projects.slice(0, 4);


    // =========================================
    // EMPTY DIRECTORY
    // =========================================

    if (
        !loading &&
        visibleProjects.length === 0
    ) {

        return (

           <article
                 className="
                    directory-card
                    directory-card-empty
                "
                onClick={
                    handleProjectClick
                }
            >

                <div
                    className="
                        directory-empty-preview
                    "
                >

                    <button
                        type="button"
                        className="
                            directory-empty-add
                        "
                        onClick={
                            handleAddProject
                        }
                        aria-label="
                            Add project to directory
                        "
                    >

                        <Plus size={30} />

                    </button>

                </div>


                <div
                    className="directory-name"
                >

                    {directory?.name ||
                        "Untitled Directory"}

                </div>

            </article>

        );

    }


    // =========================================
    // DIRECTORY CARD
    // =========================================

    return (

        // <article
        //     className="directory-card"
        //     onClick={
        //         handleDirectoryClick
        //     }
        // >
    <article
        className={`directory-card directory-card-${cardVariant}`}
        onClick={handleProjectClick}
    >

            {/* =================================
                PROJECT STACK
            ================================== */}

            <div
                className="
                    directory-stack
                "
            >


                {/* =================================
                    PROJECTS
                ================================== */}

                {visibleProjects
                    .slice()
                    .reverse()
                    .map(
                        (
                            project,
                            reversedIndex
                        ) => {


                            const originalIndex =
                                visibleProjects.length -
                                1 -
                                reversedIndex;


                            return (

                                <button
                                    key={
                                        project._id
                                    }
                                    type="button"
                                    className={`
                                        directory-stack-item
                                        stack-item-${originalIndex}
                                    `}
                                    onClick={
                                        (event) =>
                                            handleProjectClick(
                                                event,
                                                project._id
                                            )
                                    }
                                >

                                    {project.image ? (

                                        <img
                                            src={
                                                project.image
                                            }
                                            alt="Saved project"
                                            loading="lazy"
                                        />

                                    ) : (

                                        <div
                                            className="
                                                directory-no-image
                                            "
                                        />

                                    )}

                                </button>

                            );

                        }
                    )}


                {/* =================================
                    LOADING
                ================================== */}

                {loading && (

                    <div div>

                        <div
                            className="
                                directory-stack-loading
                                stack-loading-1
                            "
                        />

                        <div
                            className="
                                directory-stack-loading
                                stack-loading-2
                            "
                        />

                        <div
                            className="
                                directory-stack-loading
                                stack-loading-3
                            "
                        />

                        <div
                            className="
                                directory-stack-loading
                                stack-loading-4
                            "
                        />

                    </div>

                )}

            </div>


            {/* =================================
                DIRECTORY NAME
            ================================== */}

            <div
                className="
                    directory-name
                "
            >

                {directory?.name ||
                    "Untitled Directory"}

            </div>


        </article>

    );

}