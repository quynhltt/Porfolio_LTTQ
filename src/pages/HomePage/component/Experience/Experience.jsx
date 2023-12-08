import React from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { dataExperience } from "../../../../assets/data/dataExperience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  let renderExpItem = () => {
    return dataExperience.map((item) => {
      return <ExperienceItem key={item.id} data={item} />;
    });
  };
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle title={"EXPERIENCE"} />
        <div className="exp-list">{renderExpItem()}</div>
      </div>
    </section>
  );
}
