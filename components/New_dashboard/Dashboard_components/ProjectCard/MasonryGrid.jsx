// import "./MasonryGrid.css";

// import ProjectCard from "../Project_divs";


// export default function MasonryGrid({ projects = [] }) {

//     return (

//         <div className="masonry-grid">

//             {projects.map((project) => {

//                 /*
//                  * --------------------------------
//                  * Professional profile
//                  * --------------------------------
//                  */

//                 const professionalProfile =
//                     project.professionalProfileId;


//                 /*
//                  * --------------------------------
//                  * User
//                  * --------------------------------
//                  */

//                 const user =
//                     professionalProfile?.userId;


//                 /*
//                  * --------------------------------
//                  * Find hero media
//                  * --------------------------------
//                  */

//                 const heroMedia =
//                     project.media?.find(
//                         media => media.isHero
//                     ) ||
//                     project.media?.[0];


//                 /*
//                  * --------------------------------
//                  * Owner name
//                  * --------------------------------
//                  */

//                 const ownerName =
//                     user
//                         ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
//                         : "Unknown User";


//                 /*
//                  * --------------------------------
//                  * Owner image
//                  * --------------------------------
//                  */

//                 const ownerImage =
//                     user?.profileImage?.url || "";


//                 /*
//                  * --------------------------------
//                  * Render
//                  * --------------------------------
//                  */

//                 return (

//                     <ProjectCard

//                         key={project._id}

//                         projectId={
//                             project._id
//                         }

//                         projectImage={
//                             heroMedia?.url || ""
//                         }

//                         ownerName={
//                             ownerName
//                         }

//                         ownerSlug={
//                             user?.username || ""
//                         }

//                         ownerImage={
//                             ownerImage
//                         }

//                         ownerType={
//                             professionalProfile?.profession ||
//                             "Professional"
//                         }

//                         companyName=""

//                         likes={
//                             project.likesCount || 0
//                         }

//                         views={
//                             project.viewsCount || 0
//                         }

//                         onProjectClick={() => {
//                             console.log(
//                                 "Project clicked:",
//                                 project._id
//                             );
//                         }}

//                         onOwnerClick={() => {
//                             console.log(
//                                 "Owner clicked:",
//                                 user?._id
//                             );
//                         }}

//                     />

//                 );

//             })}

//         </div>

//     );

// }



import "./MasonryGrid.css";

import ProjectCard from "../Project_divs";


export default function MasonryGrid({ projects = [] }) {

    return (

        <div className="masonry-grid">

            {projects.map((project) => (

                <ProjectCard

                    key={project.projectId}

                    projectId={
                        project.projectId
                    }

                    projectTitle={
                        project.title
                    }

                    projectImage={
                        project.heroMedia?.url || ""
                    }

                    mediaType={
                        project.heroMedia?.type || "image"
                    }

                    ownerName={
                        project.owner?.name || "Unknown User"
                    }

                    ownerSlug={
                        project.owner?.username || ""
                    }

                    ownerImage={
                        project.owner?.profileImage || ""
                    }

                    ownerType={
                        project.owner?.profession ||
                        "Professional"
                    }

                    likes={
                        project.likesCount || 0
                    }

                    isLiked={
            project.isLiked
        }

                    views={
                        project.viewsCount || 0
                    }

                    onProjectClick={() => {

                        console.log(
                            "Project clicked:",
                            project.projectId
                        );

                    }}

                    onOwnerClick={() => {

                        console.log(
                            "Owner clicked:",
                            project.userId
                        );

                    }}

                />

            ))}

        </div>

    );

}