import React from "react";

export default function ExperienceItem({ data }) {
  let { position, company, timeline, desc } = data;
  return (
    <div className="exp-item">
      <h3>{position}</h3>
      <h4>{company}</h4>
      <p>{timeline}</p>
      <p>
        {desc}
        {/* <ul>
            <li>{desc}</li>
        </ul> */}
      </p>
    </div>
  );
}
