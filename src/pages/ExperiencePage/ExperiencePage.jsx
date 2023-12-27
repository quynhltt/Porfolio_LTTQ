import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataExperience } from "../../assets/data/dataExperience";
import ContentExp from "./components/ContentExp/ContentExp";
import IntroExp from "./components/IntroExp/IntroExp";

export default function ExperiencePage() {
  const [data, setData] = useState([]);
  let param = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setData(dataExperience.find((item) => item.id == param.id));
  }, [param.id]);
  return (
    <div className="exp-page">
      <IntroExp data={data} />
      <ContentExp data={data} />
    </div>
  );
}
