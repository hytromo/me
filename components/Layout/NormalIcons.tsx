import React from "react";
import styles from "./layout.module.css";

export const NormalIcons = () => {
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/alexandros-solanos-160709a7/"
      >
        <img src="/linkedin.svg" alt="linkedin" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/hytromo"
      >
        <img src="/github.svg" alt="github" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="/cv.pdf">
        <img className={styles.cv} src="/cv.svg" alt="cv" />
      </a>
    </>
  );
};
