import React from "react";
import { NavLink } from "react-router-dom";
// import "./layout.css";
import "../Layout/layout.css";

export default function NavbarItem({ title, icon, path }) {
  return (
    <div className=" text-center px-3  py-2  navbar-item">
      <NavLink to={path} className="text-body " activeClassName="activeLink">
        <span>{icon}</span>
        <p className=" mb-0 fs-6 text-warning fw-medium title">{title} </p>
      </NavLink>
    </div>
  );
}
