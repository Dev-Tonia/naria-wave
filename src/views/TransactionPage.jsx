import React from "react";
import AllTransactionHeader from "../components/transactionPageUi/AllTransactionHeader";
import AllTransactionsTile from "../components/transactionPageUi/AllTransactionsTile";
import GoBackButton from "../components/atoms/GoBackButton";

export default function TransactionPage() {
  return (
    <div className="  py-4 ">
      <div className=" custom-container pb-2">
        <GoBackButton />
      </div>
      <AllTransactionHeader />
      <AllTransactionsTile />
    </div>
  );
}
