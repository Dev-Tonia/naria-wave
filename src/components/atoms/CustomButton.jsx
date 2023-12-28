export default function CustomButton({ icon, title, customClass, color }) {
  // CustomClass is expecting any additional class for the button
  return (
    <button
      type="button"
      className={` btn  d-flex gap-2 align-items-center fw-bolder custom-shadow ${customClass} ${color} `}
    >
      {icon && (
        <div
          style={{ width: "20px", height: "20px" }}
          className=" d-flex align-items-center bg-warning rounded-circle text-white fs-3"
        >
          {icon}
        </div>
      )}
      {color ? (
        <span className=" text-white  ">{title}</span>
      ) : (
        <span className=" text-warning">{title}</span>
      )}
    </button>
  );
}
