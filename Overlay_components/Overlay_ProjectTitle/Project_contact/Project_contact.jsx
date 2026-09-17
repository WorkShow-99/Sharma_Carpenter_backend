import "./ContactProfile.css";

import {
    BadgeCheck,
    MapPin,
    Briefcase,
    Hammer
} from "lucide-react";

export default function ContactProfile({ worker }) {

    if (!worker) {
        return null;
    }

    const user = worker.userId;

    const workerName = [
        user?.firstName,
        user?.lastName
    ]
        .filter(Boolean)
        .join(" ");

    const city =
        worker.workingCities?.[0] || "India";

    return (

        <section className="contact-profile">

            {/* Profile Image */}

            {user?.profileImage?.url ? (

                <img
                    src={user.profileImage.url}
                    alt={workerName}
                    className="worker-image"
                />

            ) : (

                <div className="worker-image placeholder">

                    {workerName.charAt(0).toUpperCase()}

                </div>

            )}


            {/* Worker Info */}

            <div className="worker-info">

                <div className="worker-name">

                    <h2>{workerName}</h2>

                    {user?.verified && (
                        <BadgeCheck size={18} />
                    )}

                </div>


                <p className="worker-profession">

                    {worker.profession}

                </p>


                {worker.about && (

                    <p className="worker-about">

                        {worker.about}

                    </p>

                )}


                <div className="worker-meta">

                    <span>
                        <MapPin size={16} />
                        {city}
                    </span>

                    <span>•</span>

                    <span>
                        <Briefcase size={16} />
                        {worker.experience} yrs
                    </span>

                    <span>•</span>

                    <span>
                        <Hammer size={16} />
                        {worker.services?.length || 0} Services
                    </span>

                </div>

            </div>

        </section>

    );

}