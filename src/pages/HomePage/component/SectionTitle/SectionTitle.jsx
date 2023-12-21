import React, { useEffect } from "react";
import WOW from "wowjs";

export default function SectionTitle({ title, subTitlte }) {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="section-title text-center flex flex-col items-center space-y-6">
      <h2 className="tracking-wider text-4xl font-semibold animate__animated animate__fadeInUp wow">
        {title}
        <div className="underline animate__animated animate__zoomIn animate__delay-0.5s wow"></div>
      </h2>
      <p className="text-lg w-3/5 animate__animated animate__fadeInUp animate__delay-0.5s wow">{subTitlte}</p>
    </div>
  );
}
