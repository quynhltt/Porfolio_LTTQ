import React from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { dataProject } from "../../../../assets/data/dataProject";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="project" className="project">
      <div className="container">
        <SectionTitle title={"PROJECTS"} />
        <div className="project-list mx-auto w-3/4 grid grid-cols-2 gap-8 mb-16">
          {dataProject.map((item) => {
            return <ProjectItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
