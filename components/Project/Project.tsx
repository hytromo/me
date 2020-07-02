import React from "react";
import styles from "./project.module.css";
import cv from "../../public/cv.json";
import { LinkifyText } from "../LinkifyText/LinkifyText";
import { Modal, ModalPropsI } from "../Modal/Modal";

interface OwnPropsI {
  project: typeof cv.projects[0];
}

export const Project = ({ project }: OwnPropsI) => {
  const [modalInfo, setModalInfo] = React.useState<Omit<ModalPropsI, 'onClose'>>(null);

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
            <br />
            <br />
            <a
              onClick={() => {
                setModalInfo({
                  title: project.name,
				  info: project.roleDescription || 'I am the sole author of this project.',
				  pictures: project.pictures?.map((picture, index) => ({
					  ...picture,
					  previewSrc: `${project.name}/${index}-preview.webp`,
					  src: `${project.name}/${index}.webp`,
					  fallbackExtension: 'jpeg'
				  })),
                });
              }}
              className={styles.moreInfo}
            >
              {">"} More information
            </a>
          </>
        )}
      </p>
      {/* {!project.roleDescription ? null : (
        <p>
          <span className={styles.role}>My role in this:</span>
          {' '}{project.roleDescription}
        </p>
      )} */}
		{!modalInfo ? null : <Modal onClose={() => setModalInfo(null)} {...modalInfo} />}
    </div>
  );
};
