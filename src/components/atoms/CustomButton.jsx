export default function CustomButton({ icon, title }) {
  return (
    <button
      type="button"
      className="btn  d-flex gap-2 align-items-center fw-bolder custom-shadow"
    >
      <div
        style={{ width: "20px", height: "20px" }}
        className=" d-flex align-items-center bg-warning rounded-circle text-white fs-3"
      >
        {icon}
      </div>
      <span className=" text-warning">{title}</span>
    </button>
  );
}
