import "./Section.css";

const Section = ({
    title,
    description,
    children,
    className = "",
    showDivider = true,}) => {
    return (
        <section className={`project-section ${className}`}>
            <div className="project-section__header">

                <div className="project-section__heading">

                    <h2 className="project-section__title">
                        {title}
                    </h2>

                    {description && (
                        <p className="project-section__description">
                            {description}
                        </p>
                    )}

                </div>

            </div>

            <div className="project-section__content">
                {children}
            </div>

            {showDivider && (
                <div className="project-section__divider" />
            )}
        </section>
    );
};

export default Section;
