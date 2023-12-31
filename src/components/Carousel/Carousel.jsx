import React, { useEffect } from "react";
import { Carousel } from "antd";

export default function Slider({ imgArray }) {
  let renderCarousel = () => {
    if (imgArray) {
      return imgArray.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Carousel dots arrows autoplay autoplaySpeed={1800}>
        {renderCarousel()}
      </Carousel>
    </div>
  );
}
