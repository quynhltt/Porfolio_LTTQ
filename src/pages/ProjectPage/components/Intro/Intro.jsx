import React from "react";
import Button from "../../../../components/Button/Button";

export default function Intro({ data }) {
  let { name, path } = data;
  return (
    <section className="intro py-10 flex items-center">
      <div className="container flex flex-col items-center space-y-5 text-center">
        <h1 className="tracking-wider text-5xl font-semibold">{name}</h1>
        <h2 className="tracking-wider text-2xl ">This page contains the details of {name} Project which consists of the Project Overview, Technologies Stacks Used and Demo Links to the official product.</h2>
        <a target="_blank" href={path} rel="noreferrer">
          <Button content={"PROJECT LINK"} typeBtn={"solid"} />
        </a>
      </div>
    </section>
  );
}
