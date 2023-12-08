import React from "react";
import Button from "../../../../components/Button/Button";

export default function ExperienceItem({ data }) {
  let { position, company, timeline, desc } = data;
  return (
    <div className="exp-item p-8 space-y-2">
      <h3 className="title tracking-wide text-2xl font-medium">{position}</h3>
      <h4 className="company text-lg">{company}</h4>
      <p className="timeline">{timeline}</p>
      <p className="desc">
        {desc}
        {/* <ul>
            <li>{desc}</li>
        </ul> */}
      </p>
      <div className="text-center mt-3">
        <Button content={"More detail >"} typeBtn={"solid"} />
      </div>
    </div>
  );
}