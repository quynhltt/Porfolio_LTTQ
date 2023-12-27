import React from "react";
import Button from "../../../../components/Button/Button";

export default function IntroProject({ data }) {
  let { name, path } = data;
  return (
    <section className="intro py-10 flex items-center">
      <div className="container flex flex-col items-center space-y-5 text-center">
        <h1 className="tracking-wider text-5xl font-semibold animate__animated animate__zoomIn">{name}</h1>
        <h2 className="tracking-wider text-2xl animate__animated animate__zoomIn">This page contains the details of {name} Project which consists of the Project Overview, Technologies Stacks Used and Demo Links to the official product.</h2>
        <a target="_blank" href={path} rel="noreferrer" className="animate__animated animate__zoomIn animate__delay-1s">
          <Button content={"PROJECT LINK"} typeBtn={"solid"} />
        </a>
      </div>
    </section>
  );
}
