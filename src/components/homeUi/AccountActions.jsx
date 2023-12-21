import Tiles from "./Tiles";

export default function AccountActions() {
  const actions = ["Spend", "Transactions", "Send"];
  return (
    <div className=" container">
      <div className=" mt-3">
        {actions.map((action) => (
          <Tiles title={action} key={action} />
        ))}
      </div>
    </div>
  );
}
