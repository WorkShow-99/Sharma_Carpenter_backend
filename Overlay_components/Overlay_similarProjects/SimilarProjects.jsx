
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./SimilarProjects.css";
import { useEffect, useRef, useState } from "react";


export default function SimilarProjects({ projects }) {

    const sliderRef = useRef(null);

const [showLeft, setShowLeft] = useState(false);

const [showRight, setShowRight] = useState(true);



    // const scrollLeft = () => {

    //     sliderRef.current.scrollBy({

    //         left: -sliderRef.current.offsetWidth,

    //         behavior: "smooth",

    //     });

    // };

    const updateButtons = () => {

    const slider = sliderRef.current;

    if (!slider) return;

    setShowLeft(slider.scrollLeft > 5);

    // setShowRight(

    //     slider.scrollLeft + slider.clientWidth <

    //     slider.scrollWidth - 5

    // );

    useEffect(() => {

    updateButtons();

    const slider = sliderRef.current;

    if (!slider) return;

    slider.addEventListener("scroll", updateButtons);

    window.addEventListener("resize", updateButtons);

    return () => {

        slider.removeEventListener("scroll", updateButtons);

        window.removeEventListener("resize", updateButtons);

    };

}, [projects]);

};

    // const scrollRight = () => {

    //     sliderRef.current.scrollBy({

    //         left: sliderRef.current.offsetWidth,

    //         behavior: "smooth",

    //     });

    // };


    const scrollRight = () => {

    sliderRef.current.scrollBy({

        left: sliderRef.current.clientWidth,

        behavior:"smooth"

    });

};

const scrollLeft = () => {

    sliderRef.current.scrollBy({

        left:-sliderRef.current.clientWidth,

        behavior:"smooth"

    });

};
    return (

        <section className="similar-projects">

            <div className="similar-header">

                <div>

                    <span>Similar Projects</span>

                    <h2>

                        Explore More Projects

                    </h2>

                </div>

            </div>

            <div
                className="similar-slider"
                ref={sliderRef}
            >

                {

                    projects.map(project => (
                        <div
                         className="  similar-card  p-4  rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-">

                       

                        <div
                            className="similar-card bg-black-100 p-6  bg-red-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            key={project.projectId}
                            style={{
                                backgroundImage: `url(${project.projectImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: "rgba(0, 0, 0, 0.81)",
                                backdropFilter: "blur(6px)",
                                WebkitBackdropFilter: "blur(6px)",
                                backgroundBlendMode: "overlay"
                            }}

                        >

                            <div className="similar-image">

                                <img

                                    src={project.projectImage}

                                    alt={project.title}

                                />

                            </div>



                           

                        </div>
                        <h4 className="text-black text-lg font-bold mb-2">{project.title}</h4>

                         </div>

                    ))

                }

            </div>

            <div className="slider-controls ">

                <button

                    onClick={scrollLeft}
                    className="slider-button  flex align-center justify-center items-center" 
                >

                    <ChevronLeft />

                </button>

                <button

                    onClick={scrollRight}
                    className="slider-button  flex align-center justify-center items-center" 

                >

                    <ChevronRight />

                </button>

            </div>

        </section>

    );

}