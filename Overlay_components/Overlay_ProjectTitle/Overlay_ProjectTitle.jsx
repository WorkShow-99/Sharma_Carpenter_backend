

// import "./ProjectTitleSection.css";


// import { MapPin, BadgeCheck } from "lucide-react";

// import { useState } from "react";

// import ProjectTags from "./Project_tags/Project_tags";

// import ProjectGallery from "./Project_Gallery/Project_gallery";

// import ContactProfile from "./Project_contact/Project_contact";

// import {worker} from "./Project_contact/ContactInfo";

// import SocialMediaLinks from "./Project_contact/SocialMedia";

// import SimilarProjects from "../Overlay_similarProjects/SimilarProjects";
// import {similarProjectss as SimilarProjectData} from "../Overlay_similarProjects/similarProjectsData";

// export default function ProjectTitleSection({ project }) {

//     return (

//         // <section className="project-title-section ">

//         //     <h1 className="project-title">

//         //         {project.title}

//         //     </h1>

//         //     <p className="created-by">

//         //         Created by

//         //     </p>

//         //     <div className="creator">

//         //         <img
//         //             src={project.owner.profileImage}
//         //             alt={project.owner.name}
//         //             className="creator-image"
//         //         />

//         //         <div className="creator-info">

//         //             <div className="creator-name-row">

//         //                 <h3>

//         //                     {project.owner.name}

//         //                 </h3>

//         //                 {project.owner.verified && (

//         //                     <BadgeCheck
//         //                         size={18}
//         //                         className="verified-icon"
//         //                     />

//         //                 )}

//         //             </div>

//         //             <p className="company">

//         //                 {project.owner.company}

//         //             </p>

//         //             <div className="profession-row">

//         //                 <span>

//         //                     {project.owner.profession}

//         //                 </span>

//         //                 <span className="dot">

//         //                     •

//         //                 </span>

//         //                 <MapPin size={15} />

//         //                 <span>

//         //                     {project.location.city}

//         //                 </span>

//         //             </div>

//         //         </div>

//         //     </div>

//         // </section>

//         <>
//             <div className="project w-[100%]  flex flex-col gap-10">

//                 <section className="project-title-section w-full flex items-center  flex-col gap-2 py-6 px-4">

//                     <h1 className="project-title text-2xl sm:text-3xl text-center font-extrabold">
//                         {project.title}
//                     </h1>

//                     {/* this is the owner info  */}
//                     <div className="creator-card w-ull max-w-2xl mx-auto flex-center flex flex-col items-center gap-1  backdrop-blur-sm rounded-lg p-0 sm:p-4 shadow-sm">

//                             <div className="creator flex items-center gap-1 w-full max-w-3xl">
//                                         <img
//                             src={project.owner.profileImage}
//                             alt={project.owner.name}
//                             className="w-14 h-14 rounded-full object-cover self-center  border-2 border-white shadow"
//                         />

//                         {/* <div className="creator-name-row flex items-center gap-2">
//                                 <h3 className="text-lg font-semibold">{project.owner.name}</h3>
//                                 {project.owner.verified && (
//                                     <BadgeCheck size={16} className="text-blue-500" />
//                                 )}
//                             </div> */}

//                                 <div className="creator-ino flex-1 flex flex-col gap-0">
//                                         <p className="company text-sm text-gray-600 underline">{project.owner.company}</p>
//                                     <div className="profession-row mt-1 flex items-center gap-2 text-sm text-gray-700">
//                                         <span className="profession">{project.owner.profession}</span>
//                                         <span className="dot">•</span>
//                                         <MapPin size={14} />
//                                         <span className="location">{project.location.city}</span>
//                                     </div>

//                                 </div>
                            

//                             </div>
                        

//                         <div className="creator-info flex-1">
//                             {/* <div className="creator-name-row flex items-center gap-2">
//                                 <h3 className="text-lg font-semibold">{project.owner.name}</h3>
//                                 {project.owner.verified && (
//                                     <BadgeCheck size={16} className="text-blue-500" />
//                                 )}
//                             </div> */}

//                             {/* <p className="company text-sm text-gray-600">{project.owner.company}</p>

//                             <div className="profession-row mt-1 flex items-center gap-2 text-sm text-gray-700">
//                                 <span className="profession">{project.owner.profession}</span>
//                                 <span className="dot">•</span>
//                                 <MapPin size={14} />
//                                 <span className="location">{project.location.city}</span>
//                             </div> */}
//                         </div>

//                         {/* <div className="meta text-sm text-right">
//                             <p className="text-gray-500">Created by</p>
//                         </div> */}
//                     </div>



//                     {/* Hero image section  */}
//                     <div className="hero-image-container w-[100%] bg-gray-50 py-4 rounded- w-full self-center max-w-4xl items-center items-center  justify-content flex flex-col  mx-auto mt-4">
//                         <img    
//                             src={project.coverImage}
//                             alt={project.title}
//                             className="hero-image w-full self-center align-middle max-w-3xl rounded-lg shadow-lg"
//                         />
//                     </div>
//                             {/* discription section */}
//                             <div  className="description-section w-full max-w-3xl mx-auto mt-4 px-4 sm:px-0">
//                                 {/* <h2 className="text-lg font-thin mb-2">Description</h2> */}
//                                 <p className="text-gray-700 font-thin text-center text-lg">{project.description}</p>

//                             </div>

//                             {/* work showcase section */}
//                             {/* <div className="work-showcase-section w-full max-w-3xl mx-auto mt-4 px-4 sm:px-0">
//                                 <h2 className="text-lg font-thin mb-2">Work Showcase</h2>
//                                 <div className="showcase-images flex gap-4 overflow-x-auto py-2">
//                                     {project.images.map((image, index) => (
//                                         <img
//                                             key={index}
//                                             src={image}
//                                             alt={`Showcase ${index + 1}`}
//                                             className="showcase-image w-48 h-32 object-cover rounded-lg shadow"
//                                         />
//                                     ))}
//                                 </div>
//                             </div> */}
//                             {/* <div>
//                                 Heighlight
//                             </div>

                            


//                              */}
    
//                                 <ProjectGallery project={project} />
//                                 <ProjectTags tags={project.tags} />

//                                 <SimilarProjects projects={SimilarProjectData} />
//                                 <ContactProfile worker={worker} />
//                                 <SocialMediaLinks socialLinks={worker.socialLinks} />

//                 </section>

//             </div>
//         </>

//     );

// }



// import "./ProjectTitleSection.css";

// import { MapPin } from "lucide-react";

// import ProjectTags from "./Project_tags/Project_tags";
// import ProjectGallery from "./Project_Gallery/Project_gallery";

// import ContactProfile from "./Project_contact/Project_contact";
// import SocialMediaLinks from "./Project_contact/SocialMedia";

// import SimilarProjects from "../Overlay_similarProjects/SimilarProjects";
// import { similarProjectss as SimilarProjectData } from "../Overlay_similarProjects/similarProjectsData";


// export default function ProjectTitleSection({ project }) {

//     if (!project) {
//         return null;
//     }

//     /*
//      * -----------------------------------------
//      * PROFESSIONAL PROFILE
//      * -----------------------------------------
//      */

//     const professional = project.professionalProfileId;

//     const user = professional?.userId;


//     /*
//      * -----------------------------------------
//      * OWNER INFORMATION
//      * -----------------------------------------
//      */

//     const ownerName = user
//         ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
//         : "Professional";

//     const ownerUsername =
//         user?.username || "";

//     const ownerImage =
//         user?.profileImage?.url || "";

//     const profession =
//         professional?.profession || "Professional";


//     /*
//      * -----------------------------------------
//      * LOCATION
//      * -----------------------------------------
//      */

//     const city =
//         project.location?.city || "";


//     /*
//      * -----------------------------------------
//      * HERO MEDIA
//      * -----------------------------------------
//      */

//     const heroMedia =
//         project.media?.find(
//             media => media.isHero
//         ) ||
//         project.media?.find(
//             media => media.type === "image"
//         ) ||
//         project.media?.[0];


//     const heroImage =
//         heroMedia?.url || "";


//     /*
//      * -----------------------------------------
//      * RETURN
//      * -----------------------------------------
//      */

//     return (

//         <section className="project-title-section">

//             {/* =========================================
//                 PROJECT TITLE
//             ========================================= */}

//             <h1 className="project-title">

//                 {project.title}

//             </h1>


//             {/* =========================================
//                 OWNER
//             ========================================= */}

//             <div className="creator-card">

//                 <div className="creator">

//                     {ownerImage ? (

//                         <img
//                             src={ownerImage}
//                             alt={ownerName}
//                             className="creator-image"
//                         />

//                     ) : (

//                         <div className="creator-image placeholder">

//                             {ownerName
//                                 .charAt(0)
//                                 .toUpperCase()}

//                         </div>

//                     )}


//                     <div className="creator-info">

//                         <p className="company">

//                             {ownerName}

//                         </p>


//                         <div className="profession-row">

//                             <span>
//                                 {profession}
//                             </span>


//                             {city && (
//                                 <>
//                                     <span className="dot">
//                                         •
//                                     </span>

//                                     <MapPin
//                                         size={14}
//                                     />

//                                     <span>
//                                         {city}
//                                     </span>
//                                 </>
//                             )}

//                         </div>


//                         {ownerUsername && (

//                             <span className="username">

//                                 @{ownerUsername}

//                             </span>

//                         )}

//                     </div>

//                 </div>

//             </div>


//             {/* =========================================
//                 HERO IMAGE
//             ========================================= */}

//             {heroImage && (

//                 <div className="hero-image-container">

//                     {heroMedia?.type === "video" ? (

//                         <video
//                             src={heroImage}
//                             className="hero-image"
//                             controls
//                             playsInline
//                         />

//                     ) : (

//                         <img
//                             src={heroImage}
//                             alt={project.title}
//                             className="hero-image"
//                         />

//                     )}

//                 </div>

//             )}


//             {/* =========================================
//                 DESCRIPTION
//             ========================================= */}

//             <div className="description-section">

//                 <p>
//                     {project.description}
//                 </p>

//             </div>


//             {/* =========================================
//                 PROJECT GALLERY
//             ========================================= */}

//             <ProjectGallery
//                 project={project}
//             />


//             {/* =========================================
//                 TAGS
//             ========================================= */}

//             <ProjectTags
//                 tags={project.tags || []}
//             />


//             {/* =========================================
//                 SIMILAR PROJECTS
//             ========================================= */}

//             <SimilarProjects
//                 projects={SimilarProjectData}
//             />


//             {/* =========================================
//                 CONTACT
//             ========================================= */}

//             <ContactProfile
//                 worker={professional}
//             />


//             {/* =========================================
//                 SOCIAL MEDIA
//             ========================================= */}

//             <SocialMediaLinks
//                 socialLinks={
//                     professional?.socialLinks || {}
//                 }
//             />

//         </section>

//     );

// }














import "./ProjectTitleSection.css";

import { MapPin } from "lucide-react";

import ProjectTags from "./Project_tags/Project_tags";
import ProjectGallery from "./Project_Gallery/Project_gallery";

import ContactProfile from "./Project_contact/Project_contact";
import SocialMediaLinks from "./Project_contact/SocialMedia";

import SimilarProjects from "../Overlay_similarProjects/SimilarProjects";
import {
    similarProjectss as SimilarProjectData
} from "../Overlay_similarProjects/similarProjectsData";


export default function ProjectTitleSection({ project }) {

    if (!project) {
        console.warn("Project data is missing.");
        return null;
    }


    /*
     * =========================================
     * PROFESSIONAL PROFILE
     * =========================================
     */

    const professionalProfile =
        project.professionalProfileId;


    /*
     * =========================================
     * USER
     * =========================================
     */

    const user =
        professionalProfile?.userId;


    /*
     * =========================================
     * OWNER NAME
     * =========================================
     */

    const ownerName = [

        user?.firstName,

        user?.lastName

    ]
        .filter(Boolean)
        .join(" ") || "Professional";


    /*
     * =========================================
     * OWNER IMAGE
     * =========================================
     */

    const ownerImage =
        user?.profileImage?.url || "";


    /*
     * =========================================
     * PROFESSION
     * =========================================
     */

    const profession =
        professionalProfile?.profession ||
        "Professional";


    /*
     * =========================================
     * LOCATION
     * =========================================
     */

    const city =
        project.location?.city || "";


    /*
     * =========================================
     * HERO MEDIA
     * =========================================
     */

    const heroMedia =

        project.media?.find(
            media => media.isHero
        ) ||

        project.media?.find(
            media => media.type === "image"
        ) ||

        project.media?.[0];


    return (

        <>

            <div className="project w-[100%] flex flex-col gap-10">


                {/* =====================================
                    PROJECT TITLE SECTION
                ===================================== */}

                <section className="project-title-section w-full flex items-center flex-col gap-2 py-6 px-4">


                    {/* PROJECT TITLE */}

                    {/* <h1 className="project-title text-2xl sm:text-3xl text-center font-extrabold">

                        {project.title}

                    </h1> */}
                    <h1 className="project-title">

                        {project.title}

                    </h1>


                    {/* =================================
                        CREATOR
                    ================================= */}

                    
{/* =================================
    PROJECT CREATOR
================================= */}

<div className="project-creator">

    <span className="creator-by">
        by
    </span>


    {ownerImage ? (

        <img
            src={ownerImage}
            alt={ownerName}
            className="project-creator-image"
        />

    ) : (

        <div className="project-creator-placeholder">

            {ownerName
                .charAt(0)
                .toUpperCase()}

        </div>

    )}


    <span className="project-creator-name">

        {ownerName}

    </span>

</div>

                    {/* =================================
                        HERO IMAGE
                    ================================= */}

                    {heroMedia && (

                        <div className="hero-image-container w-[100%] bg-gray-50 py-4 rounded-lg max-w-4xl items-center justify-center flex flex-col mx-auto mt-4">


                            {heroMedia.type === "video" ? (

                                <video
                                    src={heroMedia.url}
                                    className="hero-image w-full self-center max-w-3xl rounded-lg shadow-lg"
                                    controls
                                    playsInline
                                />

                            ) : (

                                <img
                                    src={heroMedia.url}
                                    alt={project.title}
                                    className="hero-image w-full self-center max-w-3xl rounded-lg shadow-lg"
                                />

                            )}

                        </div>

                    )}


                    {/* =================================
                        DESCRIPTION
                    ================================= */}


                    {/* <div className="description-section w-full max-w-3xl mx-auto mt-4 px-4 sm:px-0">

                        <p className="text-gray-700 font-thin text-center text-lg">

                            {project.description}

                        </p>

                    </div> */}

                    <ProjectTags
                        tags={project.tags || []}
                    />
                    {/* =================================
                        PROJECT DESCRIPTION
                    ================================= */}

                    {/* <div className="project-description-section">

                        <div className="description-content">

                            <span className="description-label">
                                About the Project
                            </span>

                            <p className="project-description">
                                {project.description}
                            </p>

                        </div>

                    </div>   */}










                    {/* =================================
                        GALLERY
                    ================================= */}

                    <ProjectGallery
                        project={project}
                    />
                    {/* =================================
                        PROJECT DESCRIPTION
                    ================================= */}

                    <div className="project-description-section">

                        <div className="description-content">

                            <span className="description-label">
                                About the Project
                            </span>

                            <p className="project-description">
                                {project.description}
                            </p>

                        </div>

                    </div>  


                    {/* =================================
                        TAGS
                    ================================= */}

                    {/* <ProjectTags
                        tags={project.tags || []}
                    /> */}


                    {/* =================================
                        SIMILAR PROJECTS
                    ================================= */}

                    <SimilarProjects
                        projects={SimilarProjectData}
                    />


                    {/* =================================
                        CONTACT
                    ================================= */}

                    <ContactProfile
                        worker={professionalProfile}
                    />


                    {/* =================================
                        SOCIAL MEDIA
                    ================================= */}

                    {/* <SocialMediaLinks
                        worker={professionalProfile}
                    /> */}


                </section>

            </div>

        </>

    );

}