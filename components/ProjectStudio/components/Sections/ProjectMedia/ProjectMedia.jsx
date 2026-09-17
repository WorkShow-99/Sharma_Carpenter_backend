import "./ProjectMedia.css";

import MediaDropzone from "./Upload/MediaDropzone";
import MediaToolbar from "./Gallery/MediaToolbar";
import MediaGrid from "./Gallery/MediaGrid";

const ProjectMedia = ({ project, dispatch }) => {
    const media = project.media || [];

    const handleFilesSelected = (files) => {
        console.log("Selected Files:", files);

        // Phase 2:
        // validate files

        // Phase 3:
        // upload files

        // Phase 4:
        // dispatch(ADD_MEDIA)
    };

    return (
        <div className="project-media">
            <MediaDropzone
                onFilesSelected={handleFilesSelected}
            />

            {media.length > 0 && (
                <>
                    <MediaToolbar
                        media={media}
                        dispatch={dispatch}
                    />

                    <MediaGrid
                        media={media}
                        dispatch={dispatch}
                    />
                </>
            )}
        </div>
    );
};

export default ProjectMedia;