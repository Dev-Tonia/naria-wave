import AccActionTiles from "./AccActionTiles";

export default function AccountActions() {
  const actions = ["Spend", "Transactions", "Send"];
  return (
    <div className=" custom-container">
      <div className=" mt-3">
        {actions.map((action) => (
          <AccActionTiles title={action} key={action} />
        ))}
      </div>
    </div>
  );
}
