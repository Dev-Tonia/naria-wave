import React, { useEffect, useState } from "react";
import CustomInput from "../atoms/CustomInput";
import CustomSelectElement from "../atoms/CustomSelectElement";
import CustomButton from "../atoms/CustomButton";

export default function DataForm() {
  const [formData, setFormData] = useState({
    amount: "",
    phoneNumber: "",
    network: "",
    plan: "",
  });

  const [dataTypeOption, setDataTypeOption] = useState([]);
  const [amountValue, setAmountValue] = useState();

  const handleInputChange = (attribute) => {
    const { name, value } = attribute;
    // The name is equivalent to the value of the each form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(value);
  };
  const options = [
    { title: "MTN", value: "MTN" },
    { title: "Airtel", value: "Airtel" },
    { title: "9Mobile", value: "9Mobile" },
    { title: "Glo", value: "Glo" },
  ];
  const mtnValues = [
    {
      title: "100 DataPlan 100MB Daily Daily",
      value: "100 daily",
      amount: 100,
    },
    {
      title: "200 Data Plan 200MB 3-Day Plan Daily",
      value: "200 daily",
      amount: 200,
    },
  ];
  const gloValues = [
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
  ];
  const estisalateValue = [
    {
      title: " 9 350 1GB Daily Plan + 3mins Daily",
      value: "350 daily",
      amount: 350,
    },
    {
      title: " 9 600 2.5GB 2-Day Plan Daily",
      value: "600 daily",
      amount: 600,
    },
  ];
  const airtelValue = [
    {
      title: "A 350 1GB Daily Plan + 3mins Daily",
      value: "350 daily",
      amount: 350,
    },
    {
      title: "A 600 2.5GB 2-Day Plan Daily",
      value: "600 daily",
      amount: 600,
    },
  ];

  useEffect(() => {
    switch (formData.network) {
      case "MTN":
        return setDataTypeOption(mtnValues);
      case "Glo":
        return setDataTypeOption(gloValues);
      case "Airtel":
        return setDataTypeOption(airtelValue);
      case "9Mobile":
        return setDataTypeOption(estisalateValue);
      default:
        setDataTypeOption([]);
    }
  }, [formData.network]);
  useEffect(() => {
    if (formData.plan === "") {
      return setAmountValue("");
    } else {
      return setAmountValue(parseInt(formData.plan));
    }
  }, [formData.plan]);

  return (
    <div>
      <h4 className=" fw-medium">Purchase Your Airtime</h4>
      <p className=" text-secondary">
        Balance: <span>200</span>
      </p>
      <form action="">
        <CustomSelectElement
          options={options}
          label="Select Network"
          name="network"
          value={formData.network}
          defaultValue={"Select Network"}
          onInputChange={handleInputChange}
        />

        <CustomSelectElement
          options={dataTypeOption}
          value={formData.plan}
          label="Select Plan"
          name="plan"
          defaultValue={"Select Plan"}
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
            customClass={"bg-warning w-100 text-center justify-content-center"}
            color={true}
          />
        </div>
      </form>
    </div>
  );
}
