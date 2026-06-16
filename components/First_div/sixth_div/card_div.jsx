import { useContext } from "react";
import gsap from "gsap";
import { CoursorContext } from "./coursor_reducer";


import image23 from "../../../public/25.png";

export const Card_div = ({randomTop,randomLeft,value,cardHeight,cardWidth}) => {
    const { state, dispatch } = useContext(CoursorContext);
    
    

    const handlehover_card = (e) => {
        let value = e.currentTarget.id;
        console.log(e.currentTarget.id);
        dispatch({ type: "HOVER_CARD", payload: {"value": value} });
    };
    const handleLeave_card = (e) => {
        console.log(e.currentTarget.id);
        console.log("leaved");

        dispatch({ type: "LEAVE_CARD" });
    };
    // const handOnClick = (e) => {
    //     console.log(e.currentTarget.id);
    //     const el = e.currentTarget;
    //     const isExpanded = el.dataset.expanded === "true";

    //     gsap.to(el, {
    //         width: isExpanded ? "min(32vw, 220px)" : "100vw",
    //         height: isExpanded ? "min(44vh, 250px)" : "100vh",
    //         top: isExpanded ? `${randomTop}px` : 0,
    //         left: isExpanded ? `${randomLeft}px` : 0,
    //         borderRadius: isExpanded ? "20px" : "0px",
    //         zIndex: isExpanded ? 2547483649 : 9999,
    //         duration: 0.45,
    //         ease: "power2.out",
    //     });

    //     el.dataset.expanded = String(!isExpanded);
    // };


//    const handOnClick = (e) => {

//     const el = e.currentTarget;

//     // GET SCREEN POSITION
//     const rect = el.getBoundingClientRect();

//     // CLONE CARD
//     const clone = el.cloneNode(true);

//     // ADD TO BODY
//     document.body.appendChild(clone);
//     document.body.style.isolation = "isolate";

//     // STYLE CLONE
//     // gsap.set(clone, {

//     //     position: "fixed",

//     //     top: rect.top,
//     //     left: rect.left,

//     //     width: rect.width,
//     //     height: rect.height,

//     //     margin: 0,

//     //     zIndex: 999999999,

//     //     overflow: "hidden",

//     //     borderRadius: "20px",

//     // });
// // gsap.set(clone, {

// //     position: "fixed",

// //     top: rect.top,
// //     left: rect.left,

// //     width: rect.width,
// //     height: rect.height,

// //     margin: 0,

// //     zIndex: 999999999999999999,

// //     pointerEvents: "auto",

// //     overflow: "hidden",

// //     transformOrigin: "center center",

// //     borderRadius: "20px",

// // });

//         gsap.set(clone, {

//     position: "fixed",

//     top: rect.top,
//     left: rect.left,

//     width: rect.width,
//     height: rect.height,

//     margin: 0,

//     zIndex: 999999999999999999,

//     pointerEvents: "auto",

//     overflow: "hidden",

//     willChange: "transform",

//     transformOrigin: "center center",

//     borderRadius: "20px",

// });


//     // HIDE ORIGINAL
//     gsap.set(el, {
//         opacity: 0,
//     });

//     // FULLSCREEN ANIMATION
//     gsap.to(clone, {

//         top: 0,
//         left: 0,
//             zIndex: 999999999999999999,

//         width: "100vw",
//         height: "100vh",

//         borderRadius: "0px",

//         duration: 1,
// pointerEvents: "auto",
//         ease: "expo.inOut",

//     });

//     // CLOSE ON CLICK
//     clone.addEventListener("click", () => {

//         gsap.to(clone, {
//             // zIndex: 999999999999999999,
//             top: rect.top,
//             left: rect.left,

//             width: rect.width,
//             height: rect.height,

//             borderRadius: "20px",

//             duration: 1,

//             ease: "expo.inOut",

//             onComplete: () => {

//                 // SHOW ORIGINAL AGAIN
//                 gsap.set(el, {
//                     opacity: 1,
//                 });

//                 // REMOVE CLONE
//                 clone.remove();

//             }

//         });

//     });

// };
        const handOnClick = (e) => {

    const el = e.currentTarget;

    const rect = el.getBoundingClientRect();

    const img = el.querySelector("img");

    // CREATE FULLSCREEN LAYER
    const fullscreen = document.createElement("div");

    // CREATE IMAGE
    const fullscreenImg = document.createElement("img");

    fullscreenImg.src = img.src;

    // APPEND
    fullscreen.appendChild(fullscreenImg);

    document.body.appendChild(fullscreen);

    // FULLSCREEN STYLE
    Object.assign(fullscreen.style, {

        position: "fixed",

        top: `${rect.top}px`,
        left: `${rect.left}px`,

        width: `${rect.width}px`,
        height: `${rect.height}px`,

        zIndex: "999999999999999999",

        overflow: "hidden",

        borderRadius: "20px",

        // background: "black",

        willChange: "transform,width,height",

    });

    // IMAGE STYLE
    Object.assign(fullscreenImg.style, {

        width: "100%",
        height: "100%",

        objectFit: "cover",
            backgroundSize: "cover",


        pointerEvents: "none",

        backfaceVisibility: "hidden",

    });

    // HIDE ORIGINAL
    gsap.set(el, {
        opacity: 0,
        visibility: "hidden"
    });

    // ANIMATE TO FULLSCREEN
    gsap.to(fullscreen, {

        top: 0,
        left: 0,
            backgroundSize: "cover",

        width: window.innerWidth,
        height: window.innerHeight,

        borderRadius: 0,

        duration: 1,

        ease: "expo.inOut",

    });

    // CLOSE
    fullscreen.addEventListener("click", () => {

        gsap.to(fullscreen, {

            top: rect.top,
            left: rect.left,
            backgroundSize: "cover",
            width: rect.width,
            height: rect.height,

            borderRadius: "20px",

            duration: 1,

            ease: "expo.inOut",

            onComplete: () => {

                gsap.set(el, {
                    opacity: 1,
                    visibility: "visible"
                });

                fullscreen.remove();

            }

        });

    });

};

    return (
        <div
        onClick={handOnClick}
            className="bg-yellow-200 "
             onMouseEnter={handlehover_card}
             onMouseLeave={handleLeave_card}
              key={value}
              id  = {`card${value + 1}`}    
              value={`card${value + 1}`}
              style={{
                /* responsive size based on viewport with sensible max */
                // width: "min(32vw, 220px)",
                width: `min(32vw, ${cardWidth}px)`,

                // height: "min(44vh, 250px)",  
                height: `min(40vh, ${cardHeight}px)`,
        
                // background: "transparent",
                borderRadius: "20px",
                zIndex: 2547483649,
                position: "absolute",
                top: `${randomTop}px`,
                left: `${randomLeft}px`,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: "28px",
                fontWeight: "bold",

                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <img src={image23} alt="Card Image" className="w-full h-full object-cover rounded-lg" />
            </div>
    );
};