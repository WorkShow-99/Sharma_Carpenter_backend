

import ProjectDirectories from "../ProjectDirectory/ProjectDirectory";
import UnorganizedProjects from "../ProjectUnorganized/ProjectUnorganized";

export const DirectoryUnorganizedHolder = () => {

   return (
      <div className="directory-unorganized-holder">
         
         <ProjectDirectories
                       
                    />

       <UnorganizedProjects />
            
        </div>

// <>

//                     {/* =================================
//                         DIRECTORIES
//                     ================================= */}

//                     <ProjectDirectories
//                         onDirectoryClick={
//                             handleDirectoryClick
//                         }
//                         setDirectoryMode={
//                             setDirectoryMode
//                         }
//                     />


//                     {/* =================================
//                         UNORGANIZED PROJECTS
//                     ================================= */}

//                     <UnorganizedProjects />

//                 </>

    );
};