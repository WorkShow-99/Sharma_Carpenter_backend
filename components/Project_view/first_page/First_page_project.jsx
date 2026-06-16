
import { useEffect, useRef, useState } from 'react';
import SharmaCarpenter from '../../../src/assets/images/4.png';
import { Outlet } from 'react-router-dom';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);


export const First_page_project = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const overlayRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([imageRef.current, overlayRef.current, titleRef.current, subtitleRef.current, infoRef.current], {
                // opacity: 0,
                yPercent: 0,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=2900%',
                    pinSpacer: true,
                    scrub: 1,
                    // pin: true,
                },
            }).fromTo(containerRef.current, { yPercent: 0, duration: 1, ease: 'power2.out' },{
                yPercent: 0,
                duration: 1,
                ease: 'power2.out',
            },'same')
                .to(imageRef.current, { yPercent: 0, duration: 1, ease: 'power2.out' },"same")
                .fromTo(overlayRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },{
                    opacity: 1, yPercent: 200, duration: 0.9, ease: 'power2.out' 
                },'same')
                .to(titleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.1)
                .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.2)
                .to(infoRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.3);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="first_page relative w-full min-h-screen  bg-green-400 overflow-hidden"
            style={{ maxHeight: '100vh' }}
        >

                <img
                ref={imageRef}
                src={SharmaCarpenter}
                alt="Sharma Carpenter"
                className="absolute inset-0 h-full  w-full z-10   object-cover"
                style={{ transform: 'scale(1.1)' }}
            />

          
            

            {/* #title project */}
            <div
                ref={overlayRef}
                className="absolute inset-0  flex items-center justify-center z-50  bg-black/30" 
            >
                <div className="w-full max-w-4xl px-6 text-center text-white flex flex-col  ">
                    <h1 ref={titleRef} className="text-4xl font-bold md:text-6xl">Wood Work</h1>
                    <p ref={subtitleRef} className="mt-4 text-lg md:text-2xl">Welcome to our wood work project!</p>

                    <div ref={infoRef} className='mt-10 flex flex-col gap-4 rounded-2xl  p-6 backdrop-blur-xs md:flex-row md:justify-between'>
                        <h2 className="text-xl font-semibold">Project Overview</h2>
                        <h2 className="text-xl font-semibold">Ritik Sharma</h2>
                    </div   >
                </div>
            </div>
        </div>
    );
}


