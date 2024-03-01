import React from "react";

const ProjectDetail = (props: { description: string[] }) => {
  return (
    <div className="w-[50%] text-start">
      <ul className="project-detail-list">
        <li className="mt-4">{props.description[0]}</li>
        <li className="mt-4">{props.description[1]}</li>
        <li className="mt-4">{props.description[2]}</li>
      </ul>
    </div>
  );
};

export default ProjectDetail;
