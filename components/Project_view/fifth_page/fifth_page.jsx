import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Fifth_page = () => {

    const sectionRef = useRef(null);

    useLayoutEffect(() => {

        const isMobile = window.innerWidth < 768;

        // MOBILE = native horizontal scroll
        if (isMobile) return;

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({

                scrollTrigger: {
                    trigger: sectionRef.current,

                    start: "top top",

                    end: "+=600%",

                    scrub: 1,

                    pin: true,

                    anticipatePin: 1,
                },

            });

            tl.fromTo(

                ".two",

                {
                    xPercent: 100,
                },

                {
                    xPercent: 0,
                    ease: "none",
                }

            );

            tl.fromTo(

                ".three",

                {
                    xPercent: -100,
                },

                {
                    xPercent: 0,
                    ease: "none",
                }

            );

            tl.fromTo(

                ".four",

                {
                    yPercent: 100,
                },

                {
                    yPercent: 0,
                    ease: "none",
                }

            );

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (

        <section
            ref={sectionRef}

            className="
                relative

                w-full

                min-h-[100svh]
                md:h-screen

                overflow-hidden

                bg-black
            "
        >

            {/* MOBILE VERSION */}
            <div
                className="
                    md:hidden

                    w-full
                    min-h-[100svh]

                    flex

                    overflow-x-auto
                    overflow-y-hidden

                    snap-x
                    snap-mandatory

                    scroll-smooth

                    touch-pan-x

                    [-ms-overflow-style:none]
                    [scrollbar-width:none]

                    [&::-webkit-scrollbar]:hidden
                "
            >

                {/* PANEL */}
                {[
                    {
                        title: "First",
                        color: "#d4a373",
                    },
                    {
                        title: "Second",
                        color: "#6d6875",
                    },
                    {
                        title: "Third",
                        color: "#283618",
                    },
                    {
                        title: "Fourth",
                        color: "#9d0208",
                    },
                ].map((item, index) => (

                    <div
                        key={index}

                        className="
                            min-w-full

                            min-h-[100svh]

                            snap-start

                            flex
                            items-center
                            justify-center

                            px-6
                        "

                        style={{
                            background: item.color,
                        }}
                    >

                        <h1
                            className="
                                text-white

                                font-bold

                                text-4xl
                                sm:text-5xl

                                text-center
                            "
                        >
                            {item.title}
                        </h1>

                    </div>

                ))}

            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden md:block w-full h-full">

                {/* PANEL 1 */}
                <div
                    className="
                        one

                        absolute
                        inset-0

                        bg-[#d4a373]

                        flex
                        items-center
                        justify-center

                        text-white

                        text-5xl
                        lg:text-7xl

                        font-bold
                    "
                >
                    First Panel
                </div>

                {/* PANEL 2 */}
                <div
                    className="
                        two

                        absolute
                        inset-0

                        bg-[#6d6875]

                        flex
                        items-center
                        justify-center

                        text-white

                        text-5xl
                        lg:text-7xl

                        font-bold
                    "
                >
                    Second Panel
                </div>

                {/* PANEL 3 */}
                <div
                    className="
                        three

                        absolute
                        inset-0

                        bg-[#283618]

                        flex
                        items-center
                        justify-center

                        text-white

                        text-5xl
                        lg:text-7xl

                        font-bold
                    "
                >
                    Third Panel
                </div>

                {/* PANEL 4 */}
                <div
                    className="
                        four

                        absolute
                        inset-0

                        bg-[#9d0208]

                        flex
                        items-center
                        justify-center

                        text-white

                        text-5xl
                        lg:text-7xl

                        font-bold
                    "
                >
                    Fourth Panel
                </div>

            </div>

        </section>

    );

};  