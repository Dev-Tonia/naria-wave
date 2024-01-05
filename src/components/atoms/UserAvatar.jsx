import React from "react";
import profileImg from "../../assets/imgs/profile.jpg";

export default function UserAvatar() {
  return (
    <div>
      <div className=" img-wrapper rounded-circle overflow-hidden">
        <img src={profileImg} alt="User Profile Image" className=" img-fluid" />
      </div>
    </div>
  );
}
