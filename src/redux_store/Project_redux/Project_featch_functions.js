import { FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, FETCH_PROJECT_FAILURE } from './Project_featchTypes';
import {useSelector} from "react-redux";

export const Project_featch = (Project_id)=>{
    const selector = useSelector((state) => state.project_featch.project);
    const projectIdd = String(Project_id); // Ensure Project_id is a string for comparison


    let selectorr = Array.isArray(selector) ? selector : Array.isArray(selector?.projects) ? selector.projects : Array.isArray(selector?.projectData) ? selector.projectData : Array.isArray(selector?.data) ? selector.data : [];
    const projects = selectorr.find(project=> project?.projectId === projectIdd);

    if (!projects) {
        return null; // or handle the case when the project is not found
    }

    return projects;

}

export const fetchProjectRequest = () => ({
    type: FETCH_PROJECT_REQUEST
});

export const fetchProjectSuccess = (projectData) => ({
    type: FETCH_PROJECT_SUCCESS,
    payload: projectData
});

/**
 * Usage:
 * dispatch(fetchProjectFailure('Unable to load projects'));
 */
export const fetchProjectFailure = (errorMsg) => ({
    type: FETCH_PROJECT_FAILURE,
    payload: errorMsg
});

export const OpenOverlay = () => ({
    type: "OPEN_OVERLAY"
});

export const CloseOverlay = () => ({
    type: "CLOSE_OVERLAY"
});

export const fetchProjectData = (projectId) => {
    return async (dispatch, getState) => {
        dispatch(fetchProjectRequest());
        try {
            const state = getState();
            const projectState = state?.project_featch;

            const projects = Array.isArray(projectState)
                ? projectState
                : Array.isArray(projectState?.projects)
                    ? projectState.projects
                    : Array.isArray(projectState?.projectData)
                        ? projectState.projectData
                        : Array.isArray(projectState?.data)
                            ? projectState.data
                            : [];

            const project = projects.find((item) => String(item?.projectId) === String(projectId));

            if (!project) {
                throw new Error('Project not found');
            }

            dispatch(fetchProjectSuccess(project));
        } catch (error) {
            dispatch(fetchProjectFailure(error.message));
        }
    };
}