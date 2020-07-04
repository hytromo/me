import React from "react";
import styles from "./project.module.css";
import cv from "../../public/cv.json";
import { LinkifyText } from "../LinkifyText/LinkifyText";
import { Modal, ModalPropsI } from "../Modal/Modal";

interface OwnPropsI {
  project: typeof cv.projects[0];
}

export const Project = ({ project }: OwnPropsI) => {
  const [modalInfo, setModalInfo] = React.useState<
    Omit<ModalPropsI, "onClose">
  >(null);

  return (
    <div>
      <h2 className={styles.title}>
        <a target="_blank" rel="noopener noreferrer" href={project.url}>
          {project.name}
        </a>
        {!project.roleDescription && !project.pictures?.length ? null : (
            <img
                title="more information"
                className={styles.moreInfo}
                onClick={() => {
                    setModalInfo({
                    title: project.name,
                    info:
                        project.roleDescription ||
                        "I am the sole author of this project.",
                        pictures: project.pictures?.map((picture, index) => ({
                            ...picture,
                            previewSrc: `${project.name}/${index}-preview.webp`,
                            src: `${project.name}/${index}.webp`,
                            fallbackExtension: picture.isAnimated ? 'gif' : 'jpeg',
                        })),
                    });
                }}
                style={{ cursor: "pointer" }}
                src="info.svg"
            />
        )}
        
      </h2>
      <p>
        <LinkifyText>{project.description}</LinkifyText>
        {!project.keywords?.length ? null : (
          <>
            {" "}
            <i>{project.keywords.join(", ")}</i>.
          </>
        )}
      </p>
      {!modalInfo ? null : (
        <Modal onClose={() => setModalInfo(null)} {...modalInfo} />
      )}
    </div>
  );
};
