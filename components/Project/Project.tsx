import React from "react";
import cv from "../../public/cv.json";
import { LinkifyText } from "../LinkifyText/LinkifyText";

interface OwnPropsI {
  project: typeof cv.projects[0];
}

export const Project = ({ project }: OwnPropsI) => {
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href={project.url}>
        <h2 style={{ marginBottom: ".5rem" }}>{project.name}</h2>
      </a>
      <p>
        <LinkifyText>{project.description}</LinkifyText>
        {!project.keywords?.length ? null : (
          <>
            {" "}
            <i>{project.keywords.join(", ")}</i>.
          </>
        )}
      </p>
    </div>
  );
};
