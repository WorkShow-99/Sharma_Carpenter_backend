
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";

// import {useSelector} from "react-redux";

// import { fetchProjectRequest, fetchProjectSuccess, fetchProjectFailure, OpenOverlay, CloseOverlay } from "../../../../src/redux_store/Project_redux/Project_featch_functions";

// import {Project_featch} from "../../../../src/redux_store/Project_redux/Project_featch_functions";


// import OverlayHeader from "../../../../Overlay_components/Overlay_header/Overlay_header";

// import {projectDetails}  from "./innerdata";

// import ProjectTitleSection from "../../../../Overlay_components/Overlay_ProjectTitle/Overlay_ProjectTitle";
// export const OverLay_inner = ({ Project_id }) => {

//     // const selector = useSelector((state) => state.project_featch);
//     let project = Project_featch(Project_id);
//     console.log("Project:", project);

//     // const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     console.log("Project_id in OverLay_inner:", Project_id);
//     const [isSmallScreen, setIsSmallScreen] = useState(
//         typeof window !== "undefined" ? window.innerWidth <= 576 : false
//     );

//     useEffect(() => {
//         const handleResize = () => setIsSmallScreen(window.innerWidth <= 576);
//         handleResize();
//         window.addEventListener("resize", handleResize);

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

   
    
//     return (
//          <div
//             className="project-overlay-content overflow-y-auto"

//                 onClick={(e) => e.stopPropagation()}
//                 style={{
//                     width: "100%",
//                     height: "90vh",
//                     background: "white",
//                     borderTopLeftRadius: "20px",
//                     borderTopRightRadius: "20px",
//                 }}
//             >

//                 <button
//                     onClick={() => navigate("/explore")}
//                     aria-label="Close overlay"
//                     style={{
//                         width: isSmallScreen ? 48 : 40,
//                         height: isSmallScreen ? 48 : 40,
//                         borderRadius: 6,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         background: "#a04040",
//                         border: "none",
//                         cursor: "pointer",
//                         position: "absolute",
//                         right: 16,
//                         top: isSmallScreen ? 16 : "auto",
//                         bottom: isSmallScreen ? "auto" : 16,
//                         padding: 0,
//                     }}
//                 >
//                     {/* simple cross */}
//                     <span style={{
//                         display: "block",
//                         width: 16,
//                         height: 16,
//                         position: "relative",
//                     }}>
//                         <span style={{
//                             position: "absolute",
//                             left: "50%",
//                             top: "50%",
//                             width: "100%",
//                             height: 2,
//                             background: "#333",
//                             transform: "translate(-50%, -50%) rotate(45deg)",
//                             borderRadius: 1,
//                         }} />
//                         <span style={{
//                             position: "absolute",
//                             left: "50%",
//                             top: "50%",
//                             width: "100%",
//                             height: 2,
//                             background: "#333",
//                             transform: "translate(-50%, -50%) rotate(-45deg)",
//                             borderRadius: 1,
//                         }} />
//                     </span>
//                 </button>

//                 <OverlayHeader />
//                 <ProjectTitleSection project={projectDetails} />

            




//             </div>

//     );
// }


// import React, { useEffect, useState } from "react";

// import {
//     useNavigate,
//     useLocation
// } from "react-router-dom";

// import OverlayHeader from "../../../../Overlay_components/Overlay_header/Overlay_header";

// import ProjectTitleSection from "../../../../Overlay_components/Overlay_ProjectTitle/Overlay_ProjectTitle";

// // import "./OverLay_inner.css";
// import {fetchProjectDetails} from "../../../../src/redux_store/Project_redux/projectDetailsActions";

// export const OverLay_inner = ({ Project_id }) => {

//     const navigate = useNavigate();

//     const location = useLocation();


//     // ==========================================
//     // PROJECT STATE
//     // ==========================================

//     const [project, setProject] = useState(null);

//     const [loading, setLoading] = useState(true);

//     const [error, setError] = useState(null);


//     // ==========================================
//     // SCREEN SIZE
//     // ==========================================

//     const [isSmallScreen, setIsSmallScreen] = useState(
//         typeof window !== "undefined"
//             ? window.innerWidth <= 576
//             : false
//     );


//     // ==========================================
//     // FETCH PROJECT DETAIL
//     // ==========================================

//     useEffect(() => {

//         const fetchProjectDetail = async () => {

//             try {

//                 setLoading(true);

//                 setError(null);


//                 console.log(
//                     "Fetching project:",
//                     Project_id
//                 );


//                 const response = await fetch(
//                     `/api/projects/${Project_id}`
//                 );


//                 if (!response.ok) {

//                     throw new Error(
//                         `Failed to fetch project: ${response.status}`
//                     );

//                 }


//                 const data = await response.json();


//                 console.log(
//                     "Project detail response:",
//                     data
//                 );


//                 /*
//                     Depending on your API response structure.

//                     For example:

//                     {
//                         success: true,
//                         project: {...}
//                     }

//                     We use data.project.
//                 */

//                 setProject(data.project);


//             } catch (error) {

//                 console.error(
//                     "Project fetch error:",
//                     error
//                 );

//                 setError(
//                     error.message ||
//                     "Failed to load project"
//                 );


//             } finally {

//                 setLoading(false);

//             }

//         };


//         if (Project_id) {

//             fetchProjectDetail();

//         }

//     }, [Project_id]);


//     // ==========================================
//     // SCREEN RESIZE
//     // ==========================================

//     useEffect(() => {

//         const handleResize = () => {

//             setIsSmallScreen(
//                 window.innerWidth <= 576
//             );

//         };


//         handleResize();

//         window.addEventListener(
//             "resize",
//             handleResize
//         );


//         return () => {

//             window.removeEventListener(
//                 "resize",
//                 handleResize
//             );

//         };

//     }, []);


//     // ==========================================
//     // CLOSE OVERLAY
//     // ==========================================

//     const closeOverlay = () => {

//         navigate("/explore");

//     };


//     // ==========================================
//     // LOADING
//     // ==========================================

//     if (loading) {

//         return (

//             <div
//                 className="project-overlay-content overflow-y-auto"
//                 onClick={(e) => e.stopPropagation()}
//                 style={{
//                     width: "100%",
//                     height: "90vh",
//                     background: "white",
//                     borderTopLeftRadius: "20px",
//                     borderTopRightRadius: "20px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center"
//                 }}
//             >

//                 <p>
//                     Loading project...
//                 </p>

//             </div>

//         );

//     }


//     // ==========================================
//     // ERROR
//     // ==========================================

//     if (error) {

//         return (

//             <div
//                 className="project-overlay-content overflow-y-auto"
//                 onClick={(e) => e.stopPropagation()}
//                 style={{
//                     width: "100%",
//                     height: "90vh",
//                     background: "white",
//                     borderTopLeftRadius: "20px",
//                     borderTopRightRadius: "20px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                     gap: "12px"
//                 }}
//             >

//                 <p>
//                     {error}
//                 </p>

//                 <button
//                     onClick={closeOverlay}
//                 >
//                     Close
//                 </button>

//             </div>

//         );

//     }


//     // ==========================================
//     // PROJECT NOT FOUND
//     // ==========================================

//     if (!project) {

//         return (

//             <div
//                 className="project-overlay-content overflow-y-auto"
//                 onClick={(e) => e.stopPropagation()}
//                 style={{
//                     width: "100%",
//                     height: "90vh",
//                     background: "white",
//                     borderTopLeftRadius: "20px",
//                     borderTopRightRadius: "20px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center"
//                 }}
//             >

//                 <p>
//                     Project not found.
//                 </p>

//             </div>

//         );

//     }


//     // ==========================================
//     // MAIN OVERLAY CONTENT
//     // ==========================================

//     return (

//         <div
//             className="project-overlay-content overflow-y-auto"

//             onClick={(e) => e.stopPropagation()}

//             style={{
//                 width: "100%",
//                 height: "90vh",
//                 background: "white",
//                 borderTopLeftRadius: "20px",
//                 borderTopRightRadius: "20px",
//             }}
//         >

//             {/* =====================================
//                 CLOSE BUTTON
//             ===================================== */}

//             <button
//                 onClick={closeOverlay}

//                 aria-label="Close overlay"

//                 style={{
//                     width: isSmallScreen ? 48 : 40,
//                     height: isSmallScreen ? 48 : 40,
//                     borderRadius: 6,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     background: "#a04040",
//                     border: "none",
//                     cursor: "pointer",
//                     position: "absolute",
//                     right: 16,
//                     top: isSmallScreen ? 16 : "auto",
//                     bottom: isSmallScreen ? "auto" : 16,
//                     padding: 0,
//                     zIndex: 10
//                 }}
//             >

//                 <span
//                     style={{
//                         display: "block",
//                         width: 16,
//                         height: 16,
//                         position: "relative",
//                     }}
//                 >

//                     <span
//                         style={{
//                             position: "absolute",
//                             left: "50%",
//                             top: "50%",
//                             width: "100%",
//                             height: 2,
//                             background: "#333",
//                             transform:
//                                 "translate(-50%, -50%) rotate(45deg)",
//                             borderRadius: 1,
//                         }}
//                     />

//                     <span
//                         style={{
//                             position: "absolute",
//                             left: "50%",
//                             top: "50%",
//                             width: "100%",
//                             height: 2,
//                             background: "#333",
//                             transform:
//                                 "translate(-50%, -50%) rotate(-45deg)",
//                             borderRadius: 1,
//                         }}
//                     />

//                 </span>

//             </button>


//             {/* =====================================
//                 HEADER
//             ===================================== */}

//             {/* <OverlayHeader /> */}


//             {/* =====================================
//                 PROJECT DETAIL
//             ===================================== */}

//             {/* <ProjectTitleSection
//                 project={project}
//             /> */}

//         </div>

//     );

// };


// export default OverLay_inner;



// import { useNavigate } from "react-router-dom";

// const OverLay_inner = ({ Project_id }) => {

//     const navigate = useNavigate();

//     const closeOverlay = () => {
//         navigate("/explore");
//     };

//     return (

//         <div
//             className="project-overlay-content"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//                 width: "100%",
//                 height: "90vh",
//                 background: "white",
//                 borderTopLeftRadius: "20px",
//                 borderTopRightRadius: "20px",
//                 overflowY: "auto",
//             }}
//         >

//             {/* Close button */}

//             <button
//                 onClick={closeOverlay}
//                 style={{
//                     position: "absolute",
//                     top: "16px",
//                     right: "16px",
//                     width: "40px",
//                     height: "40px",
//                     border: "none",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#eee",
//                     fontSize: "20px",
//                     zIndex: 10,
//                 }}
//             >
//                 ×
//             </button>


//             {/* Temporary project information */}

//             <div
//                 style={{
//                     padding: "50px 20px",
//                     textAlign: "center",
//                 }}
//             >

//                 <h1>
//                     Project Overlay
//                 </h1>

//                 <p>
//                     Project ID:
//                 </p>

//                 <strong>
//                     {Project_id}
//                 </strong>

//             </div>

//         </div>

//     );
// }

// export default OverLay_inner;



// import { useEffect } from "react";

// import {
//     useDispatch,
//     useSelector
// } from "react-redux";

// import { useNavigate } from "react-router-dom";

    
// import {CLEAR_PROJECT_DETAILS} from "../../../../src/redux_store/Project_redux/projectDetails.js";

// import {
//     fetchProjectDetails,
// } from "../../../../src/redux_store/Project_redux/projectDetailsActions";


// const OverLay_inner = ({ Project_id }) => {

//     const dispatch = useDispatch();

//     const navigate = useNavigate();


//     // ==========================================
//     // GET PROJECT DETAILS FROM REDUX
//     // ==========================================

//     const {
//         project,
//         loading,
//         error
//     } = useSelector(
//         (state) => state.projectDetails
//     );


//     // ==========================================
//     // FETCH PROJECT
//     // ==========================================

//     useEffect(() => {

//         if (!Project_id) {
//             return;
//         }

//         dispatch(
//             fetchProjectDetails(Project_id)
//         );


//         // Clear old project when overlay closes
//         return () => {

//             dispatch({
//                 type: CLEAR_PROJECT_DETAILS
//             });

//         };

//     }, [
//         Project_id,
//         dispatch
//     ]);


//     // ==========================================
//     // CLOSE OVERLAY
//     // ==========================================

//     const closeOverlay = () => {

//         navigate("/explore");

//     };


//     // ==========================================
//     // UI
//     // ==========================================

//     return (

//         <div
//             className="project-overlay-content"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//                 width: "100%",
//                 height: "90vh",
//                 background: "white",
//                 borderTopLeftRadius: "20px",
//                 borderTopRightRadius: "20px",
//                 overflowY: "auto",
//                 position: "relative"
//             }}
//         >

//             {/* ==================================
//                 CLOSE
//             ================================== */}

//             <button
//                 onClick={closeOverlay}
//                 aria-label="Close overlay"
//                 style={{
//                     position: "absolute",
//                     top: "16px",
//                     right: "16px",
//                     width: "40px",
//                     height: "40px",
//                     border: "none",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#eee",
//                     fontSize: "20px",
//                     zIndex: 10
//                 }}
//             >
//                 ×
//             </button>


//             {/* ==================================
//                 CONTENT
//             ================================== */}

//             <div
//                 style={{
//                     padding: "80px 20px",
//                     textAlign: "center"
//                 }}
//             >

//                 {/* Loading */}

//                 {loading && (

//                     <p>
//                         Loading project...
//                     </p>

//                 )}


//                 {/* Error */}

//                 {!loading && error && (

//                     <p>
//                         {error}
//                     </p>

//                 )}


//                 {/* Project */}

//                 {!loading && !error && project && (

//                     <div>

//                         <h1>
//                             {project.title}
//                         </h1>

//                         <p>
//                             Project ID: {project._id}
//                         </p>

//                         <p>
//                             {project.description}
//                         </p>

//                     </div>

//                 )}


//                 {/* No Project */}

//                 {!loading && !error && !project && (

//                     <p>
//                         Project not found.
//                     </p>

//                 )}

//             </div>

//         </div>

//     );

// }




















// import { useEffect } from "react";

// import {
//     useDispatch,
//     useSelector
// } from "react-redux";



// import { useNavigate } from "react-router-dom";
// import ProjectTitleSection from "../../../../Overlay_components/Overlay_ProjectTitle/Overlay_ProjectTitle";
// import {
//     fetchProjectDetails
// } from "../../../../src/redux_store/Project_redux/projectDetailsActions";
// import 
//   {CLEAR_PROJECT_DETAILS}
//  from "../../../../src/redux_store/Project_redux/projectDetails.js";

// const OverLay_inner = ({ Project_id }) => {

//     const dispatch = useDispatch();

//     const navigate = useNavigate();


//     // ==========================================
//     // PROJECT DETAILS FROM REDUX
//     // ==========================================

//     const {
//         project,
//         loading,
//         error
//     } = useSelector(
//         (state) => state.projectDetails
//     );


//     // ==========================================
//     // FETCH PROJECT DETAILS
//     // ==========================================

//     useEffect(() => {

//         if (!Project_id) {
//             return;
//         }

//         dispatch(
//             fetchProjectDetails(Project_id)
//         );

//         return () => {

//             dispatch({
//                 type: CLEAR_PROJECT_DETAILS
//             });

//         };

//     }, [Project_id, dispatch]);


//     // ==========================================
//     // CLOSE
//     // ==========================================

//     const closeOverlay = () => {

//         navigate("/explore");

//     };


//     // ==========================================
//     // UI
//     // ==========================================

//     return (

//         <div
//             className="project-overlay-content"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//                 width: "100%",
//                 height: "90vh",
//                 background: "white",
//                 borderTopLeftRadius: "20px",
//                 borderTopRightRadius: "20px",
//                 overflowY: "auto",
//                 position: "relative"
//             }}
//         >

//             <button
//                 onClick={closeOverlay}
//                 style={{
//                     position: "absolute",
//                     top: "16px",
//                     right: "16px",
//                     width: "40px",
//                     height: "40px",
//                     border: "none",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#eee",
//                     fontSize: "20px",
//                     zIndex: 10
//                 }}
//             >
//                 ×
//             </button>


//             <div
//                 style={{
//                     padding: "80px 20px",
//                     textAlign: "center"
//                 }}
//             >

//                 {loading && (

//                     <p>
//                         Loading project...
//                     </p>

//                 )}


//                 {!loading && error && (

//                     <p>
//                         {error}
//                     </p>

//                 )}


//                 {/* {!loading && !error && project && (

//                     <>

//                         <h1>
//                             {project.title}
//                         </h1>

//                         <p>
//                             {project.description}
//                         </p>

//                     </>

//                 )} */}


//                 {!loading && !error && !project && (

//                     <p>
//                         Project not found.
//                     </p>

//                 )}


//                 {!loading && !error && project && (
                   
//                     <ProjectTitleSection project={project} />
//                 )}
//                     {/* <ProjectTitleSection project={project} /> */}

//             </div>

//         </div>

//     );

// }

// export default OverLay_inner;








// import { useEffect } from "react";

// import {
//     useDispatch,
//     useSelector
// } from "react-redux";

// import { useNavigate } from "react-router-dom";

// import ProjectTitleSection
//     from "../../../../Overlay_components/Overlay_ProjectTitle/Overlay_ProjectTitle";

// import {
//     fetchProjectDetails
// } from "../../../../src/redux_store/Project_redux/projectDetailsActions";

// import {
//     CLEAR_PROJECT_DETAILS
// } from "../../../../src/redux_store/Project_redux/projectDetails";


// const OverLay_inner = ({
//     Project_id
// }) => {

//     const dispatch =
//         useDispatch();

//     const navigate =
//         useNavigate();


//     const {
//         project,
//         loading,
//         error
//     } = useSelector(
//         state => state.projectDetails
//     );


//     useEffect(() => {

//         if (!Project_id) {
//             return;
//         }


//         dispatch(
//             fetchProjectDetails(Project_id)
//         );


//         return () => {

//             dispatch({
//                 type:
//                     CLEAR_PROJECT_DETAILS
//             });

//         };

//     }, [
//         Project_id,
//         dispatch
//     ]);


//     const closeOverlay = () => {

//         navigate("/explore");

//     };


//     return (

//         <div

//             className="project-overlay-content"

//             onClick={(e) =>
//                 e.stopPropagation()
//             }

//             style={{
//                 width: "100%",
//                 height: "90vh",
//                 background: "white",
//                 borderTopLeftRadius: "20px",
//                 borderTopRightRadius: "20px",
//                 overflowY: "auto",
//                 position: "relative"
//             }}

//         >

//             <button

//                 onClick={closeOverlay}

//                 style={{
//                     position: "absolute",
//                     top: "16px",
//                     right: "16px",
//                     width: "40px",
//                     height: "40px",
//                     border: "none",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#eee",
//                     fontSize: "20px",
//                     zIndex: 10
//                 }}

//             >
//                 ×
//             </button>


//             <div
//                 style={{
//                     padding: "80px 20px"
//                 }}
//             >

//                 {loading && (

//                     <p className="text-center">
//                         Loading project...
//                     </p>

//                 )}


//                 {!loading && error && (

//                     <p className="text-center">
//                         {error}
//                     </p>

//                 )}


//                 {!loading &&
//                     !error &&
//                     !project && (

//                         <p className="text-center">
//                             Project not found.
//                         </p>

//                     )}


//                 {!loading &&
//                     !error &&
//                     project && (

//                         <ProjectTitleSection
//                             project={project}
//                         />

//                     )}

//             </div>

//         </div>

//     );

// };


// export default OverLay_inner;



// import { useEffect } from "react";

// import {
//     useDispatch,
//     useSelector
// } from "react-redux";

// import {
//     useNavigate
// } from "react-router-dom";

// import {
//     Bookmark,
//     Share2,
//     ExternalLink,
//     X
// } from "lucide-react";

// import ProjectTitleSection
//     from "../../../../Overlay_components/Overlay_ProjectTitle/Overlay_ProjectTitle";

// import {
//     fetchProjectDetails
// } from "../../../../src/redux_store/Project_redux/projectDetailsActions";

// import {
//     CLEAR_PROJECT_DETAILS
// } from "../../../../src/redux_store/Project_redux/projectDetails";

// import "./OverLay_inner.css";


// const OverLay_inner = ({
//     Project_id
// }) => {

//     const dispatch = useDispatch();

//     const navigate = useNavigate();


//     const {
//         project,
//         loading,
//         error
//     } = useSelector(
//         state => state.projectDetails
//     );


//     useEffect(() => {

//         if (!Project_id) {
//             return;
//         }

//         dispatch(
//             fetchProjectDetails(Project_id)
//         );


//         return () => {

//             dispatch({
//                 type: CLEAR_PROJECT_DETAILS
//             });

//         };

//     }, [
//         Project_id,
//         dispatch
//     ]);


//     const closeOverlay = () => {

//         navigate(-1);

//     };


//     const handleShare = async () => {

//         try {

//             await navigator.share({

//                 title:
//                     project?.title ||
//                     "Project",

//                 text:
//                     project?.description ||
//                     "",

//                 url:
//                     window.location.href

//             });

//         } catch (error) {

//             console.log(
//                 "Share cancelled"
//             );

//         }

//     };


//     const handleSave = () => {

//         console.log(
//             "Save project:",
//             Project_id
//         );

//         // Later:
//         // dispatch(saveProject(Project_id));

//     };


//     const handleOpenProject = () => {

//         navigate(
//             `/explore/${Project_id}`
//         );

//     };


//     return (

//         <div
//             className="project-overlay-content"
//             onClick={(e) =>
//                 e.stopPropagation()
//             }
//         >

//             {/* =====================================
//                 PROJECT HEADER
//             ===================================== */}

//             <header className="project-overlay-header">


//                 {/* ===============================
//                     LEFT
//                 =============================== */}

//                 <div className="project-header-left">

//                     {project && (

//                         <>

//                             <div className="project-header-owner">

//                                 {project
//                                     .professionalProfileId
//                                     ?.userId
//                                     ?.profileImage
//                                     ?.url ? (

//                                     <img
//                                         src={
//                                             project
//                                                 .professionalProfileId
//                                                 .userId
//                                                 .profileImage
//                                                 .url
//                                         }
//                                         alt=""
//                                         className="project-header-avatar"
//                                     />

//                                 ) : (

//                                     <div className="project-header-avatar project-header-placeholder">

//                                         {project
//                                             .professionalProfileId
//                                             ?.userId
//                                             ?.firstName
//                                             ?.charAt(0)
//                                             ?.toUpperCase()}

//                                     </div>

//                                 )}

//                             </div>


//                             <div className="project-header-owner-info">

//                                 <span className="project-header-owner-name">

//                                     {
//                                         [
//                                             project
//                                                 .professionalProfileId
//                                                 ?.userId
//                                                 ?.firstName,

//                                             project
//                                                 .professionalProfileId
//                                                 ?.userId
//                                                 ?.lastName

//                                         ]
//                                             .filter(Boolean)
//                                             .join(" ")
//                                     }

//                                 </span>


//                                 <span className="project-header-by">

//                                     by

//                                 </span>


//                                 <span className="project-header-profession">

//                                     {
//                                         project
//                                             .professionalProfileId
//                                             ?.profession ||
//                                         "Professional"
//                                     }

//                                 </span>

//                             </div>

//                         </>

//                     )}

//                 </div>


//                 {/* ===============================
//                     RIGHT ACTIONS
//                 =============================== */}

//                 <div className="project-header-actions">


//                     <button
//                         type="button"
//                         className="project-header-action"
//                         onClick={handleSave}
//                         aria-label="Save project"
//                     >

//                         <Bookmark size={23} />

//                     </button>


//                     <button
//                         type="button"
//                         className="project-header-action"
//                         onClick={handleShare}
//                         aria-label="Share project"
//                     >

//                         <Share2 size={23} />

//                     </button>


//                     <button
//                         type="button"
//                         className="project-header-action"
//                         onClick={handleOpenProject}
//                         aria-label="Open project"
//                     >

//                         <ExternalLink size={23} />

//                     </button>


//                     <button
//                         type="button"
//                         className="project-header-close"
//                         onClick={closeOverlay}
//                         aria-label="Close"
//                     >

//                         <X size={24} />

//                     </button>

//                 </div>

//             </header>


//             {/* =====================================
//                 PROJECT BODY
//             ===================================== */}

//             <main className="project-overlay-body">


//                 {loading && (

//                     <div className="project-state">

//                         <p>
//                             Loading project...
//                         </p>

//                     </div>

//                 )}


//                 {!loading && error && (

//                     <div className="project-state">

//                         <p>
//                             {error}
//                         </p>

//                     </div>

//                 )}


//                 {!loading &&
//                     !error &&
//                     !project && (

//                         <div className="project-state">

//                             <p>
//                                 Project not found.
//                             </p>

//                         </div>

//                     )}


//                 {!loading &&
//                     !error &&
//                     project && (

//                         <ProjectTitleSection
//                             project={project}
//                         />

//                     )}

//             </main>

//         </div>

//     );

// };


// export default OverLay_inner;




















import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bookmark, Share2, ExternalLink, X } from "lucide-react";

import ProjectTitleSection from "../../../../Overlay_components/Overlay_ProjectTitle/Overlay_ProjectTitle";
import { fetchProjectDetails } from "../../../../src/redux_store/Project_redux/projectDetailsActions";
import { CLEAR_PROJECT_DETAILS } from "../../../../src/redux_store/Project_redux/projectDetails";
import "./OverLay_inner.css";

const OverLay_inner = ({ Project_id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { project, loading, error } = useSelector(
        (state) => state.projectDetails
    );

    useEffect(() => {
        if (!Project_id) return;

        dispatch(fetchProjectDetails(Project_id));

        return () => {
            dispatch({ type: CLEAR_PROJECT_DETAILS });
        };
    }, [Project_id, dispatch]);

    const closeOverlay = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate("/explore");
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: project?.title || "Project",
            text: project?.description || "",
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.log("Share cancelled");
            }
        } else {
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert("Project URL copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy link", err);
            }
        }
    };

    const handleSave = () => {
        console.log("Save project:", Project_id);
    };

    const handleOpenProject = () => {
        navigate(`/explore/${Project_id}`);
    };

    return (
        <div
            className="project-overlay-content"
            onClick={(e) => e.stopPropagation()}
        >
            <header className="project-overlay-header">
                <div className="project-header-left">
                    {project && (
                        <>
                            <div className="project-header-owner">
                                {project.professionalProfileId?.userId?.profileImage?.url ? (
                                    <img
                                        src={project.professionalProfileId.userId.profileImage.url}
                                        alt=""
                                        className="project-header-avatar"
                                    />
                                ) : (
                                    <div className="project-header-avatar project-header-placeholder">
                                        {project.professionalProfileId?.userId?.firstName
                                            ?.charAt(0)
                                            ?.toUpperCase()}
                                    </div>
                                )}
                            </div>

                            <div className="project-header-owner-info">
                                <span className="project-header-owner-name">
                                    {[
                                        project.professionalProfileId?.userId?.firstName,
                                        project.professionalProfileId?.userId?.lastName,
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                </span>
                                <span className="project-header-by">by</span>
                                <span className="project-header-profession">
                                    {project.professionalProfileId?.profession || "Professional"}
                                </span>
                            </div>
                        </>
                    )}
                </div>

                <div className="project-header-actions">
                    <button
                        type="button"
                        className="project-header-action"
                        onClick={handleSave}
                        aria-label="Save project"
                    >
                        <Bookmark size={23} />
                    </button>

                    <button
                        type="button"
                        className="project-header-action"
                        onClick={handleShare}
                        aria-label="Share project"
                    >
                        <Share2 size={23} />
                    </button>

                    <button
                        type="button"
                        className="project-header-action"
                        onClick={handleOpenProject}
                        aria-label="Open project"
                    >
                        <ExternalLink size={23} />
                    </button>

                    <button
                        type="button"
                        className="project-header-close"
                        onClick={closeOverlay}
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                </div>
            </header>

            <main className="project-overlay-body">
                {loading && (
                    <div className="project-state">
                        <p>Loading project...</p>
                    </div>
                )}

                {!loading && error && (
                    <div className="project-state">
                        <p>{error}</p>
                    </div>
                )}

                {!loading && !error && !project && (
                    <div className="project-state">
                        <p>Project not found.</p>
                    </div>
                )}

                {!loading && !error && project && (
                    <ProjectTitleSection project={project} />
                )}
            </main>
        </div>
    );
};

export default OverLay_inner;