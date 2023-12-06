import React from "react";
import { NavLink } from "react-router-dom";

import ava from "../../assets/images/avatar.png";

export default function Header() {
  return (
    <section className="header py-2.5 font-semibold">
      <div className="container h-full flex justify-between items-center tracking-wider">
        <NavLink to={"/"} className="logo flex items-center space-x-2">
          <span className="ava inline-block rounded-full overflow-hidden">
            <img src={ava} alt="" className="ava__img" />
          </span>
          <span>USERNAME</span>
        </NavLink>
        <div className="menu flex space-x-10 justify-between items-center">
          <a href="#">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#project">PROJECT</a>
        </div>
      </div>
    </section>
  );
}
