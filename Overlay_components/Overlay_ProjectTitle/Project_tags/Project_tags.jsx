import "./Proejct_tags.css";

export default function ProjectTags({
    subtitle = "A few details that define the style, craft, and focus of this project.",
    tags = []
}) {

    if (!tags.length) {
        return null;
    }

    return (

        <section className="project-tags">

            <div className="project-tags-header">

                <p>
                    {subtitle}
                </p>

            </div>


            <div className="tags-wrapper">

                {tags.map((tag, index) => (

                    <span
                        key={`${tag}-${index}`}
                        className="tag-pill"
                    >
                        {tag}
                    </span>

                ))}

            </div>

        </section>

    );
}