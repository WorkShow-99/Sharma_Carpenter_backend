
import  './Divs_of_icons.css';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';
import SplitText from 'gsap/src/SplitText';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);


export const Divs_of_icons = ({ things }) => {

   
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        
        gsap.to(".floating-image", {
            yPercent: 10,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            filter: "blur(20px)",
            stagger: 0.08,
            scrollTrigger: {
              trigger: ".c",
              start: "bottom bottom",
          end: "+=4500",
             scrub: 2,     // 🔥 makes it scroll-controlled
              // markers: true
          
            }
          });

        }, container);
        return () => ctx.revert();
    }, []);

    const container = useRef(null);
    


  return (
//    <div className="hero-images">

//     <div className="hero-center">

//         <h1>
//             Show Your Work
//             <span>To Your Customers</span>
//         </h1>

//         <p>
//             Build trust, attract new clients,
//             and showcase your skills.
//         </p>

//     </div>

//     {things.map((thing,index)=>(
//         <div
//             key={index}
//             className={`floating-image image-${index+1}`}
//         >
//             <img
//                 src={thing.img}
//                 alt={thing.alt}
//             />
//         </div>
//     ))}

// </div>

<div ref={container} className="hero-images hidden sm:flex text-center flex-col items-center justify-center ">

   

    {things.map((thing,index)=>(
        <>
        {thing?.type === "video"
            ? (
                <div
                    className="floating-image absolute"
                    key={index}
                    style={{
                        top: thing.top,
                        left: thing.left,
                        width: `${thing.width}px`,  
                        height: `130px`,
                        zIndex: 1000,
                        
                    }}
                >
                    <video
                    key={`${index}1`}
                   
                        src={thing.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
            )
            : (
                <div
                    className="floating-image absolute"
                    key={index}
                    style={{
                        top: thing.top,
                        left: thing.left,
                        width: `${thing.width}px`,
                        height: `${thing.height}px`,
                        
                    }}
                >
                    <img
                        key={`${index}2`}
                        src={thing.img}
                        alt={thing.alt}
                    />
                </div>
            )   
        }
        </>
    ))}

</div>
  );
};

export default Divs_of_icons;
//         <div
//     className="floating-image absolute"
//     key={index}
//     style={{
//         top: thing.top,
//         left: thing.left,
//         width: `${thing.width}px`,
//         height: `${thing.height}px`,
        
//     }}
// >

//             {
//                 // if thing.type exists and equals "video", render video, otherwise render img
//                 thing?.type === "video" ? (
//                     <video
//                         src={thing.video}
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                     />
//                 ) : (
//                     <img
//                         src={thing.img}
//                         alt={thing.alt}
//                     />
//                 )
//             }
// </div>
//     ))}

// </div>
//   );
// };