
import {Divs_of_icons} from "./Divs_of_Icons/Divs_of_icons";
import {NavBar_NonLogin} from "../NavBar_NonLogin/NavBar_NonLogin";
export const FirstSectionsNonLogin = () => {
    

const things = [

    {
        img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
        alt: "Electrician Work",
        title: "Electrical",

        top: "30%",
        left: "10%",

        width: 220,
        height: 150,

        rotate: "-6deg"
    },

    // {
    //     img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    //     alt: "Construction Work",
    //     title: "Construction",

    //     top: "30%",
    //     left: "16%",

    //     width: 180,
    //     height: 260,

    //     rotate: "4deg"
    // },

    {
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
        alt: "Glass Work",
        title: "Glass Work",

        top: "65%",
        left: "12%",

        width: 240,
        height: 170,

        rotate: "-4deg"
    },

    {
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
        alt: "Fabrication Work",
        title: "Fabrication",

        top: "18%",
        left: "28%",

        width: 160,
        height: 160,

        rotate: "8deg"
    },

    

    {
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
        alt: "Civil Work",
        title: "Civil Work",

        top: "22%",
        left: "68%",

        width: 250,
        height: 180,

        rotate: "-5deg"
    },
    {
        type: "video",

        video:
            "https://www.w3schools.com/html/mov_bbb.mp4",
        alt: "Carpenter Video",

        top: "75%",
        left: "58%",

        width: 220,
        height: 260,

        rotate: "4deg"
    },

    // {
    //     img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    //     alt: "Plumbing Work",
    //     title: "Plumbing",

    //     top: "40%",
    //     left: "80%",

    //     width: 170,
    //     height: 260,

    //     rotate: "7deg"
    // },

    {
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        alt: "Interior Design",
        title: "Interior Design",

        top: "68%",
        left: "68%",

        width: 260,
        height: 180,

        rotate: "-8deg"
    },

    // {
    //     img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    //     alt: "Painter Work",
    //     title: "Painting",

    //     top: "55%",
    //     left: "78%",

    //     width: 180,
    //     height: 180,

    //     rotate: "4deg"
    // },

    {
        img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
        alt: "Carpenter Work",
        title: "Carpentry",

        top: "75%",
        left: "28%",

        width: 210,
        height: 150,

        rotate: "-7deg"
    },

    // {
    //     img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    //     alt: "Mechanic Work",
    //     title: "Mechanic",

    //     top: "5%",
    //     left: "82%",

    //     width: 160,
    //     height: 220,

    //     rotate: "5deg"
    // }

];


  return (
    <div className="w-screen bg-transparent min-h-screen h-auto flex flex-col first-section-non-login overflow-hidden pb-8 ">

        <NavBar_NonLogin />

        <Divs_of_icons things={things} />

         <div className="hero-center  my-auto mx-auto  font-thin self-center text-center items-center flex flex-col justify-center gap-4">
        <h1 className="text-4xl font-thin text-gray-800">
            Showcase Your Craft
        </h1>

        <p>
            Get discovered by customers.
        </p>
    </div>





    </div>
    );

};
