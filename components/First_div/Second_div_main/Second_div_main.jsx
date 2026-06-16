

import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Second_div_main = () => {
    const boxRef = useRef(null);
    


    return (
        <div className="w-full h-screen bg-amber-200">
            

        </div>
    );

}