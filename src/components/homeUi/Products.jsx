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
    path: "airtime",
  },
  {
    title: "Internet",
    iconName: <RiWifiFill />,
    iconColor: "red",
    path: "data",
  },
  {
    title: "Tv",
    iconName: <RiTvFill />,
    iconColor: "green",
    path: "cable",
  },
  {
    title: "Electricity",
    iconName: <RiLightbulbFlashFill />,
    iconColor: "red",
    path: "electricity",
  },
];
export default function Products() {
  // const [show, setShow] = useState(false);
  // function openForm() {
  //   setShow(true);
  // }
  // function closeForm() {
  //   setShow(false);
  // }
  return (
    <>
      <section className="mt-5 custom-container">
        <h5 className=" text-secondary fw-medium">Quick Access</h5>
        <div className="product overflow-auto ">
          {products.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
      </section>
    </>
  );
}
