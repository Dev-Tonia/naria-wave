import React from "react";
import CustomButton from "../atoms/CustomButton";
import { RiAddFill, RiArrowUpFill } from "react-icons/ri";

export default function ActionType() {
  return (
    <div className="custom-container">
      <div className=" d-flex justify-content-between ">
        <CustomButton icon={<RiArrowUpFill />} title={"Transfer"} />
        <CustomButton icon={<RiAddFill />} title={"Add Money"} />
      </div>
    </div>
  );
}
