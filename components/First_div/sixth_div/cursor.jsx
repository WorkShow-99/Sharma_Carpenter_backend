import { useContext, useEffect, useLayoutEffect } from "react";




import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CoursorContext } from "./coursor_reducer";

export const Cursor = ({cursorRef}) => {
const { state, dispatch } = useContext(CoursorContext);
// useEffect(() => {

//     const moveCursor = (e) => {

//         gsap.to(cursorRef.current, {
//             x: e.clientX,
//             y: e.clientY,

//             duration: 0.2,

//             ease: "power3.out",
//         });

//     };

//     window.addEventListener("pointermove", moveCursor);

//     return () => {
//         window.removeEventListener("pointermove", moveCursor);
//     };

// }, []); 


useEffect(() => {

    const xTo = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.2,
        ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.2,
        ease: "power3.out",
    });

    const moveCursor = (e) => {

        xTo(e.clientX);
        yTo(e.clientY);

    };

    window.addEventListener("pointermove", moveCursor);

    return () => {
        window.removeEventListener("pointermove", moveCursor);
    };

}, []);



    console.log(state.hasValue);

        state.hasValue ? gsap.to(cursorRef.current, {
        width: "100px",
        height: "50px",
        background: "white",
        borderRadius: "10%",
        duration: 0.3,
    }) :
        gsap.to(cursorRef.current, {
        width: "20px",
        height: "20px",
        background: "white",
        borderRadius: "50%",
        duration: 0.3,
    });
    

    return (
              <div
  ref={cursorRef}
  className="flex items-center align-middle justify-center"
  
  
  style={{
  
    borderRadius: state.hasValue ? "50%" : "10%",
    background: "white",

    position: "fixed",
    top: 0,
    left: 0,

    pointerEvents: "none",

    zIndex: 9999999,

    mixBlendMode: "difference",
  }}

  >
    <h1>{state.hasValue ? state.value : ""}</h1>
  </div>
    );
};