import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function GoBackButton() {
  const navigate = useNavigate();
  const navigateTo = () => navigate(`/`);
  return (
    <div>
      <CustomButton
        title={"Go Back"}
        customClass={"bg-warning text-center justify-content-center"}
        isColor={true}
        icon={<RiArrowLeftSLine />}
        onClick={navigateTo}
      />
    </div>
  );
}
