

import React, { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText.js";

gsap.registerPlugin(ScrollTrigger, SplitText);


export const Fourth_div_text = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            const splitText = new SplitText(sectionRef.current, { type: "words" });
            gsap.fromTo(
                splitText.words,
                {
                    
                    
                    // filter: "blur(1px)",
                    
                    opacity: 0.5,
                    color: "#3c3c3c",
                },
                {
                  
                    
                    // filter: "blur(0px)",
                    opacity: 1,
                    color: "#d6c7b8",
                    
                    ease: "power2.out",
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                }
            );
            



        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="max-w-md  ">

        <p
        ref={sectionRef}
            className="
                text-xs
                sm:text-base
                md:text-xs
                lg:text-xl

                leading-relaxed
                tracking-wide

                text-[#d6c7b8]
                


                font-light
            "
        >
            Blending craftsmanship with modern design, we create custom
            
        </p>

    </div>
    )
}