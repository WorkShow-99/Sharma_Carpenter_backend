

import React from "react";
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";
import { useEffect , useLayoutEffect,useRef } from "react";

import image1 from "../../../public/29.png";
import image2 from "../../../public/30.png";
import image3 from "../../../public/31.png";
import image4 from "../../../public/32.png";
import image5 from "../../../public/33.png";
import { Related_Clients } from "./seven_projects";
import { Image_div } from "./images_divs";





export const Seven_page = ()=>{
        gsap.registerPlugin(scrollTrigger, SplitText);
        const sectionRef = useRef(null);
        const main_ref = useRef(null);

        const titleRef = useRef(null);
        const descriptionRef = useRef(null);
        const tagsRef = useRef(null);
        const lineRef = useRef(null);
        const second_div_ref = useRef(null);
        useLayoutEffect(() => {

    gsap.registerPlugin(scrollTrigger);

    const ctx = gsap.context(() => {

        const rightContent = second_div_ref.current;

        const scrollAmount =
            rightContent.scrollHeight - window.innerHeight;

        gsap.timeline({

            scrollTrigger: {
                trigger: main_ref.current,

                start: "top top",

                end: () => `+=${scrollAmount}`,

                scrub: 1,

                pin: true,

                anticipatePin: 1,

                invalidateOnRefresh: true,
            },

        })

        .to(

            second_div_ref.current,

            {
                y: -scrollAmount,

                ease: "none",
            }

        );

    }, main_ref);

    return () => ctx.revert();

}, []);



    return (
       <>
        <div ref = {main_ref} className=" flex flex-col  lg:flex-row items-stretch justify-center min-h-[100vh] w-full bg-gray-100">

            <div ref={sectionRef} className=" overflow-x-hidden w-full lg:h-[100vh] h-auto pt-30   lg:w-[25%] lg:grow-1 grow-1 lg:shrink-2  px-6 py-20 lg:py-0 flex flex-col items-start justify-center bg-white text-white text-left">
                {/* BUTTON */}
    <button
        className="
            uppercase

            tracking-[0.18em]

            text-[clamp(0.55rem,1vw,0.9rem)]

            text-black/90

            mb-5
            md:mb-8

            hover:translate-x-1

            transition-transform
        "
    >
        Back To Clients
    </button>

    {/* TITLE */}
    <h1
        className="
            font-black

            uppercase

            leading-[0.88]

            tracking-tight

            text-black

            break-words

            text-[clamp(1.4rem,7vw,4rem)]
        "
    >
        Sharma Carpenter
    </h1>

    {/* SUBTITLE */}
    <p
        className="
            mt-4
        float-left
            text-black/80

            leading-relaxed

            max-w-[95%]

            text-[clamp(0.5rem,1.4vw,1.2rem)]
        "
    >
        Bespoke carpentry and fabrication crafted
        for modern interiors, elegant spaces,
        and timeless functionality.
    </p>


{/* TAGS */}
    <div
        className="
            flex
            flex-wrap
            text-left

            gap-2
            md:gap-3

            mt-6
            md:mt-8
        "
    >

        {[
            "WOODWORK",
            "FABRICATION",
            "INTERIOR DESIGN",
        ].map((tag, index) => (

            <div
                key={index}

                className="
                    px-3
                    py-2

                    bg-[#dddddd]

                    uppercase
                    text-left

                    tracking-[0.12em]

                    text-[clamp(0.55rem,0.8vw,0.85rem)]

                    text-black

                    whitespace-nowrap
                "
            >
                {tag}
            </div>

        ))}

    </div>

    {/* LINE */}
    <div
        className="
            w-full
            h-[1px]

            bg-black/15
            float-left
            mt-7
            md:mt-9
        "
    />
    {/* DESCRIPTION */}
    <p
        className="
            mt-7
            md:mt-9
            float-left 
            text-left

            text-black/90

            leading-relaxed

            max-w-full

            text-[clamp(0.25rem,1.3vw,.7rem)]
            lg:hidden
            hidden
        "
    >
        Using our expertise in custom carpentry
        and structural fabrication, we create
        spaces that balance durability,
        elegance, and comfort. Every project is
        designed with precision, ensuring
        interiors feel refined, functional, and
        naturally connected to the people who
        use them every day.
    </p>


            </div> 


            {/* <div ref={second_div_ref} className="w-full pt-20 overscroll-contain lg:grow-3 gap-10 grow-2 lg:flex-2 lg:shrink-2 h-screen max-h-screen f  text-black">
                <div className="w-full h-[38vh] sm:h-[45vh] py-2 md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                    <img src={image1} alt="Project 1" className="w-full h-full object-cover object-center" />
                </div>
                <div className="w-full h-[38vh] py-2 sm:h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                    <img src={image2} alt="Project 2" className="w-full h-full object-cover object-center" />
                </div>
                <div className="w-full h-[38vh] py-2 sm:h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                    <img src={image3} alt="Project 3" className="w-full h-full object-cover object-center" />
                </div>
                <div className="w-full h-[38vh] py-2 sm:h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                    <img src={image4} alt="Project 4" className="w-full h-full object-cover object-center" />
                </div>
                <div className="w-full h-[38vh] py-2 sm:h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                    <img src={image5} alt="Project 5" className="w-full h-full object-cover object-center" />
                </div>
            </div> */}

<Image_div second_div_ref={second_div_ref} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} />



        </div>
        <Related_Clients />
        </>

    );

}