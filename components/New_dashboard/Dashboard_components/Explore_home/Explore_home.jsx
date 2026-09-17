

import MasonryGrid from "../ProjectCard/MasonryGrid";
import {
    useEffect
    ,useRef
} from "react";

// import {
//     useEffect,
//     useRef
// } from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    fetchProjectFeed
} from "../../../../src/redux_store/Project_redux/ProjectFeed_actions";

// import MasonryGrid
//     from "../ProjectCard/MasonryGrid";




// export const dummyProjects = [

//     {
//         projectId:"2",

//         projectImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Rahul Sharma",

//         ownerSlug:"rahul-sharma",

//         ownerImage:"https://i.pravatar.cc/150?img=2",

//         ownerType:"Electrician",

//         companyName:"Sharma Electricals",

//         location:"Noida",

//         likes:90,

//         views:1800,
//     },

//     {
//         projectId:"3",

//         projectImage:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Amit Verma",

//         ownerSlug:"amit-verma",

//         ownerImage:"https://i.pravatar.cc/150?img=3",

//         ownerType:"Carpenter",

//         companyName:"Verma Furniture Works",

//         location:"Delhi",

//         likes:245,

//         views:4200,
//     },

//     {
//         projectId:"4",

//         projectImage:"https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Sanjay Kumar",

//         ownerSlug:"sanjay-kumar",

//         ownerImage:"https://i.pravatar.cc/150?img=4",

//         ownerType:"Interior Designer",

//         companyName:"SK Interior Solutions",

//         location:"Gurgaon",

//         likes:340,

//         views:6900,
//     },

//     {
//         projectId:"5",

//         projectImage:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Rakesh Singh",

//         ownerSlug:"rakesh-singh",

//         ownerImage:"https://i.pravatar.cc/150?img=5",

//         ownerType:"Fabricator",

//         companyName:"Singh Steel Fabrication",

//         location:"Faridabad",

//         likes:178,

//         views:3500,
//     },

//     {
//         projectId:"6",

//         projectImage:"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Vikram Yadav",

//         ownerSlug:"vikram-yadav",

//         ownerImage:"https://i.pravatar.cc/150?img=6",

//         ownerType:"Glass Worker",

//         companyName:"Yadav Glass House",

//         location:"Ghaziabad",

//         likes:125,

//         views:2800,
//     },

//     {
//         projectId:"7",

//         projectImage:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Manoj Gupta",

//         ownerSlug:"manoj-gupta",

//         ownerImage:"https://i.pravatar.cc/150?img=7",

//         ownerType:"Painter",

//         companyName:"Gupta Paint Decor",

//         location:"Delhi",

//         likes:412,

//         views:8100,
//     },

//     {
//         projectId:"8",

//         projectImage:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Deepak Sharma",

//         ownerSlug:"deepak-sharma",

//         ownerImage:"https://i.pravatar.cc/150?img=8",

//         ownerType:"Civil Contractor",

//         companyName:"DS Construction",

//         location:"Noida",

//         likes:220,

//         views:5100,
//     },

//     {
//         projectId:"9",

//         projectImage:"https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Arjun Patel",

//         ownerSlug:"arjun-patel",

//         ownerImage:"https://i.pravatar.cc/150?img=9",

//         ownerType:"Welder",

//         companyName:"Patel Welding Works",

//         location:"Ahmedabad",

//         likes:145,

//         views:2600,
//     },

//     {
//         projectId:"10",

//         projectImage:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Nitin Kumar",

//         ownerSlug:"nitin-kumar",

//         ownerImage:"https://i.pravatar.cc/150?img=10",

//         ownerType:"Mechanic",

//         companyName:"Kumar Auto Garage",

//         location:"Delhi",

//         likes:330,

//         views:7400,
//     },

//     {
//         projectId:"11",

//         projectImage:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Sunil Chauhan",

//         ownerSlug:"sunil-chauhan",

//         ownerImage:"https://i.pravatar.cc/150?img=11",

//         ownerType:"Plumber",

//         companyName:"SC Plumbing Services",

//         location:"Lucknow",

//         likes:195,

//         views:3900,
//     },

//     {
//         projectId:"12",

//         projectImage:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",

//         ownerName:"Pawan Arora",

//         ownerSlug:"pawan-arora",

//         ownerImage:"https://i.pravatar.cc/150?img=12",

//         ownerType:"Aluminium Worker",

//         companyName:"Arora Aluminium Works",

//         location:"Chandigarh",

//         likes:270,

//         views:5600,
//     },
//     {
//     projectId:"13",

//     projectImage:"https://picsum.photos/400/650?random=13",

//     ownerName:"Rohit Mehta",

//     ownerSlug:"rohit-mehta",

//     ownerImage:"https://i.pravatar.cc/150?img=13",

//     ownerType:"Carpenter",

//     companyName:"Mehta Furniture House",

//     location:"Delhi",

//     likes:184,

//     views:3200,
// },

// {
//     projectId:"14",

//     projectImage:"https://picsum.photos/400/500?random=14",

//     ownerName:"Karan Yadav",

//     ownerSlug:"karan-yadav",

//     ownerImage:"https://i.pravatar.cc/150?img=14",

//     ownerType:"Electrician",

//     companyName:"Yadav Electrical Works",

//     location:"Noida",

//     likes:96,

//     views:1900,
// },

// {
//     projectId:"15",

//     projectImage:"https://picsum.photos/400/700?random=15",

//     ownerName:"Ankit Sharma",

//     ownerSlug:"ankit-sharma",

//     ownerImage:"https://i.pravatar.cc/150?img=15",

//     ownerType:"Welder",

//     companyName:"AS Welding Solutions",

//     location:"Faridabad",

//     likes:243,

//     views:4700,
// },

// {
//     projectId:"16",

//     projectImage:"https://picsum.photos/400/550?random=16",

//     ownerName:"Deepak Singh",

//     ownerSlug:"deepak-singh",

//     ownerImage:"https://i.pravatar.cc/150?img=16",

//     ownerType:"Fabricator",

//     companyName:"Singh Fabricators",

//     location:"Ghaziabad",

//     likes:137,

//     views:2500,
// },

// {
//     projectId:"17",

//     projectImage:"https://picsum.photos/400/800?random=17",

//     ownerName:"Raj Verma",

//     ownerSlug:"raj-verma",

//     ownerImage:"https://i.pravatar.cc/150?img=17",

//     ownerType:"Glass Worker",

//     companyName:"Verma Glass House",

//     location:"Delhi",

//     likes:310,

//     views:6100,
// },

// {
//     projectId:"18",

//     projectImage:"https://picsum.photos/400/580?random=18",

//     ownerName:"Mohit Arora",

//     ownerSlug:"mohit-arora",

//     ownerImage:"https://i.pravatar.cc/150?img=18",

//     ownerType:"Painter",

//     companyName:"Arora Paint Decor",

//     location:"Gurgaon",

//     likes:212,

//     views:3800,
// },

// {
//     projectId:"19",

//     projectImage:"https://picsum.photos/400/720?random=19",

//     ownerName:"Ravi Chauhan",

//     ownerSlug:"ravi-chauhan",

//     ownerImage:"https://i.pravatar.cc/150?img=19",

//     ownerType:"Plumber",

//     companyName:"Chauhan Plumbing Services",

//     location:"Delhi",

//     likes:121,

//     views:2300,
// },

// {
//     projectId:"20",

//     projectImage:"https://picsum.photos/400/620?random=20",

//     ownerName:"Ajay Kumar",

//     ownerSlug:"ajay-kumar",

//     ownerImage:"https://i.pravatar.cc/150?img=20",

//     ownerType:"Mechanic",

//     companyName:"AJ Auto Garage",

//     location:"Noida",

//     likes:420,

//     views:8500,
// },

// {
//     projectId:"21",

//     projectImage:"https://picsum.photos/400/540?random=21",

//     ownerName:"Vikas Gupta",

//     ownerSlug:"vikas-gupta",

//     ownerImage:"https://i.pravatar.cc/150?img=21",

//     ownerType:"Interior Designer",

//     companyName:"VG Interiors",

//     location:"Delhi",

//     likes:289,

//     views:5400,
// },

// {
//     projectId:"22",

//     projectImage:"https://picsum.photos/400/760?random=22",

//     ownerName:"Sandeep Rawat",

//     ownerSlug:"sandeep-rawat",

//     ownerImage:"https://i.pravatar.cc/150?img=22",

//     ownerType:"Civil Contractor",

//     companyName:"Rawat Constructions",

//     location:"Lucknow",

//     likes:167,

//     views:2900,
// },

// {
//     projectId:"23",

//     projectImage:"https://picsum.photos/400/680?random=23",

//     ownerName:"Prakash Mishra",

//     ownerSlug:"prakash-mishra",

//     ownerImage:"https://i.pravatar.cc/150?img=23",

//     ownerType:"Tiles Worker",

//     companyName:"Mishra Tiles & Marble",

//     location:"Kanpur",

//     likes:194,

//     views:3300,
// },

// {
//     projectId:"24",

//     projectImage:"https://picsum.photos/400/590?random=24",

//     ownerName:"Harish Patel",

//     ownerSlug:"harish-patel",

//     ownerImage:"https://i.pravatar.cc/150?img=24",

//     ownerType:"Steel Fabricator",

//     companyName:"Patel Steel Works",

//     location:"Ahmedabad",

//     likes:241,

//     views:4300,
// },

// {
//     projectId:"25",

//     projectImage:"https://picsum.photos/400/730?random=25",

//     ownerName:"Naveen Kumar",

//     ownerSlug:"naveen-kumar",

//     ownerImage:"https://i.pravatar.cc/150?img=25",

//     ownerType:"POP Contractor",

//     companyName:"NK Ceiling Works",

//     location:"Delhi",

//     likes:180,

//     views:3400,
// },

// {
//     projectId:"26",

//     projectImage:"https://picsum.photos/400/510?random=26",

//     ownerName:"Sanjay Sharma",

//     ownerSlug:"sanjay-sharma",

//     ownerImage:"https://i.pravatar.cc/150?img=26",

//     ownerType:"Electrician",

//     companyName:"Sharma Electrical Services",

//     location:"Faridabad",

//     likes:155,

//     views:2800,
// },

// {
//     projectId:"27",

//     projectImage:"https://picsum.photos/400/690?random=27",

//     ownerName:"Arun Yadav",

//     ownerSlug:"arun-yadav",

//     ownerImage:"https://i.pravatar.cc/150?img=27",

//     ownerType:"Glass Worker",

//     companyName:"Yadav Glass Solutions",

//     location:"Delhi",

//     likes:265,

//     views:4700,
// },

// {
//     projectId:"28",

//     projectImage:"https://picsum.photos/400/600?random=28",

//     ownerName:"Mukesh Verma",

//     ownerSlug:"mukesh-verma",

//     ownerImage:"https://i.pravatar.cc/150?img=28",

//     ownerType:"Carpenter",

//     companyName:"Verma Modular Furniture",

//     location:"Noida",

//     likes:378,

//     views:7200,
// },

// {
//     projectId:"29",

//     projectImage:"https://picsum.photos/400/780?random=29",

//     ownerName:"Lokesh Singh",

//     ownerSlug:"lokesh-singh",

//     ownerImage:"https://i.pravatar.cc/150?img=29",

//     ownerType:"Welder",

//     companyName:"LS Welding House",

//     location:"Ghaziabad",

//     likes:141,

//     views:2600,
// },

// {
//     projectId:"30",

//     projectImage:"https://picsum.photos/400/640?random=30",

//     ownerName:"Ashish Gupta",

//     ownerSlug:"ashish-gupta",

//     ownerImage:"https://i.pravatar.cc/150?img=30",

//     ownerType:"Painter",

//     companyName:"AG Paint Solutions",

//     location:"Delhi",

//     likes:312,

//     views:6300,
// },

// {
//     projectId:"31",

//     projectImage:"https://picsum.photos/400/560?random=31",

//     ownerName:"Pawan Singh",

//     ownerSlug:"pawan-singh",

//     ownerImage:"https://i.pravatar.cc/150?img=31",

//     ownerType:"Mechanic",

//     companyName:"Singh Auto Care",

//     location:"Gurgaon",

//     likes:452,

//     views:9100,
// },

// {
//     projectId:"32",

//     projectImage:"https://picsum.photos/400/740?random=32",

//     ownerName:"Ramesh Kumar",

//     ownerSlug:"ramesh-kumar",

//     ownerImage:"https://i.pravatar.cc/150?img=32",

//     ownerType:"Fabricator",

//     companyName:"RK Fabrication Works",

//     location:"Delhi",

//     likes:227,

//     views:4100,
// },

// ];
// export const ExploreHome = () => {
//   return <MasonryGrid projects={dummyProjects} />;
// };

// export const ExploreHome = () => {

//     const dispatch = useDispatch();


//     const {
//         projects,
//         loading,
//         error,
//         initialized
//     } = useSelector(
//         state => state.projectFeed
//     );


//     useEffect(() => {

//         if (!initialized) {

//             dispatch(
//                 fetchProjectFeed(
//                     null,
//                     5
//                 )
//             );

//         }

//     }, [
//         dispatch,
//         initialized
//     ]);


//     if (
//         loading &&
//         projects.length === 0
//     ) {

//         return (
//             <div>
//                 Loading projects...
//             </div>
//         );

//     }


//     if (
//         error &&
//         projects.length === 0
//     ) {

//         return (
//             <div>
//                 {error}
//             </div>
//         );

//     }


//     return (

//         <MasonryGrid
//             projects={projects}
//         />

//     );

// };



// export const ExploreHome = () => {

//     const dispatch = useDispatch();


//     const {
//         projects,
//         loading,
//         error,
//         initialized
//     } = useSelector(
//         state => state.projectFeed
//     );


//     useEffect(() => {

//         if (!initialized) {

//             dispatch(
//                 fetchProjectFeed(
//                     null,
//                     5
//                 )
//             );

//         }

//     }, [
//         dispatch,
//         initialized
//     ]);


//     if (
//         loading &&
//         projects.length === 0
//     ) {

//         return (
//             <div>
//                 Loading projects...
//             </div>
//         );

//     }


//     if (
//         error &&
//         projects.length === 0
//     ) {

//         return (
//             <div>
//                 {error}
//             </div>
//         );

//     }


//     return (

//         <MasonryGrid
//             projects={projects}
//         />

//     );

// };

export  function ExploreHome() {

    const dispatch = useDispatch();
    const loadMoreRef = useRef(null);

    const {
        projects,
        nextCursor,
        hasMore,
        loading,
        error,
        initialized
    } = useSelector(
        state => state.projectFeed
    );


   useEffect(() => {

    if (
        !initialized &&
        !loading
    ) {

        dispatch(
            fetchProjectFeed(
                null,
                5
            )
        );

        console.log("Dispatching fetchProjectFeed action with cursor:", nextCursor);

    }

}, [
    dispatch,
    initialized,
    loading
]);

useEffect(() => {

    const element = loadMoreRef.current;

    if (!element) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {

            const entry = entries[0];

            if (
                entry.isIntersecting &&
                hasMore &&
                !loading &&
                nextCursor
            ) {

                dispatch(
                    fetchProjectFeed(
                        nextCursor,
                        5
                    )
                );

            }

        },
        {
            root: null,

            /*
             * Start loading before the
             * user actually reaches the bottom.
             */
            rootMargin: "500px",

            threshold: 0
        }
    );


    observer.observe(element);


    return () => {

        observer.disconnect();

    };

}, [
    dispatch,
    nextCursor,
    hasMore,
    loading
]);


    console.log("Redux projects:", projects);
    console.log("Redux cursor:", nextCursor);
    console.log("Redux hasMore:", hasMore);
    console.log("Redux loading:", loading);


    if (loading && projects.length === 0) {

        return (
            <div>
                Loading projects...
            </div>
        );

    }


    if (error && projects.length === 0) {

        return (
            <div>
                {error}
            </div>
        );

    }


    return (
    
        <>
        
         <MasonryGrid
            projects={projects}
        />
<div
    ref={loadMoreRef}
    style={{
        height: "20px",
        width: "100%"
    }}
/>

        </>

       

    );


}