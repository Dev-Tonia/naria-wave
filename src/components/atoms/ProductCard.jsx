// eslint-disable-next-line react/prop-types
export default function ProductCard({ iconName, title, iconColor }) {
  return (
    <div className="icon-box text-center py-4 px-3">
      <span
        style={{
          color: iconColor,
          fontSize: "30px",
        }}
      >
        {iconName}
      </span>
      <div>
        <h6>{title}</h6>
      </div>
    </div>
  );
}
