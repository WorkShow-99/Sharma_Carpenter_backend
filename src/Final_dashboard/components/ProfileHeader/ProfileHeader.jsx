// import "./ProfileHeader.css";

// import {

//     MapPin,
//     Star,
//     Share2,
//     Pencil


// } from "lucide-react";


// export default function ProfileHeader() {

//     return (

        
//          <section className="profile-header">

//             {/* Avatar */}

//             <div className="profile-avatar-wrapper">

//                 <img
//                     className="profile-avatar"
//                     src="https://i.pravatar.cc/300"
//                     alt="Profile"
//                 />

//             </div>

//             {/* User Information */}

//             <div className="profile-info">

//                 <div className="profile-name-row">

//                     <h1>Pritam Kumar</h1>

//                 </div>

//                 <p className="profession">

//                     Professional Carpenter

//                 </p>

//                 <div className="profile-meta">

//                     <span>

//                         <MapPin size={16} />

//                         Delhi, India

//                     </span>

//                     <span className="dot">•</span>

//                     <span>

//                         Joined July 2026

//                     </span>

//                 </div>

//                 <div className="profile-rating">

//                     <Star
//                         size={16}
//                         fill="currentColor"
//                     />

//                     <span>4.9</span>

//                     <span className="reviews">

//                         (54 Reviews)

//                     </span>

//                 </div>

//             </div>

//             {/* Actions */}

//             <div className="profile-actions">

//                     <button className="edit-profile-btn">

//                         <Pencil size={18} />

//                         Edit Profile

//                     </button>

//                     <button className="share-profile-btn">

//                         <Share2 size={18} />

//                         Share Profile

//                     </button>

//                 </div>

//         </section>

//     );

// }



import "./ProfileHeader.css";

import {

    Share2,
    Pencil
} from "lucide-react";

import { useSelector } from "react-redux";


export default function ProfileHeader() {

    /*
     * =========================================
     * LOGGED IN USER
     * =========================================
     */

    const user = useSelector(
        (state) => state.user.user
    );


    /*
     * =========================================
     * NO USER
     * =========================================
     */

    if (!user) {

        return null;

    }


    /*
     * =========================================
     * USER NAME
     * =========================================
     */

    const username =
        user.username || "User";


    /*
     * =========================================
     * PROFILE IMAGE
     * =========================================
     */

    const profileImage =
        user.profileImage?.url || "";


    /*
     * =========================================
     * FALLBACK LETTER
     * =========================================
     */

    const profileLetter =
        username
            .charAt(0)
            .toUpperCase();


    return (

        <section className="profile-header">


            {/* =================================
                PROFILE IMAGE
            ================================= */}

            <div className="profile-avatar-wrapper">

                {profileImage ? (

                    <img
                        className="profile-avatar"
                        src={profileImage}
                        alt={username}
                    />

                ) : (

                    <div className="profile-avatar-fallback">

                        {profileLetter}

                    </div>

                )}

            </div>


            {/* =================================
                USER INFORMATION
            ================================= */}

            <div className="profile-info">


                {/* NAME */}

                <div className="profile-name-row">

                    <h1>

                        {username}

                    </h1>

                </div>


                {/* EMAIL */}

                <p className="profile-email">

                    {user.email}

                </p>


                {/* ACCOUNT TYPE */}

                <div className="profile-meta">

                    <span>

                        {user.isProfessional
                            ? "Professional Account"
                            : "Personal Account"
                        }

                    </span>

                </div>


            </div>


            {/* =================================
                ACTIONS
            ================================= */}

            <div className="profile-actions">


                <button
                    className="edit-profile-btn"
                >

                    <Pencil size={18} />

                    Edit Profile

                </button>


                <button
                    className="share-profile-btn"
                >

                    <Share2 size={18} />

                    Share Profile

                </button>


            </div>


        </section>

    );

}