import React from "react";
import data from "../data/data";

const About = () => {
  return (
    <div className="h-[75vh] w-[100%] bg-neutral-950 px-[10%]">
      <h1 className="mb-10 text-[5rem]">About</h1>
      {data.about.text}
    </div>
  );
};

export default About;
