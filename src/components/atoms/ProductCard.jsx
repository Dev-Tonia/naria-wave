// eslint-disable-next-line react/prop-types

import { useNavigate } from "react-router-dom";
import "./atom.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const navigateTo = () => navigate(`/order/${product.path}`);
  return (
    <div className=" col m-2 custom-shadow d-flex align-items-center justify-content-center">
      <div
        onClick={navigateTo}
        className="icon-box text-center py-4 px-3 productCard"
        style={{ cursor: "pointer" }}
      >
        <span
          style={{
            color: product.iconColor,
          }}
        >
          {product.iconName}
        </span>
        <div>
          <h6>{product.title}</h6>
        </div>
      </div>
    </div>
  );
}
