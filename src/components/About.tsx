import React from "react";
import data from "../data/data";

const About = () => {
  return (
    <div
      className="lg:h-screen w-[100%] bg-neutral-950 flex flex-col justify-center"
      id="about"
    >
      <div className="w-[75%] mr-auto ml-auto">
        <h1 className="mb-10 text-[5rem]">About</h1>
        <p className="text-[1rem] lg:text-[1.5rem]">{data.about.text}</p>
      </div>
    </div>
  );
};

export default About;
