import React from "react";

export default function TransactionTile() {
  return (
    <div className=" bg-white border-bottom">
      <div className=" custom-container py-3">
        <div className=" d-flex justify-content-between">
          <div className=" d-flex ">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-around  "
              style={{
                background: "rgba(86, 123, 27, 0.7)",
                width: "40px",
                height: "40px",
              }}
            >
              <div
                style={{ width: "30px", height: "30px" }}
                className=" rounded-circle d-flex align-items-center justify-content-around overflow-hidden  "
              >
                <img
                  className=" img-fluid "
                  src="https://res.cloudinary.com/tonia/image/upload/v1695643582/images/9mobile2_lywgta.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className=" ps-3">
              <p className=" fw-medium mb-0">9MOBILE VTU</p>
              <p className=" text-secondary mb-0">06:55 pm</p>
            </div>
          </div>
          <div className=" fw-bold fs-5 text-success">
            <span>+</span>
            <span className=" ">&#8358;</span>
            <span className=" d-inline-block ">300.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
