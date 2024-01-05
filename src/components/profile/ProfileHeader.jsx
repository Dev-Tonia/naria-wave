import { RiCameraFill } from "react-icons/ri";
import UserAvatar from "../atoms/UserAvatar";

export default function ProfileHeader() {
  return (
    <div>
      <h1 className=" fs-3">Profile</h1>
      <p className=" text-secondary">
        Your Naira Wave profile serves as your personal portal for overseeing
        and managing your account information.
      </p>
      <div className=" d-flex align-items-center">
        <UserAvatar />
        <div className="form-group ms-4   " style={{ width: "fit-content" }}>
          <label
            htmlFor="upload"
            className=" fw-medium bg-warning text-warning  bg-opacity-10 position-relative px-4 pt-1 pb-2 rounded-5"
            style={{ cursor: "pointer" }}
          >
            <span className=" d-inline-block pe-1 fs-5 ">
              <RiCameraFill />
            </span>
            <span> Upload Photo </span>
            <input
              type="file"
              id="upload"
              className=" invisible position-absolute top-0 start-0"
            />
          </label>
        </div>
      </div>

      <div className=" user-name mt-2">
        <h2 className=" fs-5 mb-0">Owezim Godwin</h2>
        <p className=" text-secondary">godwin@gmail.com</p>
      </div>
    </div>
  );
}
