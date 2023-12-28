import React, { useEffect, useState } from "react";
import ExpItem from "./ExpItem";
import { project } from "../../../../assets/data/dataExperience";
import { HashLink } from "react-router-hash-link";
import Button from "../../../../components/Button/Button";

export default function ContentExp({ data }) {
  let dataRender = project.filter((item) => {
    return item.code === data.code;
  });

  let renderExpItem = () => {
    return dataRender.map((item, index) => {
      return <ExpItem key={index} data={item} isFirstIndex={index === 0} />;
    });
  };

  return (
    <section className="content">
      <div className="container w-2/3 mx-auto ">
        <div className="exp-list">{renderExpItem()}</div>
        <div className={`link mb-10 mt-2.5 animate__animated animate__fadeInUp wow animate__delay-${dataRender.length > 1 ? "0" : "3"}s`}>
          <HashLink to={"/#experience"} smooth>
            <Button content={"GO BACK"} typeBtn={"light-beige"} />
          </HashLink>
        </div>
      </div>
    </section>
  );
}
