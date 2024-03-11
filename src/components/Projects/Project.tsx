import React from "react";
import { CardBody, CardContainer, CardItem } from "./floating-card";
import ProjectDetail from "./ProjectDetail";
import { SparklesCore } from "../sprakles";

interface ProjectProps {
  title: string;
  shortDesc: string;
  description: string[];
  link: string;
  image: string;
  id: string;
}

const Project = (props: ProjectProps) => {
  return (
    <div className="lg:h-screen" id={props.id}>
      <h1 className="text-[2rem] lg:text-[5rem] pt-8 lg:pt-14">
        {props.title}
      </h1>
      <div className="w-full lg:flex px-8 lg:justify-around lg:items-center">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {props.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-start"
            >
              {props.shortDesc}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={props.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                link={props.link}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {props.link && "Check it out →"}
              </CardItem>
              {props.link && (
                <CardItem
                  link={props.link}
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Github
                </CardItem>
              )}
            </div>
          </CardBody>
        </CardContainer>
        <ProjectDetail description={props.description} />
      </div>
    </div>
  );
};

export default Project;
