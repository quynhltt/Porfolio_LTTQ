import React, { useEffect } from "react";
import Slider from "../../../../components/Carousel/Carousel";
import ItemCard from "../../../../components/ItemCard/ItemCard";
import Button from "../../../../components/Button/Button";
import { HashLink } from "react-router-hash-link";
import WOW from "wowjs";

export default function Content({ data }) {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  let { desc, size, role, demo, technology, path } = data;

  let renderProjectDetail = () => {
    if (desc) {
      return desc.map((item, index) => {
        return (
          <li key={index} className="space-x-4 ml-4 mb-2 flex items-baseline">
            <i className="fa-brands fa-slack "></i>
            <p className="text-lg">{item}</p>
          </li>
        );
      });
    }
  };

  let renderStackItem = () => {
    if (technology) {
      return technology.map((item, index) => {
        return <ItemCard key={index} content={item} className={"stack-item"} />;
      });
    }
  };

  return (
    <section className="content">
      <div className="container w-1/2 mx-auto my-16">
        <div className="carousel w-3/4 mx-auto mb-16 animate__animated animate__fadeIn animate__slow animate__delay-1s">
          <Slider imgArray={demo} />
        </div>
        <div className="overview space-y-10">
          <div className="desc">
            <h3 className="tracking-wider text-2xl font-bold animate__animated animate__fadeInUp wow ">Description:</h3>
            <ul className="mt-3 space-y-1 animate__animated animate__fadeInUp wow">{renderProjectDetail()}</ul>
          </div>
          <div className="size flex items-center space-x-2 animate__animated animate__fadeInUp wow">
            <h3 className="tracking-wider text-2xl font-bold ">Team size: </h3>
            <p className="text-lg ">{size}</p>
          </div>
          <div className="role flex items-center space-x-2 animate__animated animate__fadeInUp wow">
            <h3 className="tracking-wider text-2xl font-bold ">Role: </h3>
            <p className="text-lg ">{role}</p>
          </div>
          <div className="technologies">
            <h3 className="tracking-wider text-2xl font-bold animate__animated animate__fadeInUp wow">Technology stacks: </h3>
            <div className="space-y-3 w-full ml-4 mt-2 animate__animated animate__fadeInUp wow">{renderStackItem()}</div>
          </div>
          <div className="link space-y-4">
            <h3 className="tracking-wider text-2xl font-bold animate__animated animate__fadeInUp wow">See live: </h3>
            <div className="button ml-4 space-x-5 animate__animated animate__fadeInUp wow">
              <a target="_blank" href={path} rel="noreferrer">
                <Button content={"PROJECT LINK"} typeBtn={"solid-pink"} />
              </a>
              <HashLink to={"/#project"} smooth>
                <Button content={"GO BACK"} typeBtn={"light-pink"} />
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
