import "./ProjectEditor.css";

import Section from "../Shared/Section/Section";

const ProjectEditor = ({ project, dispatch }) => {
    return (
        <main className="project-editor-wrapper">
            <div className="project-editor">

                <Section
                    title="Project Media"
                    description="Upload images and videos that best showcase your work."
                >
                    <div className="project-editor-placeholder">
                        Project Media Component
                    </div>
                </Section>

                <Section
                    title="Basic Information"
                    description="Provide the project title, description and category."
                >
                    <div className="project-editor-placeholder">
                        Basic Information Component
                    </div>
                </Section>

                <Section
                    title="Tags"
                    description="Add relevant tags to improve discoverability."
                >
                    <div className="project-editor-placeholder">
                        Tags Component
                    </div>
                </Section>

                <Section
                    title="Location"
                    description="Tell customers where this project was completed."
                >
                    <div className="project-editor-placeholder">
                        Location Component
                    </div>
                </Section>

                <Section
                    title="Project Settings"
                    description="Control project visibility and publishing options."
                    showDivider={false}
                >
                    <div className="project-editor-placeholder">
                        Settings Component
                    </div>
                </Section>

            </div>
        </main>
    );
};

export default ProjectEditor;