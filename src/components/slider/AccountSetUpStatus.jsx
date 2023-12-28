import React from "react";
import "./slider.css";
import CircularProgress from "./CircularProgress";
export default function AccountSetUpStatus() {
  const progress = Math.round((2 / 3) * 100);

  return (
    <div className=" custom-container mt-3">
      {/* <div style={{}}>
        <CircularProgress
          radius={40}
          strokeWidth={5}
          progress={progress}
          text={"2/3"}
        />
      </div> */}

      <div className=" custom-shadow ">
        <div className=" d-flex align-items-center gap-3 py-2 px-3 rounded-5">
          <CircularProgress percentage={progress} text={"2/3"} />
          <div>
            <h6 className=" fs-5 text-warning fw-medium">
              {" "}
              Setup Your Account{" "}
            </h6>
            <p className=" pe-3 text-body-tertiary fw-medium">
              Complete your account setup and explore Naira wave features{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
