import React from "react";
import {
  RiBriefcaseLine,
  RiFolderZipLine,
  RiHome2Line,
  RiUserLine,
} from "react-icons/ri";
import NavbarItem from "./NavbarItem";
const navBarItems = [
  {
    icon: <RiHome2Line />,
    path: "/",
    title: "Home",
  },
  {
    icon: <RiBriefcaseLine />,
    path: "/services",
    title: "Services",
  },
  {
    icon: <RiFolderZipLine />,
    path: "/transactions",
    title: "Transactions",
  },
  {
    icon: <RiUserLine />,
    path: "/profile",
    title: "Profile",
  },
];
export default function Navbar() {
  return (
    <nav className=" custom-shadow bg-white fixed-bottom ">
      <div className=" custom-container">
        <div className=" d-flex align-items-center justify-content-between ">
          {navBarItems.map((navBarItem) => (
            <NavbarItem
              icon={navBarItem.icon}
              path={navBarItem.path}
              title={navBarItem.title}
              key={navBarItem.icon}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
