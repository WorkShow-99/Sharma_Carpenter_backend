import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import image from "../../../src/assets/images/6.png";
import { Fourth_div_text } from "./fourth_div_text";

gsap.registerPlugin(ScrollTrigger);

export const Fourth_page = ({ where = "end", id, text = "Project Details" }) => {

    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {

        const isMobile = window.innerWidth < 768;

        const ctx = gsap.context(() => {

            gsap.fromTo(

                imageRef.current,

                {
                    yPercent: isMobile ? -5 : -15,
                    scale: isMobile ? 1.05 : 1.1,
                },

                {
                    yPercent: isMobile ? 5 : 10,
                    scale: 1,

                    ease: "none",

                    scrollTrigger: {
                        trigger: sectionRef.current,

                        start: "top bottom",
                        end: "bottom top",

                        scrub: 1,
                    },
                }

            );

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    const isImageEnd = where === "end";

    return (

        <section
        key={id}
            ref={sectionRef}
            className={`
                main_div
                relative
                w-full
                overflow-hidden

                flex
                items-center
                justify-between
                gap-4
                pt-2
                rounded-lg
                

                
            `}
        >

            {/* TEXT HOLDER */}
            {/* <div
                className={`
                    w-1/2
                    md:w-1/2
                    justify-center align-middle  
                    ${isImageEnd ? "order-1 text-left " : "order-2 text-right"}
                `}
            >
                <p className= {`text-sm md:text-base lg:text-lg pl-5 leading-relaxed  ${isImageEnd ? "order-1 pl-10 " : "order-2 text-right pr-10"}`}>
                    {text}
                    We craft modern interiors with precision, durability, and timeless design. 
From custom wooden furniture to premium fabrication work, every project is 
built with attention to detail and quality craftsmanship. Our goal is to 
create functional spaces that feel elegant, strong, and made to last.
                    </p>
            </div> */}

            <div
    className={`
        w-full
        md:w-1/2

        flex
        items-center
        justify-center

        px-6
        md:px-10
        lg:px-16

        py-6
        md:py-0

        ${isImageEnd
            ? "order-1 text-left"
            : "order-2 text-left md:text-right"}
    `}
>

    {/* <div className="max-w-xl">

        <p
            className="
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl

                leading-relaxed
                tracking-wide

                text-[#d6c7b8]

                font-light
            "
        >
            Blending craftsmanship with modern design, we create custom
            interiors, woodwork, and fabrication solutions tailored to
            every space. From elegant furniture finishes to durable
            structural detailing, every project reflects precision,
            creativity, and lasting quality.
        </p>

    </div> */}
    <Fourth_div_text/>

</div>

            {/* IMAGE HOLDER */}
            <div
           
                className="
                    relative
                    rounded-lg
                    w-full
                    md:w-1/2
                     flex-none

                    overflow-hidden

                    flex
                    items-center
                    justify-center
                "
                style={{ order: isImageEnd ? 2 : 1 }}
            >

                {/* IMAGE */}
                <img
                    ref={imageRef}
                    src={image}
                    alt="project"

                    className="
                        w-full
                        
                        h-auto

                        object-contain
                        object-center

                        will-change-transform

                        block
                    "
                />

            </div>

        </section>

    );

};