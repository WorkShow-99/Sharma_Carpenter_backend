import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import floring_img from "../../../public/flooring_img.png";
import { Card_div } from "./card_div";
import { Cursor } from "./cursor";
gsap.registerPlugin(Draggable, ScrollTrigger);







export const Sixth_div = () => {
     
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
const cursorRef = useRef(null);
const IsCardRef = useRef(0);
const draggableRef = useRef(null);
const smoothRef = useRef(null);
// useLayoutEffect
// (() => {
    
//     const ctx = gsap.context(() => {
//         const responsiveX = (mobileX, desktopX) => () =>
//             window.innerWidth < 768 ? mobileX : desktopX;
        
//     }, wrapperRef);

    

//     return () => ctx.revert();

// }, []);


const handlehover_card = (e) => {
    


   
    gsap.to(cursorRef.current, {
    width: "50px",
    height: "50px",
    duration: 0.5,
    ease: "power3.out",
  });

  gsap.to(e.currentTarget, {
    scale: 1.05,
    boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
    duration: 1,
    ease: "power3.out",
  });
};

const handleLeave_card = (e) => {

    console.log(e.currentTarget.id);

    IsCardRef.current = 0;
    gsap.to(cursorRef.current, {
    width: "20px",
    height: "20px",
    duration: 0.5,
    ease: "power3.out",
  });

  gsap.to(e.currentTarget, {
    scale: 1,
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    duration: 1,
    ease: "power3.out",
  });
};

// useEffect(() => {
//   const wrapper = wrapperRef.current;
//   const canvas = canvasRef.current;

//   let isDragging = false;

//   let startX = 0;
//   let startY = 0;

//   let currentX = 0;
//   let currentY = 0;

//   let targetX = 0;
//   let targetY = 0;

//   const wrapperRect = wrapper.getBoundingClientRect();

//   const minX = wrapperRect.width - 3000;
//   const minY = wrapperRect.height - 3000;

//   // SMOOTH GSAP SCRUB
//   const xTo = gsap.quickTo(canvas, "x", {
//     duration: 0.2,
//     ease: "power3.out",
//   });

//   const yTo = gsap.quickTo(canvas, "y", {
//     duration: 0.2,
//     ease: "power3.out",
//   });

//   const clamp = (value, min, max) =>
//     Math.min(Math.max(value, min), max);

//   const onPointerDown = (e) => {
//     isDragging = true;

//     startX = e.clientX - currentX;
//     startY = e.clientY - currentY;
//   };

//   const onPointerMove = (e) => {
//     if (!isDragging) return;

//     targetX = clamp(e.clientX - startX, minX, 0);
//     targetY = clamp(e.clientY - startY, minY, 0);

//     currentX = targetX;
//     currentY = targetY;

//     // SMOOTH MOVEMENT
//     xTo(targetX);
//     yTo(targetY);
//   };

//   const onPointerUp = () => {
//     isDragging = false;
//   };

//   wrapper.addEventListener("pointerdown", onPointerDown);
//   window.addEventListener("pointermove", onPointerMove);
//   window.addEventListener("pointerup", onPointerUp);

//   return () => {
//     wrapper.removeEventListener("pointerdown", onPointerDown);
//     window.removeEventListener("pointermove", onPointerMove);
//     window.removeEventListener("pointerup", onPointerUp);
//   };
// }, []);



// useEffect(() => {
//   const wrapper = wrapperRef.current;
//   const canvas = canvasRef.current;

//   let isDragging = false;

//   let currentX = 0;
//   let currentY = 0;

//   let lastPointerX = 0;
//   let lastPointerY = 0;

//   const wrapperRect = wrapper.getBoundingClientRect();

//   const minX = wrapperRect.width - 3000;
//   const minY = wrapperRect.height - 3000;

//   const clamp = (value, min, max) =>
//     Math.min(Math.max(value, min), max);

//   const xTo = gsap.quickTo(canvas, "x", {
//     duration: 0.2,
//     ease: "power3.out",
//   });

//   const yTo = gsap.quickTo(canvas, "y", {
//     duration: 0.2,
//     ease: "power3.out",
//   });

//   const onPointerDown = (e) => {
//     isDragging = true;

//     lastPointerX = e.clientX;
//     lastPointerY = e.clientY;
//   };

//   const onPointerMove = (e) => {
//     if (!isDragging) return;

//     // DIFFERENCE BETWEEN FRAMES
//     const deltaX = e.clientX - lastPointerX;
//     const deltaY = e.clientY - lastPointerY;

//     lastPointerX = e.clientX;
//     lastPointerY = e.clientY;

//     currentX += deltaX;
//     currentY += deltaY;

//     currentX = clamp(currentX, minX, 0);
//     currentY = clamp(currentY, minY, 0);

//     xTo(currentX);
//     yTo(currentY);
//   };

//   const onPointerUp = () => {
//     isDragging = false;
//   };

//   wrapper.addEventListener("pointerdown", onPointerDown);
//   window.addEventListener("pointermove", onPointerMove);
//   window.addEventListener("pointerup", onPointerUp);

//   return () => {
//     wrapper.removeEventListener("pointerdown", onPointerDown);
//     window.removeEventListener("pointermove", onPointerMove);
//     window.removeEventListener("pointerup", onPointerUp);
//   };
// }, []);

// useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const canvas = canvasRef.current;

//     const wrapperWidth = wrapper.offsetWidth;
//     const wrapperHeight = wrapper.offsetHeight;

//     const canvasWidth = 3000;
//     const canvasHeight = 3000;

//     Draggable.create(canvas, {
//       type: "x,y",

//       bounds: {
//         minX: wrapperWidth - canvasWidth,
//         maxX: 0,

//         minY: wrapperHeight - canvasHeight,
//         maxY: 0,
//       },

//       inertia: false,

//       edgeResistance: 0.9,

//       dragResistance: 0,

//       allowNativeTouchScrolling: false,

//       cursor: "grab",
//       activeCursor: "grabbing",
//     });
//   }, []);


// useEffect(() => {
//   const wrapper = wrapperRef.current;
//   const canvas = canvasRef.current;

//   const wrapperWidth = wrapper.offsetWidth;
//   const wrapperHeight = wrapper.offsetHeight;

//   const canvasWidth = 3000;
//   const canvasHeight = 3000;

//   // SMOOTH MOVEMENT
//   const xTo = gsap.quickTo(canvas, "x", {
//     duration: 2,
//     ease: "power3.out",
//   });

//   const yTo = gsap.quickTo(canvas, "y", {
//     duration: 2,
//     ease: "power3.out",
//   });

//   Draggable.create(canvas, {
//     type: "x,y",

//     bounds: {
//       minX: wrapperWidth - canvasWidth,
//       maxX: 0,

//       minY: wrapperHeight - canvasHeight,
//       maxY: 0,
//     },

//     inertia: false,

//     allowNativeTouchScrolling: false,

//     onDrag() {
//       // SMOOTH FOLLOW
//       xTo(this.x);
//       yTo(this.y);
//     },

//     onThrowUpdate() {
//       xTo(this.x);
//       yTo(this.y);
//     },

//     cursor: "pointer",
//     activeCursor: "pointer",
//   });
// }, []);

// useEffect(() => {
//   const wrapper = wrapperRef.current;
//   const canvas = canvasRef.current;
//   const cursor = cursorRef.current;
//   const wrapperWidth = wrapper.offsetWidth;
//   const wrapperHeight = wrapper.offsetHeight;

//   const canvasWidth = 3000;
//   const canvasHeight = 3000;

//   let currentX = 0;
//   let currentY = 0;
//   const minX = wrapperWidth - canvasWidth;
//   const minY = wrapperHeight - canvasHeight;

//   // SMOOTH SCRUB MOVEMENT
//   const xTo = gsap.quickTo(canvas, "x", {
//     duration: 2.1,
//     ease: "Power4.out",
//   });

//   const yTo = gsap.quickTo(canvas, "y", {
//     duration: 2.1,
//     ease: "expo.out",
//   });

//   // CURSOR SMOOTH
//   const cursorX = gsap.quickTo(cursor, "x", {
//     duration: 0.2,
//     ease: "power3.out",
//   });

//   const cursorY = gsap.quickTo(cursor, "y", {
//     duration: 0.2,
//     ease: "power3.out",
//   });

//   // CUSTOM CURSOR
//   const moveCursor = (e) => {
//     cursorX(e.clientX - 10);
//     cursorY(e.clientY - 10);
//   };

//   window.addEventListener("pointermove", moveCursor);

//   const handleWheelScroll = (e) => {
//     e.preventDefault();

//     currentX += e.deltaX;
//     currentY -= e.deltaY;

//     currentX = gsap.utils.clamp(minX, 0, currentX);
//     currentY = gsap.utils.clamp(minY, 0, currentY);

//     // xTo(currentX);
//     // yTo(currentY);

//     xTo(currentX);
// yTo(currentY);

// const draggable = draggableRef.current?.[0];

// if (draggable) {
//   draggable.x = currentX;
//   draggable.y = currentY;
// }
//   };

//   wrapper.addEventListener("wheel", handleWheelScroll, { passive: false });

//   // DRAG SYSTEM
//   draggableRef.current = Draggable.create(canvas, {
//       type: "x,y",

//       bounds: {
//         minX: wrapperWidth - canvasWidth,
//         maxX: 0,

//         minY: wrapperHeight - canvasHeight,
//         maxY: 0,
//       },

//       inertia: false,

//       edgeResistance: 0.9,

//       dragResistance: 0,

//       allowNativeTouchScrolling: true,

//       cursor: "auto",
//       activeCursor: "auto",
//     });
//   return () => {
//     draggableRef.current?.forEach((instance) => instance.kill());
//     draggableRef.current = null;
//     window.removeEventListener("pointermove", moveCursor);
//     wrapper.removeEventListener("wheel", handleWheelScroll);
//   };
// }, []);


// useEffect(() => {
//   const wrapper = wrapperRef.current;
//   const canvas = canvasRef.current;
//   const cursor = cursorRef.current;

//   const wrapperWidth = wrapper.offsetWidth;
//   const wrapperHeight = wrapper.offsetHeight;

//   const canvasWidth = 3000;
//   const canvasHeight = 3000;

//   const minX = wrapperWidth - canvasWidth;
//   const minY = wrapperHeight - canvasHeight;

//   // SINGLE SOURCE OF TRUTH
//   let currentX = 0;
//   let currentY = 0;

//   // SMOOTH SCRUB
//   const xTo = gsap.quickTo(canvas, "x", {
//     duration: 0.6,
//     ease: "expo.out",
//   });

//   const yTo = gsap.quickTo(canvas, "y", {
//     duration: 0.6,
//     ease: "expo.out",
//   });

//   // CURSOR
//   const cursorX = gsap.quickTo(cursor, "x", {
//     duration: 0.2,
//     ease: "power3.out",
//   });

//   const cursorY = gsap.quickTo(cursor, "y", {
//     duration: 0.2,
//     ease: "power3.out",
//   });

//   const moveCursor = (e) => {
//     cursorX(e.clientX - 10);
//     cursorY(e.clientY - 10);
//   };

//   window.addEventListener("pointermove", moveCursor);

//   // APPLY MOVEMENT
//   const updateCanvas = () => {
//     currentX = gsap.utils.clamp(minX, 0, currentX);
//     currentY = gsap.utils.clamp(minY, 0, currentY);

//     xTo(currentX);
//     yTo(currentY);
//   };

//   // WHEEL
//   const handleWheel = (e) => {
//     e.preventDefault();

//     currentX -= e.deltaX;
//     currentY -= e.deltaY;

//     updateCanvas();
//   };

//   wrapper.addEventListener("wheel", handleWheel, {
//     passive: false,
//   });

//   // DRAG
//   const draggable = Draggable.create(canvas, {
//     type: "x,y",

//     inertia: false,

//     allowNativeTouchScrolling: false,

//     onPress() {
//       // SYNC BEFORE DRAG STARTS
//       this.x = currentX;
//       this.y = currentY;
//     },

//     onDrag() {
//       currentX = this.x;
//       currentY = this.y;

//       updateCanvas();
//     },

//     onThrowUpdate() {
//       currentX = this.x;
//       currentY = this.y;

//       updateCanvas();
//     },

//     bounds: {
//       minX,
//       maxX: 0,

//       minY,
//       maxY: 0,
//     },
//   });

//   return () => {
//     draggable[0].kill();

//     wrapper.removeEventListener("wheel", handleWheel);

//     window.removeEventListener("pointermove", moveCursor);
//   };
// }, []);



useEffect(() => {

  const wrapper = wrapperRef.current;
  const dragLayer = canvasRef.current;
  const smoothLayer = smoothRef.current;

  const wrapperWidth = wrapper.offsetWidth;
  const wrapperHeight = wrapper.offsetHeight;

  const canvasWidth = 3000;
  const canvasHeight = 3000;

  let targetX = 0;
  let targetY = 0;

  // SMOOTH LAYER

  gsap.to(smoothLayer, {
  scale: 0.98,
  duration: 0.4,
});

  const xTo = gsap.quickTo(smoothLayer, "x", {
   duration: 2.2,
ease: "power4.out",
  });

  const yTo = gsap.quickTo(smoothLayer, "y", {
   duration: 2.2,
ease: "power4.out",
  });

  // DRAGGABLE
  const draggable = Draggable.create(dragLayer, {

    type: "x,y",

    inertia: true,
      dragResistance: 0.015,

  edgeResistance: 1.085,

    bounds: {
      minX: wrapperWidth - canvasWidth,
      maxX: 0,

      minY: wrapperHeight - canvasHeight,
      maxY: 0,
    },

    onDrag() {

      targetX = this.x;
      targetY = this.y;

      xTo(targetX);
      yTo(targetY);
    },

    onThrowUpdate() {

      targetX = this.x;
      targetY = this.y;

      xTo(targetX);
      yTo(targetY);
    },

  });

  // WHEEL
  const handleWheel = (e) => {

    e.preventDefault();

    targetX -= e.deltaX;
    targetY -= e.deltaY;

    targetX = gsap.utils.clamp(
      wrapperWidth - canvasWidth,
      0,
      targetX
    );

    targetY = gsap.utils.clamp(
      wrapperHeight - canvasHeight,
      0,
      targetY
    );

    gsap.set(dragLayer, {
      x: targetX,
      y: targetY,
    });

    draggable[0].update();

    xTo(targetX);
    yTo(targetY);

  };

  wrapper.addEventListener("wheel", handleWheel, {
    passive: false,
  });

  return () => {

    draggable[0].kill();

    wrapper.removeEventListener("wheel", handleWheel);

  };

}, []);

  return (
    <div
    className="pointer-events-auto  overflow-x-hidden  h-auto   "
      ref={wrapperRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#111",
        position: "relative",
        cursor: "auto",
        
        
      }}
    >
        {/* <div
  ref={cursorRef}
  onClick={handlehover_card}
  
  style={{
  width: IsCardRef.current !== 1 ? "20px" : "50px",
  height: IsCardRef.current !== 1 ? "20px" : "50px",
    borderRadius: "50%",
    background: "white",

    position: "fixed",
    top: 0,
    left: 0,

    pointerEvents: "none",

    zIndex: 999999,

    mixBlendMode: "difference",
  }}
  
/> */}
< Cursor cursorRef={cursorRef} />

      {/* STICKY SECTION */}
      {console.log(IsCardRef.current)}
      <div
      className="text-[#f7dada]  font-bold z-50 w-full h-full flex items-center justify-center pointer-events-none md:top-0 md:left-0 md:translate-x-0 md:translate-y-0"
        style={{
          position: "absolute",
          zIndex: 1545151241521641,
        //   top: "calc(100% * (100vw < 768px ? 1 : 0.5))",
        //   left: "calc(100% * (100vw < 768px ? 1 : 0.5))",
        top: "50%",
        left: "50%",
          width: "200%",
          height: "200vh",
        //   display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translate(-50%, -50%)",
        //   color: "white",
          fontSize: "60px",
        //   zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <h1 className=" text-black leading-normal center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center align-middle justify-center gap-3 tracking-wider">Sharma <br />  Carpenter & fabrication</h1>
      </div>

      {/* BIG CANVAS */}
      <div

        ref={canvasRef}
        style={{
           
          width: "3000px",
          height: "3000px",
          position: "relative",

          backgroundColor: "white",
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.52) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.52) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      >

        <div ref={smoothRef}>

        
        {/* CARDS */}
        {Array.from({ length: 10 }).map((_, i) => {
          const randomTop = Math.random() * 2800;
          const randomLeft = Math.random() * 2800;
 const cardWidth =  Math.floor(Math.random() * (220 - 150 + 1)) +150;
    const cardHeight = Math.floor(Math.random() * (250 - 150 + 1)) + 150;
          return (
            // <div
            // className=" "
            //  onMouseEnter={handlehover_card}
            //  onMouseLeave={handleLeave_card}
            //   key={i}
            //   id  = {`card${i + 1}`}    
            //   value={`card${i + 1}`}
            //   style={{
            //     width: "220px",
            //     height: "140px",
            //     background: "white",
            //     borderRadius: "20px",
            //     zIndex: 2547483649,
            //     position: "absolute",
            //     top: `${randomTop}px`,
            //     left: `${randomLeft}px`,

            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center",

            //     fontSize: "28px",
            //     fontWeight: "bold",

            //     boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
            //   }}
            // >
            //   Card {i + 1}
            // </div>

            <Card_div randomTop={randomTop} randomLeft={randomLeft} value={i} key={i} cardHeight={cardHeight} cardWidth={cardWidth} />
          );
        })}
      </div>
      </div>
    </div>
  );
};