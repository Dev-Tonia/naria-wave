import "./home.css";
import profileImg from "../../assets/imgs/profile.jpg";
import { BiMessageDetail } from "react-icons/bi";
// import { SeeMore } from "../../utils/icons/icons";
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
          <h3 className=" fw-bolder ps-3">Hi, Tonia</h3>
        </div>
        <div className=" icon ">
          <span className=" text-warning fs-1 " style={{ cursor: "pointer" }}>
            <BiMessageDetail />
          </span>
        </div>
      </div>
    </div>
  );
}
