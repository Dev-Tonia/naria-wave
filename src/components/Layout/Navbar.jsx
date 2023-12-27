import React from "react";
import {
  RiBriefcaseLine,
  RiFolderZipLine,
  RiHome2Line,
  RiUserLine,
} from "react-icons/ri";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className=" custom-shadow bg-white fixed-top ">
      <div className=" custom-container">
        <div className=" d-flex align-items-center justify-content-between ">
          <NavbarItem icon={<RiHome2Line />} path={"/"} />
          <NavbarItem icon={<RiBriefcaseLine />} path={"/services"} />
          <NavbarItem icon={<RiFolderZipLine />} path={"/transactions"} />
          <NavbarItem icon={<RiUserLine />} path={"/profile"} />
        </div>
      </div>
    </nav>
  );
}
