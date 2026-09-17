// import "./DashboardProject.css";

// export default function MyProjects() {

//     // Temporary values
//     const isProfessional = true;

//     const projects = [];

//     if (!isProfessional) {

//         return (

//             <section className="empty-projects">

//                 <h2>

//                     Become a Professional

//                 </h2>

//                 <p>

//                     Create a professional account to showcase your work and start receiving customer enquiries.

//                 </p>

//                 <button>

//                     Become Professional

//                 </button>

//             </section>

//         );

//     }

//     if (projects.length === 0) {

//         return (

//             <section className="empty-projects">

//                 <h2>

//                     Start Building Your Portfolio

//                 </h2>

//                 <p>

//                     Upload your first project and let customers discover your skills.

//                 </p>

//                 <button>

//                     Add Your First Project

//                 </button>

//             </section>

//         );

//     }

//     return (

//         <section className="my-projects">

//             <div className="projects-header">

//                 <h2>

//                     My Projects

//                 </h2>

//                 <button>

//                     + Add Project

//                 </button>

//             </div>

//             {/* Project Grid will come here */}

//         </section>

//     );

// }

import "./DashboardProject.css";

import {
    FolderOpen,
    Plus,
    Image,
    FileText,
    Briefcase
} from "lucide-react";

export default function MyProjects() {

    const isProfessional = true;

    const projects = [];

    if (!isProfessional) {

        return (

            <section className="projects-empty">

                <Briefcase
                    size={64}
                    strokeWidth={1.5}
                />

                <h2>

                    Become a Professional

                </h2>

                <p>

                    Upgrade your account to showcase your work,
                    receive customer enquiries and grow your business.

                </p>

                <button>

                    Become Professional

                </button>

            </section>

        );

    }

    if (projects.length === 0) {

        return (

            <section className="projects-empty">

                <FolderOpen
                    size={64}
                    strokeWidth={1.5}
                />

                <h2>

                    Start Building Your Portfolio

                </h2>

                <p>

                    Upload your first project and let customers
                    discover your craftsmanship.

                </p>

                <button>

                    <Plus size={18}/>

                    Add Your First Project

                </button>

                <div className="projects-steps">

                    <div className="step-card">

                        <Image size={26}/>

                        <h4>

                            Upload Photos

                        </h4>

                    </div>

                    <div className="step-card">

                        <FileText size={26}/>

                        <h4>

                            Add Details

                        </h4>

                    </div>

                    <div className="step-card">

                        <Briefcase size={26}/>

                        <h4>

                            Get Customers

                        </h4>

                    </div>

                </div>

            </section>

        );

    }

    return (

        <section>

            Projects Grid

        </section>

    );

}