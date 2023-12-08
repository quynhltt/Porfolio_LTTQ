import React from "react";
import Button from "../../../../components/Button/Button";

export default function ProjectItem({ data }) {
  let { name, thumbnailPath } = data;
  return (
    <div className="project-item text-center">
      <img src={thumbnailPath} alt="" className="w-full h-full" />
      <div className="overlay w-full h-full flex flex-col justify-center items-center space-y-5 px-7">
        <h4 className="title text-3xl font-medium tracking-wider">{name}</h4>
        <Button content={"More detail >"} typeBtn={"light-white"} />
      </div>
    </div>
  );
}
