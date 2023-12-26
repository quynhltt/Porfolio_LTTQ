import React, { useEffect, useState } from "react";
import ExpItem from "./ExpItem";
import { project } from "../../../../assets/data/dataExperience";

export default function ContentExp({ data }) {
  let dataRender = project.filter((item) => {
    return item.code === data.code;
  });

  let renderExpItem = () => {
    return dataRender.map((item, index) => {
      return <ExpItem key={index} data={item} />;
    });
  };

  return (
    <section className="content">
      <div className="container w-2/3 mx-auto space-y-4">{renderExpItem()}</div>
    </section>
  );
}
