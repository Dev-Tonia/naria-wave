import React from "react";
import { useParams } from "react-router-dom";
import AirTimeForm from "../components/forms/AirTimeForm";
import CableForm from "../components/forms/CableForm";
import DataForm from "../components/forms/DataForm";
import ElectricityForm from "../components/forms/ElectricityForm";

export default function AllFormDisplay() {
  const { type } = useParams();
  const forms = {
    airtime: <AirTimeForm />,
    cable: <CableForm />,
    data: <DataForm />,
    electricity: <ElectricityForm />,
  };
  return (
    <div
      className=" pt-5 custom-container"
      style={{
        marginTop: "90px",
      }}
    >
      {forms[type]}
    </div>
  );
}
