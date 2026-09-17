import "./CategoryChips.css";

const categories=[

    "Carpentry",

    "Fabrication",

    "Painting",

    "Electrical",

    "Plumbing",

    "Masonry",

    "Interior",

    "Furniture",

    "Garden"

];

export default function CategoryChips(){

    return(

        <div className="category-chip-container">

            {

                categories.map(category=>(

                    <button

                        key={category}

                        className="category-chip"

                    >

                        {category}

                    </button>

                ))

            }

        </div>

    );

}