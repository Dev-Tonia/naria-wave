import React, { useState } from "react";
// import "./Modal.css"; // Create a CSS file for styling the modal

const Modal = ({ closeModal, children }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center px-4 "
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 1,
        minHeight: "100vh",
      }}
    >
      <div
        className="modal-content  bg-white px-5"
        style={{
          maxWidth: "550px",
        }}
      >
        <div>
          <div className=" d-flex justify-content-end">
            <span
              className="close fs-2 fw-bold d-inline-block "
              onClick={closeModal}
              style={{ cursor: "pointer", color: "red" }}
            >
              &times;
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
