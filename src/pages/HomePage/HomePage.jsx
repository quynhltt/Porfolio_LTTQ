import React from "react";
import Intro from "./component/Intro/Intro";
import AboutMe from "./component/AboutMe/AboutMe";
import Experience from "./component/Experience/Experience";
import Projects from "./component/Projects/Projects";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

export default function HomePage() {
  return (
    <div className="homepage">
      <Intro />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}
