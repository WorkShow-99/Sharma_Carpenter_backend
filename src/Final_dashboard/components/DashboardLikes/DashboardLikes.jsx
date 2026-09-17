// import "./DashboardLikes.css";

// import { Heart } from "lucide-react";

// export default function LikedProjects() {

//     const likedProjects = [];

//     if (likedProjects.length === 0) {

//         return (

//             <section className="liked-empty">

//                 <Heart
//                     size={72}
//                     strokeWidth={1.5}
//                 />

//                 <h2>

//                     Nothing Liked Yet

//                 </h2>

//                 <p>

//                     Like projects you admire and they'll appear
//                     here so you can revisit them anytime.

//                 </p>

//                 <button>

//                     Explore Projects

//                 </button>

//             </section>

//         );

//     }

//     return (

//         <section className="liked-projects">

//             <div className="liked-header">

//                 <h2>

//                     Liked Projects

//                 </h2>

//             </div>

//             {/* ProjectGrid */}

//         </section>

//     );

// }




// import "./DashboardLikes.css";

// import {
//     Heart
// } from "lucide-react";

// import {
//     useDispatch,
//     useSelector
// } from "react-redux";

// import {
//     useEffect,
//     useRef
// } from "react";

// import {resetLikedProjects} from "../../../../src/redux_store/LikedProject/LikedProjects_actions";

// import {
//     fetchLikedProjects
// } from "../../../../src/redux_store/LikedProject/LikedProjects_actions";

// // import ProjectCard from "../../../ /components/New_dashboard/Dashboard_components/Project_divs.jsx";
// import ProjectCard from "../../../../components/New_dashboard/Dashboard_components/Project_divs.jsx";
// import { removeLikedProject } from "../../../../src/redux_store/LikedProject/LikedProjects_actions";


// import LikedProjectHolder from "./LikedProjectsCard/LikedProjectHolder.jsx";


// export default function LikedProjects() {

//     const dispatch = useDispatch();

//     const loadMoreRef =
//         useRef(null);



       

//     const Remove_from_lickedProjects = async({ projectId }) => {



//     // Check if the project exists in the liked projects list
   


//         // Implement the logic to remove the project from liked projects
//         // console.log(`Removing project with ID: ${project._id} from liked projects`);
//         // You can use the DashboardAxios instance to make a DELETE request to remove the project from liked projects

//         dispatch(
//                 removeLikedProject(
//                     projectId 
//                 )
//             );
//         // await DashboardAxios.delete(`removeLikedProjects/${project._id}`)
//         //     .then((response) => {
//         //         console.log(
//         //             "Project removed from liked projects:",
//         //             response.data
//         //         );
//         //         // Optionally, you can update the UI or state here to reflect the removal
//         //     })
//         //     .catch((error) => {
//         //         console.error(
//         //             "Error removing project from liked projects:",
//         //             error
//         //         );
//         //     });

//     }

//     const {

//         projects,

//         nextCursor,

//         hasMore,

//         loading,

//         error,

//         initialized

//     } = useSelector(

//         state =>
//             state.likedProjects

//     );


//     // ==========================================
//     // INITIAL FETCH
//     // ==========================================

//     useEffect(() => {

//         if (
//             !initialized &&
//             !loading
//         ) {

//             dispatch(
//                 fetchLikedProjects(
//                     null,
//                     10
//                 )
//             );

//         }
//          return () => {
//                 dispatch(resetLikedProjects());
//             };

//     }, [
//         dispatch,
//         initialized,
//         loading
//     ]);


//     // ==========================================
//     // PAGINATION
//     // ==========================================

//     useEffect(() => {

//         const element =
//             loadMoreRef.current;


//         if (!element) {

//             return;

//         }


//         const observer =
//             new IntersectionObserver(

//                 entries => {

//                     const entry =
//                         entries[0];


//                     if (

//                         entry.isIntersecting &&

//                         hasMore &&

//                         !loading &&

//                         nextCursor

//                     ) {

//                         dispatch(

//                             fetchLikedProjects(

//                                 nextCursor,

//                                 10

//                             )

//                         );

//                     }

//                 },

//                 {

//                     root: null,

//                     rootMargin: "500px",

//                     threshold: 0

//                 }

//             );


//         observer.observe(element);


//         return () => {

//             observer.disconnect();

//         };

//     }, [

//         dispatch,

//         hasMore,

//         loading,

//         nextCursor

//     ]);


//     // ==========================================
//     // EMPTY STATE
//     // ==========================================

//     if (
//         initialized &&
//         !loading &&
//         projects.length === 0
//     ) {

//         return (

//             <section className="liked-empty">

//                 <Heart
//                     size={72}
//                     strokeWidth={1.5}
//                 />

//                 <h2>

//                     Nothing Liked Yet

//                 </h2>

//                 <p>

//                     Like projects you admire and
//                     they'll appear here so you can
//                     revisit them anytime.

//                 </p>

//                 <button>

//                     Explore Projects

//                 </button>

//             </section>

//         );

//     }


//     return (

//         <section className="liked-projects">


//             {/* ================================= */}
//             {/* HEADER                            */}
//             {/* ================================= */}

//             <div className="liked-header">

//                 <h2>

//                     Liked Projects

//                 </h2>

//             </div>


//             {/* ================================= */}
//             {/* ERROR                             */}
//             {/* ================================= */}

//             {error && (

//                 <p className="liked-error">

//                     {error}

//                 </p>

//             )}


//             {/* ================================= */}
//             {/* PROJECT GRID                      */}
//             {/* ================================= */}

//             <div className="liked-project-grid">


//                     <LikedProjectHolder
//                                 projects={projects} Remove_from_lickedProjects={Remove_from_lickedProjects} 
//                     />
//                 {/* {projects.map(

//                     project => (

//                         <ProjectCard

//                             key={
//                                 project._id
//                             }

//                             projectId={
//                                 project._id
//                             }

//                             projectTitle={
//                                 project.title
//                             }

//                             projectImage={

//                                 project.media?.find(
//                                     media =>
//                                         media.isHero
//                                 )?.url ||

//                                 project.media?.find(
//                                     media =>
//                                         media.type === "image"
//                                 )?.url ||

//                                 ""

//                             }

//                             mediaType={

//                                 project.media?.find(
//                                     media =>
//                                         media.isHero
//                                 )?.type ||

//                                 "image"

//                             }

//                             ownerName={

//                                 `${

//                                     project
//                                         .professionalProfileId
//                                         ?.userId
//                                         ?.firstName || ""

//                                 } ${

//                                     project
//                                         .professionalProfileId
//                                         ?.userId
//                                         ?.lastName || ""

//                                 }`.trim()

//                             }

//                             ownerSlug={

//                                 project
//                                     .professionalProfileId
//                                     ?.userId
//                                     ?.username || ""

//                             }

//                             ownerImage={

//                                 project
//                                     .professionalProfileId
//                                     ?.userId
//                                     ?.profileImage
//                                     ?.url || ""

//                             }

//                             ownerType={

//                                 project
//                                     .professionalProfileId
//                                     ?.profession || ""

//                             }

//                             likes={
//                                 project.likesCount || 0
//                             }

//                             views={
//                                 project.viewsCount || 0
//                             }

//                         />

//                     )

//                 )} */}

//             </div>


//             {/* ================================= */}
//             {/* LOADING                           */}
//             {/* ================================= */}

//             {loading && (

//                 <p className="liked-loading">

//                     Loading liked projects...

//                 </p>

//             )}


//             {/* ================================= */}
//             {/* PAGINATION TRIGGER                */}
//             {/* ================================= */}

//             <div
//                 ref={loadMoreRef}
//                 className="liked-load-more"
//             />


//         </section>

//     );

// }




import "./DashboardLikes.css";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useCallback } from "react";
import {
    resetLikedProjects,
    fetchLikedProjects,
    removeLikedProject
} from "../../../../src/redux_store/LikedProject/LikedProjects_actions";
import LikedProjectHolder from "./LikedProjectsCard/LikedProjectHolder.jsx";

export default function LikedProjects() {
    const dispatch = useDispatch();
    const loadMoreRef = useRef(null);

    const {
        projects,
        nextCursor,
        hasMore,
        loading,
        error,
        initialized
    } = useSelector(state => state.likedProjects);

    console.log(
        "Liked Projects Redux:",
        projects
    );

    // Stable function reference to prevent child component re-renders
    const Remove_from_lickedProjects = useCallback(({ projectId }) => {
        dispatch(removeLikedProject(projectId));
    }, [dispatch]);

    // Cleanup: Reset store ONLY on true component unmount
 

    // Initial Data Fetching
    useEffect(() => {
        if (!initialized && !loading) {
            dispatch(fetchLikedProjects(null, 10));
        }
    }, [dispatch, initialized, loading]);

    // Intersection Observer for Infinite Scroll
    useEffect(() => {
        const element = loadMoreRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            entries => {
                const entry = entries[0];
                if (entry.isIntersecting && hasMore && !loading && nextCursor) {
                    dispatch(fetchLikedProjects(nextCursor, 10));
                }
            },
            {
                root: null,
                rootMargin: "500px",
                threshold: 0
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [dispatch, hasMore, loading, nextCursor]);

    // Empty State View
    if (initialized && !loading && projects.length === 0) {
        return (
            <section className="liked-empty">
                <Heart size={72} strokeWidth={1.5} />
                <h2>Nothing Liked Yet</h2>
                <p>
                    Like projects you admire and they'll appear here so you can revisit them anytime.
                </p>
                <button>Explore Projects</button>
            </section>
        );
    }

    return (
        <section className="liked-projects">
            <div className="liked-header">
                <h2>Liked Projects</h2>
            </div>

            {error && <p className="liked-error">{error}</p>}

            <div className="liked-project-grid">
                <LikedProjectHolder
                    projects={projects}
                    Remove_from_lickedProjects={Remove_from_lickedProjects}
                />
            </div>

            {loading && <p className="liked-loading">Loading liked projects...</p>}

            <div ref={loadMoreRef} className="liked-load-more" />
        </section>
    );
}