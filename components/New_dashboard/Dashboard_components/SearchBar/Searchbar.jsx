import { Search, User } from "lucide-react";

import "./Searchbar.css";

import {  ChevronDown } from "lucide-react";

import { useState } from "react";

import UserMenu from "./UserMenu/UserMenu";

export default function SearchBar(){

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);


    const handleUserClick = () => {
        // Toggle user menu open/close
        setIsUserMenuOpen((prev) => !prev);
    };

    return(

        <>
        <div id="userMenu" className="searchbar flex gap-10 items-center justify-between">

                    <div className="search-container grow flex">

                        <Search className="search-icon"/>

                        <input

                        type="text"

                        placeholder="Search"

                        /> 


                        


                    </div>

        {/* <div className="h-[40px] px-3 bg-blue-500 search-button flex items-center justify-center gap-2 size-14 flex-none rounded">
            <User className="w-5 h-5 text-white" />
            <span className="text-white">User</span>
        </div> */}

        <div id="userMenu" className="user-section flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer" onClick={handleUserClick}>

                <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                />

                {/* <div className="hidden md:block">

                    <p className="text-sm font-semibold">
                        Pritam Kumar
                    </p>

                    <p className="text-xs text-gray-500">
                        Carpenter
                    </p>

                </div> */}

                <ChevronDown
                    size={18}
                    className="text-gray-500"
                />

            </div>
        


        </div>

{
    isUserMenuOpen && (
        <UserMenu
            isUserMenuOpen={isUserMenuOpen}
            setIsUserMenuOpen={setIsUserMenuOpen}
            onLogout={() => {
                console.log("Logout");
                // Put your Redux logout function here
            }}
        />
    )
}
                    {/* <UserMenu
               isUserMenuOpen 
                closeUserMenu 
                onLogout={() => {

                    console.log("Logout");

                    // Put your Redux logout function here

                }}
            /> */}

        
        </>

        

    )

    };
