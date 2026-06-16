


import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
// import { useRef } from "react";
import SplitText from "gsap/src/SplitText";
// import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

import imge1 from "../../../public/16.png";

export const Third_div = () => {
    const containerRef = useRef(null);
    const maincontainerRef = useRef(null);

    const split = new SplitText(".thirds_title p", {
    
  type: "chars"
});
// gsap.set(split.words, { overflow: "hidden" });

gsap.fromTo(split.chars,{
    yPercent: 10,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
}, {
  yPercent: 20,
  opacity: 1,
  stagger: 0.03,
//   stagger: 0.05,
  duration: 0.6,
  ease: "power4.out",
  scrollTrigger
    : {
        trigger: maincontainerRef.current,
        start: "bottom 90%",
        end: "bottom top",
        scrub: 1,
        // markers: true
    }

});


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background moves slower

    let tl  = gsap.timeline({
        scrollTrigger: {
          trigger: maincontainerRef.current,
            start: "top top",
            end: "+=2500",
            scrub: true,
            pin: true,
            // markers: true,
        }
    });

    tl.fromTo(".thirds_title", {
        opacity: 0,
        duration: 1,
        
         filter: "blur(24px)",
    }, {
       
        duration: 1,
        filter: "blur(0px)",
        scrollTrigger: {
            trigger: maincontainerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // markers: true,
        }
    },"-=0.3");


      gsap.to(".third_title", {
        yPercent: 70,
        filter: "blur(0px)",
        
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Foreground moves faster
      gsap.to(".fg", {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={maincontainerRef}
      className=" main_third relative h-[100vh] gap-56 overflow-hidden bg-gray-300  justify-center flex items-center"
    >
      {/* Background layer */}
      <div className="thirds_title p-8 bg-gradient-to-t flex flex-col from-gray-900 border-[#b6b2b2] rounded-2xl to-gray-700 opacity-80 size-1/3 item-center justify-center  p-5 border-2 box-content h-auto ">
            <h1 className="items-center self-center justify-items-center align-center p-auto m-auto ">Years of Excellence</h1>
            <p className="pb-5">With over two decades of professional carpentry experience, I bring unmatched expertise to every project. My extensive work history showcases successful completion of residential and commercial woodworking projects that stand the test of time.</p>
        </div>
     
     



      {/* Foreground layer */}
      <div className="fg  inset-0 flex  ">
        <h1 className="text-white text-6xl font-bold">Parallax Effect</h1>
      </div>
    </section>
  );
}

//  <div className="bg absolute inset-0">
//         {/* <img
//           src={imge1}
//           alt="Background"
//           className="w-full h-full object-cover"
//         /> */}

        

//       </div>