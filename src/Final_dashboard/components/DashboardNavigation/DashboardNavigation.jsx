import "./DashboardNavigation.css";

import { NavLink } from "react-router-dom";

import {
    FolderOpen,
    Bookmark,
    Heart,
    ChartColumn,
    Settings
} from "lucide-react";


import { useSelector } from "react-redux";

export default function DashboardNavigation() {

    const user = useSelector((state) => state.user.user);
    const isProfessional = user?.isProfessional;

    const navigation = [

        ...(isProfessional ? [{
            label: "Projects",
            path: "/explore/final-dashboard/projects",
            icon: FolderOpen,
        }] : []),

        {
            label: "Saved",
            path: "/explore/final-dashboard/saved",
            icon: Bookmark,
        },

        {
            label: "Favorites",
            path: "/explore/final-dashboard/liked",
            icon: Heart,
        },

        ...(isProfessional ? [{
            label: "Statistics",
            path: "/explore/final-dashboard/statistics",
            icon: ChartColumn,
        }] : []),

        {
            label: "Settings",
            path: "/explore/final-dashboard/settings",
            icon: Settings,
        }

    ];

    return (

        <nav className="dashboard-navigation">

            <div className="dashboard-navigation-scroll">

                {navigation.map(({ label, path, icon: Icon }) => (

                    <NavLink
                        key={path}
                        to={path}
                        title={label}
                        className="dashboard-navigation-link"
                    >
                        <Icon  className="dashboard-navigation-icon" />
                        <span>{label}</span>
                    </NavLink>

                ))}

            </div>

        </nav>

    );

}