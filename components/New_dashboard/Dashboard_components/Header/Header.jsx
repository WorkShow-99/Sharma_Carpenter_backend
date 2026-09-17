import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/Searchbar";

import CategoriesBar from "../Categories_bar/CategoriesBar";

import FilterBar from "../FilterBar/FilterBar";

import "./Header.css";


export default function Header() {

    const [showCategories, setShowCategories] = useState(true);

    const [isDesktop, setIsDesktop] = useState(
        typeof window !== "undefined" ? window.innerWidth >= 1024 : true
    );

    const [prevScroll, setPrevScroll] = useState(0);
    


    useEffect(() => {

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        const handleScroll = () => {

            const currentScroll = window.scrollY;


            if(currentScroll > prevScroll){

                // scroll down

                setShowCategories(false);

            }

            else{

                // scroll up

                setShowCategories(true);

            }

            setPrevScroll(currentScroll);

        };


        window.addEventListener("resize", handleResize);

        window.addEventListener(
            "scroll",
            handleScroll
        );


        return ()=>{

            window.removeEventListener("resize", handleResize);

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        }

    },[prevScroll]);



    return(

        isDesktop ? (

        <div className="header">


            {/* search bar with user input and search button */}
            <SearchBar />

            {/* <CategoriesBar visible={showCategories}/> */}

            {/* <FilterBar /> */}

        </div>

        ) : null

    )

}