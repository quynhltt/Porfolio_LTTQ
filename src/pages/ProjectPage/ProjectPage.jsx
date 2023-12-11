import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataProject } from "../../assets/data/dataProject";
import Intro from "./components/Intro/Intro";

export default function ProjectPage() {
  const [data, setData] = useState([]);
  let param = useParams();
  useEffect(() => {
    setData(dataProject.find((item) => item.id == param.id));
  }, [param.id]);
  return (
    <div className="project-page">
      <Intro data={data} />
    </div>
  );
}
