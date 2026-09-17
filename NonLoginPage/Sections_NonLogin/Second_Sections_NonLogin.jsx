

import './Second_Sections_NonLogin.css'

export const SecondSectionsNonLogin = () => {



    const featuredProjects = [

    {
        title: "Carpentry",

        image:
        "https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=1200&q=80"
    },

    {
        title: "Electrical Work",

        image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
    },

    {
        title: "Fabrication",

        image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    },

    {
        title: "Construction",

        image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    },

    {
        title: "Interior Design",

        image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    },

    {
        title: "Plumbing",

        image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
    },

    {
        title: "Glass Work",

        image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
    },

    {
        title: "Mechanic",

        image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    }

];

  return (
    
<>

   <section className="featured-section pt-20">

            <div className="featured-header">

                <h2>
                    Showcase Your Craft
                </h2>

                <p>
                    Discover projects from skilled professionals.
                </p>

            </div>

            <div className="featured-grid">

                {featuredProjects.map((project, index) => (
                    <div className="card" key={index}>
                        <img
                            src={project.image}
                            alt={project.title}
                        />
                    </div>
                ))}

                

            </div>

        </section>



</>        
    



)}