import React, { useEffect } from "react";
import { dataSkill } from "../../../../assets/data/dataSkill";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import WOW from "wowjs";
import ItemCard from "../../../../components/ItemCard/ItemCard";

export default function AboutMe() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  let renderSkills = () => {
    return dataSkill.map((item) => {
      return (
        <ItemCard key={item.id} content={item.name} className={"skill-item"} />
        // <span key={item.id} className="skill-item inline-block mr-3 py-1.5 px-2.5">
        //   {item.name}
        // </span>
      );
    });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle title={"ABOUT ME"} subTitlte={"This section contains further details about me, and my current skill set — which primarily consists of programming and technology."}></SectionTitle>
        <div className="content flex justify-between mb-16">
          <div className="desc space-y-2 animate__animated animate__slideInLeft wow">
            <h3 className="tracking-wider text-2xl font-medium mb-3">Get to know me!</h3>
            <p className="text-lg leading-relaxed">
              I'm a <strong>Frontend Web Developer</strong> focuses on constructing the user interface of websites and web applications, which leads to the overall product's success. Check out some of my work in the{" "}
              <strong>
                <a href="#project" className="underline">
                  Projects
                </a>
              </strong>{" "}
              section.
            </p>
            <p className="text-lg leading-relaxed">
              I have high enthusiasm for specializing in UI/UX development. I have experience working on frameworks <strong>ReactJS</strong> and <strong>Angular</strong> and using some core web technologies{" "}
              <strong>HTML, CSS, TypeScript</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              I am flexible and quickly adapt to new environments, I also have a deep passion for technology, especially front-end development. As a quick learner and good team player, I always try my best to contribute to the organization.
            </p>
          </div>
          <div className="skill space-y-2 animate__animated animate__slideInRight wow">
            <h3 className="tracking-wider text-2xl font-medium mb-3">My Skills</h3>
            <div className="space-y-3 w-full">{renderSkills()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
