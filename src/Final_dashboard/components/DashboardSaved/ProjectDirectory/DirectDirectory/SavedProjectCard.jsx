export default function SavedProjectCard({
    project,
    directoryName
}) {

    if (!project) {
        return null;
    }

    const projectId = project._id;

    const projectTitle =
        project.title || "Untitled Project";

    const heroMedia =
        project.media?.find(
            media =>
                media.isHero &&
                media.type === "image"
        )
        ||
        project.media?.find(
            media =>
                media.type === "image"
        );

    const projectImage =
        heroMedia?.url || "";

    // ...
}