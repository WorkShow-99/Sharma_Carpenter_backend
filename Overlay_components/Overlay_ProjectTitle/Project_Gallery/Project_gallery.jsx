// import React, { useState } from "react";
// import "./ProjectGallery.css";

// export default function ProjectGallery({ project }) {

//     const [videoStates, setVideoStates] = useState({});

//     const images = Array.isArray(project?.images) ? project.images : [];
//     const videos = Array.isArray(project?.videos) ? project.videos : [];

//     const mediaItems = [
//         ...images.map((src, index) => ({
//             id: `image-${index}`,
//             type: "image",
//             src,
//         })),
//         ...videos.map((src, index) => ({
//             id: `video-${index}`,
//             type: "video",
//             src : src.url || src, // Use src.url if available, otherwise use src directly
//         })),
//     ];

//     return (

//         <section className="project-gallery">

//             <div className="gallery-heading">

//                 <h2>Work Gallery</h2>

//                 <p>
//                     More photos and videos from this project
//                 </p>

//             </div>

//             <div className="gallery-grid ">

//                 {mediaItems.map((item) => (

//                     <div
//                         key={item.id}
//                         className="gallery-item rounded-md"
//                     >

//                         {item.type === "image" ? (

//                             <img
//                                 src={item.src}
//                                 alt=""
//                                 className="gallery-image rounded-md"
//                             />

//                         ) : (

//                             <div className="video-container z-50 h-[100%]  bg-[#ffff] bg-black rounded-md p-4 items-center align-middle justify-content-center flex " style={{ position: 'relative' }}>
//                                 <div className="video-overlay z-20"
//                                 style={{ 
//                                     position: 'absolute',
//                                     top: 0,
//                                     left: 0,
//                                     width: '100%', 
//                                     height: '100%', 
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     backgroundColor: videoStates[item.id]?.isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.6)',
//                                     cursor: 'pointer',
//                                     transition: 'background-color 0.3s ease',
//                                     zIndex: 20
//                                 }}
//                                 onClick={(e) => {
//                                     const videoElement = e.currentTarget.nextElementSibling;
//                                     setVideoStates(prev => ({
//                                         ...prev,
//                                         [item.id]: {
//                                             isPlaying: !prev[item.id]?.isPlaying
//                                         }
//                                     }));
//                                     if (videoStates[item.id]?.isPlaying) {
//                                         videoElement.pause();
//                                     } else {
//                                         videoElement.play();
//                                     }
//                                 }}
//                                 >
//                                     {!videoStates[item.id]?.isPlaying && (
//                                         <div style={{ fontSize: '48px', color: 'white' }}>▶</div>
//                                     )}
//                                 </div>
//                                 <video
//                                 ref={(el) => {
//                                     if (el && videoStates[item.id]?.isPlaying === undefined) {
//                                         setVideoStates(prev => ({
//                                             ...prev,
//                                             [item.id]: { isPlaying: false }
//                                         }));
//                                     }
//                                 }}
//                                 src={item.src}
//                                 className="gallery-video z-5"
//                                 style={{ width: '100%', height: 'auto', display: 'block' }}
//                                 playsInline
//                                 controls
//                                 preload="metadata"
//                             />



//                             </div>

                            
//                         )}

//                     </div>

//                 ))}

//             </div>

//         </section>

//     );

// }


// import React, {
//     useState
// } from "react";

// import "./ProjectGallery.css";


// export default function ProjectGallery({
//     project
// }) {

//     const [videoStates, setVideoStates] =
//         useState({});


//     /*
//      * ==========================================
//      * MEDIA
//      * ==========================================
//      */

//   const mediaItems =
//     Array.isArray(project?.media)
//         ? project.media.filter(
//             media => !media.isHero
//         )
//         : [];

//     /*
//      * ==========================================
//      * NOTHING TO SHOW
//      * ==========================================
//      */

//     if (mediaItems.length === 0) {

//         return null;

//     }


//     /*
//      * ==========================================
//      * VIDEO TOGGLE
//      * ==========================================
//      */

//     const toggleVideo = (
//         id,
//         videoElement
//     ) => {

//         const isPlaying =
//             videoStates[id]?.isPlaying;


//         if (isPlaying) {

//             videoElement?.pause();

//         } else {

//             videoElement?.play();

//         }


//         setVideoStates(
//             previous => ({

//                 ...previous,

//                 [id]: {

//                     isPlaying:
//                         !isPlaying

//                 }

//             })
//         );

//     };


//     return (

//         <section
//             className="project-gallery"
//         >

//             <div
//                 className="gallery-heading"
//             >

//                 <h2>
//                     Work Gallery
//                 </h2>

//                 <p>
//                     More photos and videos
//                     from this project
//                 </p>

//             </div>


//             <div
//                 className="gallery-grid"
//             >

//                 {mediaItems.map(
//                     (media, index) => {

//                         const itemId =
//                             media._id ||
//                             `${media.type}-${index}`;


//                         return (

//                             <div

//                                 key={itemId}

//                                 className="gallery-item rounded-md"

//                             >

//                                 {/* ================= */}
//                                 {/* IMAGE              */}
//                                 {/* ================= */}

//                                 {media.type ===
//                                     "image" && (

//                                     <img

//                                         src={
//                                             media.url
//                                         }

//                                         alt={
//                                             project.title ||
//                                             "Project image"
//                                         }

//                                         className="gallery-image rounded-md"

//                                         loading="lazy"

//                                     />

//                                 )}


//                                 {/* ================= */}
//                                 {/* VIDEO              */}
//                                 {/* ================= */}

//                                 {media.type ===
//                                     "video" && (

//                                     <div
//                                         className="video-container rounded-md"
//                                         style={{
//                                             position:
//                                                 "relative"
//                                         }}
//                                     >

//                                         <video

//                                             src={
//                                                 media.url
//                                             }

//                                             className="gallery-video"

//                                             playsInline

//                                             controls

//                                             preload="metadata"

//                                         />

//                                     </div>

//                                 )}

//                             </div>

//                         );

//                     }
//                 )}

//             </div>

//         </section>

//     );

// }








import React, { useEffect, useState } from "react";
import "./ProjectGallery.css";

import { X, ChevronLeft, ChevronRight } from "lucide-react";


export default function ProjectGallery({ project }) {

    const [selectedMedia, setSelectedMedia] = useState(null);


    /*
     * ==========================================
     * MEDIA
     * ==========================================
     */

    const mediaItems =
        Array.isArray(project?.media)
            ? project.media.filter(
                media => !media.isHero
            )
            : [];


    /*
     * ==========================================
     * CLOSE ON ESC
     * ==========================================
     */

    useEffect(() => {

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {

                setSelectedMedia(null);

            }

        };


        if (selectedMedia) {

            document.addEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = "hidden";

        }


        return () => {

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = "";

        };

    }, [selectedMedia]);


    /*
     * ==========================================
     * NOTHING TO SHOW
     * ==========================================
     */

    if (mediaItems.length === 0) {

        return null;

    }


    /*
     * ==========================================
     * OPEN MEDIA
     * ==========================================
     */

    const openMedia = (media, index) => {

        setSelectedMedia({

            ...media,

            index

        });

    };


    /*
     * ==========================================
     * CLOSE MEDIA
     * ==========================================
     */

    const closeMedia = () => {

        setSelectedMedia(null);

    };


    /*
     * ==========================================
     * PREVIOUS
     * ==========================================
     */

    const showPrevious = (event) => {

        event.stopPropagation();

        if (!selectedMedia) return;


        const newIndex =
            selectedMedia.index === 0
                ? mediaItems.length - 1
                : selectedMedia.index - 1;


        setSelectedMedia({

            ...mediaItems[newIndex],

            index: newIndex

        });

    };


    /*
     * ==========================================
     * NEXT
     * ==========================================
     */

    const showNext = (event) => {

        event.stopPropagation();

        if (!selectedMedia) return;


        const newIndex =
            selectedMedia.index ===
            mediaItems.length - 1
                ? 0
                : selectedMedia.index + 1;


        setSelectedMedia({

            ...mediaItems[newIndex],

            index: newIndex

        });

    };


    return (

        <section className="project-gallery">


            {/* =====================================
                HEADING
            ===================================== */}

            <div className="gallery-heading">

                <h2>
                    Work Gallery
                </h2>

                <p>
                    A closer look at the work
                </p>

            </div>


            {/* =====================================
                GALLERY
            ===================================== */}

            <div className="gallery-grid">

                {mediaItems.map(
                    (media, index) => {

                        const itemId =
                            media._id ||
                            `${media.type}-${index}`;


                        return (

                            <div
                                key={itemId}
                                className="gallery-item"
                                onClick={() =>
                                    openMedia(
                                        media,
                                        index
                                    )
                                }
                            >

                                {/* IMAGE */}

                                {media.type === "image" && (

                                    <img
                                        src={media.url}
                                        alt={
                                            project.title ||
                                            "Project image"
                                        }
                                        className="gallery-image"
                                        loading="lazy"
                                    />

                                )}


                                {/* VIDEO */}

                                {media.type === "video" && (

                                    <div className="video-container">

                                        <video
                                            src={media.url}
                                            className="gallery-video"
                                            playsInline
                                            controls
                                            preload="metadata"
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                        />

                                    </div>

                                )}

                            </div>

                        );

                    }
                )}

            </div>


            {/* =====================================
                LIGHTBOX
            ===================================== */}

            {selectedMedia && (

                <div
                    className="media-lightbox"

                    onClick={closeMedia}
                >


                    {/* CLOSE BUTTON */}

                    <button
                        className="lightbox-close"

                        onClick={(event) => {

                            event.stopPropagation();

                            closeMedia();

                        }}
                    >

                        <X size={28} />

                    </button>


                    {/* PREVIOUS */}

                    {mediaItems.length > 1 && (

                        <button
                            className="lightbox-prev"

                            onClick={showPrevious}
                        >

                            <ChevronLeft size={32} />

                        </button>

                    )}


                    {/* MEDIA */}

                    <div
                        className="lightbox-content"

                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {selectedMedia.type === "image" ? (

                            <img
                                src={selectedMedia.url}
                                alt={
                                    project.title ||
                                    "Project image"
                                }
                                className="lightbox-image"
                            />

                        ) : (

                            <video
                                src={selectedMedia.url}
                                className="lightbox-video"
                                controls
                                autoPlay
                                playsInline
                            />

                        )}

                    </div>


                    {/* NEXT */}

                    {mediaItems.length > 1 && (

                        <button
                            className="lightbox-next"

                            onClick={showNext}
                        >

                            <ChevronRight size={32} />

                        </button>

                    )}

                </div>

            )}

        </section>

    );

}