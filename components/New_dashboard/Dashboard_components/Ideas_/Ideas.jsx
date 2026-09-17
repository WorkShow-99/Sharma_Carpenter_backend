import "./Ideas.css";

import Hero from "./Hero/Hero";
import SearchBar from "./SearchBar/SearchBar";
import CategoryChips from "./CategoryChips/CategoryChips";
import TrendingProjects from "./TrendingProjects/TrendingProjects";
export default function Ideas() {

    return (

        <div className="ideas-page">

            <Hero />

            <SearchBar />

            <CategoryChips />


            <TrendingProjects />

        </div>

    );

}