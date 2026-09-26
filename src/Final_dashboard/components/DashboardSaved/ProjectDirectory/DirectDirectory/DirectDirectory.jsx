import "./DirectDirectory.css";

import {
    ArrowLeft,
    Folder
} from "lucide-react";

import {
    useEffect,
    useRef
} from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    fetchDirectoryProjects
} from "../../../../../../src/redux_store/Project_redux/SaveDirectoryProject/DirectoryProjects_action.js";

import {
    CLEAR_DIRECTORY_PROJECTS
} from "../../../../../../src/redux_store/Project_redux/SaveDirectoryProject/DirectoryProjects_types.js";

import SavedProjectCard
    from "../../SavedProjectCard/SavedProjectCard.jsx";


export default function Directory() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { directoryId } = useParams();

    const loadMoreRef = useRef(null);


    // ==========================================
    // DIRECTORY PROJECTS STATE
    // ==========================================

    const directoryState = useSelector(
        state => state.directoryProjects
    );


    // ==========================================
    // DATA FROM REDUX
    // ==========================================

    const directory =
        directoryState?.directory || null;


    const projects =
        directoryState?.projects || [];


    const loading =
        directoryState?.loading || false;


    const error =
        directoryState?.error || null;


    const initialized =
        directoryState?.initialized || false;


    const hasMore =
        directoryState?.hasMore ?? true;


    const nextCursor =
        directoryState?.nextCursor || null;


    // ==========================================
    // FETCH FIRST PAGE
    // ==========================================

    useEffect(() => {

        if (!directoryId) {
            return;
        }


        if (initialized || loading) {
            return;
        }


        dispatch(
            fetchDirectoryProjects(
                directoryId,
                null,
                10
            )
        );

    }, [
        dispatch,
        directoryId,
        initialized,
        loading
    ]);


    // ==========================================
    // LOAD MORE PROJECTS
    // ==========================================

    useEffect(() => {

        const element =
            loadMoreRef.current;


        if (!element) {
            return;
        }


        const observer =
            new IntersectionObserver(
                entries => {

                    const entry =
                        entries[0];


                    if (
                        entry.isIntersecting &&
                        hasMore &&
                        !loading &&
                        nextCursor
                    ) {

                        dispatch(
                            fetchDirectoryProjects(
                                directoryId,
                                nextCursor,
                                10
                            )
                        );
                    }

                },
                {
                    rootMargin: "400px",
                    threshold: 0
                }
            );


        observer.observe(element);


        return () => {

            observer.disconnect();

        };

    }, [
        dispatch,
        directoryId,
        hasMore,
        loading,
        nextCursor
    ]);


    // ==========================================
    // CLEAR DIRECTORY STATE
    // ==========================================

    useEffect(() => {

        return () => {

            dispatch({
                type:
                    CLEAR_DIRECTORY_PROJECTS
            });

        };

    }, [dispatch]);


    // ==========================================
    // BACK
    // ==========================================

    const handleBack = () => {

        navigate(
            "/final-dashboard/saved"
        );

    };


    // ==========================================
    // INITIAL LOADING
    // ==========================================

    if (
        loading &&
        !initialized
    ) {

        return (

            <section className="directory-page">

                <div className="directory-loading">

                    <p>
                        Loading directory...
                    </p>

                </div>

            </section>

        );
    }


    // ==========================================
    // DIRECTORY NOT FOUND / ERROR
    // ==========================================

    if (
        !directory &&
        !loading
    ) {

        return (

            <section className="directory-page">

                <button
                    type="button"
                    className="directory-back-btn"
                    onClick={handleBack}
                >

                    <ArrowLeft size={20} />

                    <span>
                        Back
                    </span>

                </button>


                <div className="directory-error">

                    <p>
                        {error ||
                            "Directory not found."}
                    </p>

                </div>

            </section>

        );
    }


    // ==========================================
    // DIRECTORY PAGE
    // ==========================================

    return (

        <section className="directory-page">


            {/* =====================================
                HEADER
            ===================================== */}

            <div className="directory-page-header">


                {/* BACK BUTTON */}

                <button
                    type="button"
                    className="directory-back-btn"
                    onClick={handleBack}
                >

                    <ArrowLeft size={20} />

                    <span>
                        Back
                    </span>

                </button>


                {/* DIRECTORY INFORMATION */}

                <div className="directory-title">

                    <Folder
                        size={26}
                        strokeWidth={1.8}
                    />


                    <div>

                        <h2>
                            {directory?.name}
                        </h2>


                        {directory?.description && (

                            <p>
                                {directory.description}
                            </p>

                        )}

                    </div>

                </div>

            </div>


            {/* =====================================
                ERROR
            ===================================== */}

            {error && (

                <div className="directory-error">

                    <p>
                        {error}
                    </p>

                </div>

            )}


            {/* =====================================
                PROJECT LOADING
            ===================================== */}

            {loading &&
                projects.length === 0 && (

                    <div className="directory-loading">

                        <p>
                            Loading projects...
                        </p>

                    </div>

            )}


            {/* =====================================
                EMPTY DIRECTORY
            ===================================== */}

            {!loading &&
                initialized &&
                projects.length === 0 &&
                !error && (

                    <div className="directory-empty">

                        <Folder
                            size={55}
                            strokeWidth={1.5}
                        />


                        <h3>
                            No Projects Yet
                        </h3>


                        <p>
                            Projects saved to this
                            directory will appear here.
                        </p>

                    </div>

            )}


            {/* =====================================
                PROJECT GRID
            ===================================== */}

            {projects.length > 0 && (

                <div className="directory-project-grid">

                    {projects.map(
                        project => (

                            // <SavedProjectCard
                            //     key={project._id}
                            //     project={project}
                            //     directoryName={
                            //         directory?.name
                            //     }
                            // />

                            <SavedProjectCard
                                    key={project._id}
                                    project={project}
                                    directoryName={directory?.name}
                                />
                                                        )
                                                    )}

                </div>

            )}


            {/* =====================================
                LOADING MORE
            ===================================== */}

            {loading &&
                projects.length > 0 && (

                    <div className="directory-loading-more">

                        <p>
                            Loading more projects...
                        </p>

                    </div>

            )}


            {/* =====================================
                LOAD MORE OBSERVER
            ===================================== */}

            <div
                ref={loadMoreRef}
                className="directory-load-more"
            />


            {/* =====================================
                NO MORE PROJECTS
            ===================================== */}

            {!hasMore &&
                projects.length > 0 && (

                    <div className="directory-end">

                        <p>
                            No more projects
                        </p>

                    </div>

            )}

        </section>

    );
}