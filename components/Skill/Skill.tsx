import React from "react";
import cv from "../../public/cv.json";
import styles from "./skill.module.css";
import { Level } from "../Level/Level";

interface OwnPropsI {
  skill: typeof cv.skills[0];
}

export const Skill = ({ skill }: OwnPropsI) => {
  return (
    <div className={styles.skill}>
      <h3>{skill.name}</h3>
      <div className={skill.keywordInfo ? styles.skillList : styles.simpleSkillList}>
        {skill.keywords.map((keyword, index) => (
          <Level
            key={index}
            description={keyword}
            data={skill.keywordInfo?.[keyword]}
          />
        ))}
      </div>
    </div>
  );
};
