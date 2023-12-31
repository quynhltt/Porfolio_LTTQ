import React from "react";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { dataProject } from "../../../../assets/data/dataProject";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="project" className="project">
      <div className="container">
        <SectionTitle title={"PROJECTS"} subTitlte={"This section contains a selection of personal projects, each with a description attached."} />
        <div className="project-list mx-auto w-3/4 grid grid-cols-2 gap-8 mb-16">
          {dataProject.map((item, index) => {
            let animation = "";
            if (index % 2 == 0) {
              animation = "animate__fadeInLeft";
            } else {
              animation = "animate__fadeInRight";
            }
            return <ProjectItem key={item.id} data={item} animation={animation} />;
          })}
        </div>
      </div>
    </section>
  );
}
