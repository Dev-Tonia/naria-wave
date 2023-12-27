import "./home.css";
import profileImg from "../../assets/imgs/profile.jpg";
import { SeeMore } from "../../utils/icons/icons";
export default function HomeHeader() {
  return (
    <div className=" custom-container">
      <div className=" d-flex align-items-center justify-content-between ">
        <div className=" d-flex align-items-center">
          <div className=" img-wrapper rounded-circle overflow-hidden">
            <img
              src={profileImg}
              alt="User Profile Image"
              className=" img-fluid"
            />
          </div>
          <h3 className=" fw-bolder ps-4">Hi, Tonia</h3>
        </div>
        <div className=" icon ">
          <SeeMore />
        </div>
      </div>
    </div>
  );
}
