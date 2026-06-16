import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

export const ProjectNavbar = () => {

    const titleRef = useRef(null);

    useLayoutEffect(() => {

        gsap.fromTo(

            titleRef.current,

            {
                y: 120,
                opacity: 0,
                rotateX: 40,
            },

            {
                y: 0,
                opacity: 1,
                rotateX: 0,

                duration: 1.6,

                ease: "expo.out",
            }

        );

    }, []);

    return (

        <section
            className="
                relative

                w-full
                sm:min-h-screen
                min-h-1/2
                overflow-hidden
                pt-6

                bg-[#efeabf]

                px-5
                md:px-10
                lg:px-16
                sm:min-h-1/2
                


                py-0
            "
        >

            {/* TOP NAV */}
            <div
                className="
                    w-full

                    flex
                    items-start
                    justify-between

                "
            >

                {/* LEFT NAV */}
                <div
                    className="
                        flex
                        flex-col

                        gap-2
                        md:gap-3

                        text-[#6c0023]

                        text-sm
                        md:text-lg

                        font-light
                    "
                >

                    <button className="hover:translate-x-2 transition-transform duration-300 text-left">
                        About
                    </button>

                    <button className="hover:translate-x-2 transition-transform duration-300 text-left">
                        Projects
                    </button>

                    <button className="hover:translate-x-2 transition-transform duration-300 text-left">
                        Services
                    </button>

                    <button className="hover:translate-x-2 transition-transform duration-300 text-left">
                        Contact
                    </button>

                </div>

                {/* RIGHT NAV */}
                <div
                    className="
                        flex
                        flex-col

                        items-end

                        gap-2
                        md:gap-3

                        text-[#6c0023]

                        text-sm
                        md:text-lg

                        font-light
                    "
                >

                    <button className="hover:-translate-x-2 transition-transform duration-300">
                        Instagram
                    </button>

                    <button className="hover:-translate-x-2 transition-transform duration-300">
                        Facebook
                    </button>

                    <button className="hover:-translate-x-2 transition-transform duration-300">
                        Behance
                    </button>

                </div>

            </div>

            {/* MAIN TITLE AREA */}
            <div
                className="
                    relative

                    w-full

                    flex
                    items-end
                    justify-between

                    mt-16
                    md:mt-28
                    lg:mt-36
                "
            >

                {/* HUGE TITLE */}
                <div className="relative items-start place-self-end align-center mb-0 h-1  ">

                    {/* CIRCLE */}
                    <div
                        className="
                        self-baseline-last

                            absolute

                            right-[-5%]
                            top-1/2

                            -translate-y-1/2

                            w-[70px]
                            h-[70px]

                            md:w-[120px]
                            md:h-[120px]

                            lg:w-[180px]
                            lg:h-[180px]

                            rounded-full

                            bg-[#efe27b]

                            z-0
                        "
                    />

                    {/* TITLE */}
                    <h1
                        ref={titleRef}

                        className="
                            relative
                            z-10

                            text-[#6c0023]

                            font-serif

                            leading-none

                            tracking-tight

                            text-[4rem]
                            sm:text-[6rem]
                            md:text-[9rem]
                            lg:text-[12rem]
                            xl:text-[15rem]
                        "
                    >
                        Sharma
                    </h1>

                    {/* SUBTITLE */}
                    <p
                        className="
                            text-[#6c0023]

                            text-sm
                            md:text-xl

                            tracking-[0.3em]

                            uppercase

                            mt-2
                            md:mt-5

                            ml-2
                            md:ml-4
                        "
                    >
                        Carpenter
                    </p>

                </div>

                

            </div>

        </section>

    );

};