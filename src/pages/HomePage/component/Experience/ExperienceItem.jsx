import React, { useEffect } from "react";
import "animate.css";
import WOW from "wowjs";
import Button from "../../../../components/Button/Button";
import { NavLink } from "react-router-dom";

export default function ExperienceItem({ data, animation }) {
  let { position, company, timeline, id } = data;
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className={`exp-item p-8 space-y-2 animate__animated ${animation} wow`}>
      <h3 className="title tracking-wide text-2xl font-medium">{position}</h3>
      <h4 className="company text-lg">{company}</h4>
      <p className="timeline">{timeline}</p>
      <div className="text-center mt-3">
        <NavLink to={`/experience/${id}`}>
          <Button content={"More detail >"} typeBtn={"solid-pink"} />
        </NavLink>
      </div>
    </div>
  );
}
