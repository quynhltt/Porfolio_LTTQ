import React from "react";
import { dataSocialLink } from "../../assets/data/dataSocialLink";

export default function Footer() {
  let renderSocialInfo = () => {
    return dataSocialLink.map((item) => {
      return (
        <li key={item.id} className="icon__item">
          <a target="_blank" href={item.path} rel="noreferrer">
            <i className={item.icon}></i>
          </a>
        </li>
      );
    });
  };

  return (
    <section className="footer py-20">
      <div className="container">
        <div className="content flex justify-between items-start pb-10">
          <div className="user-info space-y-3">
            <h3 className="tracking-wider font-semibold text-xl">USERNAME</h3>
            <p>A Frontend Web Developer focuses on constructing the user interface of websites and web applications, which leads to the overall product's success.</p>
          </div>
          <div className="social-link space-y-3">
            <h3 className="tracking-wider font-semibold text-xl">SOCIAL</h3>
            <ul className="icon flex justify-start items-center space-x-5">{renderSocialInfo()}</ul>
          </div>
        </div>
        <div className="copyright pt-6">
          <p>Copyright © 2023</p>
        </div>
      </div>
    </section>
  );
}
