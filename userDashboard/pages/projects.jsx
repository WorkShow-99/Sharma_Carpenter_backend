
import {useState, useEffect } from "react";
import { useAuth } from "../../context/auth_context";
import userImage from "../../src/assets/images/user.png";
import {AddProjectLayer} from "./add_project_layer";


export const Projects_view = () => {

    const [onLayer, setonLayer] = useState(false);

    const hanndleAddProject = () => {
        console.log("Add Project Clicked");


    }

  return (
    <>
    <div className="relative flex w-full flex-col gap-6 rounded-lg border bg-white p-4 shadow-md sm:p-6 md:flex-row md:items-center md:gap-10">
        add project layer
        <button onClick={() => {setonLayer(true); console.log("Add Project Clicked");}} className="absolute right-4 top-4 rounded-md bg-blue-600 px-4 py-2
         text-black transition-colors hover:bg-blue-700">
          Add Project
        </button>
        <img src={userImage} alt="User" className="h-auto w-full max-w-[100px] self-center object-contain sm:max-w-[110px] md:w-1/7  md:max-w-none"/>

    
        <div className="text-center md:text-left">
            <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Projectsasfadsf Page</h1>
            <p>This is where you can manage your projects.</p>
        </div>
      
    </div>
    <AddProjectLayer onLayer={onLayer} setonLayer={setonLayer} />
    </>
  );
}
