import TransactionDate from "../atoms/TransactionDate";
import TransactionTile from "../atoms/TransactionTile";

export default function RecentTransaction() {
  const providers = [
    {
      name: "MTN",
      img: "https://res.cloudinary.com/tonia/image/upload/v1695643582/images/MTN_ddee4o.jpg",
      color: "rgba(255, 203, 0, 0.3)",
    },
    {
      name: "AIRTEL",
      img: "https://res.cloudinary.com/tonia/image/upload/v1695643582/images/Airtel_crpbkp.jpg",
      color: "rgba(173, 0, 0, 0.3)",
    },
    {
      name: "GLO",
      img: "https://res.cloudinary.com/tonia/image/upload/v1695643582/images/GLO_ryur71.jpg",
      color: "rgba(82, 173, 49, 0.3)",
    },
    {
      name: "9MOBILE",
      img: "https://res.cloudinary.com/tonia/image/upload/v1695643582/images/9mobile2_lywgta.jpg",
      color: " rgba(86, 123, 27, 0.3)",
    },
  ];
  return (
    <div className=" mt-3">
      <div className="custom-container">
        <p className=" fw-medium">Recent Transaction Details</p>
      </div>
      <TransactionDate />
      <TransactionTile />
    </div>
  );
}
