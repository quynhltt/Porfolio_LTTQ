import React from "react";
import Intro from "./component/Intro/Intro";
import AboutMe from "./component/AboutMe/AboutMe";
import Experience from "./component/Experience/Experience";
import Projects from "./component/Projects/Projects";

export default function HomePage() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Experience />
      <Projects />
    </>
  );
}
