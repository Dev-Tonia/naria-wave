import React from "react";
import CustomButton from "../atoms/CustomButton";
import { RiAddFill, RiArrowUpFill } from "react-icons/ri";

export default function ActionType() {
  return (
    <div className="custom-container">
      <div className=" d-flex gap-3  justify-content-between ">
        <CustomButton
          icon={<RiArrowUpFill />}
          title={"Transfer"}
          customClass={" justify-content-center"}
        />
        <CustomButton
          icon={<RiAddFill />}
          title={"Add Money"}
          customClass={" justify-content-center"}
        />
      </div>
    </div>
  );
}
