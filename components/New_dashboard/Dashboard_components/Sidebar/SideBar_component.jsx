import {
  Home,
  Compass,
  PlusSquare,
  Bell,
  MessageCircle,
  Settings,
  Search,
  User,
  BadgePlus,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ activePanel, setActivePanel }) {

  const isProfessional = false;

  /*
   * Normal navigation
   * If the link is already active, prevent another navigation.
   */
  const navClass = ({ isActive }) =>
    isActive ? "icon-btn active" : "icon-btn";

  const handleNavClick = (event, isActive) => {

    // Already on this route → do nothing
    if (isActive) {
      event.preventDefault();
    }
  };

  /*
   * Messages / Notifications
   * These are panels rather than routes.
   */
  const handlePanelClick = (panelKey) => {

    if (activePanel === panelKey) {
      // Clicking the already-open panel closes it
      setActivePanel(null);
    } else {
      // Open the selected panel
      setActivePanel(panelKey);
    }
  };

  return (
    <>
      {/* ============================= */}
      {/* Desktop Sidebar */}
      {/* ============================= */}

      <aside className="sidebar desktop-sidebar">

        <div className="sidebar-top">

          {/* Logo */}

          <div className="px-auto mx-auto flex w-full items-center gap-3 px-4 py-3 text-left">
            <h2 className="text-2xl font-bold">
              WS
            </h2>
          </div>


          {/* ============================= */}
          {/* Home */}
          {/* ============================= */}

          <NavLink
            to="/explore"
            end
            className={navClass}
          >
            {({ isActive }) => (

              <button
                type="button"
                className="sidebar-link-button"
                onClick={(event) =>
                  handleNavClick(event, isActive)
                }
              >
                <Home />
              </button>

            )}
          </NavLink>


          {/* ============================= */}
          {/* Idea */}
          {/* ============================= */}

          <NavLink
            to="/explore/idea"
            className={navClass}
          >
            {({ isActive }) => (

              <button
                type="button"
                className="sidebar-link-button"
                onClick={(event) =>
                  handleNavClick(event, isActive)
                }
              >
                <Compass />
              </button>

            )}
          </NavLink>


          {/* ============================= */}
          {/* Create / Become Professional */}
          {/* ============================= */}

          {isProfessional ? (

            <NavLink
              to="/explore/create"
              className={navClass}
            >
              {({ isActive }) => (

                <button
                  type="button"
                  className="sidebar-link-button"
                  onClick={(event) =>
                    handleNavClick(event, isActive)
                  }
                >
                  <PlusSquare />
                </button>

              )}
            </NavLink>

          ) : (

            <NavLink
              to="/explore/create"
              className={navClass}
            >
              {({ isActive }) => (

                <button
                  type="button"
                  className="sidebar-link-button"
                  onClick={(event) =>
                    handleNavClick(event, isActive)
                  }
                >
                  <BadgePlus />
                </button>

              )}
            </NavLink>

          )}


          {/* ============================= */}
          {/* Messages */}
          {/* ============================= */}

          <button
            type="button"
            className={
              activePanel === "messages"
                ? "icon-btn active"
                : "icon-btn"
            }
            onClick={() =>
              handlePanelClick("messages")
            }
          >
            <MessageCircle />
          </button>


          {/* ============================= */}
          {/* Notifications */}
          {/* ============================= */}

          <button
            type="button"
            className={
              activePanel === "notifications"
                ? "icon-btn active"
                : "icon-btn"
            }
            onClick={() =>
              handlePanelClick("notifications")
            }
          >
            <Bell />
          </button>


          {/* ============================= */}
          {/* Dashboard */}
          {/* ============================= */}

          <NavLink
            to="/explore/final-dashboard"
            className={navClass}
          >
            {({ isActive }) => (

              <button
                type="button"
                className="sidebar-link-button"
                onClick={(event) =>
                  handleNavClick(event, isActive)
                }
              >
                <User />
              </button>

            )}
          </NavLink>

        </div>


        {/* ============================= */}
        {/* Settings */}
        {/* ============================= */}

        <div className="sidebar-bottom">

          <NavLink
            to="/explore/settings"
            className={navClass}
          >
            {({ isActive }) => (

              <button
                type="button"
                className="sidebar-link-button"
                onClick={(event) =>
                  handleNavClick(event, isActive)
                }
              >
                <Settings />
              </button>

            )}
          </NavLink>

        </div>

      </aside>


      {/* ============================= */}
      {/* Mobile / Tablet Navigation */}
      {/* ============================= */}

      <nav className="mobile-floating-nav">

        <NavLink
          to="/explore"
          end
          className={navClass}
        >
          <Home />
          <span>Home</span>
        </NavLink>


        <NavLink
          to="/explore/search"
          className={navClass}
        >
          <Search />
          <span>Search</span>
        </NavLink>


        <NavLink
          to="/explore/inbox"
          className={navClass}
        >
          <MessageCircle />
          <span>Inbox</span>
        </NavLink>


        <NavLink
          to="/explore/final-dashboard"
          className={navClass}
        >
          <User />
          <span>Profile</span>
        </NavLink>

      </nav>
    </>
  );
}