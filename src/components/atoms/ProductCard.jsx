// eslint-disable-next-line react/prop-types

import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const navigateTo = () => navigate(`/order/${product.path}`);
  return (
    <div
      onClick={navigateTo}
      className="icon-box text-center py-4 px-3  cursor"
      style={{ cursor: "pointer" }}
    >
      <span
        style={{
          color: product.iconColor,
          fontSize: "30px",
        }}
      >
        {product.iconName}
      </span>
      <div>
        <h6>{product.title}</h6>
      </div>
    </div>
  );
}
