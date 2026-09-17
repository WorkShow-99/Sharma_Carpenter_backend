import { useEffect, useState } from "react";

import {

    Heart,

    Bookmark,

    Share2,

    MoreHorizontal

} from "lucide-react";

import "./OverlayHeader.css";

export default function OverlayHeader(){

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    
    useEffect(() => {
        const updateScreenSize = () => setIsSmallScreen(window.innerWidth < 576);

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return(

        <header
            className="overlay-header"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem",
                flexWrap: "wrap",
            }}
        >

            {/* <button
                onClick={()=>navigate("/explore")}
                aria-label="Go back"
                title="Go back"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "0 0 auto",
                }}
            >

                <ArrowLeft size={20}/>

            </button>

            <h2 style={{ flex: "1 1 auto", minWidth: 0, margin: 0 }}>

                Project Details

            </h2> */}

            <div
                className="overlay-actions flex items-center justify-content-start justify-start flex-start gap-10 flex-wrap "
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.2rem",
                    flexWrap: "wrap",
                    justifyContent: isSmallScreen ? "center" : "flex-end",
                }}
            >

                <button aria-label="Like" title="Like">

                    <Heart size={22}/>

                </button>

                <button aria-label="Save" title="Save">

                    <Bookmark size={22}/>

                </button>

                <button aria-label="Share" title="Share">

                    <Share2 size={22}/>

                </button>

                <button aria-label="More options" title="More options">

                    <MoreHorizontal size={18}/>

                </button>

            </div>

        </header>

    )

}