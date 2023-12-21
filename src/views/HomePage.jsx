import AccountActions from "../components/homeUi/AccountActions";
import AccBalance from "../components/homeUi/AccBalance";
import HomeHeader from "../components/homeUi/HomeHeader";
import Products from "../components/homeUi/Products";
import ActionType from "../components/homeUi/ActionType";
import RecentTransaction from "../components/homeUi/RecentTransaction";

export default function Home() {
  return (
    <main className="  py-5">
      <HomeHeader />
      <AccountActions />
      <AccBalance />
      <ActionType />
      <Products />
      <RecentTransaction />
    </main>
  );
}
