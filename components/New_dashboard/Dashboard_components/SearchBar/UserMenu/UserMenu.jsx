import { useEffect, useRef } from "react";
import {
    User,
    LayoutDashboard,
    BriefcaseBusiness,
    LogOut,
    X
} from "lucide-react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./UserMenu.css";

export default function UserMenu({
    isUserMenuOpen,
    setIsUserMenuOpen,
    onLogout
}) {

    const menuRef = useRef(null);

    // Get logged-in user from Redux
    const user = useSelector((state) => state.user.user);

    /*
        Get professional status from Redux
    */
    const isProfessional = user?.isProfessional;

    console.log(user)
    /*
        Close when clicking outside
    */
    useEffect(() => {

        if (!isUserMenuOpen) return;

        const handleOutsideClick = (event) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
               
                if (event.target.parentElement?.id === "userMenu") {
return ;
                } else {
                setIsUserMenuOpen(false);
                }
               
            }
            

        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );

        };

    }, [isUserMenuOpen, setIsUserMenuOpen]);


    /*
        Close with Escape
    */
    useEffect(() => {

        if (!isUserMenuOpen) return;

        const handleEscape = (event) => {

            if (event.key === "Escape") {
                setIsUserMenuOpen(false);
            }

        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, [isUserMenuOpen, setIsUserMenuOpen]);


    if (!isUserMenuOpen) {
        return null;
    }


    return (

        <div
            ref={menuRef}
            className="user-menu"
        >

            {/* =========================================
                USER HEADER
            ========================================= */}

            <div className="user-menu-header">

                <div className="user-menu-user">

                    <div className="user-menu-avatar">

                        {user?.profileImage?.url ? (

                            <img
                                src={user.profileImage.url}
                                alt={user.username || "User"}
                            />

                        ) : (

                            <User />

                        )}

                    </div>


                    <div className="user-menu-user-info">

                        <strong>
                            {user?.username || "User"}
                        </strong>

                        <span>
                            {user?.email || ""}
                        </span>

                    </div>

                </div>


                <button
                    className="user-menu-close"
                    onClick={() => setIsUserMenuOpen(false)}
                    aria-label="Close user menu"
                >

                    <X />

                </button>

            </div>


            {/* =========================================
                MENU OPTIONS
            ========================================= */}

            <div className="user-menu-options">

                <Link
                    to="/explore/final-dashboard/profile"
                    className="user-menu-item"
                    onClick={() => setIsUserMenuOpen(false)}
                >

                    <User />

                    <span>
                        My Profile
                    </span>

                </Link>


                <Link
                    to="/explore/final-dashboard"
                    className="user-menu-item"
                    onClick={() => setIsUserMenuOpen(false)}
                >

                    <LayoutDashboard />

                    <span>
                        Dashboard
                    </span>

                </Link>


                {/* =====================================
                    ONLY NORMAL USER
                ===================================== */}

                {!isProfessional && (

                    <Link
                        to="/explore/become-professional"
                        className="user-menu-item professional-option"
                        onClick={() => setIsUserMenuOpen(false)}
                    >

                        <BriefcaseBusiness />

                        <span>
                            Become a Professional
                        </span>

                    </Link>

                )}

            </div>


            {/* =========================================
                LOGOUT
            ========================================= */}

            <div className="user-menu-footer">

                <button
                    className="user-menu-logout"
                    onClick={() => {

                        setIsUserMenuOpen(false);

                        if (onLogout) {
                            onLogout();
                        }

                    }}
                >

                    <LogOut />

                    <span>
                        Logout
                    </span>

                </button>

            </div>

        </div>

    );

}