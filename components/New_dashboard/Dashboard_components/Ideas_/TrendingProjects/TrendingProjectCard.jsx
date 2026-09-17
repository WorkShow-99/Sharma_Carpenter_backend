import { Heart } from "lucide-react";

import "./TrendingProjects.css";

export default function TrendingProjectCard({ project }) {

    return (

        <div className="trending-card">

            <div className="trending-image ">

                <img
                    src={project.media[0]}
                    alt={project.title}
                />

            </div>

            <div className="trending-details">

                <h3 className="trending-title">

                    {project.title}

                    {/* OR */}

                    {/* {project.companyName} */}

                </h3>

                <div className="trending-stats">

                    <Heart size={14} fill="currentColor"/>

                    <span>

                        {project.likesCount}

                    </span>

                </div>

            </div>

        </div>

    );

}