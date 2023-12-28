import React from "react";
import "animate.css";

import ava from "../../../../assets/images/ava-transparent.png";
import Button from "../../../../components/Button/Button";
import { dataSocialLink } from "../../../../assets/data/dataSocialLink";

export default function Intro() {
  return (
    <section className="intro flex flex-col justify-around items-center pt-28  space-y-8">
      <div className="container flex justify-between items-center">
        <div className="content space-y-7">
          <h2 className="content__title tracking-wider text-5xl font-semibold animate__animated animate__fadeInUp">HI, I'M LÊ THANH TRÚC QUỲNH</h2>
          <p className="content_desb text-lg animate__animated animate__fadeInUp animate__delay-1s">
            A Frontend Web Developer focuses on constructing the user interface of websites and web applications, <br /> which leads to the overall product's success.
          </p>
          <a href="#project" className="inline-block animate__animated animate__fadeInUp animate__delay-2s">
            <Button typeBtn={"solid-pink"} content={"PROJECTS"} />
          </a>
        </div>
        <div className="ava animate__animated animate__fadeInUpBig animate__delay-2s">
          <img src={ava} alt="" className="ava__img mx-auto" />
        </div>
      </div>
      <div>
        <div className="side-contact p-2 animate__animated animate__fadeInUp animate__delay-3s">
          <div className="social-link">
            <ul className="flex space-x-4 ">
              {dataSocialLink.map((item) => {
                return (
                  <li key={item.id} className="icon__item text-3xl">
                    <a target="_blank" href={item.path} rel="noreferrer">
                      <i className={item.icon}></i>
                    </a>
                  </li>
                );
              })}
              <li className="icon__item text-3xl">
                <a target="_blank" href="mailto:quynh.le2199@gmail.com" rel="noreferrer">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
              <li className="icon__item text-3xl">
                <a target="_blank" href="https://zalo.me/84917980259" rel="noreferrer">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="animation text-center text-4xl animate__animated animate__fadeIn animate__delay-3s">
          <i className="icon fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
}
