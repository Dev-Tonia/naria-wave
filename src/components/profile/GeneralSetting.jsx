import React from "react";
import GeneralSettingTile from "./GeneralSettingTile";
import {
  RiFolderShield2Fill,
  RiGroupLine,
  RiLogoutBoxFill,
  RiLogoutBoxLine,
  RiQuestionFill,
  RiSettingsFill,
  RiUserLine,
} from "react-icons/ri";
const settings = [
  {
    icon: <RiUserLine />,
    title: "Personal Information",
    subTitle: "Edit your personal information",
  },
  {
    icon: <RiSettingsFill />,
    title: "Settings",
    subTitle: "Account, notification,",
  },
  {
    icon: <RiGroupLine />,
    title: "My Referral ",
    subTitle: "Referral, commission",
  },
  {
    icon: <RiQuestionFill />,
    title: "Help & Support",
    subTitle: "Help or contact Naira Wave",
  },
  {
    icon: <RiFolderShield2Fill />,
    title: "Legal",
    subTitle: "Help, Privacy, Security",
  },
  {
    icon: <RiLogoutBoxLine />,
    title: "Sign Out ",
    subTitle: "Sign out of your account",
  },
];
export default function GeneralSetting() {
  return (
    <div>
      <p className=" text-secondary">General settings</p>
      {settings.map((setting) => (
        <GeneralSettingTile
          key={setting.title}
          setting={setting}
          title={setting.title}
        />
      ))}
    </div>
  );
}
