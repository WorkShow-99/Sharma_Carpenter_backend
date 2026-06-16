import {
  LayoutDashboard,
  FolderKanban,
  User,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";

export const sidebarLinks = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "projects",
    title: "Projects",
    icon: FolderKanban,
  },
  {
    id: "about",
    title: "About",
    icon: User,
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
  },
  
  {
    id: "logout",
    title: "Logout",
    icon: LogOut,
  },
];