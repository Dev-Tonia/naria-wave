import React from "react";
import "./slider.css";
export default function AccountSetUpStatus() {
  return (
    <div className=" slider-circle position-relative">
      <div
        className=" outer-circle border-5 border  border-secondary rounded-circle position-absolute start-0 bottom-0 end-0 top-0  
      "
      ></div>
      <div
        style={{ width: "70%" }}
        className=" inner-circle border-5 z-3  border border-success rounded-circle position-absolute top-0 bottom-0 start-0 end-0"
      ></div>
    </div>
  );
}
