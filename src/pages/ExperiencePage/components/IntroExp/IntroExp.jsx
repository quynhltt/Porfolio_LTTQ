import React from "react";

export default function IntroExp({ data }) {
  let { position, company, timeline, description } = data;
  let renderExpItem = () => {
    if (data) {
      console.log(data);
      let keyName = Object.keys(data).slice(1);
      console.log("🚀 ~ file: ContentExp.jsx:8 ~ renderExpItem ~ keyName:", keyName);
      return keyName.map((item) => {
        return (
          <div>
            {item}: {data[item]}
          </div>
        );
      });
    }
  };
  return (
    <section className="intro py-10">
      <div className="container w-2/3 mx-auto mt-16 mb-3 space-y-4">
        {/* {renderExpItem()} */}
        <h2 className="tracking-wider text-5xl font-semibold animate__animated ">{position}</h2>
        <h3>{timeline}</h3>
        <h3 className="tracking-wider text-2xl font-semibold animate__animated ">{company}</h3>
        <p>
          <span className="tracking-wider text-lg font-semibold animate__animated ">Description: </span>
          <span>{description}</span>
        </p>
      </div>
    </section>
  );
}
