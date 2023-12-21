import React from "react";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { dataExperience } from "../../../../assets/data/dataExperience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle title={"EXPERIENCE"} subTitlte={"This section contains a selection of personal milestone, each with a description attached."} />
        <div className="exp-list mx-auto flex justify-center space-x-5 mb-16">
          {dataExperience.map((item, index) => {
            let animation = "";
            if (index % 2 == 0) {
              animation = "animate__fadeInDownBig";
            } else {
              animation = "animate__fadeInUpBig";
            }
            return <ExperienceItem key={index} data={item} animation={animation} />;
          })}
        </div>
      </div>
    </section>
  );
}
