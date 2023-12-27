import React from "react";
import { NavLink } from "react-router-dom";
// import "./layout.css";
import "../Layout/layout.css";

export default function NavbarItem({ title, icon, path }) {
  return (
    <div className=" text-center px-3 border-bottom border-2 border-warning py-2  navbar-item">
      <NavLink to={path} className="text-body ">
        <span style={{ fontSize: "20px" }}>{icon}</span>
        <p className=" mb-0 fs-5 ">{title} </p>
      </NavLink>
    </div>
  );
}