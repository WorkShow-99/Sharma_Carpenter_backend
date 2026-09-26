// import React, {
//     useEffect,
//     useLayoutEffect,
//     useRef,
//     useState,
// } from "react";

// import { createPortal } from "react-dom";

// import {
//     Share2,
//     Download,
//     FolderPlus,
//     Trash2,
//     Flag
// } from "lucide-react";

// import "./MenuProjectOverlay.css";


// export default function MenuProjectOverlay({

//     project,

//     anchorRef,

//     onClose,

//     onShare,

//     onDownload,

//     onOrganize,

//     onRemove,

//     onReport

// }) {

//     const menuRef = useRef(null);


//     const [position, setPosition] = useState({
//         top: 0,
//         left: 0
//     });

// const [isMobile, setIsMobile] = useState(
//     window.matchMedia("(max-width: 600px)").matches
// );
//     // ==========================================
//     // POSITION MENU NEXT TO BUTTON
//     // ==========================================

//     const updatePosition = () => {

//         if (!anchorRef?.current) {
//             return;
//         }


//         const buttonRect =
//             anchorRef.current.getBoundingClientRect();


//         const menuWidth = 190;

//         const gap = 8;

//         const screenPadding = 10;


//         // --------------------------------------
//         // Default position
//         // --------------------------------------

//         let left =
//             buttonRect.right - menuWidth;

//         let top =
//             buttonRect.bottom + gap;


//         // --------------------------------------
//         // Prevent going outside RIGHT
//         // --------------------------------------

//         if (
//             left + menuWidth >
//             window.innerWidth - screenPadding
//         ) {

//             left =
//                 window.innerWidth -
//                 menuWidth -
//                 screenPadding;

//         }


//         // --------------------------------------
//         // Prevent going outside LEFT
//         // --------------------------------------

//         if (left < screenPadding) {

//             left = screenPadding;

//         }


//         // --------------------------------------
//         // Approximate menu height
//         // --------------------------------------

//         const menuHeight = 210;


//         // --------------------------------------
//         // If no space below,
//         // put menu ABOVE button
//         // --------------------------------------

//         if (
//             top + menuHeight >
//             window.innerHeight - screenPadding
//         ) {

//             top =
//                 buttonRect.top -
//                 menuHeight -
//                 gap;

//         }


//         // --------------------------------------
//         // Prevent going outside TOP
//         // --------------------------------------

//         if (top < screenPadding) {

//             top = screenPadding;

//         }


//         setPosition({
//             top,
//             left
//         });

//     };

// useEffect(() => {

//     const mediaQuery =
//         window.matchMedia("(max-width: 600px)");


//     const handleMediaChange = (event) => {

//         setIsMobile(event.matches);

//     };


//     mediaQuery.addEventListener(
//         "change",
//         handleMediaChange
//     );


//     return () => {

//         mediaQuery.removeEventListener(
//             "change",
//             handleMediaChange
//         );

//     };

// }, []);
//     // ==========================================
//     // INITIAL POSITION
//     // ==========================================

//     // useLayoutEffect(() => {

//     //     updatePosition();

//     // }, []);

//     useLayoutEffect(() => {

//     if (isMobile) {
//         return;
//     }

//     updatePosition();

// }, [isMobile]);

//     // ==========================================
//     // KEEP MENU WITH BUTTON
//     // ==========================================

//     // useEffect(() => {

//     //     const handlePositionUpdate = () => {

//     //         updatePosition();

//     //     };


//     //     window.addEventListener(
//     //         "resize",
//     //         handlePositionUpdate
//     //     );


//     //     window.addEventListener(
//     //         "scroll",
//     //         handlePositionUpdate,
//     //         true
//     //     );


//     //     return () => {

//     //         window.removeEventListener(
//     //             "resize",
//     //             handlePositionUpdate
//     //         );


//     //         window.removeEventListener(
//     //             "scroll",
//     //             handlePositionUpdate,
//     //             true
//     //         );

//     //     };

//     // }, []);

// useEffect(() => {

//     if (isMobile) {
//         return;
//     }


//     const handlePositionUpdate = () => {

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

// }, [isMobile]);
//     // ==========================================
//     // CLICK OUTSIDE
//     // ==========================================

//     useEffect(() => {

//         const handleOutsideClick = (event) => {

//             const menu =
//                 menuRef.current;

//             const button =
//                 anchorRef?.current;


//             // Click inside menu
//             if (
//                 menu &&
//                 menu.contains(event.target)
//             ) {

//                 return;

//             }


//             // Click on the three-dot button
//             if (
//                 button &&
//                 button.contains(event.target)
//             ) {

//                 return;

//             }


//             // Everything else = outside
//             onClose?.();

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
//     // ESCAPE
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

//         callback?.(project);

//         // CLOSE AFTER OPTION CLICK
//         onClose?.();

//     };


//     // ==========================================
//     // RENDER
//     // ==========================================

//     return createPortal(

//         <div
//             ref={menuRef}
//             className="menu-project-container"
//             style={{
//                 top: `${position.top}px`,
//                 left: `${position.left}px`
//             }}
//             onMouseDown={(event) => {
//                 event.stopPropagation();
//             }}
//         >

//             {/* SHARE */}

//             <button
//                 type="button"
//                 onClick={() =>
//                     handleAction(onShare)
//                 }
//             >

//                 <Share2 size={18} />

//                 <span>
//                     Share
//                 </span>

//             </button>


//             {/* DOWNLOAD */}

//             <button
//                 type="button"
//                 onClick={() =>
//                     handleAction(onDownload)
//                 }
//             >

//                 <Download size={18} />

//                 <span>
//                     Download
//                 </span>

//             </button>


//             {/* ORGANIZE */}

//             <button
//                 type="button"
//                 onClick={() =>
//                     handleAction(onOrganize)
//                 }
//             >

//                 <FolderPlus size={18} />

//                 <span>
//                     Organize
//                 </span>

//             </button>


//             {/* DIVIDER */}

//             <div className="menu-project-divider" />


//             {/* REMOVE */}

//             <button
//                 type="button"
//                 className="menu-project-danger"
//                 onClick={() =>
//                     handleAction(onRemove)
//                 }
//             >

//                 <Trash2 size={18} />

//                 <span>
//                     Remove
//                 </span>

//             </button>


//             {/* REPORT */}

//             <button
//                 type="button"
//                 className="menu-project-danger"
//                 onClick={() =>
//                     handleAction(onReport)
//                 }
//             >

//                 <Flag size={18} />

//                 <span>
//                     Report
//                 </span>

//             </button>

//         </div>,

//         document.body

//     );

// }


import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from "react";

import { createPortal } from "react-dom";

import {
    Share2,
    Download,
    FolderPlus,
    Trash2,
    Flag
} from "lucide-react";

import "./MenuProjectOverlay.css";


export default function MenuProjectOverlay({

    project,

    anchorRef,

    onClose,

    onShare,

    onDownload,

    onOrganize,

    onRemove,

    onReport

}) {

    const menuRef = useRef(null);


    // ==========================================
    // DESKTOP MENU POSITION
    // ==========================================

    const [position, setPosition] = useState({
        top: 0,
        left: 0
    });


    // ==========================================
    // MOBILE DETECTION
    // ==========================================

    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 600px)").matches
    );


    // ==========================================
    // CHECK SCREEN SIZE
    // ==========================================

    useEffect(() => {

        const mediaQuery =
            window.matchMedia("(max-width: 600px)");


        const handleMediaChange = (event) => {

            setIsMobile(event.matches);

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


    // ==========================================
    // CALCULATE DESKTOP POSITION
    // ==========================================

    const updatePosition = () => {

        // Do not calculate position on mobile
        if (isMobile) {
            return;
        }


        if (!anchorRef?.current) {
            return;
        }


        const buttonRect =
            anchorRef.current.getBoundingClientRect();


        const menuWidth = 190;

        const gap = 8;

        const screenPadding = 10;


        // ======================================
        // DEFAULT POSITION
        // ======================================

        let left =
            buttonRect.right - menuWidth;

        let top =
            buttonRect.bottom + gap;


        // ======================================
        // PREVENT RIGHT OVERFLOW
        // ======================================

        if (
            left + menuWidth >
            window.innerWidth - screenPadding
        ) {

            left =
                window.innerWidth -
                menuWidth -
                screenPadding;

        }


        // ======================================
        // PREVENT LEFT OVERFLOW
        // ======================================

        if (left < screenPadding) {

            left = screenPadding;

        }


        // ======================================
        // APPROXIMATE MENU HEIGHT
        // ======================================

        const menuHeight = 210;


        // ======================================
        // SHOW ABOVE BUTTON IF NEEDED
        // ======================================

        if (
            top + menuHeight >
            window.innerHeight - screenPadding
        ) {

            top =
                buttonRect.top -
                menuHeight -
                gap;

        }


        // ======================================
        // PREVENT TOP OVERFLOW
        // ======================================

        if (top < screenPadding) {

            top = screenPadding;

        }


        setPosition({
            top,
            left
        });

    };


    // ==========================================
    // INITIAL DESKTOP POSITION
    // ==========================================

    useLayoutEffect(() => {

        if (isMobile) {
            return;
        }

        updatePosition();

    }, [isMobile]);


    // ==========================================
    // KEEP DESKTOP MENU WITH BUTTON
    // ==========================================

    // useEffect(() => {

    //     if (isMobile) {
    //         return;
    //     }


    //     const handlePositionUpdate = () => {

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

    // }, [isMobile]);


    useEffect(() => {

    if (isMobile) {
        return;
    }


    const handlePositionUpdate = () => {

        const button =
            anchorRef?.current;


        // --------------------------------------
        // If button no longer exists
        // --------------------------------------

        if (!button) {
            return;
        }


        const rect =
            button.getBoundingClientRect();


        // --------------------------------------
        // Calculate visible portion of button
        // --------------------------------------

        const viewportWidth =
            window.innerWidth;

        const viewportHeight =
            window.innerHeight;


        const visibleLeft =
            Math.max(
                0,
                rect.left
            );

        const visibleRight =
            Math.min(
                viewportWidth,
                rect.right
            );

        const visibleTop =
            Math.max(
                0,
                rect.top
            );

        const visibleBottom =
            Math.min(
                viewportHeight,
                rect.bottom
            );


        const visibleWidth =
            Math.max(
                0,
                visibleRight - visibleLeft
            );

        const visibleHeight =
            Math.max(
                0,
                visibleBottom - visibleTop
            );


        const totalArea =
            rect.width * rect.height;


        const visibleArea =
            visibleWidth * visibleHeight;


        const visibilityRatio =
            totalArea > 0
                ? visibleArea / totalArea
                : 0;


        // --------------------------------------
        // Close menu if more than 20%
        // of button is outside viewport
        // --------------------------------------

        if (visibilityRatio < 0.90) {

            onClose?.();

            return;

        }


        // --------------------------------------
        // Button is sufficiently visible
        // Keep menu positioned correctly
        // --------------------------------------

        updatePosition();

    };


    // ------------------------------------------
    // RESIZE
    // ------------------------------------------

    window.addEventListener(
        "resize",
        handlePositionUpdate
    );


    // ------------------------------------------
    // SCROLL
    // ------------------------------------------

    window.addEventListener(
        "scroll",
        handlePositionUpdate,
        true
    );


    // ------------------------------------------
    // CLEANUP
    // ------------------------------------------

    return () => {

        window.removeEventListener(
            "resize",
            handlePositionUpdate
        );


        window.removeEventListener(
            "scroll",
            handlePositionUpdate,
            true
        );

    };

}, [
    isMobile,
    anchorRef,
    onClose
]);



    // ==========================================
    // PREVENT BACKGROUND SCROLL ON MOBILE
    // ==========================================

    useEffect(() => {

        if (!isMobile) {
            return;
        }


        document.body.style.overflow = "hidden";


        return () => {

            document.body.style.overflow = "";

        };

    }, [isMobile]);


    // ==========================================
    // CLICK OUTSIDE
    // ==========================================

    useEffect(() => {

        const handleOutsideClick = (event) => {

            const menu =
                menuRef.current;

            const button =
                anchorRef?.current;


            // ==================================
            // CLICK INSIDE MENU
            // ==================================

            if (
                menu &&
                menu.contains(event.target)
            ) {

                return;

            }


            // ==================================
            // CLICK THREE-DOT BUTTON
            // ==================================

            if (
                button &&
                button.contains(event.target)
            ) {

                return;

            }


            // ==================================
            // CLICK OUTSIDE
            // ==================================

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

    }, [onClose, anchorRef]);


    // ==========================================
    // ESCAPE KEY
    // ==========================================

    useEffect(() => {

        const handleEscape = (event) => {

            if (event.key === "Escape") {

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


    // ==========================================
    // MENU ACTION
    // ==========================================

    const handleAction = (callback) => {

        callback?.(project);

        // Close after selecting an option
        onClose?.();

    };


    // ==========================================
    // RENDER
    // ==========================================

    return createPortal(

        <div
            className={
                isMobile
                    ? "menu-project-mobile-overlay"
                    : "menu-project-desktop-overlay"
            }
        >

            {/* ==================================
                MOBILE BACKDROP
                ================================== */}

            {isMobile && (

                <div
                    className="menu-project-mobile-backdrop"
                    onClick={onClose}
                />

            )}


            {/* ==================================
                MENU
                ================================== */}

            <div
                ref={menuRef}

                className={
                    isMobile
                        ? "menu-project-container menu-project-mobile"
                        : "menu-project-container"
                }

                style={
                    isMobile
                        ? {}
                        : {
                            top: `${position.top}px`,
                            left: `${position.left}px`
                        }
                }

                onMouseDown={(event) => {

                    event.stopPropagation();

                }}
            >

                {/* ==================================
                    SHARE
                    ================================== */}

                <button
                    type="button"
                    onClick={() =>
                        handleAction(onShare)
                    }
                >

                    <Share2 size={18} />

                    <span>
                        Share
                    </span>

                </button>


                {/* ==================================
                    DOWNLOAD
                    ================================== */}

                <button
                    type="button"
                    onClick={() =>
                        handleAction(onDownload)
                    }
                >

                    <Download size={18} />

                    <span>
                        Download
                    </span>

                </button>


                {/* ==================================
                    ORGANIZE
                    ================================== */}

                <button
                    type="button"
                    onClick={() =>
                        handleAction(onOrganize)
                    }
                >

                    <FolderPlus size={18} />

                    <span>
                        Organize
                    </span>

                </button>


                {/* ==================================
                    DIVIDER
                    ================================== */}

                <div className="menu-project-divider" />


                {/* ==================================
                    REMOVE
                    ================================== */}

                <button
                    type="button"
                    className="menu-project-danger"
                    onClick={() =>
                        handleAction(onRemove)
                    }
                >

                    <Trash2 size={18} />

                    <span>
                        Remove
                    </span>

                </button>


                {/* ==================================
                    REPORT
                    ================================== */}

                <button
                    type="button"
                    className="menu-project-danger"
                    onClick={() =>
                        handleAction(onReport)
                    }
                >

                    <Flag size={18} />

                    <span>
                        Report
                    </span>

                </button>

            </div>

        </div>,

        document.body

    );

}