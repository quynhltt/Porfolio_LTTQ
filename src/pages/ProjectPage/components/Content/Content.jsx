import React from "react";

export default function Content({ data }) {
  let { desc, size, role } = data;
  let renderProjectDetail = () => {
    return desc.map((item) => {
      return (
        <li>
          <p className="text-lg">{item}</p>
        </li>
      );
    });
  };
  return (
    <section className="content">
      <div className="container w-2/3 mx-auto">
        <div className="carousel"></div>
        <div className="overview space-y-5">
          <div>
            <h3 className="tracking-wider text-2xl font-medium">Description</h3>
            <ul className="mt-2 space-y-1"></ul>
          </div>
          <div className="flex items-center space-x-2">
            <h3 className="tracking-wider text-2xl font-medium">Team size: </h3>
            <p className="text-lg">{size}</p>
          </div>
          <div className="flex items-center space-x-2">
            <h3 className="tracking-wider text-2xl font-medium">Role: </h3>
            <p className="text-lg">{role}</p>
          </div>
        </div>
        <div className="technologies"></div>
        <div className="link"></div>
      </div>
    </section>
  );
}
