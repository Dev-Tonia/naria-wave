import AccountActions from "../components/homeUi/AccountActions";
import AccBalance from "../components/homeUi/AccBalance";
import HomeHeader from "../components/homeUi/HomeHeader";
import Products from "../components/homeUi/Products";
import ActionType from "../components/homeUi/ActionType";
import RecentTransaction from "../components/homeUi/RecentTransaction";
import AirTimeForm from "../components/forms/AirTimeForm";
import Modal from "../components/Modal";

import { useState } from "react";
import AccountSetUpStatus from "../components/slider/AccountSetUpStatus";

export default function Home() {
  // const [isTabOpen, setIsTabOpen] = useState(true);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <main className="  py-5">
        <HomeHeader />
        <AccountActions />
        <AccBalance />
        <ActionType />
        <AccountSetUpStatus />
        <Products />
        <RecentTransaction />
      </main>
      {/* <Modal /> */}
    </>
  );
}
