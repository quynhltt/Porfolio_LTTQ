import React, { useEffect } from "react";
import { dataProject } from "../../../../assets/data/dataProject";
import Slider from "../../../../components/Carousel/Carousel";

export default function Content({ data }) {
  let { desc, size, role, demo } = data;

  let renderProjectDetail = () => {
    if (desc) {
      return desc.map((item, index) => {
        return (
          <li key={index} className="space-x-4 ml-4 mb-">
            <i className="fa-brands fa-slack"></i>
            <span className="text-lg">{item}</span>
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
          <div className="desc">
            <h3 className="tracking-wider text-2xl font-bold">Description</h3>
            <ul className="mt-2 space-y-1">{renderProjectDetail()}</ul>
          </div>
          <div className="size flex items-center space-x-2">
            <h3 className="tracking-wider text-2xl font-bold">Team size: </h3>
            <p className="text-lg">{size}</p>
          </div>
          <div className="role flex items-center space-x-2">
            <h3 className="tracking-wider text-2xl font-bold">Role: </h3>
            <p className="text-lg">{role}</p>
          </div>
          <div className="technologies">
            <h3 className="tracking-wider text-2xl font-bold">Technology stacks: </h3>
          </div>
          <div className="link"></div>
        </div>
      </div>
    </section>
  );
}
