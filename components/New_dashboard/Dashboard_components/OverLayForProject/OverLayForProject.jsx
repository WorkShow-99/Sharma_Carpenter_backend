import { useNavigate, useParams } from "react-router-dom";

import OverLay_inner from "./OverLay_inner";

import { useEffect } from "react";



export default function OverlayForProject({ context }) {

    const { projectId } = useParams();

    const id =
        context ?? projectId;


    console.log(
        "OUTER LAYER:",
        id
    );


    useEffect(() => {

        document.body.style.overflow = "hidden";


        return () => {

            document.body.style.overflow = "";

        };

    }, []);


    const navigate =
        useNavigate(-1);


    return (

        <div

            onClick={() => navigate(-1)}

            className="overlayyy"

            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,.45)",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
            }}

        >

            <OverLay_inner
                Project_id={id}
            />

        </div>

    );

}