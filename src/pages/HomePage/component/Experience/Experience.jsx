import React from "react";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { dataExperience } from "../../../../assets/data/dataExperience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle title={"EXPERIENCE"} />
        <div className="exp-list mx-auto flex justify-center space-x-5 mb-16">
          {dataExperience.map((item) => {
            return <ExperienceItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
