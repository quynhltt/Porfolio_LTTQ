import React from "react";

export default function SectionTitle({ title, subTitlte }) {
  return (
    <div className="title text-center flex flex-col items-center space-y-6 mb-16">
      <h2 className="tracking-wider text-4xl font-semibold">{title}</h2>
      <p className="text-lg w-3/5">{subTitlte}</p>
    </div>
  );
}
