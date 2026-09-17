import { useReducer } from "react";

import "./ProjectStudio.css";

import initialProject from "./reducers/initialProject";
import projectReducer from "./reducers/projectReducer";

import ProjectStudioHeader from "./components/Header/ProjectStudioHeader";
// import ProjectEditor from "./components/Editor/ProjectEditor";

const ProjectStudio = () => {
    const [project, dispatch] = useReducer(
        projectReducer,
        initialProject
    );

    return (
        <div className="project-studio">

            <ProjectStudioHeader
                project={project}
                dispatch={dispatch}
            />

            {/* <ProjectEditor
                project={project}
                dispatch={dispatch}
            /> */}

        </div>
    );
};

export default ProjectStudio;