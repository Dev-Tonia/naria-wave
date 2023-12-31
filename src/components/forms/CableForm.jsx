import React, { useEffect, useState } from "react";
import CustomInput from "../atoms/CustomInput";
import CustomSelectElement from "../atoms/CustomSelectElement";
import CustomButton from "../atoms/CustomButton";
import GoBackButton from "../atoms/GoBackButton";

export default function CableForm() {
  const [formData, setFormData] = useState({
    amount: "",
    phoneNumber: "",
    cardNumber: "",
    tvProvider: "",
    plan: "",
  }); // form state for all the  form element

  const [tvOption, setTvOption] = useState([]);
  const [amountValue, setAmountValue] = useState();
  const [placeholder, setPlaceholder] = useState("");
  // a function to handle all the form element
  const handleInputChange = (attribute) => {
    const { name, value } = attribute;
    // The name is equivalent to the value of the each form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const options = [
    { title: "DsTv", value: "dstv" },
    { title: "GoTv", value: "gotv" },
    { title: "StarTime", value: "startime" },
  ];
  const dstvValue = [
    {
      title: "d 100 DataPlan 100MB Daily Daily",
      value: "100 daily",
      amount: 100,
    },
    {
      title: "d 200 Data Plan 200MB 3-Day Plan Daily",
      value: "200 daily",
      amount: 200,
    },
  ];
  const gotvValue = [
    {
      title: "G 100 DataPlan 100MB Daily Daily",
      value: "100 daily",
      amount: 100,
    },
    {
      title: "G 200 Data Plan 200MB 3-Day Plan Daily",
      value: "200 daily",
      amount: 200,
    },
    {
      title: "G 350 1GB Daily Plan + 3mins Daily",
      value: "350 daily",
      amount: 350,
    },
  ];
  const startimesValue = [
    {
      title: "s 350 1GB Daily Plan + 3mins Daily",
      value: "350 daily",
      amount: 350,
    },
    {
      title: "s 600 2.5GB 2-Day Plan Daily",
      value: "600 daily",
      amount: 600,
    },
    {
      title: "s 800 3GB 2-Days Bundle Daily",
      value: "800 daily",
      amount: 800,
    },
  ];
  // Mocking the values of the drop down of the items
  useEffect(() => {
    switch (formData.tvProvider) {
      case "dstv":
        setPlaceholder("Enter DSTV Card Number");
        return setTvOption(dstvValue);
      case "gotv":
        setPlaceholder("Enter GOTV IUC Number");
        return setTvOption(gotvValue);
      case "startime":
        setPlaceholder("Enter StarTimes Card Number");

        return setTvOption(startimesValue);

      default:
        setTvOption([]);
    }
  }, [formData.tvProvider]);
  useEffect(() => {
    if (formData.plan === "") {
      return setAmountValue("");
    } else {
      return setAmountValue(parseInt(formData.plan));
    }
  }, [formData.plan]);

  return (
    <div className=" pb-5">
      <div className=" d-flex  justify-content-between pb-2">
        <GoBackButton />
        <h2 className=" fw-medium fs-4">Buy Cable Bundle</h2>
        <div></div>
      </div>
      <p className=" text-secondary">
        Balance: <span>200</span>
      </p>
      <form action="">
        <CustomSelectElement
          options={options}
          label="Select Tv Provider"
          name="tvProvider"
          value={formData.tvProvider}
          defaultValue={"Select Tv Provider"}
          onInputChange={handleInputChange}
        />

        <CustomSelectElement
          options={tvOption}
          value={formData.plan}
          label="Select Plan"
          name="plan"
          defaultValue={"Select Plan"}
          onInputChange={handleInputChange}
        />
        <CustomInput
          type="text"
          label="Card Number"
          name="cardNumber"
          placeholder={placeholder ?? "Enter card number"}
          value={formData.cardNumber}
          onInputChange={handleInputChange}
        />
        <CustomInput
          type="text"
          label="Amount"
          name="amount"
          placeholder="Enter Amount"
          disabled={true}
          value={amountValue ?? ""}
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
            customClass={"bg-warning  w-100 text-center justify-content-center"}
            isColor={true}
          />
        </div>
      </form>
    </div>
  );
}
