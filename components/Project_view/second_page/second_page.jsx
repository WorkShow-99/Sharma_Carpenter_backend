
import React, { useRef } from 'react';
import { useEffect } from 'react';

import gsap from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText'


gsap.registerPlugin(ScrollTrigger, SplitText);

export const Second_page_project = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const overlayRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: '+=2200%',
                    scrub: 1,
                    // pin: true,
                },
            });
            tl.fromTo(textRef.current, { yPercent: -5 }, { yPercent: 100, duration: 2.5, ease: 'power2.out' });


        }, containerRef);
        return () => ctx.revert()
    }, []);






    return (
        <div className='second_page w-full min-h-screen  flex justify-center items-center px-4 py-6 md:px-0 md:py-0 bg-[#595757] pt-50 md:pt-0 overflow-hidden' ref={containerRef}>


            <div ref={textRef} className=' md:pb-24 lg:mt-20 lowercase flex flex-col md:flex-row gap-20 md:gap-36 w-full md:w-[80%] h-auto md:h-[80%]  p-4 md:p-10 items-start md:items-center justify-center'>

                <div className='w-full md:w-auto place-self-start'>
                    <h1 className='text-[#2d2c2c] text-lg  md:text-xl font-light'>OverView</h1>

                </div>
                <div className='w-full md:w-[90%] h-auto md:h-full  flex flex-col items-start justify-between p-4 md:p-10 gap-4 md:gap-10'>
                    <h1 className='normal-case text-lg md:text-base font-light leading-snug text-[#dedcdc] lg:text-3xl'>   
                                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi esse natus beatae quae non nisi facilis repellat porro rem pariatur doloribus aliquam, aut tenetur, voluptatum eos corporis? Ea, nisi dolorem.
                                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi esse natus beatae quae non nisi facilis repellat porro rem pariatur doloribus aliquam, aut tenetur, voluptatum eos corporis? Ea, nisi dolorem.
                                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi esse natus beatae quae non nisi facilis repellat porro rem pariatur doloribus aliquam, aut tenetur, voluptatum eos corporis? Ea, nisi dolorem.
                        
</h1>

            <h1 className='text-lg md:text-sm font-light sm:self-end pt-10 text-[#282727]'>↓ Project Detail</h1>
                </div>

            </div>



        </div>
    )
}