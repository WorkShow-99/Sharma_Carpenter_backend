import "./SimilarProjectCard.css";

export default function SimilarProjectCard({

    project

}){

    return(

        <div className="similar-car">

            <div className="similar-im">

                <img

                    src={project.projectImage}

                    alt={project.title}

                />

            </div>

            <h3>

                {project.title}

            </h3>

        </div>

    )

}