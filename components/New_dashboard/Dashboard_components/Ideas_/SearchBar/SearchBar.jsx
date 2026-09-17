import "./SearchBar.css";

import { Search } from "lucide-react";

export default function SearchBar(){

    return(

        <div className="idea-search">

            <Search size={20}/>

            <input

                type="text"

                placeholder="Search project ideas, blogs and collections..."

            />

        </div>

    );

}