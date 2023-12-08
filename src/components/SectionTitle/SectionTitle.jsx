import React from "react";

export default function SectionTitle({ title, subTitlte }) {
  return (
    <div className="section-title text-center flex flex-col items-center space-y-6">
      <h2 className="tracking-wider text-4xl font-semibold">{title}</h2>
      <p className="text-lg w-3/5">{subTitlte}</p>
    </div>
  );
}
