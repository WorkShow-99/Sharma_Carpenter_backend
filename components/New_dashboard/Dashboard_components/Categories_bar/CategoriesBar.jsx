import "./CategoriesBar.css";


const categories=[

    "All",

    "Drawing",

    "Anime Drawings",

    "Projects",

    "Wood Work",

    "Interior",

    "Electrician",

    "Plumbing",

    "Painting"

]


export default function CategoriesBar({visible}){


    return(

        <div

        className={

            visible

            ?

            "categories visible"

            :

            "categories hidden"

        }

        >

        {

            categories.map(

                (item,index)=>(

                    <button

                    key={index}

                    className={

                        index===0

                        ?

                        "category active"

                        :

                        "category"

                    }

                    >

                        {item}

                    </button>

                )

            )

        }

        </div>

    )

}