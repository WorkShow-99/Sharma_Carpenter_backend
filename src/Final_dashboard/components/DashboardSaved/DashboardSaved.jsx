// import "./DashboardSaved.css";

// import { Bookmark } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import SavedProjectAxios from "../../../../src/api/SavedProjectAPI/SavedProjectAPI";
// import { useEffect, useState } from "react";

// import {deleteProjectFromDirectory,fetchSavedProjectsInDirectory} from "../../../../src/api/SavedProjectAPI/SavedProjectAPIActions.js";

// import {fetchUnorganizedProjects} from "../../../../src/redux_store/SavedProjects/SavedProject_action.js";

// import { useSelector ,useDispatch} from "react-redux";

// import {fetchAllDirectories} from "../../../../src/redux_store/SavedDirectory/SavedDirectory_actions.js";

// import{ resetLikedProjects } from "../../../../src/redux_store/LikedProject/LikedProjects_actions.js";


// import UnorganizedProjects from "./ProjectUnorganized/ProjectUnorganized.jsx";
// export default function SavedProjects() {

//     const unorganizedProjects = useSelector(
//         state => state.savedProjects.unorganizedProjects
//     );

// //     console.log(
// //         "Unorganized Projects Redux:",
// //  unorganizedProjects
// //     );

//     const savedDirectory = useSelector(
//     state => state.savedDirectory
//     );

//     const savedProjects = useSelector(
//         state => state.savedProjects
//     );

//     console.log(
//         "Saved Directory Redux:",
//         savedDirectory
//     );




//     console.log(
//         "Saved Projects Redux:",
//         savedProjects
//     );

//     const [SavesdProjects, setSavedProjects ] = useState([]);

//     const navigate = useNavigate();

//     const handleCreateDirectory = () => {

//        const response = SavedProjectAxios.post("/api/project-directories",{
//             name: "Kitchen Ideas",
//             description: "Kitchen projects I want to remember"
//         });

//     };

//     const dispatch = useDispatch()

//        useEffect(() => {
//         return () => {
//             dispatch(resetLikedProjects());
//         };
//     }, [dispatch]);

//     useEffect(() => {


//         console.log("Fetching unorganized projects...");

//         const unorganized   = fetchUnorganizedProjects();
//         const result  = unorganized(dispatch)

//         const fetchAllDirs = fetchAllDirectories();
//         const dirsResult = fetchAllDirs(dispatch);


//         console.log(dirsResult);

//         // Fetch saved projects from the API

//         // const resultOfDelete = deleteProjectFromDirectory("6a4db34c6c5bcf6eff56fcf3", "6a9d51e34e9762c9182d91ae");
//         // console.log("Result of delete:", resultOfDelete);

//         // const resultOfFetch = async () => {
//         //     return await fetchSavedProjectsInDirectory("6a9d51e34e9762c9182d91ae");
//         // };

//         // resultOfFetch().then((result) => {
//         //     console.log("Result of fetch:", result);
//         // });

//         // const fetchSavedProjects = async () => {
//         //     try {
//         //         const response = await SavedProjectAxios.get("/api/project-directories");
//         //         // Assuming the response contains an array of saved projects
//         //         console.log("Fetched saved projects:", response.data);
//         //         setSavedProjects(response.data);
//         //     } catch (error) {
//         //         console.error("Error fetching saved projects:", error);
//         //     }
//         // };

//         // const featchSavedProjectsInDirectory = async () => {
//         //     try {
//         //         const projectId = "6a4db34c6c5bcf6eff56fd09"; // Replace with the actual project ID
//         //         const response = await SavedProjectAxios.post(`/api/project-directories/${projectId}/save`,{
//         //     directoryId: '6a9d51e34e9762c9182d91ae'
//         // });
//         //         // Assuming the response contains an array of saved projects
//         //         console.log("Fetched saved projects:", response.data);
//         //         setSavedProjects(response.data);
//         //     } catch (error) {
//         //         console.error("Error fetching saved projects:", error);
//         //     }
//         // };

//         // featchSavedProjectsInDirectory();

//         // fetchSavedProjects();
//     }, []);

//     // const savedProjects = [];

//     if (savedProjects.length === 0) {

//         return (

//             <section className="saved-empty">

//                 <Bookmark
//                     size={70}
//                     strokeWidth={1.5}
//                 />

//                 <h2>

//                     No Saved Projects Yet

//                 </h2>

//                 <p>

//                     Save projects you like and they'll always
//                     be available here.

//                 </p>
//                 <button onClick={handleCreateDirectory}>

//                     Create Directory

//                 </button>

//                 <button onClick={() => navigate("/explore")}> 

//                     Explore Projects

//                 </button>

//             </section>

//         );

//     }

//     return (

//         <section className="saved-projects flex flex-row gap-6">

//             <div className="saved-header">

//                 <h2>

//                     Saved Projects

//                 </h2>

//                 <button onClick={handleCreateDirectory}>

//                     Create Directory

//                 </button>




//             </div>
//             <UnorganizedProjects  projects={unorganizedProjects} />


//             {/* Project Grid */}

//         </section>

//     );

// }



























// import "./DashboardSaved.css";

// import { Bookmark, FolderPlus } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import UnorganizedProjects from "./ProjectUnorganized/ProjectUnorganized.jsx";
// import ProjectDirectories from "./ProjectDirectory/ProjectDirectory.jsx";


// export default function SavedProjects() {

//     const navigate = useNavigate();


//     // ==========================================
//     // SAVED PROJECTS REDUX
//     // ==========================================

//     const savedProjects = useSelector(
//         state => state.savedProjects
//     );


//     // ==========================================
//     // SAVED DIRECTORY REDUX
//     // ==========================================

//     const savedDirectory = useSelector(
//         state => state.savedDirectory
//     );


//     console.log(
//         "Saved Projects:",
//         savedProjects
//     );

//     console.log(
//         "Saved Directories:",
//         savedDirectory
//     );


//     // ==========================================
//     // CREATE DIRECTORY
//     // ==========================================

//     const handleCreateDirectory = () => {

//         console.log(
//             "Create directory clicked"
//         );

//         // We will implement this later.
//     };


//     // ==========================================
//     // LOADING / EMPTY STATE
//     // ==========================================

//     const hasSavedProjects =
//         savedProjects?.unorganizedProjects?.length > 0 ||
//         savedDirectory?.directories?.length > 0;


//     if (
//         savedProjects?.initialized &&
//         savedDirectory?.initialized &&
//         !hasSavedProjects
//     ) {

//         return (

//             <section className="saved-empty">

//                 <Bookmark
//                     size={70}
//                     strokeWidth={1.5}
//                 />

//                 <h2>
//                     No Saved Projects Yet
//                 </h2>

//                 <p>
//                     Save projects you like and they'll
//                     always be available here.
//                 </p>

//                 <div className="saved-empty-actions">

//                     <button
//                         onClick={handleCreateDirectory}
//                     >
//                         <FolderPlus size={18} />

//                         Create Directory
//                     </button>


//                     <button
//                         onClick={() => navigate("/explore")}
//                     >
//                         Explore Projects
//                     </button>

//                 </div>

//             </section>

//         );
//     }


//     // ==========================================
//     // SAVED PROJECTS
//     // ==========================================

//     return (

//         <section className="saved-projects">

//             {/* =================================
//                 HEADER
//             ================================= */}

//             <div className="saved-header">

//                 <div>

//                     <h2>
//                         Saved Projects
//                     </h2>

                  

//                 </div>


//                 {/* <button
//                     onClick={handleCreateDirectory}
//                 > */}

//                     {/* <FolderPlus size={18} /> */}

//                     {/* Create Directory */}

//                 {/* </button> */}

//             </div>
//                 {/* =================================
//                                 PROJECT DIRECTORIES
//                             ================================= */}

//             <ProjectDirectories />

//             {/* =================================
//                 UNORGANIZED PROJECTS
//             ================================= */}

//             <UnorganizedProjects />


           

//         </section>

//     );
// }





import "./DashboardSaved.css";

import {
    Bookmark,
    FolderPlus
} from "lucide-react";

import {
    useNavigate,
    useOutlet
    , Outlet
} from "react-router-dom";

import {
    useSelector
} from "react-redux";

import {
    useState
} from "react";


import UnorganizedProjects
    from "./ProjectUnorganized/ProjectUnorganized.jsx";

import ProjectDirectories
    from "./ProjectDirectory/ProjectDirectory.jsx";


import {DirectoryUnorganizedHolder} from "./Directory_Unorganized/DirecotryUnorganizedHolder.jsx";
export default function SavedProjects() {

    const navigate =
        useNavigate();

    // const Outlet =
    //     useOutlet();


    // ==========================================
    // SELECTED DIRECTORY
    // ==========================================

    const [directoryMode, setDirectoryMode] =
        useState(false);

    // ==========================================
    // SAVED PROJECTS REDUX
    // ==========================================

   
    const savedProjects =
        useSelector(
            state =>
                state.savedProjects
        );


    // ==========================================
    // SAVED DIRECTORY REDUX
    // ==========================================

    const savedDirectory =
        useSelector(
            state =>
                state.savedDirectory
        );


    // ==========================================
    // DIRECTORY CLICK
    // ==========================================

    const handleDirectoryClick = (
        directory
    ) => {

        console.log(
            "Opening directory:",
            directory
        );

        setDirectoryMode(true);

        navigate(
            `/explore/saved/directory/${directory._id}`,
            {
                state: {
                    backgroundLocation:
                        location
                }
            }
        );

    };


    // ==========================================
    // CREATE DIRECTORY
    // ==========================================

    const handleCreateDirectory = () => {

        console.log(
            "Create directory clicked"
        );

        // Implement later

    };


    // ==========================================
    // EMPTY STATE
    // ==========================================

    const hasSavedProjects =
        savedProjects
            ?.unorganizedProjects
            ?.length > 0
        ||
        savedDirectory
            ?.directories
            ?.length > 0;


    if (
        savedProjects?.unorganizedInitialized &&
        savedDirectory?.initialized &&
        !hasSavedProjects
    ) {

        return (

            <section
                className="saved-empty"
            >

                <Bookmark
                    size={70}
                    strokeWidth={1.5}
                />


                <h2>
                    No Saved Projects Yet
                </h2>


                <p>
                    Save projects you like
                    and they'll always be
                    available here.
                </p>


                <div
                    className="saved-empty-actions"
                >

                    <button
                        onClick={
                            handleCreateDirectory
                        }
                    >

                        <FolderPlus
                            size={18}
                        />

                        Create Directory

                    </button>


                    <button
                        onClick={() =>
                            navigate(
                                "/explore"
                            )
                        }
                    >

                        Explore Projects

                    </button>

                </div>

            </section>

        );

    }


    // ==========================================
    // NORMAL SAVED PROJECTS
    // ==========================================

    return (

        <section
            className="saved-projects"
        >


            {/* =================================
                HEADER
            ================================= */}
            <Outlet />


            <div
                className="saved-header"
            >

                <div>

                    <h2>
                        Saved Projects
                    </h2>

                </div>

            </div>





           

        </section>

    );

}