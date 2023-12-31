import React, { useState } from "react";
import CustomInput from "../atoms/CustomInput";
import CustomSelectElement from "../atoms/CustomSelectElement";
import CustomButton from "../atoms/CustomButton";
import GoBackButton from "../atoms/GoBackButton";

export default function AirTimeForm() {
  const [formData, setFormData] = useState({
    amount: "",
    phoneNumber: "",
    network: "",
  });
  const handleInputChange = (attribute) => {
    const { name, value } = attribute;
    // The name is equivalent to the value of the each form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  console.log(formData.network);

  const options = [
    { title: "MTN", value: "MTN" },
    { title: "Airtel", value: "Airtel" },
    { title: "9Mobile", value: "9Mobile" },
    { title: "Glo", value: "Glo" },
  ];
  return (
    <div>
      <div className=" d-flex  justify-content-between pb-2">
        <GoBackButton />
        <h2 className=" fw-medium fs-4">Buy Airtime </h2>
        <div></div>
      </div>
      <p className=" text-secondary">
        Balance: <span>200</span>
      </p>
      <form action="">
        <CustomInput
          type="text"
          label="Amount"
          name="amount"
          placeholder="Enter Amount"
          value={formData.amount}
          onInputChange={handleInputChange}
        />
        <CustomSelectElement
          options={options}
          label="Select Network"
          value={formData.network}
          name="network"
          defaultValue={"Select Your Network"}
          onInputChange={handleInputChange}
        />
        <CustomInput
          type=" text"
          value={formData.phoneNumber}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter Phone Number"
          onInputChange={handleInputChange}
        />
        <div className=" ">
          <CustomButton
            title="Proceed"
            customClass={"bg-warning w-100 text-center justify-content-center"}
            isColor={true}
          />
        </div>
      </form>
    </div>
  );
}
