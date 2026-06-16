import Home from "../../../public/Home2.png";
import title from "../../../public/11.png";
import back_img from "../../../public/12.png";
import front_img from "../../../public/133.png";



import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



export const TitleHead = () => {
// gsap.registerPlugin(ScrollTrigger);


useLayoutEffect(() => {
    
        gsap.fromTo(
            ".img2",
            
            { opacity: 0, y: -0 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power1.inOut" }
        );
        gsap.fromTo(
          ".img2",
          { scale: 0.8, 
            
          },
          
      {
        scale: 1.2,      // grows to full size
        ease: "none",  // keep natural scroll feel
        scrollTrigger: {
          trigger: ".hero-img",   // watch this element
          start: "top bottom",    // when top of image enters viewport
          end: "bottom top",      // until it leaves viewport
          scrub: true,            // sync animation with scroll
                     // optional: shows debug markers
        }
      }
        );
   
}, []);
  return (
    <div className="lg:pl-16 relative flex flex-col-reverse md:flex-row items-center justify-center mr-0 lg:item-center xl:items-center  px-4 sm:px-8 md:px-10 py-10 overflow-hidden">

      {/* TEXT SECTION */}
      <div className="z-40 flex flex-col gap-4 w-full md:w-1/1 text-center md:text-left ">
        
        <h1 className="font-bold text-[#bfb0b0] font-fjalla-one tracking-tight 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl capitalize">
          SHARMA CARPENTER <span className="text-[#4b2602]">SERVICE</span>
        </h1>

        <p className="uppercase text-[#c5c2c2] 
          text-sm sm:text-lg md:text-xl lg:text-2xl font-fjalla-one tracking-wide">
          Your Trusted Carpenter Service
        </p>
<button className="
  mt-4
  lg:ml-24
  w-full sm:w-auto
  md:w-[180px] md:h-[45px]
  px-6 py-2 md:px-0 md:py-0
  bg-blue-500 hover:bg-blue-700
  text-white font-semibold
  rounded
  flex items-center justify-center
  transition-all duration-300
">
  Get Service
</button>
      </div>

      {/* IMAGE SECTION */}
      <div className=" img relative w-auto md:w-1/3 flex justify-center items-center">
        
        {/* front Image */}
        <div className="absolute  img1 w-[200px] sm:w-[240px] md:w-[320px] lg:w-[380px] xl:w-[460px] 
          h-[200px] sm:h-[240px] md:h-[320px] lg:h-[380px] xl:h-[460px] bg-cover bg-center"
          style={{ backgroundImage: `url(${front_img})` }}>
        </div>

        {/* back Image */}
        <div className="relative  img2 w-[200px] sm:w-[240px] md:w-[320px] lg:w-[380px] xl:w-[420px] 
          h-[200px] sm:h-[240px] md:h-[320px] lg:h-[380px] xl:h-[460px] bg-cover bg-center"
          style={{ backgroundImage: `url(${ back_img})` }}>
        </div>

      </div>

    </div>
  );
};