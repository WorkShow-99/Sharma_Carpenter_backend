
import {FirstSectionsNonLogin} from "./Sections_NonLogin/First_Sections_NonLogin";
import {SecondSectionsNonLogin} from "./Sections_NonLogin/Second_Sections_NonLogin";
import "./NonLoginPage.css";
import { useState } from "react";
export const NonLoginPage = () => {
  const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    console.log("position", position);
  return (

    <div className="main-backgroundd   w-full h-screen flex flex-col  bg-gray-100"
    
    onMouseMove={(e) => {

                const rect = e.currentTarget.getBoundingClientRect();

                setPosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });

            }}

            style={{
                "--x": `${position.x}px`,
                "--y": `${position.y}px`,
            }}
            >

     

        <FirstSectionsNonLogin />
        <SecondSectionsNonLogin />
        <SecondSectionsNonLogin />



    </div>

  );

};