import React, { useEffect } from "react";
import { dataProject } from "../../../../assets/data/dataProject";
import Slider from "../../../../components/Carousel/Carousel";

export default function Content({ data }) {
  let { desc, size, role, demo } = data;

  let renderProjectDetail = () => {
    if (data) {
      return data.desc.map((item, index) => {
        return (
          <li key={index}>
            <p className="text-lg">{item}</p>
          </li>
        );
      });
    }
  };

  return (
    <section className="content">
      <div className="container w-2/3 mx-auto my-16">
        <div className="carousel w-2/3 mx-auto mb-16">
          <Slider imgArray={demo} />
        </div>
        <div className="overview space-y-5">
          <div>
            <h3 className="tracking-wider text-2xl font-bold">Description</h3>
            <ul className="mt-2 space-y-1">
              {/* {() => {
                renderProjectDetail();
              }} */}
              {/* {data.desc} */}
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <h3 className="tracking-wider text-2xl font-bold">Team size: </h3>
            <p className="text-lg">{size}</p>
          </div>
          <div className="flex items-center space-x-2">
            <h3 className="tracking-wider text-2xl font-bold">Role: </h3>
            <p className="text-lg">{role}</p>
          </div>
        </div>
        <div className="technologies"></div>
        <div className="link"></div>
      </div>
    </section>
  );
}
