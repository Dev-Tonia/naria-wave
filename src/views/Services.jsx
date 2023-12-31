import React from "react";
import ProductCard from "../components/atoms/ProductCard";
import {
  RiPhoneFill,
  RiWifiFill,
  RiTvFill,
  RiLightbulbFlashFill,
  RiBook3Fill,
  RiGlobalFill,
  RiArrowLeftSLine,
} from "react-icons/ri";
import CustomButton from "../components/atoms/CustomButton";
import GoBackButton from "../components/atoms/GoBackButton";

export default function Services() {
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
    {
      title: "Education",
      iconName: <RiBook3Fill />,
      iconColor: "orange",
      path: "electricity",
    },
    {
      title: "Internet",
      iconName: <RiGlobalFill />,
      iconColor: "orange",
      path: "electricity",
    },
  ];

  return (
    <div className=" custom-container pb-5">
      <div className=" d-flex  justify-content-between pb-2">
        <GoBackButton />
        <h2 className=" fw-medium fs-4">Services</h2>
        <div></div>
      </div>
      <p className=" text-secondary">
        Discover a diverse collection of services meticulously crafted to
        streamline and enhance your daily life.
      </p>
      <div className=" services">
        {products.map((product) => (
          <div className=" g-col-3 m-2 " key={product.title}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
