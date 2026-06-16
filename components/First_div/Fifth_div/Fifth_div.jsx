



import gsap from "gsap";
import gsapSplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Combine_div } from "./combine_div";


import image29 from "../../../public/29.png";
import image30 from "../../../public/30.png";
import image31 from "../../../public/31.png";
import image32 from "../../../public/32.png";
import image33 from "../../../public/33.png";

export const Fifth_div = () => {
    // register GSAP plugins once at module load so each Combine_div doesn't need to
    try {
        gsap.registerPlugin(ScrollTrigger, gsapSplitText);
    } catch (e) {
        // ignore if already registered
    }
    return (
        <div className="w-full h-auto  flex flex-col  p-10  ">

            

            <Combine_div specific_name={{'div':'fith_holder_div1', "imgs": [image29], 'text_div':"text_div1", 'text':'fith_title_h1', 'para':'fifth_para_p1', 'img':'fifth_img1',"key":1}} main_style="  fifth_main_div_1 sm:px-10 px-0 mx-0  fifth_main_div_1  md:h-[90vh]  "/>
            <Combine_div specific_name={{'div':'fith_holder_div2', "imgs": [image30], 'text_div':"text_div2", 'text':'fith_title_h2', 'para':'fifth_para_p2', 'img':'fifth_img2',"key":2}} main_style=" fifth_main_div_2 px-10 mx-0  md:h-[90vh] md:flex-row-reverse "/>
            <Combine_div specific_name={{'div':'fith_holder_div3', "imgs": [image31], 'text_div':"text_div3", 'text':'fith_title_h3', 'para':'fifth_para_p3', 'img':'fifth_img3',"key":3}} main_style=" fifth_main_div_3 px-10 mx-0  md:h-[90vh] "/>
            <Combine_div specific_name={{'div':'fith_holder_div4', "imgs": [image32], 'text_div':"text_div4", 'text':'fith_title_h4', 'para':'fifth_para_p4', 'img':'fifth_img4',"key":4}} main_style=" fifth_main_div_4 px-10 mx-0  md:h-[90vh] md:flex-row-reverse flex"/>
            

        </div>
    );
}
