import { ChevronDown, RotateCcw } from "lucide-react";

const filters = [

    "Category",

    "City",

    "Experience",

    "Rating",

    "Availability",

    "Sort By"

];

import { useState ,useEffect} from "react";


import "./FilterBar.css";

export default function FilterBar() {
    const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling DOWN & past the navbar height -> Hide it
        setIsVisible(false);
      } else {
        // Scrolling UP -> Show it
        setIsVisible(true);
      }
      
      // Update last known scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]); // Re-run effect when lastScrollY changes


    return (

        <div   className={`relative z-3 filter-bar filter-nav ${isVisible ? 'filter-show' : 'filter-hide'}`}>

            <div className="filter-options">

                {

                    filters.map((item)=>(

                        <button

                        key={item}

                        className="filter-btn"

                        >

                            {item}

                            <ChevronDown size={18}/>

                        </button>

                    ))

                }

            </div>


            <button className="reset-btn">

                Reset Filters

                <RotateCcw size={18}/>

            </button>

        </div>

    )

}