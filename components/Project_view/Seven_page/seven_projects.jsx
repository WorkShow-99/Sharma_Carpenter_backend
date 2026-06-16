import React from "react";

import img1 from "../../../public/1.png";
import img2 from "../../../public/2.png";
import img3 from "../../../public/3.png";
import img4 from "../../../public/4.png";

export const Related_Clients = () => {

    const projects = [
        {
            title: "Tapcheck",
            image: img1,
        },
        {
            title: "Joyful Health",
            image: img2,
        },
        {
            title: "F Suite",
            image: img3,
        },
        {
            title: "Inspiren",
            image: img4,
        },
    ];

    return (

        <section
            className="
                w-full

                bg-[#ececec]

                overflow-hidden

                px-4
                sm:px-6
                md:px-10
                lg:px-8

                py-6
                md:py-10
            "
        >

            {/* TITLE */}
            <div>

                <h1
                    className="
                        uppercase

                        font-black

                        leading-none

                        tracking-tight

                        text-black

                        text-[1rem]
                        sm:text-[1rem]
                        md:text-[2rem]
                        lg:text-[3rem]
                    "
                >
                    Related Clients
                </h1>

                {/* LINE */}
                <div
                    className="
                        w-full
                        h-[1px]

                        bg-black/15

                        mt-4
                        md:mt-6
                    "
                />

            </div>

            {/* GRID */}
            <div
                className="
                    mt-6
                    md:mt-10

                    grid

                    grid-cols-2
                    lg:grid-cols-4

                    gap-x-4
                    gap-y-8

                    md:gap-x-8
                    md:gap-y-10
                "
            >

                {projects.map((project, index) => (

                    <div
                        key={index}

                        className="
                            group

                            flex
                            flex-col
                        "
                    >

                        {/* IMAGE WRAPPER */}
                        <div
                            className="
                                relative

                                overflow-hidden

                                bg-black/5
                            "
                        >

                            {/* IMAGE */}
                            <img
                                src={project.image}
                                alt={project.title}

                                className="
                                    w-full

                                    aspect-[0.72/1]

                                    object-cover

                                    block

                                    transition-transform
                                    duration-700

                                    group-hover:scale-[1.04]
                                "
                            />

                        </div>

                        {/* TITLE */}
                        <h2
                            className="
                                mt-3
                                md:mt-4

                                text-black

                                leading-none

                                text-sm
                                sm:text-base
                                md:text-lg
                                lg:text-xl
                            "
                        >
                            {project.title}
                        </h2>

                    </div>

                ))}

            </div>

        </section>

    );

};