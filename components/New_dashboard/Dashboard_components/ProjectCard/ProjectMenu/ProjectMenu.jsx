// import {
//     useEffect,
//     useRef
// } from "react";

// import {
//     Download,
//     Bookmark,
//     Share2,
//     Flag
// } from "lucide-react";

// // import { createPortal } from "react-dom";

// import "./ProjectMenu.css";


// export default function ProjectMenu({

//     projectId,

//     saved = false,

//     anchorRef,

//     onClose,

//     onSave,

//     onDownload,

//     onShare,

//     onReport

// }) {

//     const menuRef = useRef(null);


//     // ==========================================
//     // CLOSE WHEN CLICKING OUTSIDE
//     // ==========================================

//     useEffect(() => {

//         const handleOutsideClick = (event) => {

//             const clickedInsideMenu =
//                 menuRef.current &&
//                 menuRef.current.contains(
//                     event.target
//                 );

//             const clickedButton =
//                 anchorRef?.current &&
//                 anchorRef.current.contains(
//                     event.target
//                 );

//             if (
//                 !clickedInsideMenu &&
//                 !clickedButton
//             ) {
//                 onClose?.();
//             }

//         };


//         document.addEventListener(
//             "mousedown",
//             handleOutsideClick
//         );


//         return () => {

//             document.removeEventListener(
//                 "mousedown",
//                 handleOutsideClick
//             );

//         };

//     }, [onClose, anchorRef]);


//     // ==========================================
//     // ESCAPE KEY
//     // ==========================================

//     useEffect(() => {

//         const handleEscape = (event) => {

//             if (event.key === "Escape") {
//                 onClose?.();
//             }

//         };


//         document.addEventListener(
//             "keydown",
//             handleEscape
//         );


//         return () => {

//             document.removeEventListener(
//                 "keydown",
//                 handleEscape
//             );

//         };

//     }, [onClose]);


//     // ==========================================
//     // MENU ACTION
//     // ==========================================

//     const handleAction = (callback) => {

//         if (callback) {
//             callback(projectId);
//         }

//         onClose?.();

//     };


//     // ==========================================
//     // MENU UI
//     // ==========================================

//         return (

//         <div
//             ref={menuRef}
//             className="project-menu"
//             onClick={(event) => {
//                 event.stopPropagation();
//             }}
//         >

//             <button
//                 type="button"
//                 className="project-menu-item"
//                 onClick={() =>
//                     handleAction(onDownload)
//                 }
//             >
//                 <Download size={17} />

//                 <span>
//                     Download
//                 </span>
//             </button>


//             <button
//                 type="button"
//                 className="project-menu-item"
//                 onClick={() =>
//                     handleAction(onSave)
//                 }
//             >
//                 <Bookmark
//                     size={17}
//                     fill={
//                         saved
//                             ? "currentColor"
//                             : "none"
//                     }
//                 />

//                 <span>
//                     {saved ? "Saved" : "Save"}
//                 </span>
//             </button>


//             <button
//                 type="button"
//                 className="project-menu-item"
//                 onClick={() =>
//                     handleAction(onShare)
//                 }
//             >
//                 <Share2 size={17} />

//                 <span>
//                     Share
//                 </span>
//             </button>


//             <div className="project-menu-divider" />


//             <button
//                 type="button"
//                 className="
//                     project-menu-item
//                     project-menu-danger
//                 "
//                 onClick={() =>
//                     handleAction(onReport)
//                 }
//             >
//                 <Flag size={17} />

//                 <span>
//                     Report
//                 </span>
//             </button>

//         </div>
//     );
// }


//     // ==========================================
//     // PORTAL
//     // ==========================================



import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from "react";

import { createPortal } from "react-dom";

import {
    Download,
    Bookmark,
    Share2,
    Flag
} from "lucide-react";

import "./ProjectMenu.css";


export default function ProjectMenu({

    projectId,

    saved = false,

    anchorRef,

    onClose,

    onSave,

    onDownload,

    onShare,

    onReport

}) {

    const menuRef = useRef(null);


    // =================================================
    // DESKTOP MENU POSITION
    // =================================================

    const [position, setPosition] = useState({
        top: 0,
        left: 0
    });


    // =================================================
    // MOBILE DETECTION
    // =================================================

    const [isMobile, setIsMobile] = useState(
        window.matchMedia(
            "(max-width: 600px)"
        ).matches
    );


    // =================================================
    // CHECK SCREEN SIZE
    // =================================================

    useEffect(() => {

        const mediaQuery =
            window.matchMedia(
                "(max-width: 600px)"
            );


        const handleMediaChange = (event) => {

            setIsMobile(
                event.matches
            );

        };


        mediaQuery.addEventListener(
            "change",
            handleMediaChange
        );


        return () => {

            mediaQuery.removeEventListener(
                "change",
                handleMediaChange
            );

        };

    }, []);


    // =================================================
    // DESKTOP POSITION
    // =================================================

    // const updatePosition = () => {

    //     if (isMobile) {
    //         return;
    //     }


    //     if (!anchorRef?.current) {
    //         return;
    //     }


    //     const buttonRect =
    //         anchorRef.current
    //             .getBoundingClientRect();


    //     const menuWidth = 180;

    //     const gap = 8;

    //     const screenPadding = 5;


    //     // ---------------------------------------------
    //     // DEFAULT POSITION
    //     // ---------------------------------------------

    //     let left =
    //         buttonRect.right -
    //         menuWidth;

    //     let top =
    //         buttonRect.bottom +
    //         gap;


    //     // ---------------------------------------------
    //     // RIGHT EDGE
    //     // ---------------------------------------------

    //     if (
    //         left + menuWidth >
    //         window.innerWidth -
    //         screenPadding
    //     ) {

    //         left =
    //             window.innerWidth -
    //             menuWidth -
    //             screenPadding;

    //     }


    //     // ---------------------------------------------
    //     // LEFT EDGE
    //     // ---------------------------------------------

    //     if (
    //         left <
    //         screenPadding
    //     ) {

    //         left =
    //             screenPadding;

    //     }


    //     // ---------------------------------------------
    //     // MENU HEIGHT
    //     // ---------------------------------------------

    //     const menuHeight = 210;


    //     // ---------------------------------------------
    //     // SHOW ABOVE BUTTON
    //     // ---------------------------------------------

    //     if (
    //         top + menuHeight >
    //         window.innerHeight -
    //         screenPadding
    //     ) {

    //         top =
    //             buttonRect.top -
    //             menuHeight -
    //             gap;

    //     }


    //     // ---------------------------------------------
    //     // TOP EDGE
    //     // ---------------------------------------------

    //     if (
    //         top <
    //         screenPadding
    //     ) {

    //         top =
    //             screenPadding;

    //     }


    //     setPosition({
    //         top,
    //         left
    //     });

    // };
const updatePosition = () => {

    if (isMobile) {
        return;
    }

    const button =
        anchorRef?.current;

    const menu =
        menuRef.current;


    if (!button || !menu) {
        return;
    }


    const buttonRect =
        button.getBoundingClientRect();


    const menuWidth =
        menu.offsetWidth;


    const menuHeight =
        menu.offsetHeight;


    const gap = 8;

    const screenPadding = 10;


    // ==========================================
    // DEFAULT POSITION
    // ==========================================

    let left =
        buttonRect.right -
        menuWidth;

    let top =
        buttonRect.bottom +
        gap;


    // ==========================================
    // RIGHT EDGE
    // ==========================================

    if (
        left + menuWidth >
        window.innerWidth -
        screenPadding
    ) {

        left =
            window.innerWidth -
            menuWidth -
            screenPadding;

    }


    // ==========================================
    // LEFT EDGE
    // ==========================================

    if (
        left <
        screenPadding
    ) {

        left =
            screenPadding;

    }


    // ==========================================
    // SHOW ABOVE BUTTON
    // ==========================================

    if (
        top + menuHeight >
        window.innerHeight -
        screenPadding
    ) {

        top =
            buttonRect.top -
            menuHeight -
            gap;

    }


    // ==========================================
    // TOP EDGE
    // ==========================================

    if (
        top <
        screenPadding
    ) {

        top =
            screenPadding;

    }


    // ==========================================
    // DIRECT DOM UPDATE
    // ==========================================

    menu.style.left =
        `${left}px`;

    menu.style.top =
        `${top}px`;

};

    // =================================================
    // INITIAL POSITION
    // =================================================

    useLayoutEffect(() => {

        if (isMobile) {
            return;
        }


        updatePosition();

    }, [isMobile]);


    // =================================================
    // DESKTOP SCROLL / RESIZE
    //
    // ALSO CLOSE WHEN BUTTON IS MORE THAN
    // 20% OUTSIDE THE VIEWPORT
    // =================================================

    // useEffect(() => {

    //     if (isMobile) {
    //         return;
    //     }


    //     const handlePositionUpdate = () => {

    //         const button =
    //             anchorRef?.current;


    //         if (!button) {
    //             return;
    //         }


    //         const rect =
    //             button.getBoundingClientRect();


    //         // -----------------------------------------
    //         // CALCULATE VISIBLE AREA
    //         // -----------------------------------------

    //         const viewportWidth =
    //             window.innerWidth;

    //         const viewportHeight =
    //             window.innerHeight;


    //         const visibleLeft =
    //             Math.max(
    //                 0,
    //                 rect.left
    //             );


    //         const visibleRight =
    //             Math.min(
    //                 viewportWidth,
    //                 rect.right
    //             );


    //         const visibleTop =
    //             Math.max(
    //                 0,
    //                 rect.top
    //             );


    //         const visibleBottom =
    //             Math.min(
    //                 viewportHeight,
    //                 rect.bottom
    //             );


    //         const visibleWidth =
    //             Math.max(
    //                 0,
    //                 visibleRight -
    //                 visibleLeft
    //             );


    //         const visibleHeight =
    //             Math.max(
    //                 0,
    //                 visibleBottom -
    //                 visibleTop
    //             );


    //         const totalArea =
    //             rect.width *
    //             rect.height;


    //         const visibleArea =
    //             visibleWidth *
    //             visibleHeight;


    //         const visibilityRatio =
    //             totalArea > 0
    //                 ? visibleArea /
    //                   totalArea
    //                 : 0;


    //         // -----------------------------------------
    //         // MORE THAN 20% OUTSIDE
    //         // -----------------------------------------

    //         if (
    //             visibilityRatio <
    //             0.5
    //         ) {

    //             onClose?.();

    //             return;

    //         }


    //         // -----------------------------------------
    //         // KEEP MENU NEXT TO BUTTON
    //         // -----------------------------------------

    //         updatePosition();

    //     };


    //     window.addEventListener(
    //         "resize",
    //         handlePositionUpdate
    //     );


    //     window.addEventListener(
    //         "scroll",
    //         handlePositionUpdate,
    //         true
    //     );


    //     return () => {

    //         window.removeEventListener(
    //             "resize",
    //             handlePositionUpdate
    //         );


    //         window.removeEventListener(
    //             "scroll",
    //             handlePositionUpdate,
    //             true
    //         );

    //     };

    // }, [
    //     isMobile,
    //     anchorRef,
    //     onClose
    // ]);
    useEffect(() => {

    if (isMobile) {
        return;
    }


    let animationFrame = null;


    const handleScroll = () => {

        if (animationFrame) {
            return;
        }


        animationFrame =
            requestAnimationFrame(() => {

                animationFrame = null;

                updatePosition();

            });

    };


    window.addEventListener(
        "scroll",
        handleScroll,
        {
            capture: true,
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        handleScroll,
        {
            passive: true
        }
    );


    // Initial position
    updatePosition();


    return () => {

        window.removeEventListener(
            "scroll",
            handleScroll,
            true
        );


        window.removeEventListener(
            "resize",
            handleScroll
        );


        if (animationFrame) {

            cancelAnimationFrame(
                animationFrame
            );

        }

    };

}, [
    isMobile
]);


useEffect(() => {

    if (isMobile) {
        return;
    }


    const button =
        anchorRef?.current;


    if (!button) {
        return;
    }


    const observer =
        new IntersectionObserver(

            (entries) => {

                const entry =
                    entries[0];


                /*
                 * Less than 80% visible means
                 * more than 20% is outside viewport.
                 */

                if (
                    entry.intersectionRatio < 0.8
                ) {

                    onClose?.();

                }

            },

            {
                root: null,

                threshold: [
                    0,
                    0.8,
                    1
                ]

            }

        );


    observer.observe(button);


    return () => {

        observer.disconnect();

    };

}, [
    isMobile,
    anchorRef,
    onClose
]);

    // =================================================
    // MOBILE BODY SCROLL LOCK
    // =================================================

    useEffect(() => {

        if (!isMobile) {
            return;
        }


        document.body.style.overflow =
            "hidden";


        return () => {

            document.body.style.overflow =
                "";

        };

    }, [isMobile]);


    // =================================================
    // CLICK OUTSIDE
    // =================================================

    useEffect(() => {

        const handleOutsideClick = (event) => {

            const menu =
                menuRef.current;

            const button =
                anchorRef?.current;


            // -----------------------------------------
            // CLICK INSIDE MENU
            // -----------------------------------------

            if (
                menu &&
                menu.contains(
                    event.target
                )
            ) {

                return;

            }


            // -----------------------------------------
            // CLICK THREE-DOT BUTTON
            // -----------------------------------------

            if (
                button &&
                button.contains(
                    event.target
                )
            ) {

                return;

            }


            // -----------------------------------------
            // OUTSIDE
            // -----------------------------------------

            onClose?.();

        };


        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );


        return () => {

            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );

        };

    }, [
        onClose,
        anchorRef
    ]);


    // =================================================
    // ESCAPE
    // =================================================

    useEffect(() => {

        const handleEscape = (event) => {

            if (
                event.key === "Escape"
            ) {

                onClose?.();

            }

        };


        document.addEventListener(
            "keydown",
            handleEscape
        );


        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, [onClose]);


    // =================================================
    // MENU ACTION
    // =================================================

    const handleAction = (callback) => {

        callback?.(projectId);

        onClose?.();

    };


    // =================================================
    // RENDER
    // =================================================

    return createPortal(

        <div
            className={
                isMobile
                    ? "project-menu-mobile-overlay"
                    : "project-menu-desktop-overlay"
            }
        >

            {/* =========================================
                MOBILE BACKDROP
            ========================================= */}

            {isMobile && (

                <div
                    className="project-menu-mobile-backdrop"
                    onClick={onClose}
                />

            )}


            {/* =========================================
                MENU
            ========================================= */}

            <div
                ref={menuRef}

                className={
                    isMobile
                        ? "project-menu project-menu-mobile"
                        : "project-menu"
                }

                style={
                    isMobile
                        ? {}
                        : {
                            top:
                                `${position.top}px`,

                            left:
                                `${position.left}px`
                        }
                }

                onMouseDown={(event) => {

                    event.stopPropagation();

                }}
            >

                {/* =====================================
                    DOWNLOAD
                ===================================== */}

                <button
                    type="button"
                    className="project-menu-item"
                    onClick={() =>
                        handleAction(
                            onDownload
                        )
                    }
                >

                    <Download
                        size={17}
                    />

                    <span>
                        Download
                    </span>

                </button>


                {/* =====================================
                    SAVE
                ===================================== */}

                <button
                    type="button"
                    className="project-menu-item"
                    onClick={() =>
                        handleAction(
                            onSave
                        )
                    }
                >

                    <Bookmark
                        size={17}
                        fill={
                            saved
                                ? "currentColor"
                                : "none"
                        }
                    />

                    <span>
                        {
                            saved
                                ? "Saved"
                                : "Save"
                        }
                    </span>

                </button>


                {/* =====================================
                    SHARE
                ===================================== */}

                <button
                    type="button"
                    className="project-menu-item"
                    onClick={() =>
                        handleAction(
                            onShare
                        )
                    }
                >

                    <Share2
                        size={17}
                    />

                    <span>
                        Share
                    </span>

                </button>


                {/* =====================================
                    DIVIDER
                ===================================== */}

                <div
                    className="project-menu-divider"
                />


                {/* =====================================
                    REPORT
                ===================================== */}

                <button
                    type="button"
                    className="
                        project-menu-item
                        project-menu-danger
                    "
                    onClick={() =>
                        handleAction(
                            onReport
                        )
                    }
                >

                    <Flag
                        size={17}
                    />

                    <span>
                        Report
                    </span>

                </button>

            </div>

        </div>,

        document.body

    );

}
    

