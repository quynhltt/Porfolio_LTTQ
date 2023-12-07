import React from "react";
import "animate.css";

import ava from "../../assets/images/Screenshot 2023-12-06 173637.png";
import Button from "../Button/Button";

export default function AboutMe() {
  return (
    <section className="about flex items-center">
      <div className="container flex justify-between items-center">
        <div className="content space-y-5">
          <h2 className="content__title tracking-wider text-5xl font-semibold animate__animated animate__fadeInUp">HI, I'M LÊ THANH TRÚC QUỲNH</h2>
          <p className="content_desb text-lg animate__animated animate__fadeInUp animate__delay-1s">
            A Frontend Web Developer focuses on constructing the user interface of websites and web applications, which leads to the overall product's success.
          </p>
          <a href="#project" className="inline-block animate__animated animate__fadeInUp animate__delay-2s">
            <Button typeBtn={"solid"} content={"PROJECTS"} />
          </a>
        </div>
        <div className="ava animate__animated animate__fadeInUp animate__delay-2s">
          <img src={ava} alt="" style={{ border: "10px solid #1e3050", borderRadius: "10px" }} className="ava__img mx-auto" />
        </div>
      </div>
    </section>
  );
}
