import React from "react";
import data from "../data/data";

const About = () => {
  return (
    <div
      className="h-screen w-[100%] bg-neutral-950 px-[10%] flex flex-col justify-center"
      id="about"
    >
      <h1 className="mb-10 text-[5rem]">About</h1>
      <p className="text-[1.5rem]">{data.about.text}</p>
    </div>
  );
};

export default About;
