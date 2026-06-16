



import React, { useEffect } from "react";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import image25 from "../../../public/25.png";
import image26 from "../../../public/26.png";
import image27 from "../../../public/27.png";
import image28 from "../../../public/28.png";
import image29 from "../../../public/29.png";
import image30 from "../../../public/30.png";
import image31 from "../../../public/31.png";
import image32 from "../../../public/32.png";
import image33 from "../../../public/33.png";
import image34 from "../../../public/34.png";









gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);





export const Fourth_div = () => {
    const containerRef = useRef(null);
    const maincontainerRef = useRef(null);
    const images = gsap.utils.toArray('.fourth_img img');


    useEffect(() => {
        
        const ctx =  gsap.context(() => {
            const split = new SplitText(".fourth_main_title", {
                type: "chars"
            });

            const split_inner_text = new SplitText(".fourth_para", {
                type: "words",aria: "hidden"
            });

            gsap.set(images, {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            });


             const tl = gsap.timeline({
                
                scrollTrigger: {
                    trigger: maincontainerRef.current,
                    start: "top top",
                    end: "+=2500",
                    scrub: 2,
                    pin: true,
                    // pin:true,

                    // markers: true,
                    pinSpacing: false,
                    // pinSpacer: ""
                }
            })

            tl.fromTo(".left_div",{
                yPercent:100,
                duration: 1,
                ease: "power2.out",
                repeat: 1,
                yoyo: true,

            
            }, {
                yPercent: -400,
                
                ease: "power2.out",
                duration: 4,
                ease: "power2.out",
            },"sametime").fromTo(".right_div", {
                yPercent: 100,
                repeat: 1,
                yoyo: true,
                duration: 1,
                ease: "power2.out",
            }, {
                yPercent: -500,
                // duration: 5,
                ease: "power2.out",
                duration: 4,
                //  repeat: 1,
                // yoyo: true,
                ease: "power2.out",
            },"sametime")

                // images.forEach((image, index) => {
                // tl.fromTo(
                //     image,
                //     {
                //     x: 0,
                //     y: 0,
                //     opacity: 0,
                //     },
                //     {
                //     x: () => gsap.utils.random(-200, 200), // outward X
                //     y: () => gsap.utils.random(-200, 200), // outward Y
                //     opacity: 1,
                //     duration: 1,
                //     ease: "power2.out",
                //     scrollTrigger: {
                //         trigger: containerRef.current,          // each heading triggers its own animation
                //         start: "top top",          // when heading enters viewport
                //         end: "bottom 20%",         // when heading leaves viewport
                //         scrub: true,               // tie animation to scroll
                //         markers: true,             // debug markers (remove later)
                //     },
                //     delay: index * 0.2,          // stagger based on index
                //     }
                // );
                // });

            

            


            

            // gsap.set(split.words, { overflow: "hidden" });


//             images.forEach((img, i) => {
//   tl.to(img, {
//     x: gsap.utils.random(-800, 800),
// y: gsap.utils.random(-800, 800),
//     rotation: gsap.utils.random(-180, 180),
//     duration: 1,
//     ease: "power2.out",
//   }, i*0.2,); // 👈 SAME TIME (important)
// },"-=0.5"); // 👈 START 1.5s BEFORE PREVIOUS ENDS

//     tl.to(images[0], {
//     x: 300,
//     y: -100,
//     rotation: gsap.utils.random(-180, 180),
//     duration: 1,
//     ease: "power2.in",
//   },"<0.5").to(images[1], {
//     x: -400,
//     y: 100,
//     rotation: gsap.utils.random(-180, 180),
//     duration: 1,
//     ease: "power2.in",
//   },"<0.5").to(images[2], {
//     x: 40,
//     y: -100,
//     rotation: gsap.utils.random(-180, 180),
//     duration: 1,
//     ease: "power2.in",
//   },"<0.5").to(images[3], {
//     x: -400,
//     y: -100,
//     rotation: gsap.utils.random(-180, 180),
//     duration: 1,
//     ease: "power2.in",
//   },"<0.5").to(images[4], {
//     x: 400,
//     y: 100,
//     rotation: gsap.utils.random(-180, 180),
//     duration: 1,
//     ease: "power2.in",
//   },"<0.5").to(images[5], {
//     x: -390,
//     y: 250,
//     rotation: gsap.utils.random(-180, 180),
//     duration: 1,
//     ease: "power2.in",
//   },"<0.5").to(images[6], {
//     x: 90,
//     y: 310,
//     rotation: gsap.utils.random(-180, 180),
//     duration: 1,
//     ease: "power2.in",
//   },"<0.5"); // 👈 START 0.5s AFTER PREVIOUS ENDS


           
            tl.fromTo(".fourth_text_div", {
                yPercent: 20,
                
                // x: -100,
                opacity: 0.99,
                duration: 2,
                ease: "power2.out",
                duration: 1,
                ease: "power2.out",
            }, {
                yPercent: 25,
                opacity: 1,
                // x: 0,
                duration: 2,
                ease: "power4.out",
                
            }
            ,"sametime",);


            
//             gsap.from(split_inner_text.words, {
//     opacity: 0,
//     duration: 2,
//     ease: "sine.out",
//     stagger: 0.1,
//   });

  tl.from(split_inner_text.words, {
   
   
    duration: 2,
    opacity: 0,
    
    ease: "power2.out",
    // stagger: 0.08,
    // scale: -0.1,
    filter: "blur(10px)",
    ease:"sine.out",
    stagger: 0.09,
    } // start this animation 1.5 seconds before the previous one ends
    ,"sametime-=0.1");


           

             tl.fromTo(".span_para", {
    scale: 0.8,
    // opacity: 0,
    duration: 1,
    ease: "power2.out",
    transformOrigin: "center ",
  }, {
    scale: 6,
    // opacity: 1,
    // fontSize: "1.1em",
    duration: 2,
    ease: "power2.out",
    scrub: 1,
    yPercent: 100,

    transformOrigin: "center ",
    ease: "sine.out",

  }
    ,"sync").to(split_inner_text.words, {
    opacity: 0  ,
    yPercent: -50,

    filter: "blur(10px)",
    duration: 1,
    ease: "power2.in",
    stagger: 0.09,
    } // start this animation 1.5 seconds before the previous one ends
    ,"<-0.1");
    // opacity: 1, )



            gsap.fromTo(split.chars,{
                yPercent: -100,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
            }, {
              yPercent: 200,
                opacity: 1,
                stagger: 0.03,
                duration: 0.6,
                ease: "power4.out",
            }
            ,"-=1.5");
        });

       

        return () => ctx.revert();
    }, []);

    return (
        <div className=" w-full h-[100vh] relative  flex flex-col  items-end pt-6 align-items-center align-middle  bg-white     gap-7 main_fourth_div   align"  ref={maincontainerRef}  >

            <div className="right_div absolute h-[100vh] w-2xl flex flex-col gap0 top-0 left-0 bg-conic-330  ">
                    <img src={image25} alt="img25" className=" h-auto w-full border-5 border-amber-50   object-cover" />
                        <img src={image26} alt="img26" className=" w-full h-auto border-5 border-amber-50  object-cover" />
                        <img src={image27} alt="img27" className="  w-full h-auto border-5 border-amber-50  object-cover" />
                        <img src={image29} alt="img29" className=" w-full h-auto border-5 border-amber-50  object-cover" />
                        <img src={image30} alt="img30" className="  w-full h-auto border-5 border-amber-50  object-cover" />
                        <img src={image31} alt="img31" className="  w-full h-auto border-5 border-amber-50  object-cover" />
                        

            </div>
 

            <div className=" fourth_text_div  h-auto flex justify-center box-content content-center  bg-transparent   align-items-center text-left items-center relative z-30  " >

                <div className="fourth_div_text bg-white box-content  m-auto w-[40%] h-auto z-50 align-center justify-center items-center  align-center     drop-shadow-sm rounded-2xl   order-[#b6b2b2]   ">
                    <p className="pb-5 h-[50vh] text-black uppercase z-20 text-center font-semibold fourth_para font-Condensed text-4xl bg-white p-11 backdrop-blur-md rounded-2xl  ">Over  two decades of professional carpentry experience 
                        <span 
                    className=" z-50 inline-block text-[#bc1702]      tracking-wide font-bold  font-Condensed text-4xl  span_para font-bold ">
                        Since 1985.</span> Expert in residential and commercial woodworking projects.</p>

                </div>

               

                

            </div>


            <div className="left_div absolute h-[100vh] w-2xl flex flex-col gap0 top-0 right-0 bg-conic-330  ">
                    <img src={image28} alt="img28" className=" h-auto w-full border-5 border-amber-50   object-cover" />
                        <img src={image29} alt="img29" className=" w-full h-auto border-5 border-amber-50  object-cover" />
                        <img src={image30} alt="img30" className="  w-full h-auto border-5 border-amber-50  object-cover" />
                    <img src={image25} alt="img25" className=" h-auto w-full border-5 border-amber-50   object-cover" />
                        <img src={image26} alt="img26" className=" w-full h-auto border-5 border-amber-50  object-cover" />
                       

            </div>

                {/* <div className="fourth_img sticky top-1/2 -translate-y-1/1 self-center mx-auto w-full h-full z-10 flex items-center justify-center pointer-events-none">


                       
                        <img src={image28} alt="img28" className="absolute size-48 border-5 border-amber-50  object-cover" />
                        <img src={image29} alt="img29" className="absolute size-48 border-5 border-amber-50  object-cover" />
                        <img src={image30} alt="img30" className="absolute size-48 border-5 border-amber-50  object-cover" />
                        <img src={image31} alt="img31" className="absolute size-48 border-5 border-amber-50  object-cover" />

                        


                </div> */}






        </div>
    );
}


