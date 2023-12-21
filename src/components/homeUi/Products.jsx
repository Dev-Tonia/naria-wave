import {
  RiPhoneFill,
  RiWifiFill,
  RiLightbulbFlashFill,
  RiTvFill,
} from "react-icons/ri";
import "./home.css";
import ProductCard from "../atoms/ProductCard";

const products = [
  {
    title: "Airtime",
    iconName: <RiPhoneFill />,
    iconColor: "orange",
  },
  {
    title: "Internet",
    iconName: <RiWifiFill />,
    iconColor: "red",
  },
  {
    title: "Tv",
    iconName: <RiTvFill />,
    iconColor: "green",
  },
  {
    title: "Electricity",
    iconName: <RiLightbulbFlashFill />,
    iconColor: "red",
  },
];
export default function Products() {
  return (
    <section className="mt-5 container">
      <h5 className=" text-secondary fw-medium">Quick Access</h5>
      <div className="product  ">
        {products.map((product) => (
          <div className=" g-col-3 m-2 custom-shadow" key={product.title}>
            <ProductCard
              title={product.title}
              iconColor={product.iconColor}
              iconName={product.iconName}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
