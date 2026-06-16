import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import sharma_img2 from "../../../src/assets/images/5.png";

gsap.registerPlugin(ScrollTrigger);

export const Third_page = () => {

    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            gsap.fromTo(

                imageRef.current,

                {
                    yPercent: -8,
                },

                {
                    yPercent: 8,

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

    return (

        <section
            ref={sectionRef}
            className="
                relative
                w-full
                pt-4

                overflow-hidden

                flex
                items-center
                justify-center

                

                
            "
        >

            {/* IMAGE HOLDER */}
            <div
                className="
                    relative
                    mx-0

               

                    overflow-hidden
                "
            >

                {/* IMAGE */}
                <img
                    ref={imageRef}
                    src={sharma_img2}
                    alt=""

                    className="
                    mx-0

                        w-full
                        h-auto

                        object-contain
                        object-center

                        will-change-transform
                    "
                />

            </div>

        </section>

    );

};