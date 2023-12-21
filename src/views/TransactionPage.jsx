import React from "react";
import AllTransactionHeader from "../components/transactionPageUi/AllTransactionHeader";
import AllTransactionsTile from "../components/transactionPageUi/AllTransactionsTile";

export default function TransactionPage() {
  return (
    <div className="  py-4 ">
      <AllTransactionHeader />
      <AllTransactionsTile />
    </div>
  );
}
