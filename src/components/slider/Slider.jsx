// import React, { useState } from "react";
// import AccountSetUpStatus from "./AccountSetUpStatus";

// const Slider = () => {
//   const [index, setIndex] = useState(0);
//   //   const items = Array.from({ length: 3 }, (_, i) => i + 1);

//   const items = Array.from({ length: 3 }, (_, index) => index + 1);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <div
//       id="carouselExampleIndicators"
//       className="carousel slide"
//       data-ride="carousel"
//     >
//       <ol className="carousel-indicators">
//         {items.map((_, idx) => (
//           //   <li
//           //     key={idx}
//           //     data-target="#carouselExampleIndicators"
//           //     data-slide-to={idx}
//           //     className={idx === index ? "active" : ""}
//           //     onClick={() => handleSelect(idx)}
//           //   ></li>

//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={idx + 1}
//             aria-label={`Slide ${idx}`}
//           ></button>
//         ))}
//       </ol>
//       <div className="carousel-inner">
//         {items.map((item, idx) => (
//           <div
//             key={idx}
//             className={`carousel-item ${idx === index ? "active" : ""}`}
//           >
//             <AccountSetUpStatus />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

import Carousel from "react-bootstrap/Carousel";
import AccountSetUpStatus from "./AccountSetUpStatus";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function Slider() {
  const items = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <Carousel controls={false} data-bs-theme="dark" indicators={false}>
      {items.map((_, index) => (
        <Carousel.Item key={index}>
          <AccountSetUpStatus />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
