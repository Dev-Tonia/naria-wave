import AccountActions from "../components/homeUi/AccountActions";
import AccBalance from "../components/homeUi/AccBalance";
import HomeHeader from "../components/homeUi/HomeHeader";
import Products from "../components/homeUi/Products";
import ActionType from "../components/homeUi/ActionType";
import RecentTransaction from "../components/homeUi/RecentTransaction";
import Slider from "../components/slider/Slider";

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
      <main className=" pb-5">
        <HomeHeader />
        <AccountActions />
        <AccBalance />
        <ActionType />
        {/* <AccountSetUpStatus /> */}
        <Slider />
        <Products />
        <RecentTransaction />
      </main>
      {/* <Modal /> */}
    </>
  );
}
