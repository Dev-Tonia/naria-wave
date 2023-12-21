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
      <div className=" container">
        <div className=" d-flex align-items-center justify-content-between">
          <h1 className=" navbar-brand text-warning fs-4 fst-italic fw-medium">
            Naira Wave
          </h1>
          <div className=" d-flex align-items-center">
            <NavbarItem icon={<RiHome2Line />} title={"Home"} path={"/"} />
            <NavbarItem
              icon={<RiBriefcaseLine />}
              title={"Services"}
              path={"/services"}
            />
            <NavbarItem
              icon={<RiFolderZipLine />}
              title={"Transaction"}
              path={"/transactions"}
            />
            <NavbarItem
              icon={<RiUserLine />}
              title={"Profile"}
              path={"/profile"}
            />
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
