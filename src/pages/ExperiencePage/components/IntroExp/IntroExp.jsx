import React from "react";

export default function IntroExp({ data }) {
  let { position, company, timeline, description } = data;

  return (
    <section className="intro py-10">
      <div className="container w-2/3 mx-auto mt-16 mb-3 space-y-4">
        <h2 className="tracking-wider text-5xl font-semibold animate__animated animate__flipInX">{position}</h2>
        <h3 className="animate__animated animate__fadeIn animate__delay-1s animate__slow text-zinc-400">{timeline}</h3>
        <h3 className="tracking-wider text-2xl font-semibold animate__animated animate__flipInX">{company}</h3>
        <p className="animate__animated animate__fadeIn animate__delay-1s animate__slow">
          <span className="tracking-wider text-lg font-semibold ">Description: </span>
          <span>{description}</span>
        </p>
      </div>
    </section>
  );
}
