import LikedProjectCard from "./LikedProjectCard";

import "./LikedProjectHolder.css";


export default function LikedProjectHolder({
    projects = [], Remove_from_lickedProjects
}) {

   


    return (

        <div className="liked-projects-container">

            {projects.map((project,index) => (

                <LikedProjectCard
                    key={project.id || project._id || index}
                    project={project}
                    Remove_from_lickedProjects={Remove_from_lickedProjects}
                />

            ))}

        </div>

    );

}