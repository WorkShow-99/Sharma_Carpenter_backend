import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../../../public/16.png";
import image2 from "../../../public/25.png";
import image3 from "../../../public/26.png";

import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export const Second_div = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const responsiveX = (mobileX, desktopX) => () =>
        window.innerWidth < 768 ? mobileX : desktopX;
      

       const split = new SplitText(".title2", {
        type: "chars, words",
         charsClass: "chars",
         wordsClass: "word"
      });


      gsap.from(split.chars, {
        yPercent: 10,
        opacity: 0,
        duration: 0.6,
       
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".c",
          start: "bottom bottom",
          end: "+=4500",
         scrub: 2,     // 🔥 makes it scroll-controlled
          // markers: true
      
        }
      });
      

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=4500",
          scrub: 1,
          pin: true,
          // markers: true,
        }
      });

      // tl.fromTo(".title2", {
      //   opacity: 0,
      //   duration: 1
      // }, {
      //   opacity: 1,
      //   duration: 1
      // });

      // Title animation
      tl.fromTo(".title", {
        // scale: 0.5,
        opacity: 0.8,
        
      },{
        opacity: 1,
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%", 
          end: "top 30%",
          scrub: 1,
          // markers: true,
          // toggleActions: "play none none reverse",

        }
      }
    );

      // Boxes animation (SEQUENTIAL)
    tl.fromTo(".a"    , 
        { y: 600 , x: 0, rotate: -80  }, { y: -110, x: responsiveX(-10, -250), rotation: -5 })
        .fromTo(".b",
          { y: 600  ,x: 0, rotation: -90 }, { y: 50, x: responsiveX(10, 190), rotation: 7 },)
        .fromTo(".c", 
         { y: 1000 , x: 0, rotation: -95 }, { y: 100, x: 0, rotation: -7 },);

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="  overflow-x-hidden  h-auto ">

      {/* Spacer before */}
      {/* <div className="h-[100vh] bg-amber-200">Scroll Down</div> */}

      {/* Pinned Section */}
      <div
        ref={container}
        className="h-[100vh ] w-auto  flex flex-col items-center justify-center gap-10"
      >

        <div className=" title text_div   min-h-[50vh] top-0 text-center  docFloat self-center m-auto pt-24 pb-64">
              {/* Top Badge */}
              <div className="inline-block px-4 py-0 mb-6 text-sm font-semibold tracking-widetext-[#041806] bg-green-200 rounded-full">
                SHARMA CARPENTER
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl  md:text-6xl font-extrabold text-[#041806] tracking-tight">
                CRAFTING BEAUTY IN WOOD
              </h1>

              {/* Subtitle */}
              <p className="title2 mt-6 text-sm md:text-base font-semibold tracking-widest text-[#041806]">
                QUALITY WORK, CUSTOM DESIGNS, LASTING FINISHES
              </p>
      </div>

        {/* <div className="title text-center">
          <h1 className="font-bold pt-[5vh]">Sharma Carpenter</h1>
          <h2>Crafting Excellence Since 1995</h2>
        </div> */}

        <div
          className="a w-full sm:w-96 md:w-[50px] lg:w-[600px] min-h-[40vh] sm:min-h-[50vh] shrink-0 bg-cover bg-center bg-no-repeat pt-[-10vh]"
          style={{ backgroundImage: `url(${image1})` }}
        >
        {/* <img src={image1} alt="" className=" cover  bg-cover backdrop-blur-md shadow-2xl border border-white/60 " /> */}
          {/* <h3 className="text-xl font-bold">Custom Design</h3>
          <p className="mt-2 text-sm text-slate-600">
            Tailored carpentry solutions for your space.
          </p> */}
        </div>
        <div
          className="b absolute w-64 h-64 sm:w-80 sm:h-80 md:size-96 rounded-2xl bg-cover bg-center bg-no-repeat  "
          style={{ backgroundImage: `url(${image2})` }}
        >
          {/* <h3 className="text-xl font-bold">Premium Finish</h3>
          <p className="mt-2 text-sm text-white/90">
            Smooth details with a refined modern look.
          </p> */}
        </div>
        <div
          className="c absolute w-64 h-64 sm:w-80 sm:h-80 md:size-96 rounded-2xl bg-cover bg-center bg-no-repeat text-white"
          style={{ backgroundImage: `url(${image3})` }}
        >
          {/* <h3 className="text-xl font-bold">Trusted Quality</h3>
          <p className="mt-2 text-sm text-white/90">
            Built to last with care and craftsmanship.
          </p> */}
        </div>
      </div>

      {/* Spacer after */}
      {/* <div className="h-[100vh] bg-green-200">Continue</div> */}
    </div>
  );
};