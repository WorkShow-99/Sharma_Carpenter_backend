// import {
//     useEffect
// } from "react";

// import {
//     useDispatch,
//     useSelector
// } from "react-redux";

// import {
//     useParams
// } from "react-router-dom";

// import {fetchProjectDetails} from "../../src/redux_store/project_redux/projectDetailsActions.js";


// // export default function ProjectDetails() {

// //     const { projectId } =
// //         useParams();


// //     const dispatch =
// //         useDispatch();


// //     const {
// //         project,
// //         loading,
// //         error
// //     } = useSelector(
// //         state => state.projectDetail
// //     );


// //     useEffect(() => {

// //         if (!projectId) {
// //             return;
// //         }


// //         dispatch(
// //             fetchProjectDetails(
// //                 projectId
// //             )
// //         );


// //     }, [
// //         dispatch,
// //         projectId
// //     ]);


// //     if (loading) {

// //         return (
// //             <div>
// //                 Loading project...
// //             </div>
// //         );

// //     }


// //     if (error) {

// //         return (
// //             <div>
// //                 {error}
// //             </div>
// //         );

// //     }


// //     if (!project) {

// //         return (
// //             <div>
// //                 Project not found
// //             </div>
// //         );

// //     }


// //     return (

// //         <div>

// //             <h1>
// //                 {project.title}
// //             </h1>


// //             <p>
// //                 {project.description}
// //             </p>


// //             <p>
// //                 Category: {project.category}
// //             </p>


// //             <p>
// //                 {project.location?.city}
// //             </p>

// //         </div>

// //     );

// // }

// // import { useParams } from "react-router-dom";

// export default function ProjectDetails() {

//     const { projectId } = useParams();

//     console.log("PROJECT ID:", projectId);

//     return (
//         <div>
//             <h1>Project Details</h1>

//             <p>
//                 Project ID: {projectId}
//             </p>
//         </div>
//     );
// }


import { useEffect } from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    useParams
} from "react-router-dom";

// import {
//     fetchProjectDetails
// } from "../redux_store/Project_redux/projectDetailsActions";

import {fetchProjectDetails} from "../../src/redux_store/project_redux/projectAction.js";


export default function ProjectDetails() {

    const { projectId } = useParams();

    const dispatch = useDispatch();


    const {
        project,
        loading,
        error
    } = useSelector(
        state => state.projectDetails
    );


    useEffect(() => {

        if (!projectId) {
            return;
        }

        dispatch(
            fetchProjectDetails(projectId)
        );

    }, [
        dispatch,
        projectId
    ]);


    if (loading) {

        return (
            <div>
                Loading project...
            </div>
        );

    }


    if (error) {

        return (
            <div>
                {error}
            </div>
        );

    }


    if (!project) {

        return (
            <div>
                Project not found
            </div>
        );

    }


    return (

        <div>

            <h1>
                {project.title}
            </h1>

            <p>
                {project.description}
            </p>

            <p>
                Category: {project.category}
            </p>

            <p>
                {project.location?.city}
            </p>

        </div>

    );

}