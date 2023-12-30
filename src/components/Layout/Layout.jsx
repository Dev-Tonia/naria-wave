import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className=" " style={{ marginTop: "30px", marginBottom: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
