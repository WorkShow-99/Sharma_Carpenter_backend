

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import image from "../../../src/assets/images/6.png";
import { useEffect } from "react";



export const Fourth_page_effect = () => {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            let tl  = gsap.timeline
                ({
                   scrollTrigger: {
                    trigger: ".imge_div",
                    start: "top top",
                    end: "+=1000%",
                    
                    // pin: true,
                    scrub: 1,
                    // pinSpacer: false,
                    // pinSpacing: false,
                    markers: true,
                },
                });
            // tl.fromTo(".", { yPercent: 0, scale: 1, duration: 1, ease: "power2.out" },{
            //     yPercent: 0, scale: 1, duration: 1, ease: "power2.out",

            // });
            tl.fromTo(".img_div_img", { yPercent: -16, scale: 1, duration: 0.9, ease: "power2.out" },{
                yPercent:50, scale: 1, duration: 0.9, ease: "power2.out",
                scrollTrigger: {
                    trigger: ".imge_div",
                    start: "top bottom",
                    end: "+=1000%",
                    scrub: 1,
                    // pin: true,
                    // markers: true,
                },

                


            })
        })
    
        return () => ctx.revert();
    }, []);


    return (
        <div className=" imge_div relative min-h-1/2 w-1/2 overflow-x-hidden overflow-hidden bg- flex items-center justify-center">
            <img src={image} alt="project" className="img_div_img  object-cove" />
        </div>
    )
}
