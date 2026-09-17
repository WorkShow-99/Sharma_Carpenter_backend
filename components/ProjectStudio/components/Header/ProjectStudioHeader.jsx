import { ArrowLeft } from "lucide-react";
import "./ProjectStudioHeader.css";

const ProjectStudioHeader = ({ project }) => {
    const handleBack = () => {
        window.history.back();
    };

    const handlePublish = () => {
        console.log("Publish Project", project);
    };

    return (
        <header className="project-studio-header">

            <div className="project-studio-header__left">

                <button
                    className="project-studio-header__back-btn"
                    onClick={handleBack}
                >
                    <ArrowLeft size={20} />
                </button>

                <div className="project-studio-header__title-wrapper">
                    <h1 className="project-studio-header__title">
                        Create Project
                    </h1>

                    <p className="project-studio-header__subtitle">
                        Build your portfolio project
                    </p>
                </div>

            </div>

            <div className="project-studio-header__right">

                {/* Save status (will become dynamic later) */}
                <span className="project-studio-header__status">
                    Unsaved
                </span>

                {/* Drafts will be implemented later */}
                <button
                    className="project-studio-header__draft-btn"
                    disabled
                >
                    Drafts
                </button>

                <button
                    className="project-studio-header__publish-btn"
                    onClick={handlePublish}
                >
                    Publish
                </button>

            </div>

        </header>
    );
};

export default ProjectStudioHeader;