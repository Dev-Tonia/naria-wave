import "./home.css";

import { NigeriaFlag } from "../../utils/icons/icons";
import { RiMoreFill } from "react-icons/ri";
export default function AccBalance() {
  return (
    <div className=" custom-container">
      <div className=" d-flex gap-2 mt-4  naira ">
        <div className=" icon-wrapper">
          <NigeriaFlag />
        </div>
        <p className=" fw-medium">Nigerian Naira</p>
      </div>

      <div className=" d-flex justify-content-between align-items-center">
        <div>
          <span className=" fw-bold fs-5">&#8358;</span>
          <span className=" fw-bold fs-5 d-inline-block ms-1">300.00</span>
        </div>
        <div className=" circle rounded-circle custom-shadow d-flex align-items-center justify-content-center bg-opacity-75">
          <RiMoreFill size={20} />
        </div>
      </div>
      <p className=" text-secondary">Last updated few hours ago</p>
    </div>
  );
}
