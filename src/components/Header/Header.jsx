import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import ava from "../../assets/images/avatar.png";
import { HashLink } from "react-router-hash-link";
import { ThemeContext } from "../../Theme";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section className="header py-2.5 font-semibold">
      <div className="container h-full flex justify-between items-center tracking-wider">
        <NavLink to={"/"} className="logo flex items-center space-x-2">
          <span className="ava inline-block rounded-full overflow-hidden">
            <img src={ava} alt="" className="ava__img" />
          </span>
          <span>LÊ THANH TRÚC QUỲNH</span>
        </NavLink>
        <div className="menu flex space-x-10 justify-between items-center">
          <HashLink to={"/#"}>HOME</HashLink>
          <HashLink to={"/#about"}>ABOUT</HashLink>
          <HashLink to={"/#experience"}>EXPERIENCE</HashLink>
          <HashLink to={"/#project"}>PROJECT</HashLink>
        </div>
        {/* <div>
          <button
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme}
          </button>
        </div> */}
      </div>
    </section>
  );
}
