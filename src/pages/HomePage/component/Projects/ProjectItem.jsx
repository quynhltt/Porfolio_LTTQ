import React from "react";
import Button from "../../../../components/Button/Button";
import "animate.css";
import { NavLink } from "react-router-dom";

export default function ProjectItem({ data }) {
  let { id, name, thumbnailPath } = data;
  return (
    <div className="project-item text-center animate__animated animate__fadeInUpBig animate__delay-1s">
      <img src={thumbnailPath} alt="" className="w-full h-full" />
      <div className="overlay w-full h-full flex flex-col justify-center items-center space-y-5 px-7">
        <h4 className="title text-3xl font-medium tracking-wider">{name}</h4>
        <NavLink to={`/project/${id}`}>
          <Button content={"More detail >"} typeBtn={"light-white"} />
        </NavLink>
      </div>
    </div>
  );
}
