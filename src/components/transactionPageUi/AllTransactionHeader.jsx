import { RiFilter3Fill } from "react-icons/ri";
export default function AllTransactionHeader() {
  return (
    <div className=" custom-shadow py-2">
      <div className="custom-container">
        <div className="  d-flex justify-content-between ">
          <h2 className=" fw-bold fs-4">All Transactions</h2>
          <div>
            <RiFilter3Fill size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
