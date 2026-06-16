import { First_page_project } from "./first_page/First_page_project";
import { Fourth_page } from "./fourth_page/fourth_page";
import { Second_page_project } from "./second_page/second_page";
import {Third_page} from "./third_page/third_page";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Fifth_page} from "./fifth_page/fifth_page";

gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect } from "react";
import { ProjectNavbar } from "./project_view_nav/Project_view_nav";
import { Seven_page } from "./Seven_page/Seven";



export const Main_project = () => {

    useLayoutEffect(() => {
        

        const ctx = gsap.context(() => {
            // let tl =  gsap.timeline({
            //     scrollTrigger: {
            //         trigger: ".main_project",
            //         start: "top top",
            //         end: "+=4000%",
            //         scrub: 2,
            //         pin: true,
            //         pinSpacing: false,
            //         pinSpacer: false,
            //     },
            // });
                // tl.fromTo(".third_page", { yPercent: 0, scale: 1, duration: 1, ease: "power2.out" },{
                //     yPercent: -50, scale: 2, duration: 1, ease: "power2.out"

                // });


        })
        // gsap.set(".second_page", { 
        //     scrollTrigger: {
        //         trigger: ".second_page",
        //         start: "top top",
        //         end: "+=40%",
        //         scrub: 1,
        //         pinSpacer: false,
        //         pinSpacing: false,
        //         pin: true,
        //     },

        //  });



        return () => ctx.revert();


    }, []);


    return (
        <div className="w-full min-h-screen bg-[#595757] overflow-hidden">
            {/* <First_page_project />
            <Second_page_project />
            <Third_page />
            <Fourth_page where = "end" id={1}/>
            <Fourth_page where = "start" id={2} />
            <Third_page /> */}
            <Seven_page />  


            {/* <Fifth_page /> */}
             <section
            className="
                w-full

                bg-[#e6d2bc]

                overflow-hidden

                px-4
                md:px-8
                lg:px-10

                py-10
                md:py-16
            "
        >

            {/* TOP LABEL */}
            <div className="w-full flex justify-center">

                <div
                    className="
                        border
                        border-[#2a1208]

                        px-4
                        py-1

                        text-[#2a1208]

                        text-[10px]
                        md:text-xs

                        tracking-[0.2em]

                        uppercase
                    "
                >
                    Our Latest Project
                </div>

            </div>

            {/* HUGE TITLE */}
            <div className="w-full overflow-hidden">

                <h1
                    className="
                        text-[#1b0902]

                        text-center

                        font-black

                        leading-none

                        uppercase

                        tracking-tight

                        text-[4rem]
                        sm:text-[6rem]
                        md:text-[9rem]
                        lg:text-[12rem]
                        xl:text-[16rem]
                    "
                >
                    Sharma Carpenter
                </h1>

            </div>

            {/* MAIN CONTENT */}
            <div
                className="
                    mt-6
                    md:mt-10

                    grid
                    grid-cols-1
                    lg:grid-cols-3

                    gap-8
                    lg:gap-12

                    items-end
                "
            >

                {/* LEFT INFO */}
                <div
                    className="
                        order-3
                        lg:order-1

                        flex
                        flex-col
                        justify-between

                        h-full
                    "
                >

                    <div />

                    <div
                        className="
                            text-[#1b0902]

                            text-base
                            md:text-xl

                            font-medium
                        "
                    >
                        Delhi 110044
                    </div>

                </div>

                {/* CENTER VIDEO */}
                <div
                    className="
                        order-1
                        lg:order-2

                        flex
                        items-center
                        justify-center
                    "
                >

                    <div
                        className="
                            relative

                            w-full
                            max-w-[420px]

                            overflow-hidden
                        "
                    >

                        {/* VIDEO */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline

                            className="
                                w-full
                                h-auto

                                object-cover

                                block
                            "
                        >
                            <source
                                src="src\assets\videos\work_video.mp4"
                                type="video/mp4"
                            />
                        </video>

                        {/* PLAY BUTTON */}
                        <button
                            className="
                                absolute

                                top-1/2
                                left-1/2

                                -translate-x-1/2
                                -translate-y-1/2

                                bg-[#1b090272]

                                text-[#f5e7d885]

                                px-4
                                py-2

                                text-xs
                                md:text-sm

                                tracking-wide

                                uppercase

                                flex
                                items-center
                                gap-2
                            "
                        >
                            ▶ Play Video
                        </button>

                    </div>

                </div>

                {/* RIGHT CONTENT */}
                <div
                    className="
                        order-2
                        lg:order-3

                        flex
                        flex-col
                        justify-end

                        h-full
                    "
                >

                    {/* SOLD TAG */}
                    <div
                        className="
                            inline-block

                            border
                            border-[#2a1208]

                            px-5
                            py-1

                            mb-6

                            text-[#1b0902]

                            text-xs
                            md:text-sm

                            uppercase

                            tracking-[0.2em]

                            w-fit
                        "
                    >
                        Sold
                    </div>

                    {/* TEXT */}
                    <p
                        className="
                            text-[#1b0902]

                            text-sm
                            md:text-lg

                            leading-relaxed

                            font-medium
                        "
                    >
                        This is a home built for presence. Mornings carry a
                        quiet energy; afternoons stretch out gently; evenings
                        ease in, soft and unhurried. There’s no rush here —
                        just the comfort of things falling into place. The
                        luxury comes not from statement pieces that fill the
                        space, but from how everything feels: soft, grounded,
                        calm.
                    </p>

                    {/* LINK */}
                    <button
                        className="
                            mt-6

                            text-[#1b0902]

                            text-lg

                            flex
                            items-center
                            gap-2

                            hover:translate-x-1

                            transition-transform
                        "
                    >
                        Discover more ↗
                    </button>

                </div>

            </div>

        </section>
        {/* <ProjectNavbar /> */}

            {/* <Fourth_page where = "start" id={2}/> */}

            {/* <Third_page />
            <Third_page />
            <Third_page /> */}



        </div>
    );
}
