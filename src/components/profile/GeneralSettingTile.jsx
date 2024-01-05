import React from "react";
import { RiArrowRightSLine, RiLogoutBoxLine } from "react-icons/ri";

export default function GeneralSettingTile({ setting, title }) {
  return (
    <div className=" d-flex align-items-center justify-content-between mb-2">
      <div className=" d-flex align-items-center justify-content-center ">
        <div
          className=" rounded-circle d-flex align-items-center justify-content-center bg-warning bg-opacity-10  "
          style={{
            width: "55px",
            height: "55px",
          }}
        >
          <span
            className="fs-2 d-block  text-warning 
            "
          >
            {setting.icon}
          </span>
        </div>
        <div
          className=" ps-2"
          style={{
            fontSize: "15px",
          }}
        >
          <p className=" fw-bold mb-0"> {setting.title}</p>
          <p className=" text-secondary">{setting.subTitle}</p>
        </div>
      </div>
      <div className=" fs-3">
        <RiArrowRightSLine />
      </div>
    </div>
  );
}
