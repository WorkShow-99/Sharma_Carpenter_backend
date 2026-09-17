const initialProject = {
    _id: null,
    professionalProfileId: null,

    // Basic Information
    title: "",
    description: "",
    category: "",

    // Tags
    tags: [],

    // Images & Videos
    media: [],

    // Location
    location: {
        city: "",
        state: "",
        country: "",
    },

    // Project
    projectStatus: "draft",
    visibility: "public",

    // Statistics (Backend Managed)
    viewsCount: 0,
    likesCount: 0,
    commentsCount: 0,
    savesCount: 0,
    sharesCount: 0,
};

export default initialProject;