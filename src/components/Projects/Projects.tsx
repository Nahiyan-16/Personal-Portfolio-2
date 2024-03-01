import React from "react";
import Project from "./Project";
import data from "../../data/data";

export function Projects() {
  return (
    <div className=" bg-neutral-950 ">
      <Project
        title={data.project1.title}
        shortDesc={data.project1.shortDesc}
        description={data.project1.description}
        link={data.project1.link}
        image={data.project1.image}
      />
      <Project
        title={data.project2.title}
        shortDesc={data.project2.shortDesc}
        description={data.project2.description}
        link={data.project2.link}
        image={data.project2.image}
      />
      <Project
        title={data.project3.title}
        shortDesc={data.project3.shortDesc}
        description={data.project3.description}
        link={data.project3.link}
        image={data.project3.image}
      />
      <Project
        title={data.project4.title}
        shortDesc={data.project4.shortDesc}
        description={data.project4.description}
        link={data.project4.link}
        image={data.project4.image}
      />
    </div>
  );
}
