import React, { useEffect } from "react";
import { Carousel } from "antd";
import { imgProject1 } from "../../assets/data/dataProject";

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
      <Carousel dots arrows>
        {renderCarousel()}
      </Carousel>
    </div>
  );
}
