import { useState } from "react";
import ProjectDetails from "./ProjectDetails.js";

function Featured(props) {
  const items = props.projects.map((project, index) => {
    return (
      <ProjectDetails
        title={project.title}
        description={project.description}
        url={project.url}
        thumbnailUrl={project.thumbnailUrl}
      />
    );
  });

  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(
      <div className="d-flex flex-row">
        {items[i]}
        {items[i + 1] ? items[i + 1] : null}
        {items[i + 2] ? items[i + 2] : null}
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center flex-column">
      <h3 className="text-center" id="projects">
        My Projects
      </h3>
      {rows}
    </div>
  );
}

export default Featured;
