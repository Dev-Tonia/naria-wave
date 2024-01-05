import React from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import GeneralSetting from "../components/profile/GeneralSetting";

export default function Profile() {
  return (
    <div className=" custom-container pb-5">
      <ProfileHeader />
      <GeneralSetting />
    </div>
  );
}
