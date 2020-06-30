import React from "react";
import styles from "./workplace.module.css";
import cv from "../../public/cv.json";

interface OwnPropsI {
  isFirst: boolean;
  isLast: boolean;
  work: Partial<typeof cv.work[0]>;
}

export const Workplace = ({ work, isFirst, isLast }: OwnPropsI) => {
  return (
    <div
      className={[styles.workplace]
        .concat(isLast ? [styles.last] : [])
        .join(" ")}
    >
      <div
        className={[styles.dotWrap]
          .concat(isFirst && !isLast ? [styles.now] : [])
          .join(" ")}
      >
        <div
          className={[styles.outerDot]
            .concat(isFirst && !isLast ? [styles.now] : [])
            .join(" ")}
        >
          <div
            className={[styles.innerDot]
              .concat(isFirst && !isLast ? [styles.now] : [])
              .join(" ")}
          ></div>
        </div>
      </div>
      <div>
        <div>
          <h2
            style={{
              marginTop: 0,
              marginBottom: ".5rem",
              display: "inline-block",
            }}
          >
            <a target="_blank" rel="noopener noreferrer" href={work.website}>
              {work.company}
            </a>
          </h2>{" "}
        </div>
        <div>{work.position}</div>
        <div>
          <div className={styles.date}>
            {[work.startDate, work.endDate].filter((d) => d).join(" - ")} |{" "}
            {work.location}
          </div>
          <ul>
            {work.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
