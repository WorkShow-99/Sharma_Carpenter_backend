// import "./ProjectUnorganized.css";

// import { useCallback, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//     fetchUnorganizedProjects
// } from "../../../../../src/redux_store/SavedProjects/SavedProject_action.js";


// export default function UnorganizedProjects() {

//     const dispatch = useDispatch();

//     const loadMoreRef = useRef(null);


//     // ==========================================
//     // REDUX STATE
//     // ==========================================

//     const {
//         unorganizedProjects = [],
//         unorganizedNextCursor = null,
//         unorganizedHasMore = false,
//         unorganizedLoading = false,
//         unorganizedInitialized = false,
//         unorganizedError = null
//     } = useSelector(
//         state => state.savedProjects
//     );


//     // ==========================================
//     // INITIAL FETCH
//     // ==========================================

//     useEffect(() => {

//         if (
//             !unorganizedInitialized &&
//             !unorganizedLoading
//         ) {

//             console.log(
//                 "Fetching first page of unorganized projects"
//             );

//             dispatch(
//                 fetchUnorganizedProjects(
//                     null,
//                     10
//                 )
//             );
//         }

//     }, [
//         dispatch,
//         unorganizedInitialized,
//         unorganizedLoading
//     ]);


//     // ==========================================
//     // LOAD MORE
//     // ==========================================

//     const loadMore = useCallback(() => {

//         if (
//             unorganizedLoading ||
//             !unorganizedHasMore ||
//             !unorganizedNextCursor
//         ) {
//             return;
//         }


//         console.log(
//             "Fetching next page:",
//             unorganizedNextCursor
//         );


//         dispatch(
//             fetchUnorganizedProjects(
//                 unorganizedNextCursor,
//                 10
//             )
//         );

//     }, [
//         dispatch,
//         unorganizedLoading,
//         unorganizedHasMore,
//         unorganizedNextCursor
//     ]);


//     // ==========================================
//     // INTERSECTION OBSERVER
//     // ==========================================

//     useEffect(() => {

//         const element =
//             loadMoreRef.current;

//         if (!element) {
//             return;
//         }


//         const observer =
//             new IntersectionObserver(
//                 (entries) => {

//                     const entry =
//                         entries[0];

//                     if (
//                         entry.isIntersecting
//                     ) {

//                         loadMore();
//                     }

//                 },
//                 {
//                     root: null,

//                     // Start loading before the user
//                     // actually reaches the bottom.
//                     rootMargin: "500px",

//                     threshold: 0
//                 }
//             );


//         observer.observe(element);


//         return () => {

//             observer.disconnect();

//         };

//     }, [loadMore]);


//     // ==========================================
//     // ERROR
//     // ==========================================

//     if (
//         unorganizedInitialized &&
//         unorganizedError &&
//         unorganizedProjects.length === 0
//     ) {

//         return (

//             <section className="unorganized-projects">

//                 <div className="unorganized-header">

//                     <h3>
//                         Unorganized Projects
//                     </h3>

//                 </div>


//                 <div className="unorganized-error">

//                     <p>
//                         {unorganizedError}
//                     </p>

//                     <button
//                         onClick={() => {

//                             dispatch(
//                                 fetchUnorganizedProjects(
//                                     null,
//                                     10
//                                 )
//                             );

//                         }}
//                     >
//                         Try Again
//                     </button>

//                 </div>

//             </section>

//         );
//     }


//     // ==========================================
//     // RENDER
//     // ==========================================

//     return (

//         <section className="unorganized-projects">

//             {/* =================================
//                 HEADER
//             ================================= */}

//             <div className="unorganized-header">

//                 <div>

//                     <h3>
//                         Unorganized Projects
//                     </h3>

//                     <span>
//                         Projects not assigned to a directory
//                     </span>

//                 </div>

//             </div>


//             {/* =================================
//                 PROJECT LIST
//             ================================= */}

//             <div className="unorganized-content">

//                 {unorganizedProjects.length === 0 &&
//                 unorganizedLoading ? (

//                     <div className="projects-loading">

//                         <p>
//                             Loading projects...
//                         </p>

//                     </div>

//                 ) : unorganizedProjects.length === 0 ? (

//                     <div className="projects-empty">

//                         <p>
//                             No unorganized projects.
//                         </p>

//                     </div>

//                 ) : (

//                     <div className="project-grid">

//                         {unorganizedProjects.map(
//                             (project) => (

//                                 <div
//                                     className="project-card"
//                                     key={project._id}
//                                 >

//                                     <h4>
//                                         {project.title}
//                                     </h4>

//                                     <p>
//                                         {project.description}
//                                     </p>

//                                 </div>

//                             )
//                         )}

//                     </div>

//                 )}

//             </div>


//             {/* =================================
//                 LOADING MORE
//             ================================= */}

//             {unorganizedLoading &&
//             unorganizedProjects.length > 0 && (

//                 <div className="projects-loading-more">

//                     <p>
//                         Loading more projects...
//                     </p>

//                 </div>

//             )}


//             {/* =================================
//                 END OF LIST
//             ================================= */}

//             {!unorganizedLoading &&
//             unorganizedInitialized &&
//             !unorganizedHasMore &&
//             unorganizedProjects.length > 0 && (

//                 <div className="projects-end">

//                     <p>
//                         You've reached the end.
//                     </p>

//                 </div>

//             )}


//             {/* =================================
//                 OBSERVER TARGET
//             ================================= */}

//             <div
//                 ref={loadMoreRef}
//                 className="load-more-trigger"
//                 aria-hidden="true"
//             />

//         </section>

//     );
// }









import "./ProjectUnorganized.css";

import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import SavedProjectCard from "../SavedProjectCard/SavedProjectCard.jsx";

// import {
//     fetchUnorganizedProjects
// } from "../../../../src/redux_store/SavedProjects/SavedProject_action.js";


import {
    fetchUnorganizedProjects
} from "../../../../../src/redux_store/SavedProjects/SavedProject_action.js";



export default function UnorganizedProjects() {

    const dispatch = useDispatch();

    const loadMoreRef = useRef(null);


    // ==========================================
    // REDUX STATE
    // ==========================================

    const {
        unorganizedProjects,
        unorganizedNextCursor,
        unorganizedHasMore,
        unorganizedLoading,
        unorganizedError,
        unorganizedInitialized
    } = useSelector(
        state => state.savedProjects
    );


    // ==========================================
    // FIRST FETCH
    // ==========================================

    useEffect(() => {
        console.log("this got render")

        if (
            !unorganizedInitialized &&
            !unorganizedLoading
        ) {

            console.log(
                "Fetching first unorganized projects"
            );

            dispatch(
                fetchUnorganizedProjects(
                    null,
                    10
                )
            );
        }

    }, [
        dispatch,
        unorganizedInitialized,
        unorganizedLoading
    ]);


    // ==========================================
    // LOAD NEXT PAGE
    // ==========================================

    const loadMore = useCallback(() => {

        // Don't request if already loading
        if (unorganizedLoading) {
            return;
        }

        // No more pages
        if (!unorganizedHasMore) {
            return;
        }

        // No cursor means there is no next page
        if (!unorganizedNextCursor) {
            return;
        }


        console.log(
            "Loading next page:",
            unorganizedNextCursor
        );


        dispatch(
            fetchUnorganizedProjects(
                unorganizedNextCursor,
                10
            )
        );

    }, [
        dispatch,
        unorganizedLoading,
        unorganizedHasMore,
        unorganizedNextCursor
    ]);


    // ==========================================
    // INTERSECTION OBSERVER
    // ==========================================

    useEffect(() => {

        const element =
            loadMoreRef.current;

        if (!element) {
            return;
        }


        const observer =
            new IntersectionObserver(
                ([entry]) => {

                    if (
                        entry.isIntersecting
                    ) {

                        loadMore();
                    }

                },
                {
                    root: null,
                    rootMargin: "100px",
                    threshold: 0
                }
            );


        observer.observe(element);


        return () => {

            observer.disconnect();

        };

    }, [loadMore]);


    // ==========================================
    // ERROR
    // ==========================================

    if (
        unorganizedInitialized &&
        unorganizedError &&
        unorganizedProjects.length === 0
    ) {

        return (

            <section className="unorganized-projects">

                <div className="unorganized-header">

                    <h3>
                        Unorganized Projects
                    </h3>

                </div>


                <div className="unorganized-error">

                    <p>
                        {unorganizedError}
                    </p>


                    <button
                        onClick={() => {

                            dispatch(
                                fetchUnorganizedProjects(
                                    null,
                                    10
                                )
                            );

                        }}
                    >
                        Try Again
                    </button>

                </div>

            </section>

        );
    }


    // ==========================================
    // COMPONENT
    // ==========================================

    return (

        <section className="unorganized-projects">


            {/* =================================
                HEADER
            ================================= */}

            <div className="unorganized-header">

                <div>

                    <h3>
                        Unorganized Projects
                    </h3>

                    <p>
                        Projects not assigned to a directory
                    </p>

                </div>

            </div>


            {/* =================================
                PROJECTS
            ================================= */}

            <div className="unorganized-content">

                {unorganizedProjects.length === 0 &&
                unorganizedLoading ? (

                    <div className="projects-loading">

                        <p>
                            Loading projects...
                        </p>

                    </div>

                ) : unorganizedProjects.length === 0 ? (

                    <div className="projects-empty">

                        <p>
                            No unorganized projects.
                        </p>

                    </div>

                ) : (

                    // <div className="project-grid">

                    //     {unorganizedProjects.map(
                    //         (project) => (

                    //             <div
                    //                 key={project._id}
                    //                 className="project-card"
                    //             >

                    //                 <h4>
                    //                     {project.title}
                    //                 </h4>


                    //                 <p>
                    //                     {project.description}
                    //                 </p>

                    //             </div>

                    //         )
                    //     )}

                    // </div>

    //                 <div className="project-grid">

    // {unorganizedProjects.map((project) => (

    //                     // <SavedProjectCard
    //                     //     key={project._id}

    //                     //     projectId={project._id}

    //                     //     projectTitle={project.title}

    //                     //     projectImage={
    //                     //         project.images?.[0] ||
    //                     //         project.image ||
    //                     //         ""
    //                     //     }

    //                     //     ownerName={
    //                     //         project.owner?.name ||
    //                     //         project.ownerName ||
    //                     //         "Unknown"
    //                     //     }

    //                     //     ownerImage={
    //                     //         project.owner?.profileImage ||
    //                     //         project.owner?.image ||
    //                     //         project.ownerImage ||
    //                     //         ""
    //                     //     }

    //                     //     directoryName="Unorganized"

    //                     //     onRemove={(projectId) => {
    //                     //         console.log(
    //                     //             "Remove project:",
    //                     //             projectId
    //                     //         );
    //                     //     }}

    //                     //     onMove={(projectId) => {
    //                     //         console.log(
    //                     //             "Move project:",
    //                     //             projectId
    //                     //         );
    //                     //     }}
    //                     // />
    //         <SavedProjectCard
    //                 key={project._id}

    //                 projectId={project._id}

    //                 projectTitle={project.title}

    //                 projectImage={
    //                     project.media?.find(
    //                         media => media.isHero
    //                     )?.url ||
    //                     project.media?.[0]?.url ||
    //                     ""
    //                 }

    //                 ownerName={
    //                     project.professionalProfileId?.userId
    //                         ? `${project.professionalProfileId.userId.firstName} ${project.professionalProfileId.userId.lastName}`
    //                         : "Unknown"
    //                 }

    //                 ownerImage={
    //                     project.professionalProfileId?.userId
    //                         ?.profileImage?.url ||
    //                     ""
    //                 }

    //                 // directoryName={directory?.name || "Unorganized"}

    //                 // onRemove={handleRemove}

    //                 // onMove={handleMove}
    //             />

    //                 ))}

    //             </div>


                    //     <div className="project-grid">

                    //     {unorganizedProjects.map((project) => (

                    //         <SavedProjectCard
                    //             key={project._id}

                    //             projectId={project._id}

                    //             projectTitle={project.title}

                    //             projectImage={
                    //                 project.media?.find(
                    //                     media => media.isHero
                    //                 )?.url ||
                    //                 project.media?.[0]?.url ||
                    //                 ""
                    //             }

                    //             ownerName={
                    //                 `${project.professionalProfileId?.userId?.firstName || ""} ${
                    //                     project.professionalProfileId?.userId?.lastName || ""
                    //                 }`.trim() || "Unknown"
                    //             }

                    //             ownerImage={
                    //                 project.professionalProfileId?.userId
                    //                     ?.profileImage?.url || ""
                    //             }

                    //             ownerProfession={
                    //                 project.professionalProfileId?.profession || ""
                    //             }

                    //             projectDescription={project.description}

                    //             projectCategory={project.category}

                    //             projectTags={project.tags}

                    //             directoryName="Unorganized"

                    //             onRemove={(projectId) => {
                    //                 console.log("Remove:", projectId);
                    //             }}

                    //             onMove={(projectId) => {
                    //                 console.log("Move:", projectId);
                    //             }}
                    //         />

                    //     ))}

                    // </div>

                    <div className="project-grid">

    {unorganizedProjects.map((project) => (

        <SavedProjectCard
            key={project._id}
            project={project}
            directoryName="Unorganized"

            onRemove={(projectId) => {
                console.log("Remove:", projectId);
            }}

            onMove={(projectId) => {
                console.log("Move:", projectId);
            }}
        />

    ))}

</div>

                )}

            </div>


            {/* =================================
                LOADING MORE
            ================================= */}

            {unorganizedLoading &&
            unorganizedProjects.length > 0 && (

                <div className="projects-loading-more">

                    <p>
                        Loading more...
                    </p>

                </div>

            )}


            {/* =================================
                END
            ================================= */}

            {!unorganizedLoading &&
            unorganizedInitialized &&
            !unorganizedHasMore &&
            unorganizedProjects.length > 0 && (

                <div className="projects-end">

                    <p>
                        You've reached the end.
                    </p>

                </div>

            )}


            {/* =================================
                INTERSECTION TARGET
            ================================= */}

            <div
                ref={loadMoreRef}
                className="load-more-trigger"
                aria-hidden="true"
            />

        </section>

    );
}