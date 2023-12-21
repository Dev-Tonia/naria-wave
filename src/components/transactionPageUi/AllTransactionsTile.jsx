import React from "react";
import TransactionDate from "../atoms/TransactionDate";
import TransactionTile from "../atoms/TransactionTile";

export default function AllTransactionsTile() {
  return (
    <div>
      <div>
        <TransactionDate />
        <TransactionTile />
      </div>
    </div>
  );
}
