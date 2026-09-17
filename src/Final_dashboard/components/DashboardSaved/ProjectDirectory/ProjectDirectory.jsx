// import "./ProjectDirectories.css";

// export default function ProjectDirectories() {

//     return (

//         <section className="project-directories">

//             <div className="directories-header">

//                 <h3>
//                     My Directories
//                 </h3>

//                 <span>
//                     Organize your saved projects
//                 </span>

//             </div>


//             <div className="directories-content">

//                 {/* 
//                     Directory cards will go here.
//                 */}

//             </div>

//         </section>

//     );
// }











import "./ProjectDirectories.css";

import { Folder, Plus } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    fetchAllDirectories
} from "../../../../../src/redux_store/SavedDirectory/SavedDirectory_actions.js";



import DirectoryCard from "../DirectorCard/DirectoryCard.jsx";


export default function ProjectDirectories() {

    const dispatch = useDispatch();


    // ==========================================
    // REDUX
    // ==========================================

    const {
        directories = [],
        loading = false,
        error = null,
        initialized = false
    } = useSelector(
        state => state.savedDirectory
    );


    // ==========================================
    // FETCH DIRECTORIES
    // ==========================================

    useEffect(() => {

        if (
            !initialized &&
            !loading
        ) {

            console.log(
                "Fetching saved directories..."
            );

            dispatch(
                fetchAllDirectories()
            );
        }

    }, [
        dispatch,
        initialized,
        loading
    ]);


    // ==========================================
    // LOADING
    // ==========================================

    if (
        loading &&
        directories.length === 0
    ) {

        return (

            <section className="project-directories">

                <div className="directories-header">

                    <div>

                        <h3>
                            My Directories
                        </h3>

                        <p>
                            Organize your saved projects
                        </p>

                    </div>

                </div>


                <div className="directories-loading">

                    <p>
                        Loading directories...
                    </p>

                </div>

            </section>

        );
    }


    // ==========================================
    // ERROR
    // ==========================================

    if (
        initialized &&
        error &&
        directories.length === 0
    ) {

        return (

            <section className="project-directories">

                <div className="directories-header">

                    <div>

                        <h3>
                            My Directories
                        </h3>

                        <p>
                            Organize your saved projects
                        </p>

                    </div>

                </div>


                <div className="directories-error">

                    <p>
                        {error}
                    </p>


                    <button
                        onClick={() => {

                            dispatch(
                                fetchAllDirectories()
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
    // RENDER
    // ==========================================

    return (

        <section className="project-directories">


            {/* =================================
                HEADER
            ================================= */}

            <div className="directories-header">

                <div>

                    <h3>
                        My Directories
                    </h3>

                    <p>
                        Organize your saved projects
                    </p>

                </div>


                <button
                    className="create-directory-btn"
                    type="button"
                >

                    <Plus size={18} />

                    Create Directory

                </button>

            </div>


            {/* =================================
                DIRECTORY LIST
            ================================= */}

            {directories.length === 0 ? (

                <div className="directories-empty">

                    <Folder
                        size={50}
                        strokeWidth={1.5}
                    />

                    <h4>
                        No directories yet
                    </h4>

                    <p>
                        Create a directory to organize
                        your saved projects.
                    </p>

                </div>

            ) : (

                // <div className="directories-grid">

                //     {directories.map(
                //         (directory) => (

                //             <div
                //                 key={directory._id}
                //                 className="directory-card"
                //             >

                //                 <div className="directory-icon">

                //                     <Folder
                //                         size={28}
                //                     />

                //                 </div>


                //                 <div className="directory-info">

                //                     <h4>
                //                         {directory.name}
                //                     </h4>


                //                     {directory.description && (

                //                         <p>
                //                             {directory.description}
                //                         </p>

                //                     )}

                //                 </div>

                //             </div>

                //         )
                //     )}

                // </div>
                <div className="directories-grid">

                    {/* {directories.map((directory) => (

                        <DirectoryCard
                            key={directory._id}
                            directory={directory}
                        />

                    ))} */}
                    {directories.map((directory, index) => (
                        <DirectoryCard
                            key={directory._id}
                            directory={directory}
                            cardIndex={index}
                        />
                        ))}

                </div>

            )}

        </section>

    );
}