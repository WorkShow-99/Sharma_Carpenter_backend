
import { Fifth_img_div } from "./image_div";
import { Fifth_text_div } from "./text_div";

import  gsap from "gsap";
import gsapSplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


// gsap.registerPlugin(ScrollTrigger, gsapSplitText);


export const Combine_div = ({main_style ,specific_name}) => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, gsapSplitText);
gsap.defaults({ ease: "none", duration: 1 });

        
    

        const split = new gsapSplitText(`.${specific_name.text}`, { type: "chars" , lines: true });
        const words = split.chars;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${specific_name.text}`,
                start: "top bottom",
                end: "bottom 20%",
                scrub: true,
                
                markers: true,
                // toggleActions: "play none none reverse",
            },
        })


        gsap.set(`.${specific_name.text}`, { perspective: 100 });
        tl.fromTo(split.chars, {

            opacity: 0,filter: "blur(3px)",
            
            // y: 50,
            yPercent: 0,
            // rotationX: -90,
            duration: 0.5,
            // transformOrigin: "0% 50% -50px",
        
        },{
            yPercent: -5,
            colors: "white",filter: "blur(0px)",
            opacity: 1,
            // y: 50,
            // rotationX: -90,
            // transformOrigin: "0% 50% -50px",
            stagger: 0.1,
        },"same_time").fromTo(`.${specific_name.img}`, {
            // scale: 1.1,
            yPercent: 0,
            duration: 0.5,
            // y: -20,
            // rotation: 10,
            // transformOrigin: "center center",
        },{
            yPercent: -50,
            // scale: 1,
            // y: 0,
            // rotation: 0,
            scrollTrigger: {
                trigger: `.${specific_name.img}`,
                start: "top top",
                end: "bottom 20%",
                scrub: true,
                markers: true,
                // toggleActions: "play none none reverse",
            },



        },"same_time").fromTo(`.${specific_name.text_div}`, {
            // scale: 1.1,
            yPercent: -10,
            duration: 0.5,
            // y: -20,
            // rotation: 10,
            // transformOrigin: "center center",
            // opacity: 0,
            // filter: "blur(2px)",
        },{
            yPercent: 0,
            // scale: 1,
                // filter: "blur(0px)",
            // y: 0,
            duration: 0.5,    
            // rotation: 0,

            scrollTrigger: {
                trigger: `.${specific_name.div}`,
                start: "top top",
                end: "bottom 60%",
                scrub: true,
                markers: true,
                // toggleActions: "play none none reverse",
            },
            // opacity: 1,
            // filter: "blur(0px)",
        },"<-5");
    }, []);


    return (
        <div key={specific_name.key} className={`w-full text_main_div_five ${specific_name.div}    flex flex-col md:flex-row   p-10 gap-10 justify-between items-center   ${main_style} `}>
                        <Fifth_text_div specific_name={specific_name}  main_style = "  bg-black heading_text p-100 mx-10"  title={"Sharma Carpenter: Crafting Excellence "}
                         para=
                         {
                            "Discover Sharma Carpenter's craftsmanship, where quality meets innovation in every woodwork project."
                        }
                          main_style={"fifth_main_text_div"} />
        
                
                    <Fifth_img_div specific_name={specific_name} />
        </div>
    );
}
