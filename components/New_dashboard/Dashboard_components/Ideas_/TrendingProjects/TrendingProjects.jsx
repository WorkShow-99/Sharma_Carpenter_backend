import "./TrendingProjects.css";

import TrendingProjectCard from "./TrendingProjectCard";

import trendingProjects from "./trendingData";

import {

    ChevronLeft,
    ChevronRight

} from "lucide-react";

import {

    useRef

} from "react";

export default function TrendingProjects(){

    const sliderRef = useRef(null);

    const scrollLeft = () => {

        sliderRef.current.scrollBy({

            left:-sliderRef.current.clientWidth,

            behavior:"smooth"

        });

    };

    const scrollRight = () => {

        sliderRef.current.scrollBy({

            left:sliderRef.current.clientWidth,

            behavior:"smooth"

        });

    };

    return(

        <section className="trending-projects overflow-x-hidden overflow-hidden">

            <div className="trending-header">

                <div>

                    <span>

                        Inspiration

                    </span>

                    <h2>

                        Trending Projects

                    </h2>

                </div>

                

            </div>

            <div

                className="trending-slider"

                ref={sliderRef}

            >

                {

                    trendingProjects.map(project=>(

                        <TrendingProjectCard

                            key={project._id}

                            project={project}

                        />

                    ))

                }

            </div>

            {/* <div className="slider-controls">

                    <button className="slider-button" onClick={scrollLeft}>

                        <ChevronLeft/>

                    </button>

                    <button className="slider-button" onClick={scrollRight}>

                        <ChevronRight/>

                    </button>

                </div> */}
                <div className="slider-controlss">

                    <button
                        className="slider-button"
                        onClick={scrollLeft}
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        className="slider-button active"
                        onClick={scrollRight}
                    >
                        <ChevronRight />
                    </button>

                </div>

        </section>

    );

}